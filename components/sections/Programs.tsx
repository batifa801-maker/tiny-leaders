'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Baby, BookOpen, GraduationCap, Puzzle } from 'lucide-react'

export default function Programs() {
  const programs = [
    {
      icon: Baby,
      title: 'ადრეული საბავშვო ბაღის პროგრამა',
      age: '6 თვე - 2 წელი',
      description:
        'ნაზი ადაპტაცია, მზრუნველი რუტინა, სენსორული თამაში, მოტორული განვითარება და პირველი უსაფრთხო სოციალური გამოცდილებები პატარებისთვის.',
      points: ['სენსორული გამოცდილებები', 'პირველი კომუნიკაციური უნარები', 'ემოციური უსაფრთხოება'],
      color: 'from-coral-wash to-sun-wash',
      iconColor: 'text-coral',
    },
    {
      icon: Puzzle,
      title: 'საბავშვო ბაღის ძირითადი პროგრამა',
      age: '2 - 5 წელი',
      description:
        'ასაკის შესაბამისი სწავლება, შემოქმედება, მუსიკა, მოძრაობა, გარე თამაში და ყოველდღიური სოციალური განვითარება თბილ თანამედროვე გარემოში.',
      points: ['თამაშით სწავლა', 'ხელოვნება და მუსიკა', 'ფიზიკური განვითარება'],
      color: 'from-mist to-sky-wash',
      iconColor: 'text-primary',
    },
    {
      icon: GraduationCap,
      title: 'სასკოლო მზაობის პროგრამა',
      age: '5 წელი',
      description:
        'მომზადება საკლასო რუტინისთვის, დამოუკიდებლობა, კონცენტრაცია, კითხვისა და წერის საწყისი უნარები, მათემატიკური აზროვნება და თავდაჯერებული კომუნიკაცია.',
      points: ['წინასასკოლო უნარები', 'წესები და კომუნიკაცია', 'თავდაჯერებული პრეზენტაცია'],
      color: 'from-leaf-wash to-mist',
      iconColor: 'text-leaf',
    },
    {
      icon: BookOpen,
      title: 'დაწყებითი სკოლის მომზადება',
      age: '6 - 10 წელი',
      description:
        'დაწყებითი კლასის მოსწავლეების აკადემიური მხარდაჭერა ქართულში, მათემატიკაში, ინგლისურში, კითხვაში, წერაში, ბუნებისმეტყველებაში და საშინაო დავალებებში.',
      points: ['სრული საგნობრივი მხარდაჭერა', 'საშინაო დავალების დახმარება', 'პროგრესის მუდმივი მონიტორინგი'],
      color: 'from-sun-wash to-coral-wash',
      iconColor: 'text-secondary-strong',
    },
  ]

  return (
    <section id="programs" className="bg-gradient-to-b from-white to-mist py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">
              საბავშვო ბაღის პროგრამები
            </p>
            <h2 className="mb-5 text-4xl font-bold text-ink md:text-5xl">
              პროგრამები <span className="text-primary">6 თვიდან 10 წლამდე</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted">
              თაინი ლიდერსი ბავშვს პირველი საბავშვო ბაღის გამოცდილებიდან ადრეულ აკადემიურ
              წარმატებამდე მიჰყავს, აერთიანებს თანამედროვე განათლებას, შემოქმედებას,
              სასკოლო მომზადებას და პროფესიულ მხარდაჭერას.
            </p>
          </div>

          <div className="mb-10 overflow-hidden rounded-lg border border-brand-line bg-white shadow-xl">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <Image
                src="/images/tiny-leaders/learning-program.webp"
                alt="თაინი ლიდერსის სასწავლო პროგრამა"
                width={1536}
                height={864}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="h-full min-h-[320px] w-full object-cover"
              />
              <div className="flex flex-col justify-center p-8 md:p-10">
                <h3 className="mb-4 text-3xl font-bold text-ink">განათლება, რომელიც ბავშვთან ერთად იზრდება</h3>
                <p className="mb-6 text-lg leading-relaxed text-muted">
                  ჩვენი სასწავლო გზა იწყება ადრეული ბავშვობის ზრუნვით და გრძელდება
                  დაწყებითი სკოლის მომზადებით. ბავშვები ავითარებენ ყურადღებას, დამოუკიდებლობას,
                  კომუნიკაციას, აკადემიურ თავდაჯერებას და სწავლის სიყვარულს.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    'შემოქმედებითი სწავლება',
                    'პროფესიონალი პედაგოგები',
                    'სასკოლო მზაობა',
                    'ინდივიდუალური პროგრესი',
                    'მცირე ჯგუფები',
                    'საშინაო დავალების მხარდაჭერა',
                  ].map((item) => (
                    <div key={item} className="rounded-lg bg-mist px-4 py-3 font-bold text-ink">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className={`rounded-lg bg-gradient-to-br ${program.color} p-7 shadow-lg transition-all hover:shadow-2xl`}
              >
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-white shadow-md">
                    <program.icon className={`h-8 w-8 ${program.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-ink">{program.title}</h3>
                    <span className="mt-2 inline-flex rounded-full bg-white/70 px-3 py-1 text-sm font-bold text-muted">
                      {program.age}
                    </span>
                  </div>
                </div>
                <p className="mb-5 leading-relaxed text-ink/78">{program.description}</p>
                <ul className="space-y-2">
                  {program.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm font-semibold text-ink/82">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
