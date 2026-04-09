import { motion } from "motion/react";
import { Phone, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1631217816660-ad353559864e?auto=format&fit=crop&q=80&w=2000"
          alt="Modern Clinic"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-clinic-light-blue text-clinic-blue text-sm font-semibold mb-6">
              Expert Medical Care in Indore
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-tight mb-6">
              Trusted Care for <br />
              <span className="text-clinic-blue">Your Health</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Dr. Jain provides expert medical consultation with a focus on patient-centric care, 
              advanced diagnosis, and personalized treatment plans.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#appointment"
                className="btn-primary flex items-center justify-center gap-2 text-lg"
              >
                <Calendar size={20} />
                Book Appointment
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+919645486129"
                className="btn-secondary flex items-center justify-center gap-2 text-lg"
              >
                <Phone size={20} />
                Call Now
              </motion.a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-16 flex items-center gap-8 border-t border-slate-200 pt-8"
          >
            <div>
              <p className="text-3xl font-bold text-slate-900">15+</p>
              <p className="text-sm text-slate-500">Years Experience</p>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div>
              <p className="text-3xl font-bold text-slate-900">10k+</p>
              <p className="text-sm text-slate-500">Happy Patients</p>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div>
              <p className="text-3xl font-bold text-slate-900">24/7</p>
              <p className="text-sm text-slate-500">Emergency Support</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-clinic-light-blue/30 rounded-tl-full -z-10 blur-3xl" />
    </section>
  );
}
