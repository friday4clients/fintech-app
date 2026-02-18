import { create } from "zustand";
import { persist } from "zustand/middleware"

export const useSidebarStore = create(persist((set) => ({
    isSidebarOpen: false,
    toggleSidebar: () => set((state: { isSidebarOpen: boolean; }) => ({ isSidebarOpen: !state.isSidebarOpen })),
}), {
    name: "sidebar",
    storage: localStorage,
}))