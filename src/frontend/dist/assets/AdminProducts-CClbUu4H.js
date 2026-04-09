import { c as createLucideIcon, r as reactExports, A as useComposedRefs, j as jsxRuntimeExports, v as cn, g as useActor, C as useQueryClient, h as useProducts, u as useCategories, t as useSubcategories, D as useMutation, f as Search, I as Input, S as Skeleton, o as formatPrice, B as Badge, l as createActor } from "./index-Bpk1okSM.js";
import { u as ue } from "./index-CATVIhQS.js";
import { A as AdminLayout } from "./AdminLayout-sSyTcQEw.js";
import { u as useLayoutEffect2, a as useControllableState, P as Primitive, c as composeEventHandlers, b as createContextScope, d as Pen, D as Dialog, e as DialogContent, f as DialogHeader, g as DialogTitle, A as AlertDialog, h as AlertDialogContent, i as AlertDialogHeader, j as AlertDialogTitle, k as AlertDialogDescription, l as AlertDialogFooter, m as AlertDialogCancel, n as AlertDialogAction } from "./dialog-B5lsF9Hi.js";
import { B as Button } from "./button-DQ9l_krO.js";
import { L as Label } from "./label-BhJ1CVV9.js";
import { P as Plus } from "./plus-dLW1Sukh.js";
import { P as Package } from "./package-B1wa1saF.js";
import { T as Trash2 } from "./trash-2-KPKbf9je.js";
import "./chevron-right-DKfyF6tD.js";
import "./user-qpcW7YQj.js";
import "./x-Bew9r-SF.js";
import "./index-IEHbvEcb.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83", key: "1bzlo9" }],
  ["line", { x1: "13.5", x2: "6", y1: "13.5", y2: "21", key: "1q0aeu" }],
  ["line", { x1: "18", x2: "21", y1: "12", y2: "15", key: "5mozeu" }],
  [
    "path",
    {
      d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",
      key: "mmje98"
    }
  ],
  ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9", key: "43el77" }]
];
const ImageOff = createLucideIcon("image-off", __iconNode);
function usePrevious(value) {
  const ref = reactExports.useRef({ value, previous: value });
  return reactExports.useMemo(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [value]);
}
function useSize(element) {
  const [size, setSize] = reactExports.useState(void 0);
  useLayoutEffect2(() => {
    if (element) {
      setSize({ width: element.offsetWidth, height: element.offsetHeight });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) {
          return;
        }
        if (!entries.length) {
          return;
        }
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({ width, height });
      });
      resizeObserver.observe(element, { box: "border-box" });
      return () => resizeObserver.unobserve(element);
    } else {
      setSize(void 0);
    }
  }, [element]);
  return size;
}
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
const FAT_CONTENT_OPTIONS = [
  "Full Fat",
  "Toned",
  "Double Toned",
  "Skimmed",
  "Low Fat",
  "Fat Free",
  "N/A"
];
const defaultForm = {
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
  const filteredSubcategories = reactExports.useMemo(
    () => (subcategories == null ? void 0 : subcategories.filter(
      (s) => s.categoryId.toString() === form.categoryId
    )) ?? [],
    [subcategories, form.categoryId]
  );
  const filteredProducts = reactExports.useMemo(() => {
    if (!products) return [];
    const term = search.toLowerCase();
    return products.filter(
      (p) => p.nameEn.toLowerCase().includes(term) || p.nameHi.toLowerCase().includes(term)
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
              (c) => c.id === product.categoryId
            );
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                "data-ocid": "product-row",
                className: "hover:bg-muted/20 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-muted shrink-0 overflow-hidden", children: product.imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: product.imageUrl,
                        alt: product.nameEn,
                        className: "w-full h-full object-cover",
                        onError: (e) => {
                          e.target.style.display = "none";
                        }
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ImageOff, { className: "w-4 h-4 text-muted-foreground" }) }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground truncate max-w-[140px]", children: product.nameEn }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate max-w-[140px]", children: product.nameHi })
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
                    value: form.nameEn,
                    onChange: (e) => setField("nameEn", e.target.value),
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
                    value: form.nameHi,
                    onChange: (e) => setField("nameHi", e.target.value),
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
                    value: form.categoryId,
                    onChange: (e) => {
                      setField("categoryId", e.target.value);
                      setField("subcategoryId", "");
                    },
                    required: true,
                    className: "w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select category" }),
                      categories == null ? void 0 : categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: c.id.toString(), children: [
                        c.iconEmoji,
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
                    value: form.subcategoryId,
                    onChange: (e) => setField("subcategoryId", e.target.value),
                    disabled: !form.categoryId,
                    className: "w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select subcategory" }),
                      filteredSubcategories.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s.id.toString(), children: s.name }, s.id.toString()))
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
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "fatContent", children: "Fat Content" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "select",
                  {
                    id: "fatContent",
                    "data-ocid": "product-fat-content",
                    value: form.fatContent,
                    onChange: (e) => setField("fatContent", e.target.value),
                    className: "w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                    children: FAT_CONTENT_OPTIONS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: f, children: f }, f))
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "imageUrl", children: "Image URL" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "imageUrl",
                  "data-ocid": "product-image-url",
                  type: "url",
                  value: form.imageUrl,
                  onChange: (e) => setField("imageUrl", e.target.value),
                  placeholder: "https://..."
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
                  value: form.stockCount,
                  onChange: (e) => setField("stockCount", e.target.value)
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
                  "This will permanently delete",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: deleteTarget == null ? void 0 : deleteTarget.nameEn }),
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
