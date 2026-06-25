'use client'

import { FormEvent, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown, Clock, Mail, MapPin, Phone, Send } from 'lucide-react'

const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=Atskuri%20Street%2010%2C%20Tbilisi%2C%20Georgia'
const PROGRAM_OPTIONS = [
  'საბავშვო ბაღი',
  'დაწყებითი სკოლის მომზადება',
  'თერაპიული სერვისები',
  'ბავშვთა თეატრი',
  'ქართული ცეკვის სტუდია',
  'უსაფრთხო ტრანსპორტირება',
]

export default function Contact() {

  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatusMessage('')

    const formData = new FormData(event.currentTarget)
    const parentName = String(formData.get('parentName') || '').trim()
    const phone = String(formData.get('phone') || '').trim()
    const childAge = String(formData.get('childAge') || '').trim()
    const programs = formData
      .getAll('programs')
      .map((program) => String(program).trim())
      .filter(Boolean)
    const email = String(formData.get('email') || '').trim()
    const message = String(formData.get('message') || '').trim()

    if (!parentName || !phone || !email || !message || !childAge || programs.length === 0) {
      setStatusMessage('გთხოვთ, გაგზავნამდე შეავსოთ ყველა სავალდებულო ველი.')
      return
    }

    const programSummary = programs.join(', ')
    const subject = `Tiny Leaders მოთხოვნა: ${programSummary}`
    const body = [
      `მშობლის სახელი: ${parentName}`,
      `ტელეფონი: ${phone}`,
      `ელ. ფოსტა: ${email}`,
      `ბავშვის ასაკი: ${childAge}`,
      `პროგრამები: ${programSummary}`,
      '',
      message,
    ].join('\n')

    const mailtoLink = `mailto:info@tinyleaders.ge?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
    event.currentTarget.reset()
    setStatusMessage('გმადლობთ! შეტყობინება მოვამზადეთ და ელ. ფოსტის აპში გასაგზავნი წერილი გავხსენით.')
  }
  return (
    <section id="contact" className="bg-gradient-to-b from-mist to-white py-20">
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
              კონტაქტი და ჩაწერა
            </p>
            <h2 className="mb-5 text-4xl font-bold text-ink md:text-5xl">
              დაგეგმეთ ბავშვის გზა თაინი ლიდერსში
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted">
              მოგვწერეთ, გაინტერესებთ საბავშვო ბაღი, დაწყებითი სკოლის მომზადება,
              თერაპიული სერვისები, შემოქმედებითი პროგრამები, ცეკვა, თეატრი, გარე
              აქტივობები თუ ღონისძიებები. ჩვენი გუნდი შემდეგ ნაბიჯებს გაგაცნობთ.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-lg bg-white p-8 shadow-xl"
            >
              <div className="relative mb-6 h-44 overflow-hidden rounded-lg">
                <Image
                  src="/images/tiny-leaders/hero-classroom.webp"
                  alt="თაინი ლიდერსის სივრცე ვიზიტისთვის"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              </div>
              <h3 className="mb-6 text-2xl font-bold text-ink">ჩაწერის ინფორმაცია</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <a
                      href={MAP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-block"
                      aria-label="მისამართის გახსნა რუკაზე"
                    >
                      <h4 className="mb-1 font-bold text-ink transition-colors group-hover:text-primary">
                        მისამართი
                      </h4>
                      <p className="text-muted transition-colors group-hover:text-primary">აწყურის ქუჩა 10</p>
                      <p className="text-muted transition-colors group-hover:text-primary">თბილისი, საქართველო</p>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-ink">ტელეფონი</h4>
                    <a href="tel:+995579970568" className="text-muted transition-colors hover:text-primary">
                      +995 579 970 568
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-ink">ელ. ფოსტა</h4>
                    <a href="mailto:info@tinyleaders.ge" className="text-muted transition-colors hover:text-primary">
                      info@tinyleaders.ge
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-ink">ვიზიტის დაგეგმვა</h4>
                    <p className="text-muted">დაგეგმეთ ვიზიტი ბავშვის ასაკის, მიზნებისა და საჭიროებების განსახილველად.</p>
                    <p className="text-muted">გაგაცნობთ პროგრამებს, ჯგუფების ზომას, თერაპიის შესაძლებლობებს და ჩაწერის ნაბიჯებს.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-sky-wash p-6">
                <MapPin className="mb-3 h-10 w-10 text-primary" />
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2 inline-block text-xl font-bold text-ink transition-colors hover:text-primary"
                >
                  გვეწვიეთ თბილისში
                </a>
                <p className="leading-relaxed text-muted">
                  პროგრამის არჩევამდე ნახეთ საკლასო ოთახები, თერაპიული სივრცეები,
                  შემოქმედებითი სტუდიები და აქტივობების გარემო.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-lg bg-paper p-8 shadow-xl"
            >
              <div className="relative mb-6 h-44 overflow-hidden rounded-lg">
                <Image
                  src="/images/tiny-leaders/learning-program.webp"
                  alt="თაინი ლიდერსის ჩაწერისთვის მზა სასწავლო სივრცე"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/44 to-transparent" />
              </div>
              <h3 className="mb-6 text-2xl font-bold text-ink">გაგზავნეთ ჩაწერის მოთხოვნა</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="parent-name" className="mb-2 block text-sm font-bold text-ink/80">
                      მშობლის სახელი
                    </label>
                    <input
                      id="parent-name"
                      name="parentName"
                      type="text"
                      className="w-full rounded-lg border-2 border-brand-line px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                      placeholder="მაგალითად: ნინო"
                    required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-bold text-ink/80">
                      ტელეფონი
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full rounded-lg border-2 border-brand-line px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                      placeholder="+995 579 970 568"
                    required
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="child-age" className="mb-2 block text-sm font-bold text-ink/80">
                      ბავშვის ასაკი
                    </label>
                    <select
                      id="child-age"
                      name="childAge"
                      defaultValue=""
                      className="w-full rounded-lg border-2 border-brand-line px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                    required
                    >
                      <option value="" disabled>
                        აირჩიეთ ასაკი
                      </option>
                      <option>6 თვე - 1 წელი</option>
                      <option>1 - 2 წელი</option>
                      <option>2 - 5 წელი</option>
                      <option>5 წელი</option>
                      <option>6 - 10 წელი</option>
                    </select>
                  </div>
                  <fieldset className="relative">
                    <legend className="mb-2 block text-sm font-bold text-ink/80">
                      პროგრამის ინტერესი
                    </legend>
                    <details className="group">
                      <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-3 rounded-lg border-2 border-brand-line bg-white px-4 py-3 text-left text-muted transition-colors focus:border-primary focus:outline-none [&::-webkit-details-marker]:hidden">
                        <span className="truncate">აირჩიეთ პროგრამა</span>
                      <ChevronDown
                          className="h-5 w-5 flex-shrink-0 text-muted transition-transform group-open:rotate-180"
                      />
                      </summary>
                      <div className="absolute left-0 right-0 z-20 mt-2 space-y-1 rounded-lg border-2 border-brand-line bg-white p-2 shadow-xl">
                        {PROGRAM_OPTIONS.map((program) => (
                          <label
                            key={program}
                            className="group/option flex w-full cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-left text-sm font-semibold text-ink transition-colors hover:bg-sky-wash has-[:checked]:bg-primary has-[:checked]:text-white"
                          >
                            <input
                              type="checkbox"
                              name="programs"
                              value={program}
                              className="peer sr-only"
                            />
                            <span className="inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border border-current text-[10px] leading-none">
                              <span className="hidden peer-checked:inline">✓</span>
                              </span>
                              <span>{program}</span>
                          </label>
                        ))}
                      </div>
                    </details>
                    <p className="mt-2 text-xs text-muted">მონიშნეთ ერთი ან რამდენიმე პროგრამა.</p>
                  </fieldset>
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-bold text-ink/80">
                    ელ. ფოსტა
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full rounded-lg border-2 border-brand-line px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                    placeholder="info@tinyleaders.ge"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-bold text-ink/80">
                    შეტყობინება
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full resize-none rounded-lg border-2 border-brand-line px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                    placeholder="მოგვწერეთ ბავშვის შესახებ, სასურველი პროგრამა, სასკოლო მომზადების საჭიროებები, თერაპიის კითხვები ან ვიზიტის სასურველი დრო..."
                    required
                  />
                </div>

                {statusMessage && (
                  <p className={`rounded-lg px-4 py-3 text-sm ${statusMessage.includes('გმადლობთ') ? 'bg-sky-wash text-ink' : 'bg-red-50 text-red-700'}`}>
                    {statusMessage}
                  </p>
                )}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="brand-button flex w-full items-center justify-center gap-2 rounded-lg px-8 py-4 font-bold transition-all"
                >
                  მოთხოვნის გაგზავნა
                  <Send size={20} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
