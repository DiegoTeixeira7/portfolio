export interface LanguageSchema {
  value: string
  label: string
}

export interface MenuType {
  navItems: string[]
  button: string
}

export interface MenuLanguageType {
  menu: MenuType
}

export interface LanguagesType {
  [key: string]: {
    menu: MenuType
  }
}
