import {
  ContactSection,
  Container,
  FadeIn,
  PageIntro,
  TagList,
  TagListItem,
  StylizedImage,
} from '.'
import imageWhiteboard from '../images/whiteboard.jpg'
import imageLaptop from '../images/laptop.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className='group/section [counter-increment:section]'>
      <div className='lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20'>
        <div className='flex justify-center'>
          <FadeIn className='w-[33.75rem] flex-none lg:w-[45rem]'>
            <StylizedImage
              {...image}
              sizes='(min-width: 1024px) 41rem, 31rem'
              className='justify-center lg:justify-end lg:group-even/section:justify-start'
            />
          </FadeIn>
        </div>
        <div className='mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first'>
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-slate-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden='true'
            />
            <h2 className='mt-2 font-display text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl'>
              {title}
            </h2>
            <div className='mt-6'>{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title='Discover' image={{ src: imageWhiteboard }}>
      <div className='space-y-6 text-base text-neutral-600'>
        <p>
          We work closely with our clients to understand their{' '}
          <strong className='font-semibold text-slate-950'>needs</strong> and goals, embedding
          ourselves in their every day operations to understand what makes their business tick.
        </p>
        <p>
          We believe that understanding our clients’ objectives and needs is the cornerstone of
          delivering successful solutions. Our process begins with an in-depth discovery phase,
          where we engage in meaningful conversations to learn about your vision, goals, and
          challenges. This collaborative approach allows us to align our strategies with your unique
          requirements and ensures that every decision is informed by a clear understanding of your
          objectives.
        </p>
      </div>

      <h3 className='mt-12 font-display text-base font-semibold text-slate-950'>
        Included in this phase
      </h3>
      <TagList className='mt-4'>
        <TagListItem>In-depth interviews</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title='Build' image={{ src: imageLaptop, shape: 1 }}>
      <div className='space-y-6 text-base text-neutral-600'>
        <p>
          Based off of the discovery phase, we develop a roadmap and start working towards delivery.
        </p>
        <p>
          We use a combination of{' '}
          <strong className='font-semibold text-slate-950'>pre-built</strong> components and our own{' '}
          <strong className='font-semibold text-slate-950'>proprietary</strong> software to maximize
          development efficiency.
        </p>
      </div>
    </Section>
  )
}

export function ProcessContent() {
  return (
    <>
      <PageIntro eyebrow='Our process' title='How we work'>
        <p>
          We believe in maximizing our resources for efficiency and provide the best value to our
          clients. Our process is designed to deliver results.
        </p>
      </PageIntro>

      <div className='mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40'>
        <Discover />
        <Build />
        {/* <Deliver /> */}
      </div>

      {/* <Values /> */}

      <ContactSection />
    </>
  )
}
