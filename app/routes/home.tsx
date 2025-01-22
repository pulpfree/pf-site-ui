import type { Route } from './+types/home'
import { Welcome } from '../welcome/welcome'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Pulpfree - Developer studio based in Canada' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function Home() {
  return <Welcome />
}
