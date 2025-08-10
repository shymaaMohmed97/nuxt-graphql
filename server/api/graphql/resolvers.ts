import { products } from "~~/data/products";
import { categories } from "~~/data/categories";
import { users } from "~~/data/users";
import { addresses } from "~~/data/addresses";
import { wallets } from "~~/data/wallets";
import { reviews } from "~~/data/reviews";
import type {
  Address,
  Category,
  CreateReviewInput,
  Product,
  Resolvers,
  Review,
  User,
  Wallet,
} from "#graphql/resolver";

export const resolvers: Resolvers = {
  Query: {
    // Root resolvers
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
    users: () => users as unknown as User[],
    user: (_, { id }: { id: User["id"] }) => {
      const found = users.find((u) => u.id.toString() === id);
      return found as unknown as User;
    },
  },
  Mutation: {
    createReview: (_, { input }: { input: CreateReviewInput }) => {
      const user = users.find((u) => u.id === input.user_id);
      if (!user) {
        throw new Error(`User with ID ${input.user_id} not found`);
      }
      const review = {
        id: reviews.length + 1,
        user_id: input.user_id,
        product_id: input.product_id,
        comment: input.comment,
        user: user as unknown as User,
      };
      reviews.push(review);
      return review as unknown as Review;
    },
  },
  Product: {
    // fields resolvers
    category: (parent: Product) => {
      const found = categories.find((c) => c.id === parent.level_one_id);
      return found as unknown as Category;
    },
    reviews: (parent: Product) =>
      reviews
        .filter((r) => r.product_id === parseInt(parent.id))
        .map((r) => {
          const user = users.find((u) => u.id === r.user_id);
          return {
            ...r,
            user: user,
          };
        }) as unknown as Review[],
  },
  Category: {
    // fields resolvers
    products: (parent: Category) =>
      products.filter(
        (p) => p.level_one_id === parseInt(parent.id)
      ) as unknown as Product[],
  },
  User: {
    // fields resolvers
    addresses: (parent: User) =>
      addresses.filter(
        (a) => a.user_id === parseInt(parent.id)
      ) as unknown as Address[],
    wallet: (parent: User) =>
      wallets.filter(
        (w) => w.user_id === parseInt(parent.id)
      ) as unknown as Wallet[],
  },
};
