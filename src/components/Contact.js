import React from 'react';
import { Phone, MapPin, Instagram, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full bg-gray-50 dark:bg-gray-900 py-16 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Dr. Chandra
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            For appointments or any queries, feel free to reach out. We’re happy to assist you on your journey to pain-free living.
          </p>

          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <Phone className="text-green-600" />
              <a href="tel:8077531426" className="text-lg text-gray-800 dark:text-white hover:underline">
                +91 8077531426
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <MessageSquare className="text-green-500" />
              <a
                href="https://wa.me/918077531426"
                target="_blank"
                rel="noreferrer"
                className="text-lg text-gray-800 dark:text-white hover:underline"
              >
                WhatsApp Chat
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <Instagram className="text-pink-500" />
              <a
                href="https://instagram.com/dr_chandra_heals"
                target="_blank"
                rel="noreferrer"
                className="text-lg text-gray-800 dark:text-white hover:underline"
              >
                @dr_chandra_heals
              </a>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="text-blue-500 mt-1" />
              <p className="text-lg text-gray-800 dark:text-white">
                Jai Bhagirathi Tower, near Evergreen School, Halduchor, Haldwani, Nainital, Uttarakhand
              </p>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
          <iframe
            title="Dr. Chandra Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.2282329737754!2d79.51546521509237!3d29.21514188195947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390aee0b4b1e7b65%3A0xd18912a2cbfa1f69!2sEvergreen%20School%2C%20Halduchor!5e0!3m2!1sen!2sin!4v1694162418359!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
