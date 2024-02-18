import { AboutProps } from '@/interfaces/props'
// import '@/styles/components/molecules/About.scss'

export default function About({ textsAbout }: AboutProps) {
  return (
    <section id="about">
      <h3>{textsAbout.title}</h3>
      <p>{textsAbout.description}</p>
    </section>
  )
}
