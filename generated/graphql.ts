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

export type Address = {
  __typename?: 'Address';
  address: Scalars['String']['output'];
  apartment_no: Scalars['String']['output'];
  area_id: Scalars['Int']['output'];
  building_no: Scalars['String']['output'];
  city_id: Scalars['Int']['output'];
  country_id: Scalars['Int']['output'];
  floor_no: Scalars['String']['output'];
  formatted_address: Scalars['String']['output'];
  g_area_id: Scalars['Int']['output'];
  g_city_id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  landmark: Scalars['String']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  selected: Scalars['Int']['output'];
  state_id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  user_id: Scalars['Int']['output'];
  verified: Scalars['Int']['output'];
  zone_id: Scalars['Int']['output'];
};

export type Category = {
  __typename?: 'Category';
  banner: Scalars['Int']['output'];
  banner_img_ar?: Maybe<Scalars['String']['output']>;
  banner_img_en?: Maybe<Scalars['String']['output']>;
  banner_link_ar?: Maybe<Scalars['String']['output']>;
  banner_link_en?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  level: Scalars['Int']['output'];
  media_type: Scalars['String']['output'];
  meta_description_ar: Scalars['String']['output'];
  meta_description_en: Scalars['String']['output'];
  meta_description_waffar_ar?: Maybe<Scalars['String']['output']>;
  meta_description_waffar_en?: Maybe<Scalars['String']['output']>;
  meta_keyword_ar: Scalars['String']['output'];
  meta_keyword_en: Scalars['String']['output'];
  now_image: Scalars['String']['output'];
  parent_id?: Maybe<Scalars['Int']['output']>;
  products: Array<Product>;
  show: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
  title_ar: Scalars['String']['output'];
  title_en: Scalars['String']['output'];
  waffar_image: Scalars['String']['output'];
};

export type CreateReviewInput = {
  comment: Scalars['String']['input'];
  product_id: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
};

export type HelloResponse = {
  __typename?: 'HelloResponse';
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createReview: Review;
};


export type MutationCreateReviewArgs = {
  input: CreateReviewInput;
};

export type Product = {
  __typename?: 'Product';
  alt_image: Scalars['String']['output'];
  barcode: Scalars['String']['output'];
  bigsave_discount: Scalars['Int']['output'];
  brand_id?: Maybe<Scalars['Int']['output']>;
  bundle_tag?: Maybe<Scalars['String']['output']>;
  canonical_tag?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Category>;
  category_id: Scalars['Int']['output'];
  center_pharmacy_id?: Maybe<Scalars['Int']['output']>;
  cost_price: Scalars['Int']['output'];
  country_id: Scalars['Int']['output'];
  coupon_description: Scalars['String']['output'];
  description: Scalars['String']['output'];
  discount?: Maybe<Scalars['Int']['output']>;
  discount_type?: Maybe<Scalars['String']['output']>;
  flow_type: Scalars['Int']['output'];
  gameball_points?: Maybe<Scalars['String']['output']>;
  highlights_ar?: Maybe<Scalars['String']['output']>;
  highlights_en?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  is_outofstock: Scalars['Int']['output'];
  level_one_id: Scalars['Int']['output'];
  low_stock: Scalars['Int']['output'];
  main_category_id: Scalars['Int']['output'];
  max_quantity: Scalars['Int']['output'];
  need_prescription: Scalars['Int']['output'];
  not_return: Scalars['Int']['output'];
  pharmacy_branch_id?: Maybe<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
  purchase_count: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  reviews?: Maybe<Array<Review>>;
  seller: Scalars['Int']['output'];
  seller_name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  sorting?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  store_order_item_id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
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
  user: User;
  users: Array<User>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type Review = {
  __typename?: 'Review';
  comment: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  product_id: Scalars['Int']['output'];
  user: User;
  user_id: Scalars['Int']['output'];
};

export type User = {
  __typename?: 'User';
  addresses: Array<Address>;
  birthday?: Maybe<Scalars['String']['output']>;
  card_brand?: Maybe<Scalars['String']['output']>;
  card_last_four?: Maybe<Scalars['String']['output']>;
  city_id?: Maybe<Scalars['Int']['output']>;
  country_code: Scalars['String']['output'];
  country_id: Scalars['Int']['output'];
  created_at: Scalars['String']['output'];
  credit_code?: Maybe<Scalars['String']['output']>;
  current_country_id: Scalars['Int']['output'];
  email: Scalars['String']['output'];
  fresh_chat_id?: Maybe<Scalars['String']['output']>;
  fresh_chat_id_sa?: Maybe<Scalars['String']['output']>;
  gender: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  invited_user_id?: Maybe<Scalars['Int']['output']>;
  is_active: Scalars['Int']['output'];
  is_verified: Scalars['Int']['output'];
  meta_data?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  pm_last_four?: Maybe<Scalars['String']['output']>;
  pm_type?: Maybe<Scalars['String']['output']>;
  public_key?: Maybe<Scalars['String']['output']>;
  register_way: Scalars['Int']['output'];
  social_id?: Maybe<Scalars['String']['output']>;
  social_image?: Maybe<Scalars['String']['output']>;
  social_type?: Maybe<Scalars['String']['output']>;
  stripe_id?: Maybe<Scalars['String']['output']>;
  trial_ends_at?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  wallet: Array<Wallet>;
};

export type Wallet = {
  __typename?: 'Wallet';
  balance: Scalars['Int']['output'];
  created_at: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  status: Scalars['Int']['output'];
  user_id: Scalars['Int']['output'];
};

export type CategoryFieldsFragment = { __typename?: 'Category', id: string, title_en: string };

export type ProductFieldsFragment = { __typename?: 'Product', id: string, title: string, price: number, image: string, alt_image: string, need_prescription: number, low_stock: number };

export type UserFieldsFragment = { __typename?: 'User', id: string, name: string, email: string, phone: string, is_active: number };

export type CreateReviewMutationVariables = Exact<{
  input: CreateReviewInput;
}>;


export type CreateReviewMutation = { __typename?: 'Mutation', createReview: { __typename?: 'Review', id: string, user_id: number, product_id: number, comment: string } };

export type GetHelloQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHelloQuery = { __typename?: 'Query', hello?: { __typename?: 'HelloResponse', message: string } | null };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', now_image: string, id: string, title_en: string }> };

export type CategoryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CategoryQuery = { __typename?: 'Query', category: { __typename?: 'Category', banner_img_en?: string | null, banner_link_en?: string | null, id: string, title_en: string, products: Array<{ __typename?: 'Product', id: string, title: string, price: number, image: string, alt_image: string }> } };

export type ProductQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductQuery = { __typename?: 'Query', product?: { __typename?: 'Product', description: string, highlights_ar?: string | null, seller_name?: string | null, not_return: number, id: string, title: string, price: number, image: string, alt_image: string, need_prescription: number, low_stock: number, category?: { __typename?: 'Category', id: string, title_en: string } | null, reviews?: Array<{ __typename?: 'Review', id: string, user_id: number, product_id: number, comment: string, user: { __typename?: 'User', id: string, name: string } }> | null } | null };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products?: Array<{ __typename?: 'Product', id: string, title: string, price: number, image: string, alt_image: string, need_prescription: number, low_stock: number }> | null };

export type UserQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', country_code: string, gender: string, birthday?: string | null, is_verified: number, id: string, name: string, email: string, phone: string, is_active: number, wallet: Array<{ __typename?: 'Wallet', id: string, balance: number, status: number, created_at: string }>, addresses: Array<{ __typename?: 'Address', id: string, verified: number, selected: number, title: string, address: string, building_no: string, floor_no: string, apartment_no: string, landmark: string, longitude: number, latitude: number, formatted_address: string }> } };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', created_at: string, id: string, name: string, email: string, phone: string, is_active: number }> };

export type AddressKeySpecifier = ('address' | 'apartment_no' | 'area_id' | 'building_no' | 'city_id' | 'country_id' | 'floor_no' | 'formatted_address' | 'g_area_id' | 'g_city_id' | 'id' | 'landmark' | 'latitude' | 'longitude' | 'selected' | 'state_id' | 'title' | 'user_id' | 'verified' | 'zone_id' | AddressKeySpecifier)[];
export type AddressFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	apartment_no?: FieldPolicy<any> | FieldReadFunction<any>,
	area_id?: FieldPolicy<any> | FieldReadFunction<any>,
	building_no?: FieldPolicy<any> | FieldReadFunction<any>,
	city_id?: FieldPolicy<any> | FieldReadFunction<any>,
	country_id?: FieldPolicy<any> | FieldReadFunction<any>,
	floor_no?: FieldPolicy<any> | FieldReadFunction<any>,
	formatted_address?: FieldPolicy<any> | FieldReadFunction<any>,
	g_area_id?: FieldPolicy<any> | FieldReadFunction<any>,
	g_city_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	landmark?: FieldPolicy<any> | FieldReadFunction<any>,
	latitude?: FieldPolicy<any> | FieldReadFunction<any>,
	longitude?: FieldPolicy<any> | FieldReadFunction<any>,
	selected?: FieldPolicy<any> | FieldReadFunction<any>,
	state_id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	verified?: FieldPolicy<any> | FieldReadFunction<any>,
	zone_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryKeySpecifier = ('banner' | 'banner_img_ar' | 'banner_img_en' | 'banner_link_ar' | 'banner_link_en' | 'id' | 'level' | 'media_type' | 'meta_description_ar' | 'meta_description_en' | 'meta_description_waffar_ar' | 'meta_description_waffar_en' | 'meta_keyword_ar' | 'meta_keyword_en' | 'now_image' | 'parent_id' | 'products' | 'show' | 'slug' | 'title_ar' | 'title_en' | 'waffar_image' | CategoryKeySpecifier)[];
export type CategoryFieldPolicy = {
	banner?: FieldPolicy<any> | FieldReadFunction<any>,
	banner_img_ar?: FieldPolicy<any> | FieldReadFunction<any>,
	banner_img_en?: FieldPolicy<any> | FieldReadFunction<any>,
	banner_link_ar?: FieldPolicy<any> | FieldReadFunction<any>,
	banner_link_en?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	level?: FieldPolicy<any> | FieldReadFunction<any>,
	media_type?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_description_ar?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_description_en?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_description_waffar_ar?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_description_waffar_en?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_keyword_ar?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_keyword_en?: FieldPolicy<any> | FieldReadFunction<any>,
	now_image?: FieldPolicy<any> | FieldReadFunction<any>,
	parent_id?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	show?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	title_ar?: FieldPolicy<any> | FieldReadFunction<any>,
	title_en?: FieldPolicy<any> | FieldReadFunction<any>,
	waffar_image?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HelloResponseKeySpecifier = ('message' | HelloResponseKeySpecifier)[];
export type HelloResponseFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createReview' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createReview?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductKeySpecifier = ('alt_image' | 'barcode' | 'bigsave_discount' | 'brand_id' | 'bundle_tag' | 'canonical_tag' | 'category' | 'category_id' | 'center_pharmacy_id' | 'cost_price' | 'country_id' | 'coupon_description' | 'description' | 'discount' | 'discount_type' | 'flow_type' | 'gameball_points' | 'highlights_ar' | 'highlights_en' | 'id' | 'image' | 'is_outofstock' | 'level_one_id' | 'low_stock' | 'main_category_id' | 'max_quantity' | 'need_prescription' | 'not_return' | 'pharmacy_branch_id' | 'price' | 'purchase_count' | 'quantity' | 'reviews' | 'seller' | 'seller_name' | 'sku' | 'slug' | 'sorting' | 'status' | 'store_order_item_id' | 'title' | 'verified' | 'views' | ProductKeySpecifier)[];
export type ProductFieldPolicy = {
	alt_image?: FieldPolicy<any> | FieldReadFunction<any>,
	barcode?: FieldPolicy<any> | FieldReadFunction<any>,
	bigsave_discount?: FieldPolicy<any> | FieldReadFunction<any>,
	brand_id?: FieldPolicy<any> | FieldReadFunction<any>,
	bundle_tag?: FieldPolicy<any> | FieldReadFunction<any>,
	canonical_tag?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	category_id?: FieldPolicy<any> | FieldReadFunction<any>,
	center_pharmacy_id?: FieldPolicy<any> | FieldReadFunction<any>,
	cost_price?: FieldPolicy<any> | FieldReadFunction<any>,
	country_id?: FieldPolicy<any> | FieldReadFunction<any>,
	coupon_description?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	discount?: FieldPolicy<any> | FieldReadFunction<any>,
	discount_type?: FieldPolicy<any> | FieldReadFunction<any>,
	flow_type?: FieldPolicy<any> | FieldReadFunction<any>,
	gameball_points?: FieldPolicy<any> | FieldReadFunction<any>,
	highlights_ar?: FieldPolicy<any> | FieldReadFunction<any>,
	highlights_en?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	is_outofstock?: FieldPolicy<any> | FieldReadFunction<any>,
	level_one_id?: FieldPolicy<any> | FieldReadFunction<any>,
	low_stock?: FieldPolicy<any> | FieldReadFunction<any>,
	main_category_id?: FieldPolicy<any> | FieldReadFunction<any>,
	max_quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	need_prescription?: FieldPolicy<any> | FieldReadFunction<any>,
	not_return?: FieldPolicy<any> | FieldReadFunction<any>,
	pharmacy_branch_id?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	purchase_count?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	seller?: FieldPolicy<any> | FieldReadFunction<any>,
	seller_name?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	sorting?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	store_order_item_id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	verified?: FieldPolicy<any> | FieldReadFunction<any>,
	views?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('categories' | 'category' | 'hello' | 'product' | 'products' | 'user' | 'users' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	hello?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReviewKeySpecifier = ('comment' | 'id' | 'product_id' | 'user' | 'user_id' | ReviewKeySpecifier)[];
export type ReviewFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product_id?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('addresses' | 'birthday' | 'card_brand' | 'card_last_four' | 'city_id' | 'country_code' | 'country_id' | 'created_at' | 'credit_code' | 'current_country_id' | 'email' | 'fresh_chat_id' | 'fresh_chat_id_sa' | 'gender' | 'id' | 'image' | 'invited_user_id' | 'is_active' | 'is_verified' | 'meta_data' | 'name' | 'phone' | 'pm_last_four' | 'pm_type' | 'public_key' | 'register_way' | 'social_id' | 'social_image' | 'social_type' | 'stripe_id' | 'trial_ends_at' | 'type' | 'wallet' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	addresses?: FieldPolicy<any> | FieldReadFunction<any>,
	birthday?: FieldPolicy<any> | FieldReadFunction<any>,
	card_brand?: FieldPolicy<any> | FieldReadFunction<any>,
	card_last_four?: FieldPolicy<any> | FieldReadFunction<any>,
	city_id?: FieldPolicy<any> | FieldReadFunction<any>,
	country_code?: FieldPolicy<any> | FieldReadFunction<any>,
	country_id?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	credit_code?: FieldPolicy<any> | FieldReadFunction<any>,
	current_country_id?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	fresh_chat_id?: FieldPolicy<any> | FieldReadFunction<any>,
	fresh_chat_id_sa?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	invited_user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_active?: FieldPolicy<any> | FieldReadFunction<any>,
	is_verified?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_data?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	pm_last_four?: FieldPolicy<any> | FieldReadFunction<any>,
	pm_type?: FieldPolicy<any> | FieldReadFunction<any>,
	public_key?: FieldPolicy<any> | FieldReadFunction<any>,
	register_way?: FieldPolicy<any> | FieldReadFunction<any>,
	social_id?: FieldPolicy<any> | FieldReadFunction<any>,
	social_image?: FieldPolicy<any> | FieldReadFunction<any>,
	social_type?: FieldPolicy<any> | FieldReadFunction<any>,
	stripe_id?: FieldPolicy<any> | FieldReadFunction<any>,
	trial_ends_at?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	wallet?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WalletKeySpecifier = ('balance' | 'created_at' | 'id' | 'status' | 'user_id' | WalletKeySpecifier)[];
export type WalletFieldPolicy = {
	balance?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Address?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressKeySpecifier | (() => undefined | AddressKeySpecifier),
		fields?: AddressFieldPolicy,
	},
	Category?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryKeySpecifier | (() => undefined | CategoryKeySpecifier),
		fields?: CategoryFieldPolicy,
	},
	HelloResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HelloResponseKeySpecifier | (() => undefined | HelloResponseKeySpecifier),
		fields?: HelloResponseFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Product?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductKeySpecifier | (() => undefined | ProductKeySpecifier),
		fields?: ProductFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Review?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReviewKeySpecifier | (() => undefined | ReviewKeySpecifier),
		fields?: ReviewFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	Wallet?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WalletKeySpecifier | (() => undefined | WalletKeySpecifier),
		fields?: WalletFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;