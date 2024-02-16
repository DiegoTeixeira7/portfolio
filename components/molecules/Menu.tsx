import Link from 'next/link'
import Image from 'next/image'
import '@/styles/components/molecules/Menu.scss'

import logo from '@/images/vercel.svg'
import Button from '@/components/atoms/Button'
import InputSelect from '../atoms/InputSelect'
import { usePortfolioStore } from '@/lib/store'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { languagesCurrent } from '@/data/menu'
import { LanguageSchema } from '@/interfaces/input'
import { MenuProps } from '@/interfaces/props'

const MainDataSchema = Yup.object().shape({
  language: Yup.string().required('Campo Obrigatório'),
})

export default function Menu({ textsMenu }: MenuProps) {
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
          {textsMenu.navItems[0]}
        </Link>
        <Link
          href="#about"
          className={navItem === 'about' ? 'item-nav-click' : ''}
          onClick={() => setNavItem('about')}
        >
          {textsMenu.navItems[1]}
        </Link>
        <Link
          href="#skills"
          className={navItem === 'skills' ? 'item-nav-click' : ''}
          onClick={() => setNavItem('skills')}
        >
          {textsMenu.navItems[2]}
        </Link>
        <Link
          href="#work"
          className={navItem === 'work' ? 'item-nav-click' : ''}
          onClick={() => setNavItem('work')}
        >
          {textsMenu.navItems[3]}
        </Link>
        <Link
          href="#experience"
          className={navItem === 'experience' ? 'item-nav-click' : ''}
          onClick={() => setNavItem('experience')}
        >
          {textsMenu.navItems[4]}
        </Link>
      </nav>

      <div>
        {languageCurrent && (
          <InputSelect
            options={languagesCurrent}
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
        <Button>{textsMenu.button}</Button>
      </div>
    </menu>
  )
}
