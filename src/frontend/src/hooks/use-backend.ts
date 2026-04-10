import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type {
  Category,
  CreateCategoryArgs,
  CreateProductArgs,
  Order,
  PlaceOrderArgs,
  Product,
  Subcategory,
  SubmitReviewArgs,
  UpdateCategoryArgs,
  UpdateProductArgs,
  UpdateProfileArgs,
  UserProfile,
} from "../backend.d";

// ─── Categories ───────────────────────────────────────────────────────────────

export function useCategories() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listCategories();
    },
    enabled: !!actor && !isFetching,
    staleTime: 5 * 60 * 1000,
  });
}

export function useSubcategories() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Subcategory[]>({
    queryKey: ["subcategories"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listSubcategories();
    },
    enabled: !!actor && !isFetching,
    staleTime: 5 * 60 * 1000,
  });
}

// ─── Products ─────────────────────────────────────────────────────────────────

export function useProducts() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listProducts();
    },
    enabled: !!actor && !isFetching,
    staleTime: 2 * 60 * 1000,
  });
}

export function useFeaturedProducts() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Product[]>({
    queryKey: ["products", "featured"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listFeaturedProducts();
    },
    enabled: !!actor && !isFetching,
    staleTime: 2 * 60 * 1000,
  });
}

export function useTrendingProducts() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Product[]>({
    queryKey: ["products", "trending"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listTrendingProducts();
    },
    enabled: !!actor && !isFetching,
    staleTime: 2 * 60 * 1000,
  });
}

export function useBestSellerProducts() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Product[]>({
    queryKey: ["products", "bestSellers"],
    queryFn: async () => {
      if (!actor) return [];
      const all = await actor.listProducts();
      return all.filter((p) => p.isBestSeller);
    },
    enabled: !!actor && !isFetching,
    staleTime: 2 * 60 * 1000,
  });
}

export function useFreshArrivals() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Product[]>({
    queryKey: ["products", "freshArrivals"],
    queryFn: async () => {
      if (!actor) return [];
      const all = await actor.listProducts();
      return all.filter((p) => p.isFreshArrival);
    },
    enabled: !!actor && !isFetching,
    staleTime: 2 * 60 * 1000,
  });
}

export function useProduct(id: bigint | undefined) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Product | null>({
    queryKey: ["products", id?.toString()],
    queryFn: async () => {
      if (!actor || id === undefined) return null;
      return actor.getProduct(id);
    },
    enabled: !!actor && !isFetching && id !== undefined,
  });
}

export function useProductsByCategory(category: string | undefined) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Product[]>({
    queryKey: ["products", "category", category],
    queryFn: async () => {
      if (!actor || !category) return [];
      return actor.listProductsByCategory(category);
    },
    enabled: !!actor && !isFetching && !!category,
  });
}

export function useSearchProducts(term: string) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Product[]>({
    queryKey: ["products", "search", term],
    queryFn: async () => {
      if (!actor || !term.trim()) return [];
      return actor.searchProducts(term);
    },
    enabled: !!actor && !isFetching && term.trim().length > 1,
    staleTime: 30 * 1000,
  });
}

export function useFilterProducts(
  category: string | null,
  maxPrice: bigint | null,
  packagingType: string | null,
) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Product[]>({
    queryKey: [
      "products",
      "filter",
      category,
      maxPrice?.toString(),
      packagingType,
    ],
    queryFn: async () => {
      if (!actor) return [];
      return actor.filterProducts(category, maxPrice, packagingType);
    },
    enabled: !!actor && !isFetching,
    staleTime: 30 * 1000,
  });
}

// ─── Orders ───────────────────────────────────────────────────────────────────

export function useOrders() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Order[]>({
    queryKey: ["orders"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listOrders();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useOrder(id: bigint | undefined) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Order | null>({
    queryKey: ["orders", id?.toString()],
    queryFn: async () => {
      if (!actor || id === undefined) return null;
      return actor.getOrder(id);
    },
    enabled: !!actor && !isFetching && id !== undefined,
  });
}

export function usePlaceOrder() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation<Order, Error, PlaceOrderArgs>({
    mutationFn: async (args) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.placeOrder(args);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
}

// ─── User Profile ─────────────────────────────────────────────────────────────

export function useUserProfile() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<UserProfile | null>({
    queryKey: ["userProfile"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getUserProfile();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUpdateUserProfile() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation<UserProfile, Error, UpdateProfileArgs>({
    mutationFn: async (args) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.updateUserProfile(args);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
  });
}

// ─── Reviews ─────────────────────────────────────────────────────────────────

export function useProductReviews(productId: bigint | undefined) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["reviews", productId?.toString()],
    queryFn: async () => {
      if (!actor || productId === undefined) return [];
      return actor.getProductReviews(productId);
    },
    enabled: !!actor && !isFetching && productId !== undefined,
  });
}

export function useAddReview() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (args: SubmitReviewArgs) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.addReview(args);
    },
    onSuccess: (_, args) => {
      queryClient.invalidateQueries({
        queryKey: ["reviews", args.productId.toString()],
      });
      queryClient.invalidateQueries({
        queryKey: ["products", args.productId.toString()],
      });
    },
  });
}

// ─── Contact ──────────────────────────────────────────────────────────────────

export function useAddContact() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async ({
      name,
      email,
      message,
    }: { name: string; email: string; message: string }) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.addContact(name, email, message);
    },
  });
}

// ─── Wishlist (backend) ───────────────────────────────────────────────────────

export function useBackendWishlist() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getWishlist();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddToWishlist() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (productId: bigint) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.addToWishlist(productId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
  });
}

export function useRemoveFromWishlist() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (productId: bigint) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.removeFromWishlist(productId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
  });
}

// ─── Admin ────────────────────────────────────────────────────────────────────

export function useSetAdminPrincipal() {
  const { actor } = useActor(createActor);
  return useMutation<void, Error, void>({
    mutationFn: async () => {
      if (!actor) throw new Error("Backend not ready");
      return actor.setAdminPrincipal();
    },
  });
}

export function useAdminPrincipal() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["adminPrincipal"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getAdminPrincipal();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCreateProduct() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (args: CreateProductArgs) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.createProduct(args);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}

export function useUpdateProduct() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (args: UpdateProductArgs) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.updateProduct(args);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}

export function useDeleteProduct() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.deleteProduct(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}

export function useCreateCategory() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (args: CreateCategoryArgs) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.createCategory(args);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
}

export function useUpdateCategory() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (args: UpdateCategoryArgs) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.updateCategory(args);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
}

export function useDeleteCategory() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.deleteCategory(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
}

export function useListContacts() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listContacts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAllOrders() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["allOrders"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listOrders();
    },
    enabled: !!actor && !isFetching,
  });
}
