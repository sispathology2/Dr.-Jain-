import { motion } from "motion/react";
import { Stethoscope, Activity, ClipboardCheck, HeartPulse, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "General Consultation",
    description: "Comprehensive health assessments and expert medical advice for all age groups.",
    icon: <Stethoscope className="text-clinic-blue" size={32} />,
  },
  {
    title: "Health Checkup",
    description: "Regular screenings and preventive checkups to maintain optimal health.",
    icon: <Activity className="text-clinic-blue" size={32} />,
  },
  {
    title: "Diagnosis & Treatment",
    description: "Advanced diagnostic techniques followed by effective treatment strategies.",
    icon: <ClipboardCheck className="text-clinic-blue" size={32} />,
  },
  {
    title: "Follow-up Care",
    description: "Continuous monitoring and support to ensure smooth recovery and long-term health.",
    icon: <HeartPulse className="text-clinic-blue" size={32} />,
  },
  {
    title: "Preventive Healthcare",
    description: "Guidance on lifestyle and vaccinations to prevent future health issues.",
    icon: <ShieldCheck className="text-clinic-blue" size={32} />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-clinic-light-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Our Medical Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We offer a wide range of medical services designed to meet your healthcare needs 
            with precision and care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 card-hover text-left"
            >
              <div className="w-16 h-16 bg-clinic-light-blue rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
