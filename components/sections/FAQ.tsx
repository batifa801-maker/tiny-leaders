'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const NAV_OFFSET = 96

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (!element) return

    const top = element.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
    window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' })
  }

  const faqs = [
    {
      question: 'რა ასაკის ბავშვებს იღებს თაინი ლიდერსი?',
      answer:
        'საბავშვო ბაღის პროგრამებში ვიღებთ ბავშვებს 6 თვიდან 5 წლამდე. დაწყებითი სკოლის მოსამზადებელი პროგრამა განკუთვნილია 6-10 წლის მოსწავლეებისთვის.',
    },
    {
      question: 'თაინი ლიდერსი მხოლოდ საბავშვო ბაღია?',
      answer:
        'არა. თაინი ლიდერსი არის საბავშვო ბაღი, დაწყებითი სკოლის მოსამზადებელი აკადემია, თერაპიული მხარდაჭერის სივრცე და შემოქმედებითი ხელოვნებისა და აქტივობების სივრცე.',
    },
    {
      question: 'რას მოიცავს დაწყებითი სკოლის მოსამზადებელი პროგრამა?',
      answer:
        'პროგრამა მოიცავს ქართულ ენას, მათემატიკას, ინგლისურ ენას, კითხვისა და წერის უნარებს, ბუნებისმეტყველებას, ზოგად აკადემიურ უნარებს, საშინაო დავალების დახმარებას, კრიტიკულ აზროვნებას, კომუნიკაციის უნარებს და შემოქმედებით სასწავლო აქტივობებს.',
    },
    {
      question: 'როგორ იღებენ მხარდაჭერას დაწყებითი სკოლის მოსწავლეები?',
      answer:
        'მოსწავლეები სწავლობენ მცირე ჯგუფებში, იღებენ ინდივიდუალურ ყურადღებას, მუშაობენ პროფესიონალ პედაგოგებთან და სარგებლობენ პროგრესის მუდმივი მონიტორინგით.',
    },
    {
      question: 'რა თერაპიული სერვისებია ხელმისაწვდომი?',
      answer:
        'თაინი ლიდერსი გთავაზობთ სენსორულ თერაპიას, სენსორულ მასაჟს, ფსიქოთერაპიას, ქცევით თერაპიას, ინდივიდუალური განვითარების დაგეგმვას და პროფესიულ რეკომენდაციებს.',
    },
    {
      question: 'ტარდება თუ არა ექსკურსიები და გარე პროგრამები?',
      answer:
        'დიახ. ბავშვები მონაწილეობენ უსაფრთხო გარე სწავლებაში, საგანმანათლებლო ექსკურსიებში, გასვლით პროგრამებში, ბუნებაზე დაკვირვებასა და განსაკუთრებულ სეზონურ აქტივობებში.',
    },
    {
      question: 'რა შემოქმედებითი პროგრამებია ცენტრში?',
      answer:
        'შემოქმედებითი პროგრამები მოიცავს ბავშვთა თეატრს, ქართული ცეკვის სტუდიას, ხელოვნებასა და ხელსაქმეს, მუსიკალურ აქტივობებს და წარმოდგენებზე დაფუძნებულ სწავლას.',
    },
    {
      question: 'აწყობს თუ არა თაინი ლიდერსი ღონისძიებებსა და ზეიმებს?',
      answer:
        'დიახ. ვაწყობთ დღესასწაულებს, ოჯახურ ღონისძიებებს, დიდ წლიურ წარმოდგენებს და ბავშვთა ფესტივალებს.',
    },
    {
      question: 'როგორ დავგეგმო ვიზიტი ან ჩაწერა?',
      answer:
        'დაგვიკავშირდით ტელეფონით, ვოთსაფით ან ქვემოთ მოცემული ფორმით. ჩვენი გუნდი დაგეხმარებათ სწორი პროგრამის, ასაკობრივი ჯგუფის, თერაპიული მხარდაჭერის ან სასკოლო მომზადების გზის შერჩევაში.',
    },
  ]

  return (
    <section id="faq" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">
              ხშირად დასმული კითხვები
            </p>
            <h2 className="mb-5 text-4xl font-bold text-ink md:text-5xl">
              პასუხები მშობლებისთვის, რომლებიც სწორ პროგრამას არჩევენ
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted">
              გაიგეთ, როგორ ერთიანდება თაინი ლიდერსში საბავშვო ბაღი, დაწყებითი სკოლის
              მომზადება, თერაპია, აქტივობები და ჩაწერის პროცესი.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="overflow-hidden rounded-lg border-2 border-brand-line transition-colors hover:border-primary"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between bg-white px-6 py-5 text-left transition-colors hover:bg-mist"
                >
                  <span className="pr-4 font-bold text-ink">{faq.question}</span>
                  <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="h-5 w-5 flex-shrink-0 text-primary" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0">
                        <p className="leading-relaxed text-muted">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="mt-12 rounded-lg bg-gradient-to-r from-primary via-accent to-leaf p-8 text-center text-white md:p-12"
          >
            <h3 className="mb-4 text-2xl font-bold">გჭირდებათ დახმარება სწორი გზის არჩევაში?</h3>
            <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed">
              დაგვიკავშირდით და ბავშვის ასაკს, საჭიროებებს, ინტერესებსა და სასწავლო მიზნებს
              თაინი ლიდერსის შესაბამის პროგრამას მოვარგებთ.
            </p>
            <button
              onClick={() => scrollToSection('#contact')}
              className="rounded-full bg-white px-8 py-3 font-bold text-primary transition-colors hover:bg-mist"
            >
              კონტაქტი და ჩაწერა
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
