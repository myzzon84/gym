import { create } from 'zustand';

const appStore = create((set) => ({
    showMobileMenu: false,
    setShowMobileMenu: (bool) => set({showMobileMenu: bool}),
    showSearchInput: false,
    setShowSearchInput: (bool) => set({showSearchInput: bool}),
}));

export default appStore;