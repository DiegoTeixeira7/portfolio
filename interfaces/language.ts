export interface LanguageSchema {
  value: string
  label: string
}

export interface LanguagesType {
  [key: string]: {
    menu: {
      navItems: string[]
      button: string
    }
  }
}
