import { Link } from 'react-router'
import { Container, FadeIn } from '.'

export function WebbtechContent() {
  return (
    <Container className='mt-24 sm:mt-32 md:mt-56'>
      <FadeIn className='max-w-3xl'>
        <h1 className='font-display text-3xl font-medium tracking-tight text-slate-950 [text-wrap:balance] sm:text-5xl'>
          Webbtech Redirect
        </h1>
        <p className='mt-6 text-xl text-neutral-600'>Hey... why am I here?</p>
        <p className='mt-6 text-xl text-neutral-600'>
          As a result of the rebranding of <span className='font-semibold'>Webbtech</span> to {` `}
          <span className='font-semibold'>Pulpfree</span>, the Webbtech website has been taken down
          and you&apos;ve been redirected here.
        </p>
        <div className='mt-8'>
          <Link
            to='/'
            className='rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-700'
          >
            Home
          </Link>
        </div>
      </FadeIn>
    </Container>
  )
}
