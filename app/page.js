"use client";
import { motion } from "framer-motion";
import Head from "next/head";
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
    <>
      <Head>
        <title>Responsive Website Designers in Pune | Business Website Designers Pune</title>
        <meta name="description"
        content="BizOn Digital offers responsive website design Pune, SEO, PPC and digital marketing solutions. Expert business website designers Pune helping brands grow online."/>
      </Head>

      <main className="bg-white text-gray-900">

        {/* NAVBAR */}
        <nav className="sticky top-0 bg-white/80 backdrop-blur-lg border-b z-50 shadow-sm">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
            <a href="https://bizondigital.com/" className="hover:opacity-80 transition">
              <h2 className="font-black text-2xl text-[#F97316]">BizOn Digital</h2>
            </a>
            <div className="hidden md:flex gap-8 text-sm font-semibold">
              <a href="https://bizondigital.com/" className="hover:text-[#F97316] transition">Home</a>
              <a href="https://bizondigital.com/services" className="hover:text-[#F97316] transition">Services</a>
              <a href="https://bizondigital.com/about" className="hover:text-[#F97316] transition">About</a>
              <a href="https://bizondigital.com/blog" className="hover:text-[#F97316] transition">Blog</a>
            </div>
            <a href="https://bizondigital.com/contact"
               className="bg-[#F97316] text-white px-6 py-2 rounded-full font-bold hover:bg-orange-700 transition shadow-md">
               Get Quotes
            </a>
          </div>
        </nav>

        {/* HERO */}
        <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-32 px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible"
            className="max-w-5xl mx-auto">

            <motion.h1 className="text-4xl md:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-[#F97316]"
              variants={fadeUp}>
              Responsive Website Design Pune That Drives Real Business Growth
            </motion.h1>

            <motion.p className="mt-8 text-lg text-gray-600"
              variants={fadeUp}>
              BizOn Digital is a leading team of business website designers Pune helping brands
              build high-performance websites, increase search rankings and convert visitors into customers
              using data-driven digital marketing strategies.
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
                Explore Services
              </motion.a>

              <motion.a href="https://wa.me/917030323838?text=Hello!%20I%27m%20interested%20in%20your%20digital%20marketing%20services."
                className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold hover:bg-gray-800 hover:shadow-xl transition transform hover:-translate-y-1 text-center"
                variants={scaleUp}>
                📞 Schedule Call
              </motion.a>
            </motion.div>

            <motion.p className="mt-6 text-sm text-gray-500" variants={fadeUp}>
              ⭐ 4.9/5 Average Rating | 25+ Winning Awards | 120+ Projects Delivered
            </motion.p>
          </motion.div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{once: true}}>
              <h2 className="text-4xl font-extrabold mb-6">
                Why Businesses Choose BizOn Digital
              </h2>

              <p className="text-gray-600 max-w-3xl mx-auto">
                Our team focuses on performance-driven strategies combining responsive website design Pune,
                advanced SEO, paid advertising and conversion optimization to deliver measurable ROI.
              </p>
            </motion.div>

            <motion.div className="grid md:grid-cols-3 gap-8 mt-14" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once: true}}>
              <Feature title="🎯 Strategic Expertise"
              desc="Deep understanding of modern digital marketing and user behavior tailored to your business."/>
              <Feature title="📈 Proven Results"
              desc="Campaigns designed to increase traffic, leads and revenue with measurable ROI."/>
              <Feature title="💼 Client Focused Approach"
              desc="Every project tailored to business goals and target audience with transparent communication."/>
            </motion.div>
          </div>
        </section>

        {/* TRUSTED CLIENTS */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-8">
              Trusted by Leading Brands
            </h3>
            <motion.div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once: true}}>
              <ClientLogo name="TechCorp"/>
              <ClientLogo name="Digital"/>
              <ClientLogo name="EcoGreen"/>
              <ClientLogo name="BrightFuture"/>
              <ClientLogo name="Summit"/>
              <ClientLogo name="Creative"/>
            </motion.div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-24 px-6" id="services">
          <div className="max-w-7xl mx-auto">

            <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" variants={fadeUp} viewport={{once: true}}>
              <h2 className="text-4xl font-extrabold mb-4">
                Digital Marketing & Web Development Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive solutions to boost your online presence and drive business growth
              </p>
            </motion.div>

            <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once: true}}>

              <ServiceCard title="💻 Responsive Website Design"
                url="https://bizondigital.com/services/web-development"
                desc="Modern, fast and SEO-optimized websites built to convert visitors into customers."/>

              <ServiceCard title="🔍 Search Engine Optimization"
                url="https://bizondigital.com/services/seo"
                desc="Improve visibility with technical SEO, on-page optimization and content strategy."/>

              <ServiceCard title="💰 Paid Advertising (PPC)"
                url="https://bizondigital.com/services/paid-ads"
                desc="Data-driven PPC campaigns that maximize ROI and increase brand reach."/>

              <ServiceCard title="📱 Social Media Marketing"
                url="https://bizondigital.com/services/social-media"
                desc="Engaging campaigns on all platforms to grow audience and boost brand awareness."/>

              <ServiceCard title="🛒 E-Commerce Solutions"
                url="https://bizondigital.com/services/ecommerce"
                desc="Complete online store setup with payment integration and conversion optimization."/>

              <ServiceCard title="📊 Analytics & Reporting"
                url="https://bizondigital.com/services"
                desc="Detailed performance tracking and insights to guide strategic decisions."/>

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
                Trusted Business Website Designers Pune
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                BizOn Digital combines creativity, technology and marketing expertise to help brands
                grow online. From responsive website design Pune to advanced digital campaigns,
                our goal is to deliver long-term growth.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                We focus on measurable performance, analytics-driven decisions and scalable strategies
                that align with your business vision. Every project is treated as a partnership where your success is our success.
              </p>

              <div className="flex gap-4 mt-8">
                <a href="https://bizondigital.com/contact"
                  className="inline-block bg-[#F97316] text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 hover:shadow-lg transition">
                  📞 Get Free Consultation
                </a>
                <a href="https://bizondigital.com/about"
                  className="inline-block border-2 border-[#F97316] text-[#F97316] px-8 py-3 rounded-full font-bold hover:bg-orange-50 transition">
                  Learn More About Us
                </a>
              </div>
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once: true}}>
              <Stat number="120+" label="Projects Delivered"/>
              <Stat number="⭐ 4.9" label="Client Reviews"/>
              <Stat number="8+" label="Years Experience"/>
              <Stat number="98%" label="Success Rate"/>
            </motion.div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" variants={fadeUp} viewport={{once: true}}>
              <h2 className="text-4xl font-extrabold mb-4">
                Our Step-By-Step Growth Process
              </h2>
              <p className="text-gray-600">
                Proven methodology to transform your digital presence and achieve measurable results
              </p>
            </motion.div>

            <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once: true}}>
              <Process num="01" title="Consultation" desc="We understand your goals, challenges and target audience."/>
              <Process num="02" title="Research & Planning" desc="Market analysis and strategic roadmap creation."/>
              <Process num="03" title="Design & Development" desc="High-performance responsive websites and campaigns."/>
              <Process num="04" title="Marketing Launch" desc="SEO optimization and advertising campaigns go live."/>
              <Process num="05" title="Analytics & Optimization" desc="Continuous monitoring and performance improvement."/>
              <Process num="06" title="Growth Scaling" desc="Expand successful strategies for long-term success."/>
            </motion.div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 px-6 bg-gradient-to-br from-orange-50 to-white" id="testimonials">
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" variants={fadeUp} viewport={{once: true}}>
              <h2 className="text-4xl font-extrabold mb-4">
                What Our Clients Say
              </h2>

              <p className="text-gray-600 max-w-2xl mx-auto">
                Real stories from real clients who experienced growth with our services
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
                Experienced professionals dedicated to your digital success
              </p>
            </motion.div>

            <motion.div className="grid md:grid-cols-2 gap-12" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once: true}}>
              <TeamMember name="Rahul Wanchoo" title="Entrepreneur | Internet Marketing Expert" desc="Extraordinary expertise in digital marketing strategies driving millions in revenue growth."/>
              <TeamMember name="Suresh Khorate" title="Visual Communication Expert" desc="Leading innovator in visual design and brand communication excellence."/>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-24 px-6" id="faq">
          <div className="max-w-4xl mx-auto">
            <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" variants={fadeUp} viewport={{once: true}}>
              <h2 className="text-4xl font-extrabold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Get answers to common questions about our services
              </p>
            </motion.div>

            <motion.div className="space-y-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once: true}}>
              <FAQItem q="Do you offer responsive website design Pune?"
                a="Yes, we specialize in mobile-first responsive website design Pune ensuring fast performance across all devices with SEO optimization built-in."/>

              <FAQItem q="Are you experienced business website designers Pune?"
                a="Our team has 8+ years of experience building high-conversion websites tailored for modern businesses in Pune and across India."/>

              <FAQItem q="Do you provide SEO with web development?"
                a="Absolutely! Every website we design follows SEO best practices including technical SEO, on-page optimization, and content strategy."/>

              <FAQItem q="How long does it take to see SEO results?"
                a="Most clients see initial results within 4-8 weeks, with significant improvements visible at 3-6 months depending on competition and strategy."/>

              <FAQItem q="Do you offer custom pricing packages?"
                a="Yes! We provide customized packages tailored to your budget and specific business goals. Contact us for a free consultation."/>

              <FAQItem q="Can I cancel my service contract anytime?"
                a="We believe in building long-term partnerships. Our contracts are flexible and designed to provide transparency with no hidden clauses."/>
            </motion.div>
          </div>
        </section>

        {/* CTA - Contact Section */}
        <section className="py-24 px-6 bg-gradient-to-r from-[#F97316] via-orange-500 to-red-500 text-white" id="contact">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{once: true}}>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                Ready To Grow Your Brand Online?
              </h2>

              <p className="text-xl opacity-95 mb-10">
                Schedule your free 30-minute digital marketing consultation. Get a customized growth strategy, competitive analysis, and actionable recommendations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/917030323838?text=Hello!%20I'm%20interested%20in%20your%20digital%20marketing%20services."
                   className="bg-white text-[#F97316] px-10 py-4 rounded-full font-bold hover:shadow-xl transition transform hover:-translate-y-1 text-center">
                   💬 Chat on WhatsApp
                </a>
                <a href="https://bizondigital.com/contact"
                  className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold hover:bg-gray-800 transition transform hover:-translate-y-1 text-center">
                   📧 Get Free Consultation
                </a>
              </div>

              <div className="mt-10 pt-10 border-t border-white/20 flex flex-col sm:flex-row justify-center gap-8 text-sm">
                <div>
                  <p className="font-bold text-lg">📞 +91 7030323838</p>
                  <p className="opacity-90">Call us today</p>
                </div>
                <div>
                  <p className="font-bold text-lg">⭐ 4.9/5 Rating</p>
                  <p className="opacity-90">From 120+ clients</p>
                </div>
                <div>
                  <p className="font-bold text-lg">🏆 8+ Years</p>
                  <p className="opacity-90">Industry experience</p>
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
                💡 Have an Awesome Project Idea?
              </h3>

              <p className="text-gray-300 mb-8">
                Let's discuss how BizOn Digital can help accelerate your business growth
              </p>

              <a href="https://wa.me/917030323838?text=Hello!%20I%27m%20interested%20in%20discussing%20my%20project."
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
                <h3 className="font-black text-2xl text-[#F97316] mb-6">BizOn Digital</h3>
                <p className="text-gray-400">Leading digital marketing agency transforming businesses through data-driven strategies and innovative solutions.</p>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-bold text-lg mb-4 text-white">Company</h4>
                <ul className="space-y-3">
                  <li><a href="https://bizondigital.com/" className="text-gray-400 hover:text-[#F97316] transition">Home</a></li>
                  <li><a href="https://bizondigital.com/about" className="text-gray-400 hover:text-[#F97316] transition">About Us</a></li>
                  <li><a href="https://bizondigital.com/contact" className="text-gray-400 hover:text-[#F97316] transition">Contact Us</a></li>
                  <li><a href="https://bizondigital.com/blog" className="text-gray-400 hover:text-[#F97316] transition">Blog</a></li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-bold text-lg mb-4 text-white">Services</h4>
                <ul className="space-y-3">
                  <li><a href="https://bizondigital.com/services/seo" className="text-gray-400 hover:text-[#F97316] transition">SEO</a></li>
                  <li><a href="https://bizondigital.com/services/paid-ads" className="text-gray-400 hover:text-[#F97316] transition">Paid Ads</a></li>
                  <li><a href="https://bizondigital.com/services/social-media" className="text-gray-400 hover:text-[#F97316] transition">Social Media</a></li>
                  <li><a href="https://bizondigital.com/services/web-development" className="text-gray-400 hover:text-[#F97316] transition">Web Development</a></li>
                  <li><a href="https://bizondigital.com/services/ecommerce" className="text-gray-400 hover:text-[#F97316] transition">E-Commerce</a></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-bold text-lg mb-4 text-white">Support</h4>
                <ul className="space-y-3">
                  <li><a href="https://bizondigital.com/faq" className="text-gray-400 hover:text-[#F97316] transition">FAQ</a></li>
                  <li><a href="https://bizondigital.com/terms" className="text-gray-400 hover:text-[#F97316] transition">Terms & Conditions</a></li>
                  <li><a href="https://bizondigital.com/privacy" className="text-gray-400 hover:text-[#F97316] transition">Privacy Policy</a></li>
                  <li><a href="https://bizondigital.com/refund" className="text-gray-400 hover:text-[#F97316] transition">Refund Policy</a></li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 pt-8 mt-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Contact Info */}
                <div>
                  <p className="text-gray-400 mb-2">📞 Phone</p>
                  <a href="tel:+917030323838" className="text-[#F97316] font-bold hover:underline">+91 7030323838</a>
                </div>

                {/* Social Media */}
                <div className="text-center">
                  <p className="text-gray-400 mb-3">Follow Us</p>
                  <div className="flex gap-4 justify-center">
                    <a href="https://facebook.com/bizondigital" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#F97316] transition">f</a>
                    <a href="https://twitter.com/bizondigital" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#F97316] transition">𝕏</a>
                    <a href="https://linkedin.com/company/bizondigital" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#F97316] transition">in</a>
                    <a href="https://instagram.com/bizondigital" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#F97316] transition">📷</a>
                  </div>
                </div>

                {/* Copyright */}
                <div className="text-right text-gray-400 text-sm">
                  <p>© 2025 BizOn Digital</p>
                  <p>All rights reserved</p>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </main>
    </>
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
    company: "TechCorp Solutions",
    name: "John Anderson",
    stars: 5,
    text: "Outstanding digital marketing services! They transformed our online presence and significantly increased our customer engagement. Highly professional team with excellent results."
  },
  {
    company: "Green Earth Industries",
    name: "Sarah Mitchell",
    stars: 5,
    text: "The SEO strategies implemented by this team brought remarkable results. Our website traffic doubled within three months. Truly exceptional work and great support!"
  },
  {
    company: "Digital Innovations Ltd",
    name: "Michael Chen",
    stars: 5,
    text: "Professional and results-driven approach to social media marketing. They understood our brand perfectly and delivered exactly what we needed. Highly recommended!"
  },
  {
    company: "Bright Future Co",
    name: "Emily Rodriguez",
    stars: 5,
    text: "Excellent content marketing strategies! Our engagement rates have never been better. The team is creative, responsive, and highly skilled. Great partnership!"
  },
  {
    company: "Summit Technologies",
    name: "David Thompson",
    stars: 5,
    text: "Their PPC campaigns delivered incredible ROI. Very impressed with their data-driven approach and constant optimization. Highly recommend their services!"
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
