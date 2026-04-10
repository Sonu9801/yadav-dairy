import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Edit2, Package, Plus, Search, Trash2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { createActor } from "../backend";
import type {
  CreateProductArgs,
  Product,
  UpdateProductArgs,
} from "../backend.d";
import AdminLayout from "../components/admin/AdminLayout";
import ProductPackageSVG from "../components/products/ProductPackageSVG";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../components/ui/alert-dialog";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Skeleton } from "../components/ui/skeleton";
import { Switch } from "../components/ui/switch";
import {
  useCategories,
  useProducts,
  useSubcategories,
} from "../hooks/use-backend";
import { formatPrice } from "../lib/utils";

const PACKAGING_TYPES = [
  "Pouch",
  "Plastic Bottle",
  "Glass Bottle",
  "Tetra Pack",
  "Bulk Container",
  "Milk Can",
  "Jar",
  "Box",
];

interface ProductFormData {
  name: string;
  nameHindi: string;
  description: string;
  price: string;
  originalPrice: string;
  category: string;
  subcategory: string;
  packagingType: string;
  quantity: string;
  imageUrl: string;
  inStock: boolean;
  stock: string;
  isFeatured: boolean;
  isTrending: boolean;
}

const defaultForm: ProductFormData = {
  name: "",
  nameHindi: "",
  description: "",
  price: "",
  originalPrice: "",
  category: "",
  subcategory: "",
  packagingType: "Pouch",
  quantity: "500ml",
  imageUrl: "milk_pouch",
  inStock: true,
  stock: "100",
  isFeatured: false,
  isTrending: false,
};

export default function AdminProducts() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  const { data: products, isLoading } = useProducts();
  const { data: categories } = useCategories();
  const { data: subcategories } = useSubcategories();

  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Product | null>(null);
  const [form, setForm] = useState<ProductFormData>(defaultForm);

  const filteredSubcategories = useMemo(() => {
    const cat = categories?.find((c) => c.name === form.category);
    return subcategories?.filter((s) => s.categoryId === cat?.id) ?? [];
  }, [subcategories, categories, form.category]);

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    const term = search.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.nameHindi.toLowerCase().includes(term),
    );
  }, [products, search]);

  const setField = <K extends keyof ProductFormData>(
    key: K,
    value: ProductFormData[K],
  ) => setForm((f) => ({ ...f, [key]: value }));

  function openAdd() {
    setEditingProduct(null);
    setForm(defaultForm);
    setDialogOpen(true);
  }

  function openEdit(product: Product) {
    setEditingProduct(product);
    setForm({
      name: product.name,
      nameHindi: product.nameHindi,
      description: product.description,
      price: product.price.toString(),
      originalPrice: product.originalPrice.toString(),
      category: product.category,
      subcategory: product.subcategory,
      packagingType: product.packagingType,
      quantity: product.quantity,
      imageUrl: product.imageUrl,
      inStock: product.inStock,
      stock: product.stock.toString(),
      isFeatured: product.isFeatured,
      isTrending: product.isTrending,
    });
    setDialogOpen(true);
  }

  const createMutation = useMutation<Product, Error, CreateProductArgs>({
    mutationFn: async (args) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.createProduct(args);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product created");
      setDialogOpen(false);
    },
    onError: (e) => toast.error(`Failed: ${e.message}`),
  });

  const updateMutation = useMutation<Product | null, Error, UpdateProductArgs>({
    mutationFn: async (args) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.updateProduct(args);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product updated");
      setDialogOpen(false);
    },
    onError: (e) => toast.error(`Failed: ${e.message}`),
  });

  const deleteMutation = useMutation<boolean, Error, bigint>({
    mutationFn: async (id) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.deleteProduct(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product deleted");
      setDeleteTarget(null);
    },
    onError: (e) => toast.error(`Failed: ${e.message}`),
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const args = {
      name: form.name,
      nameHindi: form.nameHindi,
      description: form.description,
      price: BigInt(form.price || 0),
      originalPrice: BigInt(form.originalPrice || 0),
      category: form.category,
      subcategory: form.subcategory,
      packagingType: form.packagingType,
      quantity: form.quantity,
      imageUrl: form.imageUrl,
      inStock: form.inStock,
      stock: BigInt(form.stock || 0),
      isFeatured: form.isFeatured,
      isTrending: form.isTrending,
      isBestSeller: false,
      isFreshArrival: false,
      brand: "Yadav Dairy",
    };
    if (editingProduct) {
      updateMutation.mutate({ ...args, id: editingProduct.id });
    } else {
      createMutation.mutate(args);
    }
  }

  const isPending = createMutation.isPending || updateMutation.isPending;

  return (
    <AdminLayout
      title="Products"
      subtitle={`${products?.length ?? 0} products in your catalog`}
    >
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            data-ocid="product-search"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button
          data-ocid="add-product-btn"
          onClick={openAdd}
          className="gap-2 shrink-0"
        >
          <Plus className="w-4 h-4" />
          Add Product
        </Button>
      </div>

      {/* Products table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        {isLoading ? (
          <div className="p-5 space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-16 w-full" />
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div
            data-ocid="products-empty-state"
            className="p-12 text-center text-muted-foreground"
          >
            <Package className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p className="font-medium">No products found</p>
            {search && (
              <p className="text-sm mt-1">Try a different search term</p>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 border-b border-border">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                    Product
                  </th>
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground hidden md:table-cell">
                    Category
                  </th>
                  <th className="text-right px-4 py-3 font-medium text-muted-foreground">
                    Price
                  </th>
                  <th className="text-center px-4 py-3 font-medium text-muted-foreground hidden sm:table-cell">
                    Stock
                  </th>
                  <th className="text-center px-4 py-3 font-medium text-muted-foreground hidden lg:table-cell">
                    Tags
                  </th>
                  <th className="text-right px-4 py-3 font-medium text-muted-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredProducts.map((product) => {
                  const cat = categories?.find(
                    (c) => c.name === product.category,
                  );
                  return (
                    <tr
                      key={product.id.toString()}
                      data-ocid="product-row"
                      className="hover:bg-muted/20 transition-colors"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-muted shrink-0 overflow-hidden flex items-center justify-center">
                            <ProductPackageSVG
                              packagingKey={product.imageUrl}
                              productName={product.name}
                              size="sm"
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="font-medium text-foreground truncate max-w-[140px]">
                              {product.name}
                            </p>
                            <p className="text-xs text-muted-foreground truncate max-w-[140px]">
                              {product.nameHindi}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        <span className="text-muted-foreground">
                          {cat?.name ?? "—"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right font-medium">
                        {formatPrice(product.price)}
                      </td>
                      <td className="px-4 py-3 text-center hidden sm:table-cell">
                        <Badge
                          variant={product.inStock ? "default" : "destructive"}
                          className="text-xs"
                        >
                          {product.inStock ? "In Stock" : "Out"}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-center hidden lg:table-cell">
                        <div className="flex justify-center gap-1">
                          {product.isFeatured && (
                            <Badge
                              variant="outline"
                              className="text-xs text-primary border-primary/30"
                            >
                              Featured
                            </Badge>
                          )}
                          {product.isTrending && (
                            <Badge
                              variant="outline"
                              className="text-xs text-accent border-accent/30"
                            >
                              Trending
                            </Badge>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex justify-end gap-1">
                          <Button
                            data-ocid="edit-product-btn"
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => openEdit(product)}
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </Button>
                          <Button
                            data-ocid="delete-product-btn"
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 hover:text-destructive"
                            onClick={() => setDeleteTarget(product)}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add/Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingProduct ? "Edit Product" : "Add Product"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="nameEn">Name (English) *</Label>
                <Input
                  id="nameEn"
                  data-ocid="product-name-en"
                  value={form.name}
                  onChange={(e) => setField("name", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="nameHi">Name (Hindi) *</Label>
                <Input
                  id="nameHi"
                  data-ocid="product-name-hi"
                  value={form.nameHindi}
                  onChange={(e) => setField("nameHindi", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <textarea
                id="description"
                data-ocid="product-description"
                value={form.description}
                onChange={(e) => setField("description", e.target.value)}
                rows={2}
                className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="price">Price (₹) *</Label>
                <Input
                  id="price"
                  data-ocid="product-price"
                  type="number"
                  min="0"
                  value={form.price}
                  onChange={(e) => setField("price", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="originalPrice">Original Price (₹)</Label>
                <Input
                  id="originalPrice"
                  data-ocid="product-original-price"
                  type="number"
                  min="0"
                  value={form.originalPrice}
                  onChange={(e) => setField("originalPrice", e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="categoryId">Category *</Label>
                <select
                  id="categoryId"
                  data-ocid="product-category"
                  value={form.category}
                  onChange={(e) => {
                    setField("category", e.target.value);
                    setField("subcategory", "");
                  }}
                  required
                  className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select category</option>
                  {categories?.map((c) => (
                    <option key={c.id.toString()} value={c.name}>
                      {c.icon} {c.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="subcategoryId">Subcategory</Label>
                <select
                  id="subcategoryId"
                  data-ocid="product-subcategory"
                  value={form.subcategory}
                  onChange={(e) => setField("subcategory", e.target.value)}
                  disabled={!form.category}
                  className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
                >
                  <option value="">Select subcategory</option>
                  {filteredSubcategories.map((s) => (
                    <option key={s.id.toString()} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="packagingType">Packaging</Label>
                <select
                  id="packagingType"
                  data-ocid="product-packaging"
                  value={form.packagingType}
                  onChange={(e) => setField("packagingType", e.target.value)}
                  className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {PACKAGING_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="quantity">Quantity / Size</Label>
                <Input
                  id="quantity"
                  data-ocid="product-quantity"
                  value={form.quantity}
                  onChange={(e) => setField("quantity", e.target.value)}
                  placeholder="e.g. 500ml, 200g"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="imageUrl">Packaging Key (imageUrl)</Label>
              <Input
                id="imageUrl"
                data-ocid="product-image-url"
                value={form.imageUrl}
                onChange={(e) => setField("imageUrl", e.target.value)}
                placeholder="e.g. milk_pouch, ghee_jar, paneer_block"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="stockCount">Stock Count</Label>
              <Input
                id="stockCount"
                data-ocid="product-stock-count"
                type="number"
                min="0"
                value={form.stock}
                onChange={(e) => setField("stock", e.target.value)}
              />
            </div>

            <div className="grid grid-cols-3 gap-4 pt-1">
              {(
                [
                  { key: "inStock", label: "In Stock" },
                  { key: "isFeatured", label: "Featured" },
                  { key: "isTrending", label: "Trending" },
                ] as Array<{ key: keyof ProductFormData; label: string }>
              ).map(({ key, label }) => (
                <div key={key} className="flex items-center gap-2">
                  <Switch
                    id={key}
                    data-ocid={`product-${key}`}
                    checked={form[key] as boolean}
                    onCheckedChange={(v) => setField(key, v)}
                  />
                  <Label htmlFor={key} className="cursor-pointer">
                    {label}
                  </Label>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-3 pt-2 border-t border-border">
              <Button
                type="button"
                variant="outline"
                onClick={() => setDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                data-ocid="product-form-submit"
                disabled={isPending}
              >
                {isPending
                  ? editingProduct
                    ? "Saving..."
                    : "Creating..."
                  : editingProduct
                    ? "Save Changes"
                    : "Create Product"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete confirmation */}
      <AlertDialog
        open={!!deleteTarget}
        onOpenChange={(open) => !open && setDeleteTarget(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Product?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete <strong>{deleteTarget?.name}</strong>
              . This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel data-ocid="delete-product-cancel">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              data-ocid="delete-product-confirm"
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={() =>
                deleteTarget && deleteMutation.mutate(deleteTarget.id)
              }
            >
              {deleteMutation.isPending ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </AdminLayout>
  );
}
