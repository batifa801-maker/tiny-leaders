'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  BookOpen,
  Brain,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  Languages,
  MessageCircle,
  Microscope,
  PenLine,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'

export default function ElementaryPreparation() {
  const subjects = [
    { icon: Languages, title: 'ქართული ენა' },
    { icon: Calculator, title: 'მათემატიკა' },
    { icon: BookOpen, title: 'ინგლისური ენა' },
    { icon: PenLine, title: 'კითხვისა და წერის უნარები' },
    { icon: Microscope, title: 'ბუნებისმეტყველება' },
    { icon: Target, title: 'ზოგადი აკადემიური უნარები' },
    { icon: ClipboardCheck, title: 'საშინაო დავალების დახმარება' },
    { icon: Brain, title: 'კრიტიკული აზროვნების განვითარება' },
    { icon: MessageCircle, title: 'კომუნიკაციის უნარები' },
    { icon: Sparkles, title: 'შემოქმედებითი სასწავლო აქტივობები' },
  ]

  const benefits = [
    'ინდივიდუალური ყურადღება',
    'მცირე სასწავლო ჯგუფები',
    'პროფესიონალი პედაგოგები',
    'სასკოლო მზაობის გაძლიერება',
    'აკადემიური თავდაჯერების განვითარება',
    'კონცენტრაციისა და სწავლის უნარების გაუმჯობესება',
    'პროგრესის მუდმივი მონიტორინგი',
  ]

  return (
    <section id="elementary-preparation" className="bg-gradient-to-b from-sky-wash to-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-lg shadow-2xl"
            >
              <Image
                src="/images/tiny-leaders/learning-program.webp"
                alt="დაწყებითი სკოლის მოსამზადებელი პროგრამა თაინი ლიდერსში"
                width={1536}
                height={864}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="h-full min-h-[440px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/76 via-ink/18 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-secondary">
                  6 - 10 წელი
                </p>
                <h3 className="text-2xl font-bold">სრული საგნობრივი მხარდაჭერა ადრეული სასკოლო წარმატებისთვის</h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">
                სასკოლო მომზადების აკადემია
              </p>
              <h2 className="mb-6 text-4xl font-bold leading-tight text-ink md:text-5xl">
                დაწყებითი სკოლის მოსამზადებელი პროგრამა
              </h2>
              <p className="mb-5 text-lg leading-relaxed text-muted">
                თაინი ლიდერსი მხოლოდ საბავშვო ბაღი არ არის. ის ასევე არის მოსამზადებელი
                და საგანმანათლებლო ცენტრი დაწყებითი სკოლის მოსწავლეებისთვის, რომელიც
                6-10 წლის ბავშვებს სკოლაში წარმატებისთვის საჭირო უნარებს, ჩვევებს და
                თავდაჯერებას უვითარებს.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-muted">
                ჩვენი პედაგოგები აკადემიურ პროგრესს მხარს უჭერენ მცირე ჯგუფებით,
                სტრუქტურირებული პრაქტიკით, შემოქმედებითი სწავლების მეთოდებით,
                საშინაო დავალების დახმარებით და თითოეული ბავშვის პროგრესის მუდმივი მონიტორინგით.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ['6-10', 'წელი'],
                  ['10', 'სასწავლო მიმართულება'],
                  ['მცირე', 'ჯგუფები'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-lg bg-white p-5 text-center shadow-sm">
                    <p className="text-3xl font-bold text-primary">{value}</p>
                    <p className="mt-1 text-sm font-bold uppercase tracking-[0.1em] text-muted">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr]">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <GraduationCap className="h-9 w-9 text-primary" />
                <h3 className="text-3xl font-bold text-ink">საგნები და უნარები</h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {subjects.map((subject, index) => (
                  <motion.div
                    key={subject.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                    className="flex items-center gap-4 rounded-lg border-2 border-brand-line bg-white p-4 shadow-sm"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <subject.icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-bold text-ink">{subject.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.aside
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-lg bg-ink p-7 text-white shadow-xl"
            >
              <div className="mb-5 flex items-center gap-3">
                <Users className="h-8 w-8 text-secondary" />
                <h3 className="text-2xl font-bold">პროგრამის უპირატესობები</h3>
              </div>
              <div className="space-y-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 rounded-lg bg-white/8 p-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <span className="font-semibold text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7 rounded-lg border border-secondary/35 bg-secondary/10 p-5">
                <h4 className="mb-2 text-xl font-bold text-secondary">ოჯახებისთვის</h4>
                <p className="leading-relaxed text-white/78">
                  მშობლები იღებენ მკაფიო ინფორმაციას ბავშვის აკადემიური ძლიერი მხარეების,
                  გასაძლიერებელი მიმართულებების და შემდეგი ნაბიჯების შესახებ, რაც ჩაწერას
                  და მხარდაჭერის პროცესს მარტივს ხდის.
                </p>
              </div>
            </motion.aside>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
