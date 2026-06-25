'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, Shield, Sparkles, Target, Users } from 'lucide-react'

export default function TherapyServices() {
  const services = [
    'სენსორული თერაპია',
    'სენსორული მასაჟი',
    'ფსიქოთერაპია',
    'ქცევითი თერაპია',
    'ინდივიდუალური განვითარების დაგეგმვა',
    'პროფესიული შეფასება და რეკომენდაციები',
  ]

  const highlights = [
    { icon: Shield, title: 'უსაფრთხო თერაპიული გარემო' },
    { icon: Users, title: 'კვალიფიციური სპეციალისტები' },
    { icon: Heart, title: 'მშვიდი და მზრუნველი მიდგომა' },
    { icon: Sparkles, title: 'ინდივიდუალური მხარდაჭერის გეგმა' },
  ]

  return (
    <section id="therapy" className="bg-ink py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-lg shadow-2xl"
          >
            <Image
              src="/images/tiny-leaders/therapy-services.webp"
              alt="თაინი ლიდერსის პროფესიული თერაპიული სერვისები"
              width={1536}
              height={864}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-full min-h-[420px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-secondary">
              თერაპიული სერვისები
            </p>
            <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              პროფესიული მხარდაჭერა ბავშვის განვითარებისა და სწავლის მზაობისთვის
            </h2>
            <p className="mb-7 text-lg leading-relaxed text-white/76">
              თაინი ლიდერსი თერაპიულ მხარდაჭერას სთავაზობს ბავშვებს, რომლებსაც სჭირდებათ
              დამატებითი განვითარების, ემოციური, ქცევითი ან სენსორული ზრუნვა. თერაპია
              იმავე სრულყოფილი გარემოს ნაწილია, რომელიც სწავლას, შემოქმედებას და სასკოლო
              მომზადებას აძლიერებს.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 rounded-lg border border-white/12 bg-white/8 px-4 py-3 font-semibold text-white/92"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                  {service}
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-center gap-3 rounded-lg bg-white/10 p-4">
                  <item.icon className="h-6 w-6 text-secondary" />
                  <span className="font-bold">{item.title}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-secondary/35 bg-secondary/10 p-5">
              <div className="mb-2 flex items-center gap-3">
                <Target className="h-6 w-6 text-secondary" />
                <h3 className="text-xl font-bold">მიზანი</h3>
              </div>
              <p className="leading-relaxed text-white/76">
                ვეხმარებით ბავშვებს უნარების გაძლიერებაში, ქცევის რეგულირებაში, უფრო
                თავდაჯერებულ კომუნიკაციაში და სწავლის პროცესში სრულფასოვან მონაწილეობაში.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
