'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { BookOpen, Calendar, Music, Palette, Sun, TreePine, Users } from 'lucide-react'

export default function DailyActivities() {
  const activities = [
    {
      icon: BookOpen,
      title: 'საგანმანათლებლო სასწავლო ბლოკები',
      description: 'ასაკის შესაბამისი თემები, ენობრივი განვითარება, ლოგიკური თამაშები, ადრეული აკადემიური უნარები და სწავლის ჩვევები.',
    },
    {
      icon: Palette,
      title: 'ხელოვნება და ხელსაქმე',
      description: 'ხატვა, ძერწვა, კოლაჟი, სეზონური ნამუშევრები და შემოქმედებითი პროექტები, რომლებიც წარმოსახვასა და წვრილ მოტორიკას ავითარებს.',
    },
    {
      icon: Music,
      title: 'მუსიკალური აქტივობები',
      description: 'სიმღერები, რიტმი, მოძრაობა და ხმოვანი თამაშები მეხსიერების, გამოხატვისა და კოორდინაციის გასაძლიერებლად.',
    },
    {
      icon: Users,
      title: 'ჯგუფური თამაშები და კომუნიკაცია',
      description: 'თანამშრომლობითი თამაში, როლური აქტივობები და მართული ურთიერთობა სოციალური თავდაჯერებისა და თვითგამოხატვისთვის.',
    },
    {
      icon: TreePine,
      title: 'გარე და გასვლითი პროგრამები',
      description: 'საგანმანათლებლო ექსკურსიები, გარე სწავლება, ბუნებაზე დაკვირვება და უსაფრთხო რეალური აღმოჩენები.',
    },
    {
      icon: Calendar,
      title: 'განსაკუთრებული სეზონური აქტივობები',
      description: 'პროექტები წელიწადის დროებზე, კულტურაზე, დღესასწაულებზე, მეცნიერების თემებზე და ოჯახურ ღონისძიებებზე.',
    },
  ]

  return (
    <section id="activities" className="bg-gradient-to-b from-mist to-white py-20">
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
              აქტივობები და ღონისძიებები
            </p>
            <h2 className="mb-5 text-4xl font-bold text-ink md:text-5xl">
              ყოველი დღე აერთიანებს აღმოჩენას, მოძრაობას, შემოქმედებას და სწავლას
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted">
              თაინი ლიდერსი სწავლას რეალურ გამოცდილებად აქცევს. ბავშვები იკვლევენ,
              ურთიერთობენ, ქმნიან, მოძრაობენ, გადიან გარემოში და მონაწილეობენ სეზონურ
              პროექტებში, რომლებიც განათლებას თავდაჯერებასა და სიხარულს უკავშირებს.
            </p>
          </div>

          <div className="grid items-stretch gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-lg shadow-2xl"
            >
              <Image
                src="/images/tiny-leaders/field-programs.webp"
                alt="თაინი ლიდერსის გარე და გასვლითი სასწავლო პროგრამები"
                width={1536}
                height={864}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="h-full min-h-[440px] w-full object-cover"
              />
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="rounded-lg border-2 border-brand-line bg-white p-6 shadow-sm transition-all hover:border-primary hover:shadow-xl"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                    <activity.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-ink">{activity.title}</h3>
                  <p className="leading-relaxed text-muted">{activity.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="mt-12 rounded-lg bg-white p-8 text-center shadow-lg"
          >
            <Sun className="mx-auto mb-4 h-12 w-12 text-secondary-strong" />
            <h3 className="mb-3 text-2xl font-bold text-ink">
              დაბალანსებული რიტმი სწავლისთვის, დასვენებისთვის, შემოქმედებისთვის და აქტიური ზრდისთვის
            </h3>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted">
              სტრუქტურირებული გაკვეთილები, თავისუფალი თამაში, მშვიდი დრო, გარე მოძრაობა
              და შემოქმედებითი სამუშაო ერთიანდება რუტინაში, რომელიც საბავშვო ბაღისა და
              დაწყებითი სკოლის ბავშვებს თანაბრად ეხმარება.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
