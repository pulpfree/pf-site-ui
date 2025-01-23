import { Link } from 'react-router'

import { Container, FadeIn, Logo } from './'

const navigation = [
  {
    title: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Process', href: '/process' },
      { title: 'Contact us', href: '/contact' },
    ],
  },
]

function Navigation() {
  return (
    <nav>
      <ul role='list' className='grid grid-cols-2 gap-8 sm:grid-cols-3'>
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className='font-display text-sm font-semibold tracking-wider text-slate-950'>
              {section.title}
            </div>
            <ul role='list' className='mt-4 text-sm text-neutral-700'>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className='mt-4'>
                  <Link to={link.href} className='transition hover:text-slate-950'>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Footer() {
  return (
    <Container as='footer' className='mt-24 w-full sm:mt-32 lg:mt-40'>
      <FadeIn>
        <div className='grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2'>
          <Navigation />
          <div className='flex lg:justify-end'>{/* <NewsletterForm /> */}</div>
        </div>
        <div className='mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12'>
          <Link to='/' aria-label='Home'>
            <Logo className='h-8' fillOnHover />
          </Link>
          <p className='text-sm text-neutral-700'>© Pulpfree Inc. {new Date().getFullYear()}</p>
        </div>
      </FadeIn>
    </Container>
  )
}
