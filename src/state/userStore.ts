// store/userStore.ts
import { create } from "zustand";

interface UserState {
  name: string;
  setUsername: (name: string) => void;
  reset: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  name: "",
  setUsername: (name) => set({ name: name }),
  reset: () => set({ name: "" }),
}));
