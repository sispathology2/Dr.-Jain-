import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const highlights = [
    "Expert Diagnosis & Treatment",
    "Patient-Centric Approach",
    "State-of-the-art Facilities",
    "Compassionate Care",
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71f1536780?auto=format&fit=crop&q=80&w=1000"
                alt="Dr. Jain"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-8 -right-8 bg-clinic-blue text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm font-medium opacity-90">Years of Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              Dedicated to Your <br />
              <span className="text-clinic-blue">Health and Well-being</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Dr. Jain is a highly respected medical professional in Indore, known for his 
              commitment to providing exceptional healthcare services. With over 15 years 
              of experience, he combines clinical expertise with a compassionate approach 
              to ensure every patient receives the best possible care.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Our clinic is designed to be a safe and welcoming space where patients can 
              discuss their health concerns openly and receive personalized treatment plans 
              tailored to their unique needs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-clinic-green" size={20} />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a href="#contact" className="btn-primary">
                Learn More About Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
