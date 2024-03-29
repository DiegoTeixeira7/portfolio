export interface LanguageSchema {
  value: string
  label: string
}

export interface MenuType {
  navItems: string[]
  button: string
}

export interface MeType {
  titleH1: string
  titleH2: string
  description: string
}

export interface AboutType {
  title: string
  description: string
}

export interface LanguageType {
  menu: MenuType
  me: MeType
  about: AboutType
}
export interface LanguagesType {
  [key: string]: {
    menu: MenuType
    me: MeType
    about: AboutType
  }
}
