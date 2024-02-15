import { PortfolioSlice } from '@/interfaces/portfolio'
import { StateCreator } from 'zustand'

export const createPortfolioSlice: StateCreator<PortfolioSlice> = (
  set,
  get,
) => ({
  language: '',
  setLanguage: (language: string) => {
    set({ language })
  },
})
