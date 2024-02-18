import { LanguagesType } from '@/interfaces/language'

export const languages: LanguagesType = {
  PT: {
    menu: {
      navItems: ['Home', 'Sobre', 'Habilidades', 'Trabalho', 'Experiência'],
      button: 'Contate-me',
    },
    me: {
      titleH1: 'Olá, eu sou o',
      titleH2: 'Diego Queiroz',
      description:
        'Sou um desenvolvedor FullStack apaixonado por tecnologia, constantemente buscando evoluir e aprimorar minhas habilidades!',
    },
    about: {
      title: 'Sobre mim',
      description: 'Lorem ipsum',
    },
  },
  EN: {
    menu: {
      navItems: ['Home', 'About', 'Skills', 'Work', 'Experience'],
      button: 'Contact me',
    },
    me: {
      titleH1: "Hi, I'm",
      titleH2: 'Diego Queiroz',
      description:
        "I'm a FullStack developer passionate about technology, constantly seeking to evolve and improve my skills!",
    },
    about: {
      title: 'About me',
      description: 'Lorem ipsum',
    },
  },
}
