import type { Route } from './+types/about'
import { NotFound } from '../components'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Not Found' },
    {
      name: 'description',
      content: 'Page not found.',
    },
  ]
}

export default function Catchall() {
  return <NotFound />
}
