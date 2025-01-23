import { useEffect, useId, useRef, useState } from 'react'
import { useLocation } from 'react-router'

import { motion, MotionConfig, useReducedMotion } from 'framer-motion'

import { GridPattern, Footer, Header, MenuIcon, Navigation, RootLayoutContext } from './'

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
  const panelId = useId()
  const openRef = useRef<HTMLButtonElement>(null!)
  const closeRef = useRef<HTMLButtonElement>(null!)
  const navRef = useRef<React.ElementRef<'div'>>(null)
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
          <Header
            panelId={panelId}
            icon={MenuIcon}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={() => {
              setExpanded((expanded) => !expanded)
              window.setTimeout(() => closeRef.current?.focus({ preventScroll: true }))
            }}
          />
        </div>

        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? 'auto' : '0.5rem' }}
          className='relative z-50 overflow-hidden bg-slate-950 pt-2'
          aria-hidden={expanded ? undefined : 'true'}
          inert={expanded ? undefined : false}
        >
          <motion.div layout={true} className='bg-neutral-800'>
            <div ref={navRef} className='bg-slate-950 pb-16 pt-14'>
              <Header
                invert
                panelId={panelId}
                icon={XIcon}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={() => {
                  setExpanded((expanded) => !expanded)
                  window.setTimeout(() => openRef.current?.focus({ preventScroll: true }))
                }}
              />
            </div>
            <Navigation />
          </motion.div>
        </motion.div>
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

          <Footer />
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
