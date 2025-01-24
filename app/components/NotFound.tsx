import { Link } from 'react-router'
import { Container, FadeIn } from './'

export function NotFound() {
  return (
    <Container className='mt-24 sm:mt-32 md:mt-56'>
      <FadeIn className='max-w-3xl'>
        <h1 className='font-display text-5xl font-medium tracking-tight text-slate-950 [text-wrap:balance] sm:text-7xl'>
          Page not found
        </h1>
        <p className='mt-6 text-xl text-neutral-600'>
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or
          deleted.
        </p>
        <div className='mt-8'>
          <Link
            to='/'
            className='rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-700'
          >
            Go back home
          </Link>
        </div>
      </FadeIn>
    </Container>
  )
}
