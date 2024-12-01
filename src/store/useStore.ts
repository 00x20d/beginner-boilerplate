import { create } from "zustand";

interface StoreState {
  greeting: string;
  isLoading: boolean;
  theme: "light" | "dark";
}

interface StoreActions {
  setGreeting: (greeting: string) => void;
  setIsLoading: (isLoading: boolean) => void;
  toggleTheme: () => void;
}

export const useStore = create<StoreState & StoreActions>((set) => ({
  // Initial state
  greeting: "Hello",
  isLoading: false,
  theme: "light",

  // Actions
  setGreeting: (greeting) => set({ greeting }),
  setIsLoading: (isLoading) => set({ isLoading }),
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
}));
