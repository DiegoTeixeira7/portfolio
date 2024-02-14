'use client'

import Link from 'next/link'
import Image from 'next/image'
import '@/styles/components/molecules/Menu.scss'

import logo from '@/images/vercel.svg'
import Button from '@/components/atoms/Button'
import InputSelect from '../atoms/InputSelect'
import { useState } from 'react'

export default function Menu() {
  const languages = [
    { value: 'PT-BR', label: 'PT' },
    { value: 'EN', label: 'EN' },
  ]

  const [item, setItem] = useState('')

  return (
    <menu>
      <Link href="/">
        <Image src={logo ?? ''} alt="Diego Queiroz"></Image>
      </Link>

      <nav>
        <Link
          href="#home"
          className={item === 'home' ? 'item-nav-click' : ''}
          onClick={() => setItem('home')}
        >
          Home
        </Link>
        <Link
          href="#about"
          className={item === 'about' ? 'item-nav-click' : ''}
          onClick={() => setItem('about')}
        >
          Sobre
        </Link>
        <Link
          href="#skills"
          className={item === 'skills' ? 'item-nav-click' : ''}
          onClick={() => setItem('skills')}
        >
          Habilidades
        </Link>
        <Link
          href="#work"
          className={item === 'work' ? 'item-nav-click' : ''}
          onClick={() => setItem('work')}
        >
          Trabalho
        </Link>
        <Link
          href="#experience"
          className={item === 'experience' ? 'item-nav-click' : ''}
          onClick={() => setItem('experience')}
        >
          Experiência
        </Link>
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
