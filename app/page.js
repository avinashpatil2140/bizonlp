"use client";
import { motion } from "framer-motion";
import { useState } from "react";

// Animation definitions (accessible to all components)
const fadeUp = {
  hidden:{opacity:0,y:40},
  visible:{opacity:1,y:0,transition:{duration:0.6}}
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function Home() {

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return(
    <main className="bg-white text-gray-900">

        {/* NAVBAR */}
        <nav className="sticky top-0 bg-white/80 backdrop-blur-lg border-b z-50 shadow-sm">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
            <a href="/" className="hover:opacity-80 transition flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-[#F97316] to-[#2563EB] rounded-lg flex items-center justify-center font-bold text-white text-xl">
                B
              </div>
              <div>
                <h2 className="font-black text-xl text-[#F97316] leading-tight">BIZON</h2>
                <h3 className="font-bold text-xs text-[#2563EB] leading-tight">DIGITAL</h3>
              </div>
            </a>
            <div className="hidden md:flex gap-8 text-sm font-semibold">
              <a href="/#home" className="hover:text-[#F97316] transition">Home</a>
              <a href="/#services" className="hover:text-[#F97316] transition">Services</a>
              <a href="https://bizondigital.com/about" className="hover:text-[#F97316] transition">About</a>
              <a href="https://bizondigital.com/blog" className="hover:text-[#F97316] transition">Blog</a>
              <a href="https://bizondigital.com/contact" className="hover:text-[#F97316] transition">Contact</a>
            </div>
            <a href="https://bizondigital.com/contact"
               className="bg-[#F97316] text-white px-6 py-2 rounded-full font-bold hover:bg-orange-700 transition shadow-md">
               Get Free Quote
            </a>
          </div>
        </nav>

        {/* HERO */}
        <section id="home" className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-32 px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible"
            className="max-w-5xl mx-auto">

            <motion.h1 className="text-4xl md:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-[#F97316]"
              variants={fadeUp}>
              E-Commerce Website Development Pune That Drives Real Sales
            </motion.h1>

            <motion.p className="mt-8 text-lg text-gray-600"
              variants={fadeUp}>
              Expert e-commerce website development in Pune specializing in online store setup, payment integration,
              and sales optimization. We build high-converting e-commerce websites that increase sales, improve customer experience,
              and scale your online business using proven, data-driven strategies.
            </motion.p>

            <motion.div className="flex flex-col md:flex-row gap-4 justify-center mt-10"
              variants={staggerContainer} initial="hidden" animate="visible">
              <motion.a href="https://bizondigital.com/contact"
                 className="bg-[#F97316] text-white px-10 py-4 rounded-full font-bold hover:bg-orange-700 hover:shadow-xl transition transform hover:-translate-y-1 text-center"
                 variants={scaleUp}>
                🎯 Free Marketing Audit
              </motion.a>

              <motion.a href="https://bizondigital.com/services"
                 className="border-2 border-[#F97316] text-[#F97316] px-10 py-4 rounded-full font-bold hover:bg-[#F97316] hover:text-white transition text-center"
                 variants={scaleUp}>
                Explore Our Services
              </motion.a>

              <motion.a href="https://wa.me/917030323838?text=Hello!%20I%27m%20interested%20in%20business%20website%20design%20services%20in%20Pune."
                className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold hover:bg-gray-800 hover:shadow-xl transition transform hover:-translate-y-1 text-center"
                variants={scaleUp}>
                📞 Schedule Free Call
              </motion.a>
            </motion.div>

            <motion.p className="mt-6 text-sm text-gray-500" variants={fadeUp}>
              ⭐ 4.9/5 Average Rating | 25+ Awards | 120+ Successful Projects | 8+ Years Experience
            </motion.p>
          </motion.div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{once: true}}>
              <h2 className="text-4xl font-extrabold mb-6">
                Why Choose BizOn Digital - E-Commerce Website Development Pune?
              </h2>

              <p className="text-gray-600 max-w-3xl mx-auto">
                As Pune's leading e-commerce website development experts, we combine stunning design with proven sales strategies
                to build online stores that convert. Our methodology ensures seamless checkout, secure payments, and maximized revenue.
              </p>
            </motion.div>

            <motion.div className="grid md:grid-cols-3 gap-8 mt-14" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once: true}}>
            <Feature title="🛒 E-Commerce Expertise"
            desc="Specialized in building high-converting online stores with secure payments, inventory management, and sales optimization for Pune businesses."/>
            <Feature title="💰 Sales-Focused Design"
            desc="Our e-commerce websites are built to maximize conversions, reduce cart abandonment, and increase average order value consistently."/>
            <Feature title="🔧 Complete E-Commerce Solutions"
            desc="From store setup to payment integration to marketing - everything you need to scale your online retail business."/>
            </motion.div>
          </div>
        </section>

        {/* TRUSTED CLIENTS */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-8">
              Trusted by 120+ Online Stores Across Pune & India
            </h3>
            <motion.div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once: true}}>
              <ClientLogo name="Tech Solutions"/>
              <ClientLogo name="Digital First"/>
              <ClientLogo name="Eco Partners"/>
              <ClientLogo name="Smart Future"/>
              <ClientLogo name="Commerce Peak"/>
              <ClientLogo name="Brand Labs"/>
            </motion.div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-24 px-6" id="services">
          <div className="max-w-7xl mx-auto">

            <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" variants={fadeUp} viewport={{once: true}}>
              <h2 className="text-4xl font-extrabold mb-4">
                E-Commerce Website Development & Digital Marketing Services Pune
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Complete e-commerce solutions for retailers looking to build or scale their online store
              </p>
            </motion.div>

            <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once: true}}>

              <ServiceCard title="�️ E-Commerce Store Development"
                url="https://bizondigital.com/services/ecommerce"
                desc="Custom online store development with secure payments, inventory management, and mobile-optimized checkout for Pune retailers."/>

              <ServiceCard title="💳 Payment Gateway Integration"
                url="https://bizondigital.com/services/ecommerce"
                desc="Seamless integration of PayPal, Stripe, Razorpay, and local payment options. Secure, fast, and reliable transactions."/>

              <ServiceCard title="📊 Sales Analytics & Optimization"
                url="https://bizondigital.com/services/ecommerce"
                desc="Real-time sales tracking, customer behavior analysis, and conversion rate optimization to maximize revenue."/>

              <ServiceCard title="🔍 E-Commerce SEO"
                url="https://bizondigital.com/services/seo"
                desc="Product page optimization, schema markup, and strategies to rank your products higher in search results."/>

              <ServiceCard title="📱 Mobile Store Optimization"
                url="https://bizondigital.com/services/web-development"
                desc="Fully responsive e-commerce design ensuring perfect shopping experience on phones and tablets."/>

              <ServiceCard title="🚀 E-Commerce Marketing"
                url="https://bizondigital.com/services/social-media"
                desc="Email marketing, social commerce, and campaigns designed to increase sales and customer lifetime value."/>

            </motion.div>

            <motion.div className="text-center mt-12" initial="hidden" whileInView="visible" variants={fadeUp} viewport={{once: true}}>
              <a href="https://bizondigital.com/services" className="inline-block bg-[#F97316] text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 transition hover:shadow-lg">
                View All Services →
              </a>
            </motion.div>

          </div>
        </section>

        {/* ABOUT */}
        <section className="py-24 px-6" id="about">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{once: true}}>
              <h2 className="text-4xl font-extrabold mb-6">
                About BizOn Digital - E-Commerce Website Development Experts Pune
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                We are e-commerce website development specialists in Pune dedicated to helping online retailers scale their business.
                Since 2017, we've helped 120+ brands like yours increase sales through custom store development, payment integration, and conversion optimization.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Our team combines technical expertise in e-commerce development with deep understanding of online sales optimization,
                ensuring every store we build is not just stunning, but also generates real revenue for your business.
              </p>

              <div className="flex gap-4 mt-8">
                <a href="https://bizondigital.com/contact"
                  className="inline-block bg-[#F97316] text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 hover:shadow-lg transition">
                  📞 Free Consultation
                </a>
                <a href="https://bizondigital.com/about"
                  className="inline-block border-2 border-[#F97316] text-[#F97316] px-8 py-3 rounded-full font-bold hover:bg-orange-50 transition">
                  Learn More
                </a>
              </div>
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once: true}}>
              <Stat number="120+" label="Happy Clients"/>
              <Stat number="⭐ 4.9" label="Average Rating"/>
              <Stat number="8+" label="Years in Business"/>
              <Stat number="98%" label="Success Rate"/>
            </motion.div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" variants={fadeUp} viewport={{once: true}}>
              <h2 className="text-4xl font-extrabold mb-4">
                How We Build E-Commerce Stores - Development Process
              </h2>
              <p className="text-gray-600">
                Our proven 6-step process ensures your store is built for sales, conversions, and scaling
              </p>
            </motion.div>

            <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once: true}}>
              <Process num="01" title="Discovery" desc="Understand your products, target customers, and competitive landscape."/>
              <Process num="02" title="Strategy" desc="Build e-commerce roadmap with payment, inventory, and marketing strategy."/>
              <Process num="03" title="Store Development" desc="Develop secure, fast, mobile-optimized e-commerce store with integrations."/>
              <Process num="04" title="Payment & Integrations" desc="Set up payment gateways, inventory management, and shipping solutions."/>
              <Process num="05" title="Launch" desc="Deploy your store, configure analytics, and set up email marketing."/>
              <Process num="06" title="Growth & Optimization" desc="Monitor sales, optimize conversions, and scale through data-driven improvements."/>
            </motion.div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 px-6 bg-gradient-to-br from-orange-50 to-white" id="testimonials">
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" variants={fadeUp} viewport={{once: true}}>
              <h2 className="text-4xl font-extrabold mb-4">
                Success Stories from Our E-Commerce Clients
              </h2>

              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover how online retailers in Pune and across India have scaled their sales with our e-commerce development expertise.
              </p>
            </motion.div>

            <Testimonials currentIndex={currentTestimonial} setCurrentIndex={setCurrentTestimonial}/>

            <motion.div className="text-center mt-12" initial="hidden" whileInView="visible" variants={fadeUp} viewport={{once: true}}>
              <a href="https://bizondigital.com/contact"
                 className="inline-block bg-[#F97316] text-white px-10 py-4 rounded-full font-bold hover:bg-orange-700 hover:shadow-lg transition">
                 ✨ Start Your Success Story
              </a>
            </motion.div>
          </div>
        </section>

        {/* TEAM */}
        <section className="bg-gray-50 py-24 px-6" id="team">
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" variants={fadeUp} viewport={{once: true}}>
              <h2 className="text-4xl font-extrabold mb-4">
                Meet Our Leadership Team
              </h2>
              <p className="text-gray-600">
                Expert professionals dedicated to your digital success
              </p>
            </motion.div>

            <motion.div className="grid md:grid-cols-2 gap-12" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once: true}}>
              <TeamMember name="Rahul Wanchoo" title="Founder & E-Commerce Strategist" desc="E-commerce specialist with proven expertise in scaling online stores. Passionate about helping brands maximize sales through optimized store design and data-driven strategies."/>
              <TeamMember name="Suresh Khorate" title="Lead Developer & UX Designer" desc="Expert in building high-performance e-commerce stores that convert. Specializes in payment integration, mobile optimization, and creating exceptional shopping experiences."/>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-24 px-6" id="faq">
          <div className="max-w-4xl mx-auto">
            <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" variants={fadeUp} viewport={{once: true}}>
              <h2 className="text-4xl font-extrabold mb-4">
                E-Commerce Website Development Questions
              </h2>
              <p className="text-gray-600">
                Common questions about our e-commerce store development and online sales optimization services
              </p>
            </motion.div>

            <motion.div className="space-y-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once: true}}>
              <FAQItem q="What payment gateways do you integrate?"
                a="We integrate Razorpay, Stripe, PayPal, and other local payment options. All integrations are secure, PCI-compliant, and optimized for maximum conversion rates."/>

              <FAQItem q="How can you help increase my online sales?"
                a="Through optimized product pages, conversion rate optimization, strategic SEO, mobile store optimization, and email marketing automation tailored for e-commerce."/>

              <FAQItem q="Can you help with cart abandonment issues?"
                a="Absolutely! We implement abandoned cart recovery strategies, one-click checkout, guest purchasing options, and re-engagement campaigns to recover lost sales."/>

              <FAQItem q="What is your e-commerce SEO expertise?"
                a="We specialize in product page optimization, schema markup, keyword research for products, inventory-focused SEO strategies, and competitive analysis to rank your products higher."/>

              <FAQItem q="How quickly can I start selling online?"
                a="Most stores launch in 4-6 weeks. We handle everything from store setup, payment integration, to product uploading and marketing campaign setup."/>

              <FAQItem q="Do you provide post-launch support?"
                a="Yes! We offer ongoing support including sales optimization, store updates, security monitoring, and performance analytics to maximize your revenue continuously."/>
            </motion.div>
          </div>
        </section>

        {/* CTA - Contact Section */}
        <section className="py-24 px-6 bg-gradient-to-r from-[#F97316] via-orange-500 to-red-500 text-white" id="contact">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{once: true}}>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                Ready To Launch Your E-Commerce Store?
              </h2>

              <p className="text-xl opacity-95 mb-10">
                Schedule your FREE 30-minute consultation with our e-commerce specialists in Pune. 
                Get a customized store strategy, competitor analysis, and sales optimization recommendations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/917030323838?text=Hello!%20I%27m%20interested%20in%20responsive%20website%20design%20and%20digital%20marketing%20services%20in%20Pune."
                   className="bg-white text-[#F97316] px-10 py-4 rounded-full font-bold hover:shadow-xl transition transform hover:-translate-y-1 text-center">
                   💬 Message on WhatsApp
                </a>
                <a href="tel:+917030323838"
                  className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold hover:bg-gray-800 transition transform hover:-translate-y-1 text-center">
                  📞 Call: +91 7030323838
                </a>
              </div>

              <div className="mt-10 pt-10 border-t border-white/20 flex flex-col sm:flex-row justify-center gap-8 text-sm">
                <div>
                  <p className="font-bold text-lg">🏢 Based in Pune</p>
                  <p className="opacity-90">Serving businesses across India</p>
                </div>
                <div>
                  <p className="font-bold text-lg">⭐ 4.9/5 Rating</p>
                  <p className="opacity-90">From 120+ happy clients</p>
                </div>
                <div>
                  <p className="font-bold text-lg">🚀 8+ Years</p>
                  <p className="opacity-90">Proven track record</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FINAL CTA - Dark Background */}
        <section className="py-16 px-6 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{once: true}}>
              <h3 className="text-2xl font-extrabold mb-6">
                💡 Have a Project Idea?
              </h3>

              <p className="text-gray-300 mb-8">
                Let's discuss how BizOn Digital can transform your online presence and accelerate your business growth
              </p>

              <a href="https://bizondigital.com/contact"
                className="inline-block bg-[#F97316] text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 transition">
                Start Your Free Consultation
              </a>
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-white py-16 px-6 border-t-4 border-[#F97316]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F97316] to-[#2563EB] rounded-lg flex items-center justify-center font-bold text-white text-lg">
                    B
                  </div>
                  <div>
                    <h3 className="font-black text-sm text-[#F97316] leading-tight">BIZON</h3>
                    <h4 className="font-bold text-xs text-[#2563EB] leading-tight">DIGITAL</h4>
                  </div>
                </div>
                <p className="text-gray-400">E-commerce website development in Pune. We build high-converting online stores with secure payments, inventory management, and strategies that drive sales growth.</p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
                <ul className="space-y-3">
                  <li><a href="/#home" className="text-gray-400 hover:text-[#F97316] transition">Home</a></li>
                  <li><a href="https://bizondigital.com/services" className="text-gray-400 hover:text-[#F97316] transition">Services</a></li>
                  <li><a href="https://bizondigital.com/about" className="text-gray-400 hover:text-[#F97316] transition">About Us</a></li>
                  <li><a href="https://bizondigital.com/blog" className="text-gray-400 hover:text-[#F97316] transition">Blog</a></li>
                  <li><a href="https://bizondigital.com/contact" className="text-gray-400 hover:text-[#F97316] transition">Contact</a></li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-bold text-lg mb-4 text-white">Services</h4>
                <ul className="space-y-3">
                  <li><a href="https://bizondigital.com/services/seo" className="text-gray-400 hover:text-[#F97316] transition">SEO</a></li>
                  <li><a href="https://bizondigital.com/services/paid-ads" className="text-gray-400 hover:text-[#F97316] transition">Paid Ads</a></li>
                  <li><a href="https://bizondigital.com/services/social-media" className="text-gray-400 hover:text-[#F97316] transition">Social Media</a></li>
                  <li><a href="https://bizondigital.com/services/branding" className="text-gray-400 hover:text-[#F97316] transition">Branding</a></li>
                  <li><a href="https://bizondigital.com/services/web-development" className="text-gray-400 hover:text-[#F97316] transition">Web Development</a></li>
                  <li><a href="https://bizondigital.com/services/ecommerce" className="text-gray-400 hover:text-[#F97316] transition">E-Commerce</a></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-bold text-lg mb-4 text-white">Support</h4>
                <ul className="space-y-3">
                  <li><a href="https://bizondigital.com/faq" className="text-gray-400 hover:text-[#F97316] transition">FAQ</a></li>
                  <li><a href="https://bizondigital.com/contact" className="text-gray-400 hover:text-[#F97316] transition">Contact Us</a></li>
                  <li><a href="https://bizondigital.com/terms" className="text-gray-400 hover:text-[#F97316] transition">Terms & Conditions</a></li>
                  <li><a href="https://bizondigital.com/privacy" className="text-gray-400 hover:text-[#F97316] transition">Privacy Policy</a></li>
                  <li><a href="https://bizondigital.com/refund" className="text-gray-400 hover:text-[#F97316] transition">Refund Policy</a></li>
                  <li><a href="https://bizondigital.com/help" className="text-gray-400 hover:text-[#F97316] transition">Help Desk</a></li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 pt-8 mt-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Contact Info */}
                <div>
                  <p className="text-gray-400 mb-2">📞 Contact Us</p>
                  <a href="tel:+917030323838" className="text-[#F97316] font-bold hover:underline text-lg">+91 7030323838</a>
                  <p className="text-gray-400 text-sm mt-1">Business Hours: 10 AM - 6 PM</p>
                </div>

                {/* Social Media */}
                <div className="text-center">
                  <p className="text-gray-400 mb-3">Follow Us On Social Media</p>
                  <div className="flex gap-4 justify-center">
                    <a href="https://facebook.com" target="_blank" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#F97316] transition" rel="noopener noreferrer">f</a>
                    <a href="https://twitter.com" target="_blank" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#F97316] transition" rel="noopener noreferrer">𝕏</a>
                    <a href="https://linkedin.com" target="_blank" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#F97316] transition" rel="noopener noreferrer">in</a>
                    <a href="https://instagram.com" target="_blank" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#F97316] transition" rel="noopener noreferrer">📷</a>
                  </div>
                </div>

                {/* Copyright */}
                <div className="text-right text-gray-400 text-sm">
                  <p>© 2025 BizOn Digital</p>
                  <p>E-Commerce Website Development Pune</p>
                  <p>All rights reserved</p>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </main>
  );
}

/* COMPONENTS */

function Feature({title,desc}){
  return(
    <motion.div className="p-10 rounded-3xl border bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition" variants={scaleUp}>
      <h3 className="font-bold text-xl mb-3 text-[#F97316]">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </motion.div>
  )
}

function ServiceCard({title,desc,url}){
  return(
    <motion.a href={url}
      className="group bg-white/80 backdrop-blur p-10 rounded-3xl border border-gray-200 hover:shadow-2xl hover:-translate-y-3 hover:bg-white transition block" variants={scaleUp}>
      <h3 className="font-bold text-xl mb-4 group-hover:text-[#F97316] transition">{title}</h3>
      <p className="text-gray-600">{desc}</p>
      <div className="mt-4 inline-block group-hover:translate-x-2 transition">→</div>
    </motion.a>
  )
}

function Stat({number,label}){
  return(
    <motion.div className="p-8 border border-gray-200 rounded-3xl text-center bg-white hover:shadow-lg hover:border-[#F97316] transition" variants={scaleUp}>
      <h4 className="text-4xl font-extrabold text-[#F97316]">{number}</h4>
      <p className="text-gray-600 mt-2 font-semibold">{label}</p>
    </motion.div>
  )
}

function Process({num,title,desc}){
  return(
    <motion.div className="p-10 border-2 border-gray-200 rounded-3xl bg-white hover:border-[#F97316] hover:shadow-lg transition group" variants={scaleUp}>
      <div className="text-4xl font-extrabold text-[#F97316] mb-4">{num}</div>
      <h4 className="font-bold text-xl mb-2 group-hover:text-[#F97316]">{title}</h4>
      <p className="text-gray-600">{desc}</p>
    </motion.div>
  )
}

function ClientLogo({name}){
  return(
    <motion.div className="flex items-center justify-center p-6 border rounded-lg hover:shadow-md transition bg-white" variants={scaleUp}>
      <div className="text-sm font-bold text-gray-600">{name}</div>
    </motion.div>
  )
}

const testimonialData = [
  {
    company: "Online Fashion Boutique",
    name: "Priya Sharma",
    stars: 5,
    text: "BizOn Digital built our e-commerce store and within 3 months, our online sales tripled! Their payment integration and SEO optimization made a huge difference. Best investment for our business!"
  },
  {
    company: "Artisan Coffee Co",
    name: "Rohan Patel",
    stars: 5,
    text: "Our conversion rate jumped from 1.2% to 4.8% after they optimized our store. Their e-commerce expertise is unmatched. The mobile store experience is flawless!"
  },
  {
    company: "Electronics Retail Store",
    name: "Neha Desai",
    stars: 5,
    text: "Incredible work on our online store! The payment gateway integration is smooth, inventory management works perfectly, and our monthly revenue increased by 250% in 6 months!"
  },
  {
    company: "Organic Beauty Products",
    name: "Aisha Khan",
    stars: 5,
    text: "From zero to ₹5 lakhs monthly sales in 9 months. Their e-commerce marketing strategies and conversion optimization are outstanding. Highly professional team!"
  },
  {
    company: "Home Decor Exports",
    name: "Vikram Singh",
    stars: 5,
    text: "Fantastic e-commerce development! They integrated Razorpay seamlessly, optimized our product pages for search, and our online sales are now our primary revenue stream. Exceptional!"
  }
];

function Testimonials({currentIndex, setCurrentIndex}){
  const current = testimonialData[currentIndex];
  
  return(
    <motion.div className="bg-white border-2 border-gray-200 rounded-3xl p-10 md:p-16 max-w-2xl mx-auto" 
      initial="hidden" whileInView="visible" variants={scaleUp} viewport={{once: true}}>
      <div className="flex gap-1 mb-6">
        {[...Array(current.stars)].map((_, i) => <span key={i} className="text-2xl">⭐</span>)}
      </div>
      
      <p className="text-2xl font-bold mb-6 text-gray-900">"{current.text}"</p>
      
      <div className="border-t pt-6">
        <p className="font-bold text-[#F97316]">{current.company}</p>
        <p className="text-gray-700">{current.name}</p>
      </div>

      <div className="flex gap-2 justify-center mt-8">
        {testimonialData.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition ${index === currentIndex ? 'bg-[#F97316] w-8' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </motion.div>
  )
}

function TeamMember({name, title, desc}){
  return(
    <motion.div className="bg-white border-2 border-gray-200 rounded-3xl p-10 hover:shadow-xl hover:border-[#F97316] transition" variants={scaleUp}>
      <div className="w-20 h-20 bg-gradient-to-br from-[#F97316] to-orange-600 rounded-full mx-auto mb-6"></div>
      <h3 className="text-2xl font-bold text-center mb-2">{name}</h3>
      <p className="text-[#F97316] font-semibold text-center text-sm mb-4">{title}</p>
      <p className="text-gray-600 text-center">{desc}</p>
    </motion.div>
  )
}

function FAQItem({q, a}){
  const [open, setOpen] = useState(false);
  
  return(
    <motion.div className="border-2 border-gray-200 rounded-2xl p-6 hover:border-[#F97316] transition cursor-pointer" 
      onClick={() => setOpen(!open)} variants={fadeUp}>
      <div className="flex justify-between items-start">
        <h4 className="font-bold text-lg text-gray-900">{q}</h4>
        <span className="text-2xl text-[#F97316]">{open ? '−' : '+'}</span>
      </div>
      {open && (
        <motion.p className="text-gray-600 mt-4 leading-relaxed" initial={{opacity: 0}} animate={{opacity: 1}}>
          {a}
        </motion.p>
      )}
    </motion.div>
  );
}
