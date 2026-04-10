import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Edit2, Layers, Plus, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { createActor } from "../backend";
import type {
  Category,
  CreateCategoryArgs,
  CreateSubcategoryArgs,
  Subcategory,
  UpdateCategoryArgs,
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
import { useCategories, useSubcategories } from "../hooks/use-backend";

interface CatFormData {
  name: string;
  nameHi: string;
  description: string;
  iconEmoji: string;
  sortOrder: string;
}

const defaultCatForm: CatFormData = {
  name: "",
  nameHi: "",
  description: "",
  iconEmoji: "🥛",
  sortOrder: "0",
};

export default function AdminCategories() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  const { data: categories, isLoading: catsLoading } = useCategories();
  const { data: subcategories, isLoading: subLoading } = useSubcategories();

  const [catDialogOpen, setCatDialogOpen] = useState(false);
  const [editingCat, setEditingCat] = useState<Category | null>(null);
  const [deleteCatTarget, setDeleteCatTarget] = useState<Category | null>(null);
  const [catForm, setCatForm] = useState<CatFormData>(defaultCatForm);

  const [subDialogOpen, setSubDialogOpen] = useState(false);
  const [subParent, setSubParent] = useState<Category | null>(null);
  const [subName, setSubName] = useState("");
  const [subNameHi, setSubNameHi] = useState("");
  const [deleteSubTarget, setDeleteSubTarget] = useState<Subcategory | null>(
    null,
  );

  const setCatField = <K extends keyof CatFormData>(key: K, value: string) =>
    setCatForm((f) => ({ ...f, [key]: value }));

  function openAddCat() {
    setEditingCat(null);
    setCatForm(defaultCatForm);
    setCatDialogOpen(true);
  }

  function openEditCat(cat: Category) {
    setEditingCat(cat);
    setCatForm({
      name: cat.name,
      nameHi: cat.nameHindi,
      description: "",
      iconEmoji: cat.icon,
      sortOrder: cat.sortOrder.toString(),
    });
    setCatDialogOpen(true);
  }

  const createCatMutation = useMutation<Category, Error, CreateCategoryArgs>({
    mutationFn: async (args) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.createCategory(args);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast.success("Category created");
      setCatDialogOpen(false);
    },
    onError: (e) => toast.error(`Failed: ${e.message}`),
  });

  const updateCatMutation = useMutation<
    Category | null,
    Error,
    UpdateCategoryArgs
  >({
    mutationFn: async (args) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.updateCategory(args);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast.success("Category updated");
      setCatDialogOpen(false);
    },
    onError: (e) => toast.error(`Failed: ${e.message}`),
  });

  const deleteCatMutation = useMutation<boolean, Error, bigint>({
    mutationFn: async (id) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.deleteCategory(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      queryClient.invalidateQueries({ queryKey: ["subcategories"] });
      toast.success("Category deleted");
      setDeleteCatTarget(null);
    },
    onError: (e) => toast.error(`Failed: ${e.message}`),
  });

  function handleCatSubmit(e: React.FormEvent) {
    e.preventDefault();
    const args = {
      name: catForm.name,
      nameHindi: catForm.nameHi,
      icon: catForm.iconEmoji,
      colorClass: "bg-blue-100",
      sortOrder: BigInt(catForm.sortOrder || 0),
    };
    if (editingCat) {
      updateCatMutation.mutate({ ...args, id: editingCat.id });
    } else {
      createCatMutation.mutate(args);
    }
  }

  const createSubMutation = useMutation<
    Subcategory,
    Error,
    CreateSubcategoryArgs
  >({
    mutationFn: async (args) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.createSubcategory(args);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subcategories"] });
      toast.success("Subcategory added");
      setSubName("");
      setSubNameHi("");
    },
    onError: (e) => toast.error(`Failed: ${e.message}`),
  });

  const deleteSubMutation = useMutation<boolean, Error, bigint>({
    mutationFn: async (id) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.deleteSubcategory(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subcategories"] });
      toast.success("Subcategory deleted");
      setDeleteSubTarget(null);
    },
    onError: (e) => toast.error(`Failed: ${e.message}`),
  });

  function openSubDialog(cat: Category) {
    setSubParent(cat);
    setSubName("");
    setSubNameHi("");
    setSubDialogOpen(true);
  }

  const subcategoriesByCategory = useMemo(() => {
    const map = new Map<string, Subcategory[]>();
    for (const s of subcategories ?? []) {
      const key = s.categoryId.toString();
      const existing = map.get(key) ?? [];
      map.set(key, [...existing, s]);
    }
    return map;
  }, [subcategories]);

  const sortedCategories = useMemo(
    () =>
      categories
        ? [...categories].sort(
            (a, b) => Number(a.sortOrder) - Number(b.sortOrder),
          )
        : [],
    [categories],
  );

  const isCatPending =
    createCatMutation.isPending || updateCatMutation.isPending;

  return (
    <AdminLayout
      title="Categories"
      subtitle={`${categories?.length ?? 0} categories`}
    >
      <div className="flex justify-end mb-5">
        <Button
          data-ocid="add-category-btn"
          onClick={openAddCat}
          className="gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Category
        </Button>
      </div>

      {catsLoading || subLoading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-24 w-full" />
          ))}
        </div>
      ) : sortedCategories.length === 0 ? (
        <div
          data-ocid="categories-empty-state"
          className="bg-card border border-border rounded-xl p-12 text-center text-muted-foreground"
        >
          <Layers className="w-10 h-10 mx-auto mb-3 opacity-30" />
          <p className="font-medium">No categories yet</p>
        </div>
      ) : (
        <div className="space-y-3">
          {sortedCategories.map((cat) => {
            const subs = subcategoriesByCategory.get(cat.id.toString()) ?? [];
            return (
              <div
                key={cat.id.toString()}
                data-ocid="category-row"
                className="bg-card border border-border rounded-xl overflow-hidden"
              >
                <div className="px-5 py-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-2xl shrink-0">{cat.icon}</span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-semibold text-foreground">
                          {cat.name}
                        </p>
                        <span className="text-muted-foreground text-sm">·</span>
                        <p className="text-sm text-muted-foreground">
                          {cat.nameHindi}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Badge
                      variant="outline"
                      className="text-xs hidden sm:inline-flex"
                    >
                      Sort: {cat.sortOrder.toString()}
                    </Badge>
                    <Button
                      data-ocid="add-subcategory-btn"
                      variant="outline"
                      size="sm"
                      onClick={() => openSubDialog(cat)}
                      className="gap-1 text-xs hidden sm:flex"
                    >
                      <Plus className="w-3 h-3" />
                      Subcategory
                    </Button>
                    <Button
                      data-ocid="edit-category-btn"
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => openEditCat(cat)}
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </Button>
                    <Button
                      data-ocid="delete-category-btn"
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 hover:text-destructive"
                      onClick={() => setDeleteCatTarget(cat)}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>

                {/* Subcategories */}
                {subs.length > 0 && (
                  <div className="border-t border-border px-5 py-3 bg-muted/20">
                    <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide font-medium">
                      Subcategories ({subs.length})
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {subs.map((sub) => (
                        <div
                          key={sub.id.toString()}
                          data-ocid="subcategory-tag"
                          className="flex items-center gap-1.5 bg-background border border-border rounded-full px-3 py-1 text-xs"
                        >
                          <span className="text-foreground">{sub.name}</span>
                          <span className="text-muted-foreground">·</span>
                          <span className="text-muted-foreground">
                            {sub.nameHindi}
                          </span>
                          <button
                            type="button"
                            data-ocid="delete-subcategory-btn"
                            onClick={() => setDeleteSubTarget(sub)}
                            className="ml-1 text-muted-foreground hover:text-destructive transition-colors"
                            aria-label={`Delete ${sub.name}`}
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mobile subcategory button */}
                <div className="sm:hidden border-t border-border px-5 py-2.5">
                  <Button
                    data-ocid="add-subcategory-btn-mobile"
                    variant="ghost"
                    size="sm"
                    onClick={() => openSubDialog(cat)}
                    className="gap-1 text-xs w-full"
                  >
                    <Plus className="w-3 h-3" />
                    Add Subcategory
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Category add/edit dialog */}
      <Dialog open={catDialogOpen} onOpenChange={setCatDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {editingCat ? "Edit Category" : "Add Category"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleCatSubmit} className="space-y-4 mt-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="catName">Name (EN) *</Label>
                <Input
                  id="catName"
                  data-ocid="category-name-en"
                  value={catForm.name}
                  onChange={(e) => setCatField("name", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="catNameHi">Name (HI) *</Label>
                <Input
                  id="catNameHi"
                  data-ocid="category-name-hi"
                  value={catForm.nameHi}
                  onChange={(e) => setCatField("nameHi", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="catIcon">Icon Emoji</Label>
                <Input
                  id="catIcon"
                  data-ocid="category-icon-emoji"
                  value={catForm.iconEmoji}
                  onChange={(e) => setCatField("iconEmoji", e.target.value)}
                  placeholder="🥛"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="catSortOrder">Sort Order</Label>
                <Input
                  id="catSortOrder"
                  data-ocid="category-sort-order"
                  type="number"
                  min="0"
                  value={catForm.sortOrder}
                  onChange={(e) => setCatField("sortOrder", e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2 border-t border-border">
              <Button
                type="button"
                variant="outline"
                onClick={() => setCatDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                data-ocid="category-form-submit"
                disabled={isCatPending}
              >
                {isCatPending
                  ? editingCat
                    ? "Saving..."
                    : "Creating..."
                  : editingCat
                    ? "Save Changes"
                    : "Create"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Add subcategory dialog */}
      <Dialog open={subDialogOpen} onOpenChange={setSubDialogOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>
              Add Subcategory to {subParent?.icon} {subParent?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <div className="space-y-1.5">
              <Label htmlFor="subName">Name (EN) *</Label>
              <Input
                id="subName"
                data-ocid="subcategory-name-en"
                value={subName}
                onChange={(e) => setSubName(e.target.value)}
                placeholder="e.g. Whole Milk"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="subNameHi">Name (HI) *</Label>
              <Input
                id="subNameHi"
                data-ocid="subcategory-name-hi"
                value={subNameHi}
                onChange={(e) => setSubNameHi(e.target.value)}
                placeholder="e.g. पूर्ण दूध"
              />
            </div>
            <div className="flex justify-end gap-3 pt-2 border-t border-border">
              <Button
                type="button"
                variant="outline"
                onClick={() => setSubDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="button"
                data-ocid="subcategory-form-submit"
                disabled={!subName || !subNameHi || createSubMutation.isPending}
                onClick={() => {
                  if (!subParent || !subName || !subNameHi) return;
                  createSubMutation.mutate({
                    categoryId: subParent.id,
                    name: subName,
                    nameHindi: subNameHi,
                  });
                }}
              >
                {createSubMutation.isPending ? "Adding..." : "Add"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete category confirmation */}
      <AlertDialog
        open={!!deleteCatTarget}
        onOpenChange={(open) => !open && setDeleteCatTarget(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Category?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete{" "}
              <strong>{deleteCatTarget?.name}</strong> and all its
              subcategories. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel data-ocid="delete-category-cancel">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              data-ocid="delete-category-confirm"
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={() =>
                deleteCatTarget && deleteCatMutation.mutate(deleteCatTarget.id)
              }
            >
              {deleteCatMutation.isPending ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Delete subcategory confirmation */}
      <AlertDialog
        open={!!deleteSubTarget}
        onOpenChange={(open) => !open && setDeleteSubTarget(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Subcategory?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete{" "}
              <strong>{deleteSubTarget?.name}</strong>. This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel data-ocid="delete-subcategory-cancel">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              data-ocid="delete-subcategory-confirm"
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={() =>
                deleteSubTarget && deleteSubMutation.mutate(deleteSubTarget.id)
              }
            >
              {deleteSubMutation.isPending ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </AdminLayout>
  );
}
