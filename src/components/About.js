import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Heart, Shield, Users } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const features = [
    {
      icon: Award,
      title: "6+ Years Experience",
      description: "Extensive experience in chiropractic and osteopathic treatments"
    },
    {
      icon: Heart,
      title: "Natural Healing",
      description: "Drug-free and surgery-free approach to wellness"
    },
    {
      icon: Shield,
      title: "European Training",
      description: "Trained from Sweden, Europe with international standards"
    },
    {
      icon: Users,
      title: "Patient-Centered",
      description: "Personalized care focused on your unique needs"
    }
  ];

  return (
    <section id="about" ref={ref} className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-gradient">Dr. Chandra</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Dedicated to providing exceptional chiropractic and osteopathic care with a focus on natural healing methods.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
  src="/images/image8.jpg"
  alt="Dr. Chandra - Chiropractic & Osteopathy"
  className="w-full h-96 object-cover object-[center_20%]"
/>


              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">Dr. Chandra</h3>
                <p className="text-lg">Chiropractic & Osteopathy Specialist</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
                         <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
               Your Journey to Natural Healing Starts Here
             </h3>
             
             <div className="space-y-4 text-gray-600 dark:text-gray-300">
               <p className="text-lg leading-relaxed">
               <section>
  <p>
    With over 6 years of dedicated experience in chiropractic and osteopathic medicine, I bring European-trained expertise to Haldwani, providing natural healing solutions that address the root cause of your health concerns.
  </p>

  <p>
    My approach focuses on drug-free and surgery-free treatments, utilizing advanced chiropractic techniques and osteopathic principles to restore your body's natural balance and promote optimal wellness.
  </p>

  <p>
    Trained in Sweden, Europe, I combine international standards with personalized care, ensuring each patient receives treatment tailored to their unique needs and health goals.
  </p>

  <h3>Qualifications &amp; Training:</h3>
  <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
    <li>Osteopathy and Chiropractic (Sweden)</li>
    <li>Master of Chiropractic and Osteopathy (Europe)</li>
    <li>Double Master of Chiropractic (Europe)</li>
  </ul>
</section>




               </p>
               
               <p className="text-lg leading-relaxed">
                
               </p>
               
               <p className="text-lg leading-relaxed">
                
               </p>
             </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.button
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Our Services
              </motion.button>
              <motion.button
                className="bg-white hover:bg-gray-50 text-green-600 font-semibold py-3 px-6 rounded-lg border-2 border-green-600 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#testimonials');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Patient Stories
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
                         <motion.div
               key={feature.title}
               initial={{ opacity: 0, y: 20 }}
               animate={inView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
               className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg card-hover"
             >
               <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                 <feature.icon className="w-8 h-8 text-green-600 dark:text-green-400" />
               </div>
               <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                 {feature.title}
               </h3>
               <p className="text-gray-600 dark:text-gray-300">
                 {feature.description}
               </p>
             </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About; 