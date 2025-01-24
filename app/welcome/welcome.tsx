import { Container, FadeIn, Services } from '../components'

export function Welcome() {
  return (
    <>
      <Container className='mt-24 sm:mt-32 md:mt-56'>
        <FadeIn className='max-w-3xl'>
          <h1 className='font-display text-5xl font-medium tracking-tight text-slate-950 [text-wrap:balance] sm:text-7xl'>
            Mobile and Web development studio.
          </h1>
          <p className='mt-6 text-xl text-neutral-600'>
            We are a development studio working at the intersection of design and technology. We
            help you identify, explore and respond to new opportunities. We believe in efficiency
            and maximizing our resources to provide the best value to our clients.
          </p>
        </FadeIn>
      </Container>
      <Services />
    </>
  )
}
