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
  const { language, setLanguage } = usePortfolioStore()

  const [item, setItem] = useState('')

  const onSubmit = () => {
    //
  }

  const formik = useFormik<LanguageSchema>({
    initialValues: {
      language: '',
    },
    validationSchema: MainDataSchema,
    onSubmit,
    validateOnChange: false,
  })

  useEffect(() => {
    formik.setFieldValue('language', language)
  }, [language])

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
        {language && (
          <InputSelect
            options={languages}
            name="language"
            id="language"
            value={formik.values.language}
            error={formik.errors.language}
            onChange={(e) => {
              formik.handleChange(e)
              setLanguage(e.target.value)
            }}
          />
        )}
        <Button>Contate-me</Button>
      </div>
    </menu>
  )
}
