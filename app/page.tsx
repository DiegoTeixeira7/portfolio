'use client'

import About from '@/components/molecules/About'
import Me from '@/components/molecules/Me'
import Menu from '@/components/molecules/Menu'
import { languages } from '@/data/languages'
import { LanguageType } from '@/interfaces/language'
import { usePortfolioStore } from '@/lib/store'
import { useEffect, useState } from 'react'

export default function Home() {
  const { languageCurrent } = usePortfolioStore()
  const [isClient, setIsClient] = useState(false)
  const [texts, setTexts] = useState<LanguageType>(languages.EN)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    setTexts(languages[languageCurrent])
  }, [languageCurrent])

  return (
    <>
      {isClient && (
        <>
          <Menu textsMenu={texts.menu} />
          <Me textsMe={texts.me} />
          <About textsAbout={texts.about} />
        </>
      )}
    </>
  )
}
