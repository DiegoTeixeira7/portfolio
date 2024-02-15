'use client'

import Link from 'next/link'
import Image from 'next/image'
import '@/styles/components/molecules/Menu.scss'

import logo from '@/images/vercel.svg'
import Button from '@/components/atoms/Button'
import InputSelect from '../atoms/InputSelect'
import { useEffect, useState } from 'react'
import { usePortfolioStore } from '@/lib/store'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { languages } from '@/data/menu'
import { LanguageSchema } from '@/interfaces/input'

const MainDataSchema = Yup.object().shape({
  language: Yup.string().required('Campo Obrigatório'),
})

export default function Menu() {
  const { navItem, languageCurrent, setLanguageCurrent, setNavItem } =
    usePortfolioStore()

  const onSubmit = () => {
    //
  }

  const formik = useFormik<LanguageSchema>({
    initialValues: {
      language: languageCurrent,
    },
    validationSchema: MainDataSchema,
    onSubmit,
    validateOnChange: false,
  })

  useEffect(() => {
    formik.setFieldValue('language', languageCurrent)
  }, [languageCurrent])

  return (
    <menu>
      <Link href="/">
        <Image src={logo ?? ''} alt="Diego Queiroz"></Image>
      </Link>

      <nav>
        <Link
          href="#home"
          className={navItem === 'home' ? 'item-nav-click' : ''}
          onClick={() => setNavItem('home')}
        >
          Home
        </Link>
        <Link
          href="#about"
          className={navItem === 'about' ? 'item-nav-click' : ''}
          onClick={() => setNavItem('about')}
        >
          Sobre
        </Link>
        <Link
          href="#skills"
          className={navItem === 'skills' ? 'item-nav-click' : ''}
          onClick={() => setNavItem('skills')}
        >
          Habilidades
        </Link>
        <Link
          href="#work"
          className={navItem === 'work' ? 'item-nav-click' : ''}
          onClick={() => setNavItem('work')}
        >
          Trabalho
        </Link>
        <Link
          href="#experience"
          className={navItem === 'experience' ? 'item-nav-click' : ''}
          onClick={() => setNavItem('experience')}
        >
          Experiência
        </Link>
      </nav>

      <div>
        {languageCurrent && (
          <InputSelect
            options={languages}
            name="language"
            id="language"
            value={formik.values.language}
            error={formik.errors.language}
            onChange={(e) => {
              formik.handleChange(e)
              setLanguageCurrent(e.target.value)
            }}
          />
        )}
        <Button>Contate-me</Button>
      </div>
    </menu>
  )
}
