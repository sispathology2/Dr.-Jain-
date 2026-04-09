import { motion } from "motion/react";
import { MapPin, Navigation } from "lucide-react";

export default function Map() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Find Our Clinic</h2>
            <p className="text-lg text-slate-600 mb-8">
              Conveniently located in the heart of Indore. Visit us for expert medical consultation.
            </p>
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 bg-clinic-light-blue rounded-full flex items-center justify-center shrink-0">
                <MapPin className="text-clinic-blue" size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900">Address</p>
                <p className="text-slate-600">Dr. Jain Clinic, Indore, Madhya Pradesh, India</p>
              </div>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.google.com/maps/search/?api=1&query=Dr.+Jain+Clinic+Indore"
              target="_blank"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Navigation size={20} />
              Get Directions
            </motion.a>
          </div>
          
          <div className="lg:col-span-2">
            <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-xl border border-slate-100">
              {/* Placeholder for Google Map - In a real app, use an iframe or Google Maps SDK */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.6748450116!2d75.7938096!3d22.7239117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b4d0c35%3A0x7b558860f41746eb!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1712630000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
