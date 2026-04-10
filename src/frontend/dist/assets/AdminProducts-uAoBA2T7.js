import { r as reactExports, M as useComposedRefs, j as jsxRuntimeExports, E as cn, N as useActor, O as useQueryClient, f as useProducts, u as useCategories, k as useSubcategories, Q as useMutation, n as Search, I as Input, B as Button, S as Skeleton, P as ProductPackageSVG, x as formatPrice, h as Badge, z as ue, T as createActor } from "./index-S-wpKozw.js";
import { A as AdminLayout } from "./AdminLayout-B22g_Ykk.js";
import { A as AlertDialog, a as AlertDialogContent, b as AlertDialogHeader, c as AlertDialogTitle, d as AlertDialogDescription, e as AlertDialogFooter, f as AlertDialogCancel, g as AlertDialogAction } from "./alert-dialog-9JEnY4VN.js";
import { P as Pen, D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-CnWf3fq2.js";
import { L as Label } from "./label-HaSzA_K8.js";
import { u as useControllableState, P as Primitive, c as composeEventHandlers, a as createContextScope } from "./index-CvcSwpNX.js";
import { u as usePrevious, a as useSize } from "./index-DOGgJdYB.js";
import { P as Plus } from "./plus-Crllhs1t.js";
import { P as Package } from "./package-okqL4Ge3.js";
import { T as Trash2 } from "./trash-2-DTt9HCne.js";
import "./lock-ClfGGbKN.js";
import "./chevron-right-DcB2isNx.js";
import "./log-out-BmvSjASg.js";
import "./shopping-bag-DSTgzANf.js";
import "./x-Bb5ldv21.js";
import "./index-C15YK7Bm.js";
var SWITCH_NAME = "Switch";
var [createSwitchContext] = createContextScope(SWITCH_NAME);
var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
var Switch$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSwitch,
      name,
      checked: checkedProp,
      defaultChecked,
      required,
      disabled,
      value = "on",
      onCheckedChange,
      form,
      ...switchProps
    } = props;
    const [button, setButton] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
    const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    const [checked, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked ?? false,
      onChange: onCheckedChange,
      caller: SWITCH_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(SwitchProvider, { scope: __scopeSwitch, checked, disabled, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": checked,
          "aria-required": required,
          "data-state": getState(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled,
          value,
          ...switchProps,
          ref: composedRefs,
          onClick: composeEventHandlers(props.onClick, (event) => {
            setChecked((prevChecked) => !prevChecked);
            if (isFormControl) {
              hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
              if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
          })
        }
      ),
      isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchBubbleInput,
        {
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled,
          form,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Switch$1.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb";
var SwitchThumb = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSwitch, ...thumbProps } = props;
    const context = useSwitchContext(THUMB_NAME, __scopeSwitch);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        "data-state": getState(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...thumbProps,
        ref: forwardedRef
      }
    );
  }
);
SwitchThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME = "SwitchBubbleInput";
var SwitchBubbleInput = reactExports.forwardRef(
  ({
    __scopeSwitch,
    control,
    checked,
    bubbles = true,
    ...props
  }, forwardedRef) => {
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(ref, forwardedRef);
    const prevChecked = usePrevious(checked);
    const controlSize = useSize(control);
    reactExports.useEffect(() => {
      const input = ref.current;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", { bubbles });
        setChecked.call(input, checked);
        input.dispatchEvent(event);
      }
    }, [prevChecked, checked, bubbles]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: checked,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
          ...props.style,
          ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
SwitchBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getState(checked) {
  return checked ? "checked" : "unchecked";
}
var Root = Switch$1;
var Thumb = SwitchThumb;
function Switch({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "switch",
      className: cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Thumb,
        {
          "data-slot": "switch-thumb",
          className: cn(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
const PACKAGING_TYPES = [
  "Pouch",
  "Plastic Bottle",
  "Glass Bottle",
  "Tetra Pack",
  "Bulk Container",
  "Milk Can",
  "Jar",
  "Box"
];
const defaultForm = {
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
  isTrending: false
};
function AdminProducts() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  const { data: products, isLoading } = useProducts();
  const { data: categories } = useCategories();
  const { data: subcategories } = useSubcategories();
  const [search, setSearch] = reactExports.useState("");
  const [dialogOpen, setDialogOpen] = reactExports.useState(false);
  const [editingProduct, setEditingProduct] = reactExports.useState(null);
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState(defaultForm);
  const filteredSubcategories = reactExports.useMemo(() => {
    const cat = categories == null ? void 0 : categories.find((c) => c.name === form.category);
    return (subcategories == null ? void 0 : subcategories.filter((s) => s.categoryId === (cat == null ? void 0 : cat.id))) ?? [];
  }, [subcategories, categories, form.category]);
  const filteredProducts = reactExports.useMemo(() => {
    if (!products) return [];
    const term = search.toLowerCase();
    return products.filter(
      (p) => p.name.toLowerCase().includes(term) || p.nameHindi.toLowerCase().includes(term)
    );
  }, [products, search]);
  const setField = (key, value) => setForm((f) => ({ ...f, [key]: value }));
  function openAdd() {
    setEditingProduct(null);
    setForm(defaultForm);
    setDialogOpen(true);
  }
  function openEdit(product) {
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
      isTrending: product.isTrending
    });
    setDialogOpen(true);
  }
  const createMutation = useMutation({
    mutationFn: async (args) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.createProduct(args);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      ue.success("Product created");
      setDialogOpen(false);
    },
    onError: (e) => ue.error(`Failed: ${e.message}`)
  });
  const updateMutation = useMutation({
    mutationFn: async (args) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.updateProduct(args);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      ue.success("Product updated");
      setDialogOpen(false);
    },
    onError: (e) => ue.error(`Failed: ${e.message}`)
  });
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.deleteProduct(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      ue.success("Product deleted");
      setDeleteTarget(null);
    },
    onError: (e) => ue.error(`Failed: ${e.message}`)
  });
  function handleSubmit(e) {
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
      brand: "Yadav Dairy"
    };
    if (editingProduct) {
      updateMutation.mutate({ ...args, id: editingProduct.id });
    } else {
      createMutation.mutate(args);
    }
  }
  const isPending = createMutation.isPending || updateMutation.isPending;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    AdminLayout,
    {
      title: "Products",
      subtitle: `${(products == null ? void 0 : products.length) ?? 0} products in your catalog`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "product-search",
                placeholder: "Search products...",
                value: search,
                onChange: (e) => setSearch(e.target.value),
                className: "pl-9"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              "data-ocid": "add-product-btn",
              onClick: openAdd,
              className: "gap-2 shrink-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
                "Add Product"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 space-y-3", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-16 w-full" }, i)) }) : filteredProducts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": "products-empty-state",
            className: "p-12 text-center text-muted-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-10 h-10 mx-auto mb-3 opacity-30" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "No products found" }),
              search && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: "Try a different search term" })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-medium text-muted-foreground", children: "Product" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-medium text-muted-foreground hidden md:table-cell", children: "Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 font-medium text-muted-foreground", children: "Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-4 py-3 font-medium text-muted-foreground hidden sm:table-cell", children: "Stock" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-4 py-3 font-medium text-muted-foreground hidden lg:table-cell", children: "Tags" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 font-medium text-muted-foreground", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: filteredProducts.map((product) => {
            const cat = categories == null ? void 0 : categories.find(
              (c) => c.name === product.category
            );
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                "data-ocid": "product-row",
                className: "hover:bg-muted/20 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-muted shrink-0 overflow-hidden flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ProductPackageSVG,
                      {
                        packagingKey: product.imageUrl,
                        productName: product.name,
                        size: "sm"
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground truncate max-w-[140px]", children: product.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate max-w-[140px]", children: product.nameHindi })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 hidden md:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: (cat == null ? void 0 : cat.name) ?? "—" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right font-medium", children: formatPrice(product.price) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-center hidden sm:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: product.inStock ? "default" : "destructive",
                      className: "text-xs",
                      children: product.inStock ? "In Stock" : "Out"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-center hidden lg:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-1", children: [
                    product.isFeatured && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: "outline",
                        className: "text-xs text-primary border-primary/30",
                        children: "Featured"
                      }
                    ),
                    product.isTrending && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: "outline",
                        className: "text-xs text-accent border-accent/30",
                        children: "Trending"
                      }
                    )
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        "data-ocid": "edit-product-btn",
                        variant: "ghost",
                        size: "icon",
                        className: "h-8 w-8",
                        onClick: () => openEdit(product),
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-3.5 h-3.5" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        "data-ocid": "delete-product-btn",
                        variant: "ghost",
                        size: "icon",
                        className: "h-8 w-8 hover:text-destructive",
                        onClick: () => setDeleteTarget(product),
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                      }
                    )
                  ] }) })
                ]
              },
              product.id.toString()
            );
          }) })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: dialogOpen, onOpenChange: setDialogOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl max-h-[90vh] overflow-y-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: editingProduct ? "Edit Product" : "Add Product" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4 mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "nameEn", children: "Name (English) *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "nameEn",
                    "data-ocid": "product-name-en",
                    value: form.name,
                    onChange: (e) => setField("name", e.target.value),
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "nameHi", children: "Name (Hindi) *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "nameHi",
                    "data-ocid": "product-name-hi",
                    value: form.nameHindi,
                    onChange: (e) => setField("nameHindi", e.target.value),
                    required: true
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "description", children: "Description" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: "description",
                  "data-ocid": "product-description",
                  value: form.description,
                  onChange: (e) => setField("description", e.target.value),
                  rows: 2,
                  className: "w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "price", children: "Price (₹) *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "price",
                    "data-ocid": "product-price",
                    type: "number",
                    min: "0",
                    value: form.price,
                    onChange: (e) => setField("price", e.target.value),
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "originalPrice", children: "Original Price (₹)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "originalPrice",
                    "data-ocid": "product-original-price",
                    type: "number",
                    min: "0",
                    value: form.originalPrice,
                    onChange: (e) => setField("originalPrice", e.target.value)
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "categoryId", children: "Category *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    id: "categoryId",
                    "data-ocid": "product-category",
                    value: form.category,
                    onChange: (e) => {
                      setField("category", e.target.value);
                      setField("subcategory", "");
                    },
                    required: true,
                    className: "w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select category" }),
                      categories == null ? void 0 : categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: c.name, children: [
                        c.icon,
                        " ",
                        c.name
                      ] }, c.id.toString()))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "subcategoryId", children: "Subcategory" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    id: "subcategoryId",
                    "data-ocid": "product-subcategory",
                    value: form.subcategory,
                    onChange: (e) => setField("subcategory", e.target.value),
                    disabled: !form.category,
                    className: "w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select subcategory" }),
                      filteredSubcategories.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s.name, children: s.name }, s.id.toString()))
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "packagingType", children: "Packaging" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "select",
                  {
                    id: "packagingType",
                    "data-ocid": "product-packaging",
                    value: form.packagingType,
                    onChange: (e) => setField("packagingType", e.target.value),
                    className: "w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                    children: PACKAGING_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t, children: t }, t))
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "quantity", children: "Quantity / Size" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "quantity",
                    "data-ocid": "product-quantity",
                    value: form.quantity,
                    onChange: (e) => setField("quantity", e.target.value),
                    placeholder: "e.g. 500ml, 200g"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "imageUrl", children: "Packaging Key (imageUrl)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "imageUrl",
                  "data-ocid": "product-image-url",
                  value: form.imageUrl,
                  onChange: (e) => setField("imageUrl", e.target.value),
                  placeholder: "e.g. milk_pouch, ghee_jar, paneer_block"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "stockCount", children: "Stock Count" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "stockCount",
                  "data-ocid": "product-stock-count",
                  type: "number",
                  min: "0",
                  value: form.stock,
                  onChange: (e) => setField("stock", e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4 pt-1", children: [
              { key: "inStock", label: "In Stock" },
              { key: "isFeatured", label: "Featured" },
              { key: "isTrending", label: "Trending" }
            ].map(({ key, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Switch,
                {
                  id: key,
                  "data-ocid": `product-${key}`,
                  checked: form[key],
                  onCheckedChange: (v) => setField(key, v)
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: key, className: "cursor-pointer", children: label })
            ] }, key)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-3 pt-2 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  onClick: () => setDialogOpen(false),
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  "data-ocid": "product-form-submit",
                  disabled: isPending,
                  children: isPending ? editingProduct ? "Saving..." : "Creating..." : editingProduct ? "Save Changes" : "Create Product"
                }
              )
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AlertDialog,
          {
            open: !!deleteTarget,
            onOpenChange: (open) => !open && setDeleteTarget(null),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "Delete Product?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { children: [
                  "This will permanently delete ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: deleteTarget == null ? void 0 : deleteTarget.name }),
                  ". This action cannot be undone."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { "data-ocid": "delete-product-cancel", children: "Cancel" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AlertDialogAction,
                  {
                    "data-ocid": "delete-product-confirm",
                    className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                    onClick: () => deleteTarget && deleteMutation.mutate(deleteTarget.id),
                    children: deleteMutation.isPending ? "Deleting..." : "Delete"
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
  AdminProducts as default
};
