import User from "~~/graphql/queries/user.graphql";
import type { UserQuery } from "~~/generated/graphql";
import type { TabsItem } from "@nuxt/ui";

export const useUser = (selectedUser: UserQuery["user"]["id"]) => {
  // User Details Query
  const { result: data } = useQuery<UserQuery>(User, {
    id: selectedUser,
  });
  // Tabs
  const items = ref<TabsItem[]>([
    {
      label: "Details",
      icon: "i-lucide-user",
    },
    {
      label: "Wallets",
      icon: "i-lucide-wallet",
    },
    {
      label: "Addresses",
      icon: "i-lucide-map-pin",
    },
  ]);

  // User Details Card
  type DetailsRow = Array<{
    label: string;
    value: string | null | undefined;
  }[]>;

  const details = computed<DetailsRow>(() => {
    return [
        [{
          label: "Name",
          value: data.value?.user.name,
        },
        {
          label: "Email",
          value: data.value?.user.email,
        },
        {
          label: "Phone",
          value: data.value?.user.country_code + " " + data.value?.user.phone,
        },
        {
          label: "Gender",
          value: data.value?.user.gender === "male" ? "Male" : "Female",
        },
        {
          label: "Birthday",
          value: data.value?.user.birthday,
        },
        {
          label: "Is Active",
          value: data.value?.user.is_active ? "Active" : "Inactive",
        },
        {
          label: "Is Verified",
          value: data.value?.user.is_verified ? "Verified" : "Unverified",
        },
      ]];
  });
  const wallets = computed<DetailsRow>(() => {
    return data?.value?.user.wallet?.map((wallet) => {
      return [
        {
          label: "Balance",
          value: wallet.balance.toString(),
        },
        {
          label: "Status",
          value: wallet.status === 1 ? "Deposited" : "Withdrawn",
        },
        {
          label: "Created At",
          value: wallet.created_at,
        },
      ];
    }) || [];
  });
  const addresses = computed<DetailsRow>(() => {
    return data?.value?.user.addresses?.map((address) => {
      return [
        {
          label: "Address",
          value: address.address,
        },
        {
          label: "Building No",
          value: address.building_no,
        },
        {
          label: "Floor No",
          value: address.floor_no,
        },
        {
          label: "Apartment No",
          value: address.apartment_no,
        },
        {
          label: "Landmark",
          value: address.landmark,
        },
      ];
    }) || [];
  });

  return {
    items,
    details,
    wallets,
    addresses,
  };
};
