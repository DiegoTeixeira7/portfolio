import Link from 'next/link'
import Image from 'next/image'
import '@/styles/components/molecules/Menu.scss'

import logo from '@/images/vercel.svg'

export default function Menu() {
  return (
    <menu>
      <Link href="/">
        <Image src={logo ?? ''} alt="Diego Queiroz"></Image>
      </Link>

      <nav>
        <Link href="#home">Home</Link>
        <Link href="#about">Sobre</Link>
        <Link href="#skills">Habilidades</Link>
        <Link href="#work">Trabalho</Link>
        <Link href="#experience">Experiência</Link>
        <Link href="#contact">Contate-me</Link>
      </nav>

      <div>
        <span>linguagem</span>
        <span>Modo</span>
      </div>
    </menu>
  )
}
