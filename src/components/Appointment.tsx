import { motion } from "motion/react";
import { Send, MessageSquare } from "lucide-react";
import React, { useState } from "react";

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    alert("Appointment request sent! We will contact you soon.");
  };

  const handleWhatsApp = () => {
    const text = `Hello Dr. Jain, I would like to book an appointment.\nName: ${formData.name}\nPhone: ${formData.phone}\nDate: ${formData.date}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/919645486129?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="appointment" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-clinic-blue rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-1/3 p-12 text-white flex flex-col justify-center">
            <h2 className="text-4xl font-serif font-bold mb-6">Book Your Appointment</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Take the first step towards better health. Fill out the form or reach out via WhatsApp for a quick response.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Quick Response</p>
                  <p className="font-semibold">WhatsApp Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 bg-white p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-clinic-blue focus:ring-2 focus:ring-clinic-blue/20 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-clinic-blue focus:ring-2 focus:ring-clinic-blue/20 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-clinic-blue focus:ring-2 focus:ring-clinic-blue/20 outline-none transition-all"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-slate-700">Message (Optional)</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your concern..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-clinic-blue focus:ring-2 focus:ring-clinic-blue/20 outline-none transition-all resize-none"
                />
              </div>
              
              <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 mt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex-1 bg-clinic-blue text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
                >
                  <Send size={20} />
                  Confirm Booking
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex-1 bg-clinic-green text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-200"
                >
                  <MessageSquare size={20} />
                  Book via WhatsApp
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
