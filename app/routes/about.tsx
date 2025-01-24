import type { Route } from './+types/about'
import { AboutContent } from '../components'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'About Us' },
    {
      name: 'description',
      content:
        'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
    },
  ]
}

export default function About() {
  return <AboutContent />
}
