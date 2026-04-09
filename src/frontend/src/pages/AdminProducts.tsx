import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Edit2, ImageOff, Package, Plus, Search, Trash2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { createActor } from "../backend";
import type {
  CreateProductArgs,
  Product,
  UpdateProductArgs,
} from "../backend.d";
import AdminLayout from "../components/admin/AdminLayout";
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

const FAT_CONTENT_OPTIONS = [
  "Full Fat",
  "Toned",
  "Double Toned",
  "Skimmed",
  "Low Fat",
  "Fat Free",
  "N/A",
];

interface ProductFormData {
  nameEn: string;
  nameHi: string;
  description: string;
  price: string;
  originalPrice: string;
  categoryId: string;
  subcategoryId: string;
  packagingType: string;
  fatContent: string;
  imageUrl: string;
  inStock: boolean;
  stockCount: string;
  isFeatured: boolean;
  isTrending: boolean;
}

const defaultForm: ProductFormData = {
  nameEn: "",
  nameHi: "",
  description: "",
  price: "",
  originalPrice: "",
  categoryId: "",
  subcategoryId: "",
  packagingType: "Pouch",
  fatContent: "N/A",
  imageUrl: "",
  inStock: true,
  stockCount: "100",
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

  const filteredSubcategories = useMemo(
    () =>
      subcategories?.filter(
        (s) => s.categoryId.toString() === form.categoryId,
      ) ?? [],
    [subcategories, form.categoryId],
  );

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    const term = search.toLowerCase();
    return products.filter(
      (p) =>
        p.nameEn.toLowerCase().includes(term) ||
        p.nameHi.toLowerCase().includes(term),
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
      nameEn: product.nameEn,
      nameHi: product.nameHi,
      description: product.description,
      price: product.price.toString(),
      originalPrice: product.originalPrice.toString(),
      categoryId: product.categoryId.toString(),
      subcategoryId: product.subcategoryId.toString(),
      packagingType: product.packagingType,
      fatContent: product.fatContent,
      imageUrl: product.imageUrl,
      inStock: product.inStock,
      stockCount: product.stockCount.toString(),
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
      nameEn: form.nameEn,
      nameHi: form.nameHi,
      description: form.description,
      price: BigInt(form.price || 0),
      originalPrice: BigInt(form.originalPrice || 0),
      categoryId: BigInt(form.categoryId || 0),
      subcategoryId: BigInt(form.subcategoryId || 0),
      packagingType: form.packagingType,
      fatContent: form.fatContent,
      imageUrl: form.imageUrl,
      inStock: form.inStock,
      stockCount: BigInt(form.stockCount || 0),
      isFeatured: form.isFeatured,
      isTrending: form.isTrending,
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
                    (c) => c.id === product.categoryId,
                  );
                  return (
                    <tr
                      key={product.id.toString()}
                      data-ocid="product-row"
                      className="hover:bg-muted/20 transition-colors"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-muted shrink-0 overflow-hidden">
                            {product.imageUrl ? (
                              <img
                                src={product.imageUrl}
                                alt={product.nameEn}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).style.display =
                                    "none";
                                }}
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <ImageOff className="w-4 h-4 text-muted-foreground" />
                              </div>
                            )}
                          </div>
                          <div className="min-w-0">
                            <p className="font-medium text-foreground truncate max-w-[140px]">
                              {product.nameEn}
                            </p>
                            <p className="text-xs text-muted-foreground truncate max-w-[140px]">
                              {product.nameHi}
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
                  value={form.nameEn}
                  onChange={(e) => setField("nameEn", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="nameHi">Name (Hindi) *</Label>
                <Input
                  id="nameHi"
                  data-ocid="product-name-hi"
                  value={form.nameHi}
                  onChange={(e) => setField("nameHi", e.target.value)}
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
                  value={form.categoryId}
                  onChange={(e) => {
                    setField("categoryId", e.target.value);
                    setField("subcategoryId", "");
                  }}
                  required
                  className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select category</option>
                  {categories?.map((c) => (
                    <option key={c.id.toString()} value={c.id.toString()}>
                      {c.iconEmoji} {c.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="subcategoryId">Subcategory</Label>
                <select
                  id="subcategoryId"
                  data-ocid="product-subcategory"
                  value={form.subcategoryId}
                  onChange={(e) => setField("subcategoryId", e.target.value)}
                  disabled={!form.categoryId}
                  className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
                >
                  <option value="">Select subcategory</option>
                  {filteredSubcategories.map((s) => (
                    <option key={s.id.toString()} value={s.id.toString()}>
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
                <Label htmlFor="fatContent">Fat Content</Label>
                <select
                  id="fatContent"
                  data-ocid="product-fat-content"
                  value={form.fatContent}
                  onChange={(e) => setField("fatContent", e.target.value)}
                  className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {FAT_CONTENT_OPTIONS.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="imageUrl">Image URL</Label>
              <Input
                id="imageUrl"
                data-ocid="product-image-url"
                type="url"
                value={form.imageUrl}
                onChange={(e) => setField("imageUrl", e.target.value)}
                placeholder="https://..."
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="stockCount">Stock Count</Label>
              <Input
                id="stockCount"
                data-ocid="product-stock-count"
                type="number"
                min="0"
                value={form.stockCount}
                onChange={(e) => setField("stockCount", e.target.value)}
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
              This will permanently delete{" "}
              <strong>{deleteTarget?.nameEn}</strong>. This action cannot be
              undone.
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
