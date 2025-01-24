import type { Route } from './+types/about'
import { ProcessContent } from '../components'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Our Process' },
    {
      name: 'description',
      content:
        'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
    },
  ]
}

export default function About() {
  return <ProcessContent />
}
