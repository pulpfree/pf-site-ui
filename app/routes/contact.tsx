import type { Route } from './+types/contact'
import { z } from 'zod'
// import { data } from 'react-router'

import { ContactContent } from '../components'

const schema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
})

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Contact Us' },
    {
      name: 'description',
      content: "Let's work together. We can't wait to hear from you.",
    },
  ]
}

export async function clientAction({
  // params,
  request,
}: {
  params: Record<string, string>
  request: Request
}) {
  await new Promise((res) => setTimeout(res, 1000))
  const formData = await request.formData()
  const contactInfo = Object.fromEntries(formData)
  // const errors: { email?: string; name?: string } = {}

  try {
    schema.parse(contactInfo)
    return { success: true }
  } catch (err: unknown) {
    if (err instanceof z.ZodError) {
      const fieldErrors = err.flatten().fieldErrors
      const errors = Object.entries(fieldErrors).reduce(
        (acc, [key, messages]) => {
          acc[key] = messages?.join(', ') || ''
          return acc
        },
        {} as Record<string, string>,
      )
      return { errors }
    }
    /* if (err instanceof z.ZodError) {
      const errors = err.flatten().fieldErrors
      return { errors }
    } */
    // return { errors }
  }

  console.log('contactInfo', contactInfo)
  // console.log('params', params)

  // errors.email = 'Invalid email address'
  // errors.name = 'Name is required'
  // console.log('errors: ', errors)
  // return data({ errors }, { status: 400 })
  return { success: true }
}

export default function Contact() {
  return <ContactContent />
}
