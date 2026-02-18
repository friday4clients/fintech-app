import { create } from "zustand";
import { persist } from "zustand/middleware"

interface SidebarState {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    setSidebarOpen: (isOpen: boolean) => void;
}

export const useSidebarStore = create<SidebarState>()(persist((set) => ({
    isSidebarOpen: true,
    toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
    setSidebarOpen: (isOpen) => set({ isSidebarOpen: isOpen }),
}), {
    name: "sidebar",
    partialize: (state) => ({
        isSidebarOpen: state.isSidebarOpen,
    }),
}))