'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">
              თაინი ლიდერსის შესახებ
            </p>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-ink md:text-5xl">
              პრემიუმ სივრცე ბავშვობის, განვითარების და ადრეული სასკოლო წარმატებისთვის
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-muted">
              თაინი ლიდერსი არის ბავშვთა განვითარების თანამედროვე ცენტრი ოჯახებისთვის,
              რომლებსაც სურთ განათლება, ზრუნვა, შემოქმედება, თერაპია და სასკოლო
              მომზადება ერთ სანდო სივრცეში.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              ჩვენ მხარს ვუჭერთ ბავშვებს ჩვილობიდან დაწყებითი სკოლის პირველ წლებამდე.
              ჩვენი პროგრამები აერთიანებს ასაკის შესაბამის სწავლებას, ემოციურ და სოციალურ
              განვითარებას, შემოქმედებით ხელოვნებას, გარე გამოცდილებებს, ოჯახთან კომუნიკაციას
              და პროფესიულ თერაპიულ მხარდაჭერას.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-lg shadow-2xl"
          >
            <Image
              src="/images/tiny-leaders/creative-classroom.webp"
              alt="თაინი ლიდერსის შემოქმედებითი სასწავლო სივრცე"
              width={1536}
              height={864}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-full min-h-[420px] w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/80 to-transparent p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-secondary">
                თბილი საგანმანათლებლო სივრცე
              </p>
              <p className="mt-2 text-2xl font-bold">
                განვითარება, სწავლა, თერაპია და შემოქმედებითი პროგრამები ერთ სივრცეში
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
