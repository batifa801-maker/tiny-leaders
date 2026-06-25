'use client'

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import BrandLogo from './BrandLogo'

const navItems = [
  { name: 'საათობრივი ზრუნვა', id: '#flexible-childcare' },
  { name: 'მთავარი', id: '#home' },
  { name: 'ჩვენ შესახებ', id: '#about' },
  { name: 'საბავშვო ბაღის პროგრამები', id: '#programs' },
  { name: 'დაწყებითი სკოლის მომზადება', id: '#elementary-preparation' },
  { name: 'თერაპიული სერვისები', id: '#therapy' },
  { name: 'უსაფრთხო ტრანსპორტირება', id: '#transportation-services' },
  { name: 'აქტივობები და ღონისძიებები', id: '#activities' },
  { name: 'ბავშვთა თეატრი', id: '#childrens-theater' },
  { name: 'ქართული ცეკვის სტუდია', id: '#georgian-dance' },
  { name: 'გალერეა', id: '#gallery' },
  { name: 'კონტაქტი', id: '#contact' },
]

const NAV_OFFSET = 96

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = useCallback((id: string) => {
    const element = document.querySelector(id)

    if (!element) {
      return false
    }

    const top = element.getBoundingClientRect().top + window.scrollY - NAV_OFFSET

    window.scrollTo({
      top: Math.max(top, 0),
      behavior: 'smooth',
    })

    setIsMobileMenuOpen(false)
    return true
  }, [])

  const scrollToHashTarget = useCallback(() => {
    const hash = window.location.hash
    if (!hash) return

    const id = hash.startsWith('#') ? hash : `#${hash}`
    let tries = 0
    const maxTries = 25

    const tryScroll = () => {
      const found = scrollToSection(id)

      if (!found && tries < maxTries) {
        tries += 1
        setTimeout(tryScroll, 120)
      }
    }

    setTimeout(tryScroll, 20)
  }, [scrollToSection])

  useEffect(() => {
    document.body.classList.add('motion-ready')

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setIsMobileMenuOpen((open) => (open ? false : open))
    }

    const handleHashScroll = () => {
      scrollToHashTarget()
    }

    handleHashScroll()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('hashchange', handleHashScroll)
    window.addEventListener('load', handleHashScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', handleHashScroll)
      window.removeEventListener('load', handleHashScroll)
      document.body.classList.remove('motion-ready')
    }
  }, [scrollToHashTarget])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-brand-line bg-white/95 shadow-lg backdrop-blur-md'
          : 'border-b border-white/70 bg-white/82 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex min-h-20 items-center justify-between gap-4 py-2">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex min-w-fit items-center gap-2 text-left"
            onClick={() => scrollToSection('#home')}
            aria-label="თაინი ლიდერსის მთავარი გვერდი"
          >
            <BrandLogo priority variant="nav" />
            <div className="hidden sm:block">
              <h1 className="brand-rainbow-text text-xl font-bold">თაინი ლიდერსი</h1>
              <p className="max-w-44 text-xs font-medium leading-snug text-muted">
                განათლების, განვითარების და სასკოლო მომზადების ცენტრი
              </p>
            </div>
          </motion.button>

          <div className="hidden flex-1 flex-wrap items-center justify-center gap-x-2 gap-y-1 xl:flex">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollToSection(item.id)}
                className="rounded-full px-2.5 py-2 text-xs font-bold leading-tight text-ink transition-colors hover:bg-mist hover:text-primary"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollToSection('#contact')}
            className="brand-button hidden min-w-fit rounded-full px-5 py-2.5 text-sm font-bold xl:inline-flex"
          >
            ჩაწერა
          </motion.button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-ink transition-colors hover:bg-mist xl:hidden"
            aria-label="ნავიგაციის მენიუ"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-brand-line bg-white/97 xl:hidden"
          >
            <div className="container mx-auto grid gap-1 px-4 py-4 sm:grid-cols-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full rounded-lg px-4 py-3 text-left font-semibold text-ink transition-colors hover:bg-mist"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
