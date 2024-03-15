import type {} from "@redux-devtools/extension";

import { devtools, persist } from "zustand/middleware";

import { create } from "zustand";

interface BearState {
  access: boolean;
  isAdmin: (key: string) => void;
}

export const useAdminStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        access: false,
        isAdmin: (key: string) => {
          const newKey = key;
          const rightKey = process.env.NEXT_PUBLIC_SECRET_KEY_ADMIN!;
          if (newKey === rightKey) {
            set({ access: true });
          } else {
            set({ access: false });
          }
        },
      }),
      {
        name: "admin-store",
      }
    )
  )
);
