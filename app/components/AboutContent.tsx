import { ContactSection, PageIntro } from '.'

export function AboutContent() {
  return (
    <>
      <PageIntro
        eyebrow='About us'
        title='Our strength is in our experience and attention to detail'
      >
        <p>Relying on our experience to deliver.</p>
        <div className='mt-10 max-w-2xl space-y-6 text-base'>
          <p>
            At Pulpfree, we are passionate about turning ideas into exceptional digital experiences.
            With years of experience in mobile and web application development, we have honed our
            craft to deliver solutions that are not only functional but also beautiful,
            user-friendly, and aligned with our clients&apos; goals.
          </p>
          <p>
            We believe that the smallest details make the biggest difference. From the seamless
            transitions of a user interface to the scalability of the backend infrastructure, we
            meticulously refine every aspect of our applications to ensure they perform flawlessly.
            This dedication to precision is at the heart of our development process, allowing us to
            build products that exceed expectations and create lasting value for our clients.
          </p>
          <p>
            Our portfolio spans diverse industries and challenges, showcasing our ability to adapt
            and innovate for unique needs. Whether it&apos;s a startup aiming to disrupt the market
            or an established business seeking to enhance its digital presence, we take pride in
            delivering tailored solutions that drive results.
          </p>
          <p>
            At Pulpfree, we don&apos;t just build apps — we craft experiences. Partner with us to
            transform your vision into a digital reality, supported by a team that values
            excellence, creativity, and attention to detail at every step.
          </p>
        </div>
      </PageIntro>

      <ContactSection />
    </>
  )
}
