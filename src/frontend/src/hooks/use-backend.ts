import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type {
  Category,
  Order,
  PlaceOrderArgs,
  Product,
  Subcategory,
} from "../backend.d";

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

export function useProductsByCategory(categoryId: bigint | undefined) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Product[]>({
    queryKey: ["products", "category", categoryId?.toString()],
    queryFn: async () => {
      if (!actor || categoryId === undefined) return [];
      return actor.listProductsByCategory(categoryId);
    },
    enabled: !!actor && !isFetching && categoryId !== undefined,
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
