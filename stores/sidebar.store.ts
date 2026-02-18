import { create } from "zustand";
import { persist } from "zustand/middleware"

interface SidebarState {
    isSidebarOpen: boolean;
    _hasHydrated: boolean;
    toggleSidebar: () => void;
    setSidebarOpen: (isOpen: boolean) => void;
    setHasHydrated: (state: boolean) => void;
}

export const useSidebarStore = create<SidebarState>()(persist((set) => ({
    isSidebarOpen: true,
    _hasHydrated: false,
    toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
    setSidebarOpen: (isOpen) => set({ isSidebarOpen: isOpen }),
    setHasHydrated: (state) => set({ _hasHydrated: state }),
}), {
    name: "sidebar",
    onRehydrateStorage: (state) => {
        return () => state?.setHasHydrated(true)
    },
    partialize: (state) => ({
        isSidebarOpen: state.isSidebarOpen,
    }),
}))