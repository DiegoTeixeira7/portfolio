import { PortfolioSlice } from '@/interfaces/portfolio'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { createPortfolioSlice } from './slices/portfolioSlice'

type StoreState = PortfolioSlice

export const usePortfolioStore = create<StoreState>()(
  persist(
    (...a) => ({
      ...createPortfolioSlice(...a),
    }),
    { name: '@Portfolio' },
  ),
)
