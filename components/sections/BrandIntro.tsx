'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, BusFront, Sparkles } from 'lucide-react'
import BrandLogo from '../BrandLogo'

const NAV_OFFSET = 96

export default function BrandIntro() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (!element) return

    const top = element.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
    window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative flex min-h-[94vh] items-center overflow-hidden pt-32 pb-16">
      <Image
        src="/images/tiny-leaders/hero-classroom.webp"
        alt="თაინი ლიდერსის ნათელი საგანმანათლებლო სივრცე"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/92 via-transparent to-white/24" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="mb-7 flex items-center gap-4">
            <BrandLogo priority />
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                ბავშვთა განვითარების თანამედროვე ცენტრი
              </p>
              <p className="mt-1 text-sm font-semibold text-muted">
                ერთ სივრცეში ზრუნვა, სწავლა, თერაპია და შემოქმედებითი გამოცდილება
              </p>
            </div>
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-none text-ink sm:text-6xl md:text-7xl lg:text-8xl">
            თაინი ლიდერსი
          </h1>

          <p className="mb-8 max-w-3xl text-xl font-semibold leading-relaxed text-ink/82 sm:text-2xl">
            ადგილი, სადაც ბავშვი თავს უსაფრთხოდ გრძნობს, იზრდება თავდაჯერებულად და
            ყოველდღე აღმოაჩენს ახალ შესაძლებლობას.
          </p>

          <div className="mb-10 flex max-w-3xl flex-wrap gap-3">
            {[
              'განვითარება',
              'აკადემიური მზადება',
              'თერაპიული მხარდაჭერა',
              'შემოქმედება',
              'ოჯახთან პარტნიორობა',
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/70 bg-white/82 px-4 py-2 text-sm font-bold text-ink shadow-sm backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-10 max-w-3xl rounded-xl border border-primary/20 bg-white/94 p-5 shadow-lg backdrop-blur"
          >
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-primary">ტრანსპორტირების სერვისი</p>
            <h3 className="mb-2 text-xl font-bold text-ink">უსაფრთხო ტრანსპორტირება</h3>
            <p className="mb-4 text-sm leading-relaxed text-muted sm:text-base">
              ჩვენი პროფესიონალი მძღოლები უზრუნველყოფენ უსაფრთხო და სანდო ტრანსპორტირებას, რათა ბავშვებისა და მშობლებისთვის
              ყოველდღიური გადაადგილება იყოს მარტივი და კომფორტული.
            </p>
            <button
              onClick={() => scrollToSection('#transportation-services')}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white hover:brightness-110"
            >
              სერვისის ნახვა
              <BusFront size={18} />
            </button>
          </motion.div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => scrollToSection('#about')}
              className="brand-button inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-bold"
            >
              გაიცანით თაინი ლიდერსი
              <Sparkles className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary bg-white/88 px-7 py-4 font-bold text-primary transition-colors hover:bg-mist"
            >
              ვიზიტის დაგეგმვა
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
