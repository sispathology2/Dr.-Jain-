import { motion } from "motion/react";
import { Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-white">Dr. Jain Clinic</h3>
            <p className="text-slate-400 leading-relaxed">
              Providing premium healthcare services with a focus on trust, expertise, and patient satisfaction in Indore.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-clinic-blue transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-clinic-blue transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-clinic-blue transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-clinic-blue transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Patient Reviews</a></li>
              <li><a href="#appointment" className="hover:text-white transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-clinic-blue shrink-0 mt-1" />
                <a href="tel:+919645486129" className="hover:text-white transition-colors">+91 96454 86129</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-clinic-blue shrink-0 mt-1" />
                <a href="mailto:info@drjainclinic.com" className="hover:text-white transition-colors">info@drjainclinic.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-clinic-blue shrink-0 mt-1" />
                <span>Mon - Sat: 10:00 AM - 8:00 PM<br />Sun: Closed</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div>
            <h4 className="text-lg font-bold mb-6">Emergency</h4>
            <p className="text-slate-400 mb-6">For any urgent medical assistance, call our emergency line.</p>
            <a href="tel:+919645486129" className="block w-full text-center bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold transition-colors">
              Call Emergency
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {currentYear} Dr. Jain Clinic. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/919645486129"
          target="_blank"
          className="w-14 h-14 bg-clinic-green text-white rounded-full flex items-center justify-center shadow-2xl"
        >
          <MessageCircle size={30} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="tel:+919645486129"
          className="w-14 h-14 bg-clinic-blue text-white rounded-full flex items-center justify-center shadow-2xl md:hidden"
        >
          <Phone size={28} />
        </motion.a>
      </div>
    </footer>
  );
}
