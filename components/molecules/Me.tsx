import { MeProps } from '@/interfaces/props'
import '@/styles/components/molecules/Me.scss'
import Image from 'next/image'
import profile from '@/images/profile.webp'
import { useEffect } from 'react'

export default function Me({ textsMe }: MeProps) {
  const typeWriteH1 = (
    elementOne: HTMLElement,
    elementTwo: HTMLElement,
    elementThree: HTMLElement,
  ) => {
    // h1
    const textArrayOne = elementOne.innerHTML.split('')
    elementOne.innerHTML = ' '

    textArrayOne.forEach(function (letter: string, index: number) {
      setTimeout(function () {
        elementOne.innerHTML += letter
      }, 75 * index)
    })

    // esconder cursor
    setTimeout(function () {
      elementOne.classList.add('hide-cursor')

      typeWriteH2(elementTwo, elementThree)
    }, 75 * textArrayOne.length)
  }

  const typeWriteH2 = (elementTwo: HTMLElement, elementThree: HTMLElement) => {
    // h2
    elementTwo.style.visibility = 'visible'
    const textArrayTwo = elementTwo.innerHTML.split('')
    elementTwo.innerHTML = ' '

    textArrayTwo.forEach(function (letter: string, index: number) {
      setTimeout(function () {
        elementTwo.innerHTML += letter
      }, 75 * index)
    })

    // esconder cursor
    setTimeout(function () {
      elementTwo.classList.add('hide-cursor')

      typeWriteP(elementThree)
    }, 75 * textArrayTwo.length)
  }

  const typeWriteP = (elementThree: HTMLElement) => {
    // p
    elementThree.style.visibility = 'visible'
    const textArrayThree = elementThree.innerHTML.split('')
    elementThree.innerHTML = ' '

    textArrayThree.forEach(function (letter: string, index: number) {
      setTimeout(function () {
        elementThree.innerHTML += letter
      }, 75 * index)
    })

    // esconder cursor
    setTimeout(function () {
      elementThree.classList.add('hide-cursor')
    }, 75 * textArrayThree.length)
  }

  useEffect(() => {
    const h1 = document.querySelector('.typing-animation-one')
    const h2 = document.querySelector('.typing-animation-two')
    const p = document.querySelector('.typing-animation-three')

    if (
      h1 instanceof HTMLElement &&
      h2 instanceof HTMLElement &&
      p instanceof HTMLElement
    ) {
      typeWriteH1(h1, h2, p)
    }
  }, [])

  return (
    <section id="home">
      <div>
        <h1 className="typing-animation-one">{textsMe.titleH1}</h1>
        <h2 className="typing-animation-two">{textsMe.titleH2}</h2>
        <p className="typing-animation-three">{textsMe.description}</p>
      </div>
      <div>
        <Image
          onClick={() => {
            window.open('https://github.com/DiegoTeixeira7', '_blank')
          }}
          src={profile ?? ''}
          alt="Diego Queiroz"
        ></Image>
      </div>
    </section>
  )
}
