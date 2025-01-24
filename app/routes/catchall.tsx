import type { Route } from './+types/about'
// import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Not Found' },
    {
      name: 'description',
      content: 'Page not found.',
    },
  ]
}

export default function About() {
  return <div>Catchall</div>
}
