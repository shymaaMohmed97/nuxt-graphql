import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Category = {
  __typename?: 'Category';
  created_at: Scalars['String']['output'];
  deleted_at?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  products?: Maybe<Array<Product>>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type HelloResponse = {
  __typename?: 'HelloResponse';
  message: Scalars['String']['output'];
};

export type Product = {
  __typename?: 'Product';
  alt_images: Array<Scalars['String']['output']>;
  barcode: Scalars['String']['output'];
  bigsave_discount: Scalars['Int']['output'];
  brand_id?: Maybe<Scalars['Int']['output']>;
  bundle_tag?: Maybe<Scalars['String']['output']>;
  can_installment: Scalars['Int']['output'];
  canonical_tag?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Category>;
  category_id: Scalars['Int']['output'];
  center_pharmacy_id?: Maybe<Scalars['Int']['output']>;
  cost_price: Scalars['Int']['output'];
  country_id: Scalars['Int']['output'];
  coupon_description: Scalars['String']['output'];
  created_at: Scalars['String']['output'];
  creation_type: Scalars['String']['output'];
  deleted_at?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  discount?: Maybe<Scalars['Int']['output']>;
  discount_type?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['String']['output']>;
  end_time?: Maybe<Scalars['String']['output']>;
  flow_type: Scalars['Int']['output'];
  gameball_points?: Maybe<Scalars['String']['output']>;
  highlights_ar: Scalars['String']['output'];
  highlights_en: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<Scalars['String']['output']>;
  is_outofstock: Scalars['Int']['output'];
  level_one_id: Scalars['Int']['output'];
  low_stock: Scalars['Int']['output'];
  main_category_id: Scalars['Int']['output'];
  max_quantity: Scalars['Int']['output'];
  need_prescription: Scalars['Int']['output'];
  not_indexing: Scalars['Int']['output'];
  not_return: Scalars['Int']['output'];
  pharmacy_branch_id?: Maybe<Scalars['String']['output']>;
  price: Scalars['Int']['output'];
  purchase_count: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  scheduled_bundle_tag?: Maybe<Scalars['String']['output']>;
  scheduled_discount?: Maybe<Scalars['String']['output']>;
  scheduled_discount_type?: Maybe<Scalars['String']['output']>;
  seller: Scalars['Int']['output'];
  seller_name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  sorting?: Maybe<Scalars['String']['output']>;
  sorting_keyword_ar?: Maybe<Scalars['String']['output']>;
  sorting_keyword_en?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['String']['output']>;
  start_time?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  store_order_item_id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
  verified: Scalars['String']['output'];
  views: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  category: Category;
  hello?: Maybe<HelloResponse>;
  product?: Maybe<Product>;
  products?: Maybe<Array<Product>>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};

export type GetHelloQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHelloQuery = { __typename?: 'Query', hello?: { __typename?: 'HelloResponse', message: string } | null };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: string, title: string, image: string, slug: string }> };

export type CategoryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CategoryQuery = { __typename?: 'Query', category: { __typename?: 'Category', id: string, title: string } };

export type ProductQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, title: string, price: number, description: string, images: Array<string>, category?: { __typename?: 'Category', id: string, title: string } | null } | null };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products?: Array<{ __typename?: 'Product', id: string, title: string, price: number, images: Array<string>, category?: { __typename?: 'Category', id: string, title: string } | null }> | null };

export type CategoryKeySpecifier = ('created_at' | 'deleted_at' | 'id' | 'image' | 'products' | 'slug' | 'title' | 'updated_at' | CategoryKeySpecifier)[];
export type CategoryFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HelloResponseKeySpecifier = ('message' | HelloResponseKeySpecifier)[];
export type HelloResponseFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductKeySpecifier = ('alt_images' | 'barcode' | 'bigsave_discount' | 'brand_id' | 'bundle_tag' | 'can_installment' | 'canonical_tag' | 'category' | 'category_id' | 'center_pharmacy_id' | 'cost_price' | 'country_id' | 'coupon_description' | 'created_at' | 'creation_type' | 'deleted_at' | 'description' | 'discount' | 'discount_type' | 'end_date' | 'end_time' | 'flow_type' | 'gameball_points' | 'highlights_ar' | 'highlights_en' | 'id' | 'images' | 'is_outofstock' | 'level_one_id' | 'low_stock' | 'main_category_id' | 'max_quantity' | 'need_prescription' | 'not_indexing' | 'not_return' | 'pharmacy_branch_id' | 'price' | 'purchase_count' | 'quantity' | 'scheduled_bundle_tag' | 'scheduled_discount' | 'scheduled_discount_type' | 'seller' | 'seller_name' | 'sku' | 'slug' | 'sorting' | 'sorting_keyword_ar' | 'sorting_keyword_en' | 'start_date' | 'start_time' | 'status' | 'store_order_item_id' | 'title' | 'updated_at' | 'verified' | 'views' | ProductKeySpecifier)[];
export type ProductFieldPolicy = {
	alt_images?: FieldPolicy<any> | FieldReadFunction<any>,
	barcode?: FieldPolicy<any> | FieldReadFunction<any>,
	bigsave_discount?: FieldPolicy<any> | FieldReadFunction<any>,
	brand_id?: FieldPolicy<any> | FieldReadFunction<any>,
	bundle_tag?: FieldPolicy<any> | FieldReadFunction<any>,
	can_installment?: FieldPolicy<any> | FieldReadFunction<any>,
	canonical_tag?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	category_id?: FieldPolicy<any> | FieldReadFunction<any>,
	center_pharmacy_id?: FieldPolicy<any> | FieldReadFunction<any>,
	cost_price?: FieldPolicy<any> | FieldReadFunction<any>,
	country_id?: FieldPolicy<any> | FieldReadFunction<any>,
	coupon_description?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	creation_type?: FieldPolicy<any> | FieldReadFunction<any>,
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	discount?: FieldPolicy<any> | FieldReadFunction<any>,
	discount_type?: FieldPolicy<any> | FieldReadFunction<any>,
	end_date?: FieldPolicy<any> | FieldReadFunction<any>,
	end_time?: FieldPolicy<any> | FieldReadFunction<any>,
	flow_type?: FieldPolicy<any> | FieldReadFunction<any>,
	gameball_points?: FieldPolicy<any> | FieldReadFunction<any>,
	highlights_ar?: FieldPolicy<any> | FieldReadFunction<any>,
	highlights_en?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>,
	is_outofstock?: FieldPolicy<any> | FieldReadFunction<any>,
	level_one_id?: FieldPolicy<any> | FieldReadFunction<any>,
	low_stock?: FieldPolicy<any> | FieldReadFunction<any>,
	main_category_id?: FieldPolicy<any> | FieldReadFunction<any>,
	max_quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	need_prescription?: FieldPolicy<any> | FieldReadFunction<any>,
	not_indexing?: FieldPolicy<any> | FieldReadFunction<any>,
	not_return?: FieldPolicy<any> | FieldReadFunction<any>,
	pharmacy_branch_id?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	purchase_count?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduled_bundle_tag?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduled_discount?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduled_discount_type?: FieldPolicy<any> | FieldReadFunction<any>,
	seller?: FieldPolicy<any> | FieldReadFunction<any>,
	seller_name?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	sorting?: FieldPolicy<any> | FieldReadFunction<any>,
	sorting_keyword_ar?: FieldPolicy<any> | FieldReadFunction<any>,
	sorting_keyword_en?: FieldPolicy<any> | FieldReadFunction<any>,
	start_date?: FieldPolicy<any> | FieldReadFunction<any>,
	start_time?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	store_order_item_id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	verified?: FieldPolicy<any> | FieldReadFunction<any>,
	views?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('categories' | 'category' | 'hello' | 'product' | 'products' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	hello?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Category?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryKeySpecifier | (() => undefined | CategoryKeySpecifier),
		fields?: CategoryFieldPolicy,
	},
	HelloResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HelloResponseKeySpecifier | (() => undefined | HelloResponseKeySpecifier),
		fields?: HelloResponseFieldPolicy,
	},
	Product?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductKeySpecifier | (() => undefined | ProductKeySpecifier),
		fields?: ProductFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;