'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, CalendarDays, Sparkles, X } from 'lucide-react'

const NAV_OFFSET = 96

export default function LaunchInvitation() {
  const [isVisible, setIsVisible] = useState(true)

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (!element) return

    const top = element.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
    window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' })
    setIsVisible(false)
  }

  useEffect(() => {
    const hideOnScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false)
      }
    }

    if (isVisible) {
      window.addEventListener('scroll', hideOnScroll, { passive: true })
      return () => window.removeEventListener('scroll', hideOnScroll)
    }

    return undefined
  }, [isVisible])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          aria-label="თაინი ლიდერსის ვიზიტის მოწვევა"
          initial={{ opacity: 0, y: 34, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ delay: 0.72, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none relative z-40 mb-8 px-3 sm:px-5"
        >
          <div className="launch-invitation pointer-events-auto mx-auto grid max-w-5xl gap-4 overflow-hidden rounded-lg border border-white/80 bg-white/94 p-3 shadow-2xl backdrop-blur-xl sm:p-4 md:grid-cols-[11rem_1fr_auto] md:items-center">
            <div className="relative hidden h-32 overflow-hidden rounded-lg md:block">
              <Image
                src="/images/tiny-leaders/flexible-care.webp"
                alt="თაინი ლიდერსის თბილი საბავშვო სივრცე"
                fill
                sizes="11rem"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/44 to-transparent" />
              <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/88 px-2.5 py-1 text-xs font-bold text-primary shadow-sm">
                <Sparkles className="h-3.5 w-3.5" />
                ვიზიტი
              </div>
            </div>

            <div className="min-w-0 px-1 sm:px-2">
              <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-mist px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                თაინი ლიდერსი
              </p>
              <h2 className="text-xl font-bold leading-tight text-ink sm:text-2xl">
                კეთილი იყოს თქვენი მობრძანება თაინი ლიდერსში
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                თბილი, თანამედროვე და შემოქმედებითი სივრცე ბავშვის ყოველდღიური
                ზრდისა და თავდაჯერებისთვის.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row md:flex-col">
              <button
                onClick={() => scrollToSection('#contact')}
                className="brand-button inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold"
              >
                ვიზიტის დაგეგმვა
                <CalendarDays className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollToSection('#gallery')}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary bg-white px-5 py-3 text-sm font-bold text-primary transition-colors hover:bg-mist"
              >
                გარემოს ნახვა
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              aria-label="მოწვევის დახურვა"
              className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm transition-colors hover:bg-mist"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
