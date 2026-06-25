'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { BusFront, CalendarClock, CheckCircle2, ShieldCheck } from 'lucide-react'

const benefits = [
  'ხარისხიანი დროის დაზოგვა',
  'ყოველდღიური სტრესის შემცირება',
  'უსაფრთხო და მეთვალყურე ტრანსპორტირება',
  'სანდო სერვისი',
  'დასაქმებული ოჯახებისთვის მეტი კომფორტი',
]

const features = [
  'პროფესიონალური და გამოცდილი მძღოლები',
  'უსაფრთხო და კომფორტული ავტომობილები',
  'ბავშვის უსაფრთხოება არის მაქსიმალური პრიორიტეტი',
  'სანდო მიყვანა და ჩამოგვნება',
  'ტრანსპორტირება ქალაქის მთელ ტერიტორიაზე',
  'დასაქმებული მშობლებისთვის მოსახერხებელი',
  'დროისა და რეიზის წესრიგიანი დაგეგმარება',
]

export default function SafeTransportation() {
  return (
    <section id="transportation-services" className="bg-gradient-to-b from-white to-mist py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">ტრანსპორტირების სერვისები</p>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-ink md:text-5xl">
              უსაფრთხო ტრანსპორტირება
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted">
              Tiny Leaders შვილი ეხმარება ცენტრიდან და ცენტრამდე უსაფრთხო და მყარი გზით მოყვანაში და დაბრუნებაში. ჩვენი გუნდი
              ამსრულებს მარშრუტის უსაფრთხო შერჩევას, ავტომობილების კონტროლს და მკაფიო განრიგს, რომ ყოველდღიური გზავნილი იყოს
              მშვიდი, პრაქტიკული და სანდო.
            </p>
          </div>

          <div className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-brand-line bg-white p-8 shadow-lg"
            >
              <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-mist px-4 py-2 text-sm font-bold text-primary">
                <ShieldCheck className="h-5 w-5" />
                სრული ოჯახის მხარდაჭერა
              </div>
              <h3 className="mb-4 text-3xl font-bold text-ink">
                შექმნილია მთელი ოჯახის სრული გზისთვის
              </h3>
              <p className="mb-6 leading-relaxed text-muted">
                განათლების, საბავშვო ზრუნვის, თერაპიის და დამატებითი აქტივობების პარალელურად ჩვენ ახლა ვამატებთ საიმედო
                ტრანსპორტირების მხარდაჭერას, რომ მშობლებს ჰქონდეთ ერთი ნდობით სანდო სერვისი ბავშვის დღის სრული გზისათვის.
              </p>

              <div className="mb-8 grid gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 rounded-lg border border-white bg-sky-wash p-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span className="font-semibold text-ink">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { icon: ShieldCheck, title: 'საფრთხობის პრიორიტეტი' },
                  { icon: CheckCircle2, title: 'სანდო ოპერაცია' },
                  { icon: CalendarClock, title: 'პუნქტუალურობა და დროულობა' },
                ].map((item) => (
                  <div key={item.title} className="rounded-lg bg-primary/10 p-4 text-center">
                    <item.icon className="mx-auto mb-2 h-8 w-8 text-primary" />
                    <p className="font-bold text-ink">{item.title}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/tiny-leaders/safe-transportation.svg"
                  alt="ბავშვები უსაფრთხო და კომფორტულ ავტობუსში სკოლაში ერთიანდებიან"
                  width={1536}
                  height={864}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="h-full min-h-[360px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="mb-2 text-sm font-semibold text-secondary">ქალაქის მთლიანი დაფარვა</p>
                  <h3 className="text-2xl font-bold">კომფორტული ავტომობილები • მომზადებული მძღოლები • მეთვალყურე მარშრუტები</h3>
                </div>
              </div>

              <div className="rounded-xl bg-ink p-6 text-white">
                <div className="mb-4 flex items-center gap-3">
                  <BusFront className="h-6 w-6 text-secondary" />
                  <h4 className="text-xl font-bold">მშობლების სარგებელი</h4>
                </div>
                <ul className="grid gap-2">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 rounded-lg bg-white/10 p-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                      <span className="font-semibold text-white/92">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
