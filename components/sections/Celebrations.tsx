'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, Heart, Sparkles, Star } from 'lucide-react'

export default function Celebrations() {
  const eventPoints = [
    {
      icon: Calendar,
      title: 'დღესასწაულების აღნიშვნა',
      description: 'ბავშვები მთელი წლის განმავლობაში მონაწილეობენ სეზონურ, კულტურულ და თემატურ აქტივობებში.',
    },
    {
      icon: Sparkles,
      title: 'დიდი წლიური წარმოდგენები',
      description: 'თეატრი, სიმღერები, ცეკვა და შემოქმედებითი პროექტები ბავშვებს ამაყ სცენურ გამოცდილებას აძლევს.',
    },
    {
      icon: Heart,
      title: 'ოჯახური ღონისძიებები',
      description: 'ვქმნით თბილ მომენტებს, სადაც მშობლებს შეუძლიათ დაინახონ ბავშვის ზრდა, გამოსვლა და საერთო სიხარული.',
    },
    {
      icon: Star,
      title: 'ბავშვთა ფესტივალები',
      description: 'ფესტივალის ტიპის ღონისძიებები ავითარებს სიხარულს, გამბედაობას, კრეატიულობას, მეგობრობას და ერთობას.',
    },
  ]

  return (
    <section id="celebrations" className="bg-gradient-to-b from-sun-wash to-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">
              ღონისძიებები და ზეიმები
            </p>
            <h2 className="mb-5 text-4xl font-bold text-ink md:text-5xl">
              შინაარსიანი ღონისძიებები სწავლას საერთო მოგონებებად აქცევს
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted">
              თაინი ლიდერსი აწყობს დღესასწაულებს, ოჯახურ ღონისძიებებს, დიდ წლიურ
              წარმოდგენებს და ბავშვთა ფესტივალებს, რომლებიც თავდაჯერებას, შემოქმედებას
              და ურთიერთობას აძლიერებს.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-lg shadow-2xl"
            >
              <Image
                src="/images/tiny-leaders/celebrations.webp"
                alt="თაინი ლიდერსის ღონისძიებები და ზეიმები ბავშვებისა და ოჯახებისთვის"
                width={1536}
                height={864}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="h-full min-h-[480px] w-full object-cover"
              />
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {eventPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-lg border-2 border-white bg-white/90 p-6 shadow-sm backdrop-blur"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/20">
                    <point.icon className="h-6 w-6 text-secondary-strong" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-ink">{point.title}</h3>
                  <p className="leading-relaxed text-muted">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
