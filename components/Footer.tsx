'use client'

import { motion } from 'framer-motion'
import { ArrowUp, Mail, MapPin, Phone, Share2 } from 'lucide-react'
import BrandLogo from './BrandLogo'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-ink text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex items-center gap-3">
              <BrandLogo variant="footer" />
              <div>
                <h3 className="text-xl font-bold">თაინი ლიდერსი</h3>
                <p className="text-sm text-white/70">განათლებისა და განვითარების ცენტრი</p>
              </div>
            </div>
            <p className="mb-6 leading-relaxed text-white/72">
              ერთი სივრცე სწავლისთვის, განვითარებისთვის, შემოქმედებისთვის, თერაპიისთვის
              და სასკოლო მომზადებისთვის 6 თვიდან 10 წლამდე ბავშვებისთვის.
            </p>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#home"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
              aria-label="თაინი ლიდერსის გაზიარება"
            >
              <Share2 size={20} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="mb-6 text-lg font-bold">სწრაფი ბმულები</h4>
            <ul className="space-y-3">
              {[
                ['ჩვენ შესახებ', '#about'],
                ['საბავშვო ბაღის პროგრამები', '#programs'],
                ['დაწყებითი სკოლის მომზადება', '#elementary-preparation'],
                ['თერაპიული სერვისები', '#therapy'],
              ['უსაფრთხო ტრანსპორტირება', '#transportation-services'],
                ['აქტივობები და ღონისძიებები', '#activities'],
                ['გალერეა', '#gallery'],
                ['კონტაქტი', '#contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-white/70 transition-colors hover:text-secondary">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-6 text-lg font-bold">პროგრამები</h4>
            <ul className="space-y-3 text-white/70">
              <li>საბავშვო ბაღი: 6 თვე - 5 წელი</li>
              <li>დაწყებითი სკოლის მომზადება: 6 - 10 წელი</li>
              <li>ქართული, მათემატიკა, ინგლისური და საშინაო დავალების მხარდაჭერა</li>
              <li>პროფესიული თერაპიული სერვისები</li>
              <li>თეატრი, ქართული ცეკვა, ხელოვნება, მუსიკა და ღონისძიებები</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="mb-6 text-lg font-bold">კონტაქტი</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span className="text-white/70">
                  აწყურის ქუჩა 10
                  <br />
                  თბილისი, საქართველო
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-secondary" />
                <span className="text-white/70">+995 579 970 568</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-secondary" />
                <span className="text-white/70">info@tinyleaders.ge</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 md:flex-row"
        >
          <p className="text-sm text-white/60">
            © 2026 თაინი ლიდერსი. ყველა უფლება დაცულია.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary transition-colors hover:bg-primary-strong"
            aria-label="გვერდის დასაწყისში დაბრუნება"
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
