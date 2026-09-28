import type { Route } from './+types/contact'
import { z } from 'zod'

import { ContactContent } from '../components'
import { detectEnv } from '../../utils/environment'

// Keep in sync with MinFormElapsedMs in pf-site-contact-api
const MIN_FORM_ELAPSED_MS = 3000

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 20 characters'),
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
  // await new Promise((res) => setTimeout(res, 1000))
  const formData = await request.formData()
  const { website, renderedAt, ...contactInfo } = Object.fromEntries(formData)
  const { apiBaseUrl } = detectEnv()

  // Bot check: honeypot filled or submitted faster than a human could type.
  // Pretend it worked so the bot doesn't adapt. The API repeats this check.
  const elapsedMs = Number(renderedAt) ? Date.now() - Number(renderedAt) : 0
  if (website || elapsedMs < MIN_FORM_ELAPSED_MS) {
    return { success: true }
  }

  try {
    schema.parse(contactInfo)
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
  }
  try {
    const response = await fetch(apiBaseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...contactInfo, elapsedMs }),
    })
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    // const data = await response.json()
    // console.log('Success:', data)
    return { success: true }
  } catch (error) {
    console.error('Error:', error)
    const errors = { networkError: 'Failed to send contact info' }
    return { success: false, errors }
  }
}

export default function Contact() {
  return <ContactContent />
}
