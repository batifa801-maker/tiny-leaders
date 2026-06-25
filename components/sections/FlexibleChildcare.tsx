'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Briefcase,
  Calendar,
  Clock,
  ShoppingBag,
  Users,
} from 'lucide-react'

const careOptions = [
  '1-საათიანი ზრუნვა',
  '2-საათიანი ზრუნვა',
  '3-საათიანი ზრუნვა',
  'ნახევარი დღე',
  'გახანგრძლივებული ზრუნვა',
]

const activities = [
  'ასაკზე მორგებული აქტივობები',
  'საგანმანათლებლო თამაშები',
  'შემოქმედებითი პროექტები',
  'ზედამხედველობით თამაში',
]

const parentNeeds = [
  {
    icon: Briefcase,
    label: 'სამუშაო',
  },
  {
    icon: Calendar,
    label: 'ვიზიტები',
  },
  {
    icon: Users,
    label: 'შეხვედრები',
  },
  {
    icon: ShoppingBag,
    label: 'საყიდლები',
  },
]

export default function FlexibleChildcare() {
  return (
    <section id="flexible-childcare" className="bg-gradient-to-b from-mist to-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">
                მოქნილი ზრუნვა დაკავებული ოჯახებისთვის
              </p>
              <h2 className="text-4xl font-bold leading-tight text-ink md:text-5xl">
                მოქნილი ზრუნვის სერვისები
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-muted">
              დაკავებულ მშობლებს შეუძლიათ ბავშვი მცირე დროით უსაფრთხო და მზრუნველ გარემოში
              დატოვონ, სანამ საქმეს, ვიზიტებს, შეხვედრებს, საყიდლებს ან ყოველდღიურ
              პასუხისმგებლობებს მიხედავენ.
            </p>
          </div>

          <div className="mb-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-lg bg-gradient-to-br from-primary via-accent to-leaf p-8 text-white shadow-xl md:p-10"
            >
              <div className="relative mb-6 h-48 overflow-hidden rounded-lg border border-white/24">
                <Image
                  src="/images/tiny-leaders/flexible-care.webp"
                  alt="საათობრივი ზრუნვის თბილი გარემო"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/52 to-transparent" />
              </div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-white/18">
                <Clock className="h-9 w-9 text-secondary" />
              </div>
              <h3 className="mb-4 text-3xl font-bold">საათობრივი ზრუნვა</h3>
              <p className="mb-6 text-lg leading-relaxed text-white/90">
              გჭირდებათ რამდენიმე საათი საქმეებისთვის ან სამუშაოსთვის? თაინი ლიდერსი გთავაზობთ
                მოქნილ საათობრივ ზრუნვას უსაფრთხო, საგანმანათლებლო და თბილ გარემოში.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {careOptions.map((option) => (
                  <div
                    key={option}
                    className="rounded-lg border border-white/24 bg-white/14 px-4 py-3 font-bold text-white"
                  >
                    {option}
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              className="rounded-lg border-2 border-brand-line bg-white p-7 shadow-lg md:p-8"
            >
              <div className="relative mb-6 h-48 overflow-hidden rounded-lg">
                <Image
                  src="/images/tiny-leaders/learning-program.webp"
                  alt="მზრუნველი ყოველდღიური აქტივობები თაინი ლიდერსში"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-ink">
                პროფესიული ზრუნვა თაინი ლიდერსის სითბოთი
              </h3>
              <p className="mb-6 leading-relaxed text-muted">
                ბავშვები დროის განმავლობაში ერთვებიან ასაკზე მორგებულ, შინაარსიან აქტივობებში.
                თითოეული მოკლე ვიზიტი იმართება მზრუნველი პროფესიონალების მეთვალყურეობით, რომ
                ბავშვი იყოს დაცული, დაკავებული და მშვიდად.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {activities.map((activity) => (
                  <div key={activity} className="rounded-lg bg-mist px-4 py-3 font-bold text-ink">
                    {activity}
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-4">
                {parentNeeds.map((need) => (
                  <div
                    key={need.label}
                    className="flex items-center justify-center gap-2 rounded-lg bg-sun-wash px-3 py-3 text-sm font-bold text-ink"
                  >
                    <need.icon className="h-4 w-4 text-primary" />
                    {need.label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
