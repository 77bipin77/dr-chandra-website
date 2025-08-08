import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, MapPin, Phone, Calendar, X } from 'lucide-react';

const ClinicHours = () => {
    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });


  const schedule = [
    { day: 'Monday', time: '9:00 AM – 2:00 PM, 4:00 PM – 6:00 PM', status: 'open' },
    { day: 'Tuesday', time: '9:00 AM – 2:00 PM, 4:00 PM – 6:00 PM', status: 'open' },
    { day: 'Wednesday',time: 'Closed', status: 'closed' } ,
    { day: 'Thursday', time: '9:00 AM – 2:00 PM, 4:00 PM – 6:00 PM', status: 'open' },
    { day: 'Friday', time: '9:00 AM – 2:00 PM, 4:00 PM – 6:00 PM', status: 'open' },
    { day: 'Saturday', time: '9:00 AM – 2:00 PM, 4:00 PM – 6:00 PM', status: 'open' },
  ];

  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };

  const isToday = (day) => day === getCurrentDay();

  return (
    <section
  id="hours"
  ref={ref}
  className="section-padding bg-gray-50 dark:bg-gray-800"
>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Clinic <span className="text-gradient">Hours</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Plan your visit with our convenient schedule. We're here to help you on your healing journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Schedule Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
                             <div>
                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Opening Hours</h3>
                 <p className="text-gray-600 dark:text-gray-300">Monday to Saturday</p>
               </div>
            </div>

            <div className="space-y-4">
              {schedule.map((item, index) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                     className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-300 ${
                     isToday(item.day)
                       ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                       : item.status === 'closed'
                       ? 'border-red-200 bg-red-50 dark:bg-red-900/20'
                       : 'border-gray-200 dark:border-gray-600 hover:border-green-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                   }`}
                >
                  <div className="flex items-center space-x-3">
                                         <span className={`font-semibold ${
                       isToday(item.day) ? 'text-green-700' : 'text-gray-900'
                     }`}>
                      {item.day}
                    </span>
                                         {isToday(item.day) && (
                       <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                         Today
                       </span>
                     )}
                  </div>
                  <div className="flex items-center space-x-2">
                    {item.status === 'closed' ? (
                      <X className="w-5 h-5 text-red-500" />
                                         ) : (
                       <Clock className="w-5 h-5 text-green-600" />
                     )}
                                         <span className={`font-medium ${
                       item.status === 'closed' ? 'text-red-600 dark:text-red-400' : 'text-gray-700 dark:text-gray-300'
                     }`}>
                       {item.time}
                     </span>
                  </div>
                </motion.div>
              ))}
            </div>

                         <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
               <div className="flex items-center space-x-2 mb-2">
                 <Calendar className="w-5 h-5 text-green-600 dark:text-green-400" />
                 <span className="font-semibold text-green-800 dark:text-green-200">Appointment Required</span>
               </div>
               <p className="text-green-700 dark:text-green-300 text-sm">
                 Please call or book online to schedule your appointment. Walk-ins may be accommodated based on availability.
               </p>
             </div>
          </motion.div>

          {/* Contact & Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
                         {/* Location Card */}
             <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
               <div className="flex items-center space-x-3 mb-6">
                 <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                   <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Location</h3>
                   <p className="text-gray-600 dark:text-gray-300">Easy to find</p>
                 </div>
               </div>
               
               <div className="space-y-4">
                 <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                   <strong>Address:</strong><br />
                   jai bhagirathi colony 
                   Halduchor near Evergreen School<br />
                   Haldwani, Nainital<br />
                   Uttarakhand, India
                 </p>
                 
                 <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                   <MapPin className="w-4 h-4" />
                   <span className="text-sm">Near Evergreen School, easily accessible</span>
                 </div>
               </div>
             </div>
             <div className="mt-8 max-w-md mx-auto">
  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
    📍 Clinic Location
  </h3>
  <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13817.370405354304!2d79.4465716!3d29.3909466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390aee9f6d3d7633%3A0x408849bd8bcbf10a!2sDr.%20Chandra%20Heals!5e0!3m2!1sen!2sin!4v1691680145993!5m2!1sen!2sin"
      width="100%"
      height="250"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Clinic Location"
    ></iframe>
  </div>
</div>

            {/* Contact Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Contact</h3>
                  <p className="text-gray-600 dark:text-gray-300">Get in touch</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                    <a href="tel:8077531426" className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300">
                      8077531426
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">W</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">WhatsApp</p>
                    <a 
                      href="https://wa.me/918077531426" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
                    >
                      +91 8077531426
                    </a>
                  </div>
                </div>
              </div>
            </div>

                         {/* Quick Actions */}
             <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Healing Journey?</h3>
              <p className="mb-6 opacity-90">
                Book your appointment today and take the first step towards natural healing and wellness.
              </p>
                             <motion.button
                 className="bg-white text-green-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={() => {
                   const element = document.querySelector('#appointment');
                   if (element) element.scrollIntoView({ behavior: 'smooth' });
                 }}
               >
                 Book Appointment Now
               </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClinicHours; 