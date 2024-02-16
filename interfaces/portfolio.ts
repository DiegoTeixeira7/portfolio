export interface PortfolioSlice {
  navItem: string
  setNavItem: (navItem: string) => void
  languageCurrent: 'PT' | 'EN'
  setLanguageCurrent: (languageCurrent: string) => void
}
