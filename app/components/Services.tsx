import { Container, FadeIn, List, ListItem, SectionIntro, StylizedImage } from './'
import imageLaptop from '../images/laptop.jpg'

export function Services() {
  return (
    <>
      <SectionIntro
        eyebrow='Services'
        title='We help you identify, explore and respond to new opportunities.'
        className='mt-24 sm:mt-32 lg:mt-40'
      >
        <p>
          We provide innovative, user-friendly, and scalable digital solutions tailored to meet
          clients’ needs across various platforms and industries.
        </p>
      </SectionIntro>
      <Container className='mt-16'>
        <div className='lg:flex lg:items-center lg:justify-end'>
          <div className='flex justify-center lg:w-1/2 lg:justify-end lg:pr-12'>
            <FadeIn className='w-[33.75rem] flex-none lg:w-[45rem]'>
              <StylizedImage
                src={imageLaptop}
                sizes='(min-width: 1024px) 41rem, 31rem'
                className='justify-center lg:justify-end'
              />
            </FadeIn>
          </div>
          <List className='mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4'>
            <ListItem title='Web application development'>
              We design, build, and maintain responsive and interactive web applications tailored to
              meet specific business goals and user needs. These services typically include
              front-end and back-end development, integration with databases and APIs, and ongoing
              support to ensure seamless performance and scalability.
            </ListItem>
            <ListItem title='Mobile Application development'>
              Our mobile app development services focus on creating intuitive, high-performance apps
              for iOS and Android platforms that cater to specific user and business requirements.
              These services include UI/UX design, cross-platform development, app testing, and
              ongoing support to ensure optimal functionality and user satisfaction.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}
