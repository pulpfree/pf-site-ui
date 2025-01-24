import type { Route } from './+types/home'
import { Welcome } from '../welcome/welcome'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Pulpfree - Developer studio based in Canada' },
    {
      name: 'description',
      content: 'We are a development studio working at the intersection of design and technology.',
    },
  ]
}

export default function Home() {
  return <Welcome />
}
