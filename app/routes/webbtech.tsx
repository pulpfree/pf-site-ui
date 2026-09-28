import type { Route } from '../+types/root'
import { WebbtechContent } from '../components'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Webbtech Redirect' },
    {
      name: 'description',
      content: 'Redirect from Webbtech',
    },
  ]
}

export default function Webbtech() {
  return <WebbtechContent />
}
