// import { useState } from 'react';
// import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [formStatus, setFormStatus] = useState(null); // 'success', 'error', or null
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const validateForm = () => {
//     const { name, email, message } = formData;
    
//     if (!name.trim() || name.length < 2) {
//       return { isValid: false, error: 'Please enter a valid name (at least 2 characters).' };
//     }
    
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email.trim() || !emailRegex.test(email)) {
//       return { isValid: false, error: 'Please enter a valid email address.' };
//     }
    
//     if (!message.trim() || message.length < 10) {
//       return { isValid: false, error: 'Please enter a message (at least 10 characters).' };
//     }
    
//     return { isValid: true };
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const validation = validateForm();
//     if (!validation.isValid) {
//       setFormStatus({ type: 'error', message: validation.error });
//       return;
//     }

//     setIsSubmitting(true);
//     setFormStatus(null);

//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1500));
      
//       // Simulate random success/failure for demo
//       const success = Math.random() > 0.3;
      
//       if (success) {
//         setFormStatus({
//           type: 'success',
//           message: 'Thank you for your message! I\'ll get back to you soon.'
//         });
//         setFormData({ name: '', email: '', message: '' });
//       } else {
//         setFormStatus({
//           type: 'error',
//           message: 'Sorry, there was an error sending your message. Please try again.'
//         });
//       }
//     } catch (error) {
//       setFormStatus({
//         type: 'error',
//         message: 'Network error. Please check your connection and try again.'
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const contactInfo = [
//     {
//       icon: <Mail className="w-5 h-5" />,
//       label: "Email",
//       value: "krtk2806@gmail.com",
//       href: "mailto:krtk2806@gmail.com"
//     },
//     {
//       icon: <Phone className="w-5 h-5" />,
//       label: "Phone",
//       value: "+91 8712810150",
//       href: "tel:+91 8712810150"
//     },
//     {
//       icon: <MapPin className="w-5 h-5" />,
//       label: "Location",
//       value: "Andhra Pradesh , India",
//       href: null
//     }
//   ];

//   return (
//     <section id="contact" className="py-20 px-6 scroll-mt-navbar">
//       <div className="max-w-6xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
//             Get In <span className="text-gradient">Touch</span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Have a project in mind or want to collaborate? I'd love to hear from you.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div className="card-elegant rounded-2xl p-8">
//               <h3 className="text-2xl font-bold mb-6 text-gradient">Let's Connect</h3>
//               <p className="text-muted-foreground mb-8 leading-relaxed">
//                 I'm always open to discussing new opportunities, creative projects, or potential collaborations. 
//                 Whether you have a question about my work or want to explore working together, don't hesitate to reach out.
//               </p>
              
//               <div className="space-y-6">
//                 {contactInfo.map((info, index) => (
//                   <div key={info.label} className="flex items-center gap-4">
//                     <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
//                       {info.icon}
//                     </div>
//                     <div>
//                       <div className="font-medium text-foreground">{info.label}</div>
//                       {info.href ? (
//                         <a
//                           href={info.href}
//                           className="text-muted-foreground hover:text-primary transition-colors focus-ring rounded"
//                         >
//                           {info.value}
//                         </a>
//                       ) : (
//                         <div className="text-muted-foreground">{info.value}</div>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Response Time */}
//             <div className="card-elegant rounded-xl p-6">
//               <h4 className="font-semibold mb-2">Response Time</h4>
//               <p className="text-sm text-muted-foreground">
//                 I typically respond to messages within 24 hours during weekdays.
//               </p>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="card-elegant rounded-2xl p-8">
//             <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Name Field */}
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
//                   Name *
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
//                   placeholder="Your full name"
//                   required
//                 />
//               </div>

//               {/* Email Field */}
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
//                   Email *
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
//                   placeholder="your.email@example.com"
//                   required
//                 />
//               </div>

//               {/* Message Field */}
//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
//                   Message *
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   rows={6}
//                   className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-none"
//                   placeholder="Tell me about your project or ask me anything..."
//                   required
//                 />
//               </div>

//               {/* Status Message */}
//               {formStatus && (
//                 <div className={`flex items-center gap-3 p-4 rounded-lg ${
//                   formStatus.type === 'success' 
//                     ? 'bg-green-50 text-green-800 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800'
//                     : 'bg-red-50 text-red-800 border border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800'
//                 }`}>
//                   {formStatus.type === 'success' ? (
//                     <CheckCircle className="w-5 h-5" />
//                   ) : (
//                     <AlertCircle className="w-5 h-5" />
//                   )}
//                   <span className="text-sm">{formStatus.message}</span>
//                 </div>
//               )}

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full btn-primary px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
//                     Sending...
//                   </>
//                 ) : (
//                   <>
//                     Send Message
//                     <Send className="w-4 h-4" />
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;