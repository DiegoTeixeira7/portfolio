import { PortfolioSlice } from '@/interfaces/portfolio'
import { StateCreator } from 'zustand'

export const createPortfolioSlice: StateCreator<PortfolioSlice> = (
  set,
  get,
) => ({
  languageCurrent: 'EN',
  setLanguageCurrent: (languageCurrent: string) => {
    set({ languageCurrent })
  },
  navItem: '',
  setNavItem: (navItem: string) => {
    set({ navItem })
  },
})
