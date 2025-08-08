import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Activity, 
  Heart, 
  Zap, 
  Shield, 
  Users, 
  Target,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const services = [
    {
      icon: Activity,
      title: "Chiropractic Adjustments",
      description: "Professional spinal adjustments to restore proper alignment and relieve pain",
      benefits: [
        "Relieves back and neck pain",
        "Improves posture and mobility",
        "Reduces nerve interference",
        "Enhances overall wellness"
      ],
      image: "https://media.istockphoto.com/id/1461352916/photo/sportsman-patient-undergoing-physical-therapy-in-clinic-to-recover-from-surgery-and-increase.jpg?s=612x612&w=0&k=20&c=QSxVbZ6MlMJCGwpgUuM7VqawpKDkXSOWFQTn_pQSb68="
    },
    {
      icon: Heart,
      title: "Osteopathic Treatment",
      description: "Holistic approach focusing on the body's natural ability to heal itself",
      benefits: [
        "Addresses root cause of pain",
        "Improves circulation and lymphatic flow",
        "Reduces muscle tension",
        "Promotes natural healing"
      ],
      image: "https://media.istockphoto.com/id/1253237313/photo/doctor-physiotherapist-doing-healing-treatment-on-mans-back-back-pain-patient-treatment.jpg?s=612x612&w=0&k=20&c=v3rE8DuXaeGP1Htv6ePnXDmQL-aRxbE46UhV_DedFdY="
    },
    {
      icon: Zap,
      title: "Pain Management",
      description: "Comprehensive pain relief strategies without medication or surgery",
      benefits: [
        "Non-invasive treatment options",
        "Long-term pain relief",
        "Improved quality of life",
        "Prevents future complications"
      ],
      image: "https://media.istockphoto.com/id/1135761958/photo/physiotherapist-massaging-young-woman.jpg?s=612x612&w=0&k=20&c=SfCYKix5c2uyvOqf1W64lR9LbzlShBfgaUOl9F6kx70="
    },
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Proactive wellness programs to maintain optimal health and prevent issues",
      benefits: [
        "Maintains spinal health",
        "Prevents future injuries",
        "Improves overall wellness",
        "Educational guidance"
      ],
      image: "https://lotusdiagnostic.com/wp-content/uploads/2023/01/close-up-doctor-with-stethoscope.jpg"
    }
  ];

  const whyChooseUs = [
    "6+ years of specialized experience",
    "European-trained expertise",
    "Drug-free and surgery-free approach",
    "Personalized treatment plans",
    "Modern, comfortable facility",
    "Comprehensive patient care"
  ];

  return (
    <section id="services" ref={ref} className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive chiropractic and osteopathic treatments designed to restore your natural health and wellness.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
                             className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                 {service.title}
               </h3>
               <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                 {service.description}
               </p>
               
               <div className="space-y-3">
                 <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Benefits:</h4>
                 {service.benefits.map((benefit, idx) => (
                   <div key={idx} className="flex items-center space-x-3">
                     <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                     <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                   </div>
                 ))}
               </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
                     className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-8 md:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                             <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                 Why Choose Dr. Chandra?
               </h3>
               <div className="grid md:grid-cols-2 gap-4">
                 {whyChooseUs.map((item, index) => (
                   <div key={index} className="flex items-center space-x-3">
                     <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                     <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                   </div>
                 ))}
               </div>
              
              <motion.button
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#appointment');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book Your Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
            
                         <div className="relative">
               <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                 <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                   Treatment Approach
                 </h4>
                 <div className="space-y-4">
                   <div className="flex items-start space-x-3">
                     <Target className="w-6 h-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                     <div>
                       <h5 className="font-semibold text-gray-900 dark:text-white">Assessment</h5>
                       <p className="text-gray-600 dark:text-gray-300 text-sm">Comprehensive evaluation of your condition</p>
                     </div>
                   </div>
                   <div className="flex items-start space-x-3">
                     <Users className="w-6 h-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                     <div>
                       <h5 className="font-semibold text-gray-900 dark:text-white">Personalized Plan</h5>
                       <p className="text-gray-600 dark:text-gray-300 text-sm">Customized treatment strategy for your needs</p>
                     </div>
                   </div>
                   <div className="flex items-start space-x-3">
                     <Heart className="w-6 h-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                     <div>
                       <h5 className="font-semibold text-gray-900 dark:text-white">Natural Healing</h5>
                       <p className="text-gray-600 dark:text-gray-300 text-sm">Drug-free and surgery-free approach</p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;