import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    text: "Dr. Jain is extremely professional and patient. He explained the diagnosis clearly and the treatment worked perfectly.",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    name: "Priya Patel",
    text: "The clinic is very clean and the staff is helpful. Dr. Jain's approach is very compassionate. Highly recommended!",
    rating: 5,
    date: "1 month ago",
  },
  {
    name: "Amit Verma",
    text: "Best general consultation experience in Indore. Very minimal waiting time and excellent care.",
    rating: 4,
    date: "3 weeks ago",
  },
  {
    name: "Sneha Gupta",
    text: "I've been visiting Dr. Jain for my family's health checkups for years. Trustworthy and expert advice always.",
    rating: 5,
    date: "2 months ago",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">What Our Patients Say</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real stories from people who trusted us with their health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-200"}
                  />
                ))}
              </div>
              <Quote className="text-clinic-light-blue mb-4" size={32} />
              <p className="text-slate-600 italic mb-6 flex-grow">"{review.text}"</p>
              <div className="border-t border-slate-100 pt-4">
                <p className="font-bold text-slate-900">{review.name}</p>
                <p className="text-xs text-slate-400">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
