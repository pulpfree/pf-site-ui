import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

import { motion, MotionConfig, useReducedMotion } from 'framer-motion'

import { GridPattern, RootLayoutContext } from './'

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
      <path d='m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z' />
      <path d='M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z' />
    </svg>
  )
}

function RootLayoutInner({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest('a')?.href === window.location.href
      ) {
        setExpanded(false)
      }
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <header>
        <div
          className='absolute left-0 right-0 top-2 z-40 pt-14'
          aria-hidden={expanded ? 'true' : undefined}
          inert={expanded ? false : undefined}
        >
          <div>header</div>
        </div>
      </header>

      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className='relative flex flex-auto overflow-hidden bg-white pt-14'
      >
        <motion.div layout className='relative isolate flex w-full flex-col pt-9'>
          <GridPattern
            className='absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]'
            yOffset={-96}
            interactive
          />

          <main className='w-full flex-auto'>{children}</main>

          <footer>
            <div>footer</div>
          </footer>
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  // let pathname = usePathname()
  const location = useLocation()
  const [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={location.key}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}
