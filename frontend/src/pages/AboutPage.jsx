import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Optional: npm install framer-motion

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="bg-slate-50 overflow-hidden">
      
      {/* HERO SECTION - Parallax Effect */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-fixed bg-cover bg-center scale-110"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 to-blue-900/60" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative text-center text-white max-w-4xl px-6"
        >
          <span className="uppercase tracking-widest text-blue-300 font-semibold text-sm mb-4 block">Welcome to Excellence</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Shaping the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Leaders</span> of Tomorrow
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
            At Infinity Classes, we don’t just teach subjects; we ignite curiosity and build the foundation for lifelong success.
          </p>
        </motion.div>
      </section>

      {/* STATS STRIP */}
      <div className="relative z-10 -mt-12 max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-2xl shadow-blue-900/10 grid grid-cols-2 md:grid-cols-4 p-8 gap-8 border border-slate-100">
          {[
            { label: "Success Rate", val: "98%" },
            { label: "Students", val: "5000+" },
            { label: "Expert Mentors", val: "50+" },
            { label: "Years Exp.", val: "12+" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-blue-700">{stat.val}</div>
              <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTENT SECTIONS */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        
        {/* Who We Are */}
        <motion.section {...fadeIn} className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-100 rounded-3xl -rotate-2 group-hover:rotate-0 transition duration-500" />
            <img
              src="https://images.unsplash.com/photo-1584697964358-3e14ca57658b"
              className="relative rounded-2xl shadow-2xl w-full object-cover h-[400px]"
              alt="Classroom"
            />
          </div>
          <div>
            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">Our Story</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">Empowering Students Through Disciplined Learning</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Infinity Classes is more than an institute. We are a community of educators and learners focused on delivering a result-oriented environment. 
            </p>
            <div className="h-1 w-20 bg-blue-600 rounded-full" />
          </div>
        </motion.section>

        {/* Mission - Reverse Grid */}
        <motion.section {...fadeIn} className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">Our Mission</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">Clarity, Mentoring, and Growth</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              We bridge the gap between "studying" and "understanding." Our mission is to make complex concepts simple and high-quality education accessible.
            </p>
            <div className="space-y-4">
              {['Personalized Mentoring', 'Concept Clarity', 'Regular Assessment'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">✓</span>
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2 relative group">
            <div className="absolute -inset-4 bg-slate-200 rounded-3xl rotate-2 group-hover:rotate-0 transition duration-500" />
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
              className="relative rounded-2xl shadow-2xl w-full object-cover h-[400px]"
              alt="Mission"
            />
          </div>
        </motion.section>

        {/* Features - Card Style */}
        <section className="py-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Infinity Classes?</h2>
            <p className="text-slate-500">The pillars that make us the preferred choice for students.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Expert Faculty", desc: "Learn from industry veterans and academic experts.", icon: "🎓" },
              { title: "Modern Facilities", desc: "A tech-enabled environment to facilitate learning.", icon: "🏫" },
              { title: "Doubt Support", desc: "Dedicated sessions for one-on-one problem solving.", icon: "💡" },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 bg-white border border-slate-100 rounded-2xl shadow-lg hover:shadow-blue-500/10 transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-slate-900">{feature.title}</h4>
                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* CALL TO ACTION - Modern Gradient */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-20" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to excel?</h2>
          <p className="text-blue-100/80 text-lg mb-10 max-w-xl mx-auto">
            Enroll today and start your journey toward academic mastery with guidance that actually works.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-500 shadow-xl shadow-blue-600/30 transition transform hover:scale-105"
            >
              Enroll Now
            </Link>
            <Link
              to="/results"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white/20 transition"
            >
              View Our Success
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}