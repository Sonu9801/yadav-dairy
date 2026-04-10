import { N as useActor, O as useQueryClient, u as useCategories, k as useSubcategories, r as reactExports, Q as useMutation, j as jsxRuntimeExports, B as Button, S as Skeleton, h as Badge, I as Input, z as ue, T as createActor } from "./index-S-wpKozw.js";
import { A as AdminLayout, L as Layers } from "./AdminLayout-B22g_Ykk.js";
import { A as AlertDialog, a as AlertDialogContent, b as AlertDialogHeader, c as AlertDialogTitle, d as AlertDialogDescription, e as AlertDialogFooter, f as AlertDialogCancel, g as AlertDialogAction } from "./alert-dialog-9JEnY4VN.js";
import { P as Pen, D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-CnWf3fq2.js";
import { L as Label } from "./label-HaSzA_K8.js";
import { P as Plus } from "./plus-Crllhs1t.js";
import { T as Trash2 } from "./trash-2-DTt9HCne.js";
import "./lock-ClfGGbKN.js";
import "./chevron-right-DcB2isNx.js";
import "./log-out-BmvSjASg.js";
import "./package-okqL4Ge3.js";
import "./shopping-bag-DSTgzANf.js";
import "./index-CvcSwpNX.js";
import "./x-Bb5ldv21.js";
import "./index-C15YK7Bm.js";
const defaultCatForm = {
  name: "",
  nameHi: "",
  description: "",
  iconEmoji: "🥛",
  sortOrder: "0"
};
function AdminCategories() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  const { data: categories, isLoading: catsLoading } = useCategories();
  const { data: subcategories, isLoading: subLoading } = useSubcategories();
  const [catDialogOpen, setCatDialogOpen] = reactExports.useState(false);
  const [editingCat, setEditingCat] = reactExports.useState(null);
  const [deleteCatTarget, setDeleteCatTarget] = reactExports.useState(null);
  const [catForm, setCatForm] = reactExports.useState(defaultCatForm);
  const [subDialogOpen, setSubDialogOpen] = reactExports.useState(false);
  const [subParent, setSubParent] = reactExports.useState(null);
  const [subName, setSubName] = reactExports.useState("");
  const [subNameHi, setSubNameHi] = reactExports.useState("");
  const [deleteSubTarget, setDeleteSubTarget] = reactExports.useState(
    null
  );
  const setCatField = (key, value) => setCatForm((f) => ({ ...f, [key]: value }));
  function openAddCat() {
    setEditingCat(null);
    setCatForm(defaultCatForm);
    setCatDialogOpen(true);
  }
  function openEditCat(cat) {
    setEditingCat(cat);
    setCatForm({
      name: cat.name,
      nameHi: cat.nameHindi,
      description: "",
      iconEmoji: cat.icon,
      sortOrder: cat.sortOrder.toString()
    });
    setCatDialogOpen(true);
  }
  const createCatMutation = useMutation({
    mutationFn: async (args) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.createCategory(args);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      ue.success("Category created");
      setCatDialogOpen(false);
    },
    onError: (e) => ue.error(`Failed: ${e.message}`)
  });
  const updateCatMutation = useMutation({
    mutationFn: async (args) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.updateCategory(args);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      ue.success("Category updated");
      setCatDialogOpen(false);
    },
    onError: (e) => ue.error(`Failed: ${e.message}`)
  });
  const deleteCatMutation = useMutation({
    mutationFn: async (id) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.deleteCategory(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      queryClient.invalidateQueries({ queryKey: ["subcategories"] });
      ue.success("Category deleted");
      setDeleteCatTarget(null);
    },
    onError: (e) => ue.error(`Failed: ${e.message}`)
  });
  function handleCatSubmit(e) {
    e.preventDefault();
    const args = {
      name: catForm.name,
      nameHindi: catForm.nameHi,
      icon: catForm.iconEmoji,
      colorClass: "bg-blue-100",
      sortOrder: BigInt(catForm.sortOrder || 0)
    };
    if (editingCat) {
      updateCatMutation.mutate({ ...args, id: editingCat.id });
    } else {
      createCatMutation.mutate(args);
    }
  }
  const createSubMutation = useMutation({
    mutationFn: async (args) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.createSubcategory(args);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subcategories"] });
      ue.success("Subcategory added");
      setSubName("");
      setSubNameHi("");
    },
    onError: (e) => ue.error(`Failed: ${e.message}`)
  });
  const deleteSubMutation = useMutation({
    mutationFn: async (id) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.deleteSubcategory(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subcategories"] });
      ue.success("Subcategory deleted");
      setDeleteSubTarget(null);
    },
    onError: (e) => ue.error(`Failed: ${e.message}`)
  });
  function openSubDialog(cat) {
    setSubParent(cat);
    setSubName("");
    setSubNameHi("");
    setSubDialogOpen(true);
  }
  const subcategoriesByCategory = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const s of subcategories ?? []) {
      const key = s.categoryId.toString();
      const existing = map.get(key) ?? [];
      map.set(key, [...existing, s]);
    }
    return map;
  }, [subcategories]);
  const sortedCategories = reactExports.useMemo(
    () => categories ? [...categories].sort(
      (a, b) => Number(a.sortOrder) - Number(b.sortOrder)
    ) : [],
    [categories]
  );
  const isCatPending = createCatMutation.isPending || updateCatMutation.isPending;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    AdminLayout,
    {
      title: "Categories",
      subtitle: `${(categories == null ? void 0 : categories.length) ?? 0} categories`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            "data-ocid": "add-category-btn",
            onClick: openAddCat,
            className: "gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
              "Add Category"
            ]
          }
        ) }),
        catsLoading || subLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 w-full" }, i)) }) : sortedCategories.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": "categories-empty-state",
            className: "bg-card border border-border rounded-xl p-12 text-center text-muted-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-10 h-10 mx-auto mb-3 opacity-30" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "No categories yet" })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: sortedCategories.map((cat) => {
          const subs = subcategoriesByCategory.get(cat.id.toString()) ?? [];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": "category-row",
              className: "bg-card border border-border rounded-xl overflow-hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 flex items-center justify-between gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl shrink-0", children: cat.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: cat.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: "·" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: cat.nameHindi })
                    ] }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Badge,
                      {
                        variant: "outline",
                        className: "text-xs hidden sm:inline-flex",
                        children: [
                          "Sort: ",
                          cat.sortOrder.toString()
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        "data-ocid": "add-subcategory-btn",
                        variant: "outline",
                        size: "sm",
                        onClick: () => openSubDialog(cat),
                        className: "gap-1 text-xs hidden sm:flex",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" }),
                          "Subcategory"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        "data-ocid": "edit-category-btn",
                        variant: "ghost",
                        size: "icon",
                        className: "h-8 w-8",
                        onClick: () => openEditCat(cat),
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-3.5 h-3.5" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        "data-ocid": "delete-category-btn",
                        variant: "ghost",
                        size: "icon",
                        className: "h-8 w-8 hover:text-destructive",
                        onClick: () => setDeleteCatTarget(cat),
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                      }
                    )
                  ] })
                ] }),
                subs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border px-5 py-3 bg-muted/20", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-2 uppercase tracking-wide font-medium", children: [
                    "Subcategories (",
                    subs.length,
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: subs.map((sub) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      "data-ocid": "subcategory-tag",
                      className: "flex items-center gap-1.5 bg-background border border-border rounded-full px-3 py-1 text-xs",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: sub.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "·" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: sub.nameHindi }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            "data-ocid": "delete-subcategory-btn",
                            onClick: () => setDeleteSubTarget(sub),
                            className: "ml-1 text-muted-foreground hover:text-destructive transition-colors",
                            "aria-label": `Delete ${sub.name}`,
                            children: "×"
                          }
                        )
                      ]
                    },
                    sub.id.toString()
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:hidden border-t border-border px-5 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    "data-ocid": "add-subcategory-btn-mobile",
                    variant: "ghost",
                    size: "sm",
                    onClick: () => openSubDialog(cat),
                    className: "gap-1 text-xs w-full",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" }),
                      "Add Subcategory"
                    ]
                  }
                ) })
              ]
            },
            cat.id.toString()
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: catDialogOpen, onOpenChange: setCatDialogOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: editingCat ? "Edit Category" : "Add Category" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleCatSubmit, className: "space-y-4 mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "catName", children: "Name (EN) *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "catName",
                    "data-ocid": "category-name-en",
                    value: catForm.name,
                    onChange: (e) => setCatField("name", e.target.value),
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "catNameHi", children: "Name (HI) *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "catNameHi",
                    "data-ocid": "category-name-hi",
                    value: catForm.nameHi,
                    onChange: (e) => setCatField("nameHi", e.target.value),
                    required: true
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "catIcon", children: "Icon Emoji" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "catIcon",
                    "data-ocid": "category-icon-emoji",
                    value: catForm.iconEmoji,
                    onChange: (e) => setCatField("iconEmoji", e.target.value),
                    placeholder: "🥛"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "catSortOrder", children: "Sort Order" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "catSortOrder",
                    "data-ocid": "category-sort-order",
                    type: "number",
                    min: "0",
                    value: catForm.sortOrder,
                    onChange: (e) => setCatField("sortOrder", e.target.value)
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-3 pt-2 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  onClick: () => setCatDialogOpen(false),
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  "data-ocid": "category-form-submit",
                  disabled: isCatPending,
                  children: isCatPending ? editingCat ? "Saving..." : "Creating..." : editingCat ? "Save Changes" : "Create"
                }
              )
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: subDialogOpen, onOpenChange: setSubDialogOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
            "Add Subcategory to ",
            subParent == null ? void 0 : subParent.icon,
            " ",
            subParent == null ? void 0 : subParent.name
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "subName", children: "Name (EN) *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "subName",
                  "data-ocid": "subcategory-name-en",
                  value: subName,
                  onChange: (e) => setSubName(e.target.value),
                  placeholder: "e.g. Whole Milk"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "subNameHi", children: "Name (HI) *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "subNameHi",
                  "data-ocid": "subcategory-name-hi",
                  value: subNameHi,
                  onChange: (e) => setSubNameHi(e.target.value),
                  placeholder: "e.g. पूर्ण दूध"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-3 pt-2 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  onClick: () => setSubDialogOpen(false),
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  "data-ocid": "subcategory-form-submit",
                  disabled: !subName || !subNameHi || createSubMutation.isPending,
                  onClick: () => {
                    if (!subParent || !subName || !subNameHi) return;
                    createSubMutation.mutate({
                      categoryId: subParent.id,
                      name: subName,
                      nameHindi: subNameHi
                    });
                  },
                  children: createSubMutation.isPending ? "Adding..." : "Add"
                }
              )
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AlertDialog,
          {
            open: !!deleteCatTarget,
            onOpenChange: (open) => !open && setDeleteCatTarget(null),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "Delete Category?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { children: [
                  "This will permanently delete",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: deleteCatTarget == null ? void 0 : deleteCatTarget.name }),
                  " and all its subcategories. This action cannot be undone."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { "data-ocid": "delete-category-cancel", children: "Cancel" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AlertDialogAction,
                  {
                    "data-ocid": "delete-category-confirm",
                    className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                    onClick: () => deleteCatTarget && deleteCatMutation.mutate(deleteCatTarget.id),
                    children: deleteCatMutation.isPending ? "Deleting..." : "Delete"
                  }
                )
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AlertDialog,
          {
            open: !!deleteSubTarget,
            onOpenChange: (open) => !open && setDeleteSubTarget(null),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "Delete Subcategory?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { children: [
                  "This will permanently delete",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: deleteSubTarget == null ? void 0 : deleteSubTarget.name }),
                  ". This action cannot be undone."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { "data-ocid": "delete-subcategory-cancel", children: "Cancel" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AlertDialogAction,
                  {
                    "data-ocid": "delete-subcategory-confirm",
                    className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                    onClick: () => deleteSubTarget && deleteSubMutation.mutate(deleteSubTarget.id),
                    children: deleteSubMutation.isPending ? "Deleting..." : "Delete"
                  }
                )
              ] })
            ] })
          }
        )
      ]
    }
  );
}
export {
  AdminCategories as default
};
