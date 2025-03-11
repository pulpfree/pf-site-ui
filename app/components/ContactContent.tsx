import { useEffect, useId, useState } from 'react'
import { useFetcher } from 'react-router'

import { Border, Button, Container, FadeIn, Offices, PageIntro, SocialMedia } from '.'

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

function TextInput({
  error,
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { error?: string; label: string }) {
  const id = useId()

  return (
    <div className='group relative z-0 transition-all focus-within:z-10'>
      <input
        type='text'
        id={id}
        {...props}
        placeholder=' '
        className='peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-slate-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl'
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-slate-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-slate-950 ${
          props.required
            ? 'after:content-["*"] after:text-2xl/3 after:ml-0.5 after:text-red-500'
            : ''
        }`}
      >
        {label}
      </label>
      {error && <p className='absolute left-6 bottom-1 text-xs/4 text-red-500'>{error}</p>}{' '}
    </div>
  )
}

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const fetcher = useFetcher()

  useEffect(() => {
    const isSuccess = fetcher.data?.success

    if (isSuccess) {
      scrollToTop()
      setStatus('success')
    } else if (fetcher.data?.errors) {
      setStatus('error')
      setErrors(fetcher.data.errors)
    }
  }, [fetcher.data])

  if (status === 'success') {
    return (
      <FadeIn className='lg:order-last'>
        <p className='text-xl text-slate-950 font-semibold'>
          Thanks for reaching out! We&apos;ll be in touch shortly.
        </p>
      </FadeIn>
    )
  }

  if (status === 'error' && errors['networkError']) {
    scrollToTop()
    return (
      <FadeIn className='lg:order-last'>
        <p className='text-xl text-slate-950 font-semibold'>
          There was an error submitting the form. Please try again.
        </p>
      </FadeIn>
    )
  }

  return (
    <FadeIn className='lg:order-last'>
      <fetcher.Form id='contact-form' method='post' onSubmit={() => setStatus('loading')}>
        <h2 className='font-display text-base font-semibold text-slate-950'>Work inquiries</h2>
        <div className='isolate mt-6 -space-y-px rounded-2xl bg-white/50'>
          <TextInput
            label='Name'
            name='name'
            autoComplete='name'
            required
            error={errors['name']}
            defaultValue='Test Dummy'
          />
          <TextInput
            label='Email'
            type='email'
            name='email'
            autoComplete='email'
            required
            error={errors['email']}
            defaultValue='ron@pulpfree.io'
          />
          <TextInput label='Company' name='company' autoComplete='organization' />
          <TextInput label='Phone' type='tel' name='phone' autoComplete='tel' />
          <TextInput
            label='Message'
            name='message'
            required
            error={errors['message']}
            defaultValue='some message here'
          />
        </div>
        <Button
          type='submit'
          className={`mt-10 ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={status === 'loading'}
        >
          Let&apos;s work together
        </Button>
      </fetcher.Form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className='font-display text-base font-semibold text-slate-950'>Our offices</h2>

      <Offices className='mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2' />

      <Border className='mt-16 pt-16'>
        <h2 className='font-display text-base font-semibold text-slate-950'>Follow us</h2>
        <SocialMedia className='mt-6' />
      </Border>
    </FadeIn>
  )
}

export function ContactContent() {
  return (
    <>
      <PageIntro eyebrow='Contact us' title="Let's work together">
        <p>We can&apos;t wait to hear from you.</p>
      </PageIntro>

      <Container className='mt-24 sm:mt-32 lg:mt-40'>
        <div className='grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2'>
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
