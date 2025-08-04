import { categories, products } from "./mock-data";
import type { Category, Product, Resolvers } from "#graphql/resolver";

export const resolvers: Resolvers = {
  Query: {
    hello: () => ({
      message: "Hello from GraphQL!",
    }),
    products: () => products as unknown as Product[],
    product: (_, { id }: { id: Product["id"] }) => {
      const found = products.find((p) => p.id.toString() === id);
      return found ? (found as unknown as Product) : null;
    },
    categories: () => categories as unknown as Category[],
    category: (_, { id }: { id: Category["id"] }) => {
      const found = categories.find((c) => c.id.toString() === id);
      return found as unknown as Category;
    },
  },
  Product: {
    category: (parent: Product) => {
      const mockParent = parent as unknown as Product;
      const found = categories.find((c) => c.id === mockParent.category_id);
      if (!found) {
        throw new Error(`Category not found for product ${mockParent.id}`);
      }
      return found as unknown as Category;
    },
  },
  Category: {
    products: (parent: Category) =>
      products.filter((p) => p.category_id === parseInt(parent.id)) as unknown as Product[],
  },
};
