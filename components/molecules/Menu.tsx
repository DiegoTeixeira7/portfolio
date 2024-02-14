import Link from 'next/link'
import Image from 'next/image'
import '@/styles/components/molecules/Menu.scss'

import logo from '@/images/vercel.svg'
import Button from '@/components/atoms/Button'
import InputSelect from '../atoms/InputSelect'

export default function Menu() {
  const languages = [
    { value: 'PT-BR', label: 'PT' },
    { value: 'EN', label: 'EN' },
  ]

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
      </nav>

      <div>
        <InputSelect
          options={languages}
          name="language"
          id="language"
          // value={language}
          // onChange={(e) => {}}
        />
        <Button>Contate-me</Button>
      </div>
    </menu>
  )
}
