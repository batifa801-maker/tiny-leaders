'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { BookOpen, Music, Palette, Sparkles, Users } from 'lucide-react'

export default function CreativeStudios() {
  const studioCards = [
    {
      id: 'childrens-theater',
      title: 'ბავშვთა თეატრი',
      description:
        'თეატრალური აქტივობები ბავშვებს მეტყველების, ემოციის, წარმოსახვის, გუნდურობისა და სცენაზე თამამად დგომის უნარებს უძლიერებს.',
      points: ['როლური თამაშები', 'სცენური მეტყველება', 'მცირე წარმოდგენები'],
      icon: BookOpen,
    },
    {
      id: 'georgian-dance',
      title: 'ქართული ცეკვის სტუდია',
      description:
        'ქართული ცეკვის გაკვეთილები ავითარებს რიტმს, კოორდინაციას, დგომას, დისციპლინას და ქართულ კულტურულ ტრადიციასთან სიხარულით კავშირს.',
      points: ['რიტმი და მოძრაობა', 'კოორდინაცია', 'კულტურული გამოხატვა'],
      icon: Sparkles,
    },
  ]

  return (
    <section id="creative-studios" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">
              შემოქმედებითი პროგრამები
            </p>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-ink md:text-5xl">
              თეატრი, ქართული ცეკვა, მუსიკა და ხელოვნება თავდაჯერებულ გამოხატვას ავითარებს
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted">
              თაინი ლიდერსი ასევე არის შემოქმედებითი ხელოვნებისა და აქტივობების სივრცე.
              ბავშვები სწავლობენ იდეების გამოხატვას, ჯგუფში მუშაობას, ქართული კულტურის
              შეგრძნებას, სცენურ თავდაჯერებას და შემოქმედების სწავლებასთან დაკავშირებას.
            </p>

            <div className="space-y-5">
              {studioCards.map((card, index) => (
                <motion.div
                  id={card.id}
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="scroll-mt-28 rounded-lg border-2 border-brand-line bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                      <card.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-ink">{card.title}</h3>
                  </div>
                  <p className="mb-4 leading-relaxed text-muted">{card.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {card.points.map((point) => (
                      <span key={point} className="rounded-full bg-mist px-3 py-1 text-sm font-bold text-primary">
                        {point}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-lg shadow-2xl"
          >
            <Image
              src="/images/tiny-leaders/theater-dance.webp"
              alt="ბავშვთა თეატრი და ქართული ცეკვის სტუდია თაინი ლიდერსში"
              width={1536}
              height={864}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-full min-h-[520px] w-full object-cover"
            />
            <div className="grid grid-cols-2">
              <div className="bg-primary p-5 text-white">
                <Palette className="mb-2 h-7 w-7" />
                <p className="font-bold">შემოქმედებითი გამოხატვა</p>
              </div>
              <div className="bg-secondary p-5 text-ink">
                <Users className="mb-2 h-7 w-7" />
                <p className="font-bold">ჯგუფური თავდაჯერება</p>
              </div>
            </div>
            <div className="bg-ink p-5 text-white">
              <Music className="mb-2 h-7 w-7 text-secondary" />
              <p className="font-bold">მუსიკა, რიტმი, მოძრაობა და სცენური გამოცდილება</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
