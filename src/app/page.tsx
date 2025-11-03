'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Mail, Check, TrendingUp, Shield, Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsStickyVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Premium Robotics Technology"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Domain Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full text-slate-900 font-bold text-lg shadow-2xl"
            >
              <Star className="w-5 h-5 mr-2" />
              PREMIUM DOMAIN AVAILABLE
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-snug break-words overflow-wrap-anywhere [overflow-wrap:anywhere] max-w-[90%] sm:max-w-[80%] mx-auto px-4 sm:px-6 md:px-8 text-white"
            >
              Acquire{' '}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                EuroRobotic.com
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl lg:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
            >
              The definitive digital asset for European robotics innovation, automation excellence, and AI-driven manufacturing supremacy
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            >
              <a
                href="https://wa.link/6difl3"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Secure This Domain
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="mailto:imrulo.eth@proton.me?subject=EuroRobotic.com Domain Inquiry"
                className="group inline-flex items-center px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm border border-slate-600 text-white font-semibold text-lg rounded-full shadow-xl hover:shadow-slate-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-6 h-6 mr-3" />
                Make an Offer
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap justify-center items-center gap-8 pt-12 text-slate-400"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span>Secure Transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-amber-500" />
                <span>Investment Grade</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>Premium Asset</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-slate-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why <span className="text-amber-400">EuroRobotic.com</span> is Exceptional
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              This premium domain represents more than just a web address—it&apos;s a strategic digital asset that commands authority in the European robotics market.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8" />,
                title: "Brand Authority",
                description: "Instant credibility and trust in the European robotics ecosystem"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "SEO Advantage",
                description: "Exact-match potential with high-value robotics keywords"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Market Versatility",
                description: "Applicable across manufacturing, AI, and automation industries"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Appreciation Potential",
                description: "Sound digital real estate investment with growth trajectory"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="text-amber-400 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Data Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Market Validation & Data
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The numbers speak for themselves—robotics and automation are experiencing unprecedented growth across Europe.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Keyword Analysis */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">High-Value Keywords</h3>
              <div className="space-y-4">
                {[
                  { keyword: "European Robotics", volume: "12,100", cpc: "$3.45" },
                  { keyword: "Robotics Automation", volume: "8,900", cpc: "$4.20" },
                  { keyword: "Industrial Robotics", volume: "6,500", cpc: "$5.80" },
                  { keyword: "AI Manufacturing", volume: "4,200", cpc: "$6.15" },
                  { keyword: "Smart Factory", volume: "3,100", cpc: "$7.90" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-slate-700 last:border-b-0">
                    <span className="text-slate-300 font-medium">{item.keyword}</span>
                    <div className="text-right">
                      <div className="text-amber-400 font-bold">{item.volume} searches</div>
                      <div className="text-slate-400 text-sm">${item.cpc} CPC</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Comparable Sales */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Recent Domain Sales</h3>
              <div className="space-y-4">
                {[
                  { domain: "RoboticsAI.com", price: "$45,000", year: "2023" },
                  { domain: "SmartFactory.net", price: "$28,500", year: "2023" },
                  { domain: "AutoTech.eu", price: "$32,000", year: "2023" },
                  { domain: "IndustrialAI.com", price: "$67,000", year: "2022" },
                  { domain: "ManufacturingTech.net", price: "$23,000", year: "2023" }
                ].map((sale, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-slate-700 last:border-b-0">
                    <span className="text-slate-300 font-mono text-sm">{sale.domain}</span>
                    <div className="text-right">
                      <div className="text-green-400 font-bold">{sale.price}</div>
                      <div className="text-slate-400 text-sm">{sale.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Strategic Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how different industries can leverage this premium domain for maximum competitive advantage.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-700/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-bold text-lg">Industry</th>
                    <th className="px-6 py-4 text-left text-white font-bold text-lg">Strategic Application & Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      industry: "Venture Capital Firm",
                      application: "Establish thought leadership in European robotics investments, attract premium startups, and position as the go-to VC for automation funding"
                    },
                    {
                      industry: "SaaS Company",
                      application: "Launch robotics management platforms with instant credibility, dominate search results for European market, and command premium pricing"
                    },
                    {
                      industry: "Manufacturing Corporation",
                      application: "Lead digital transformation initiatives, showcase automation capabilities to European clients, and establish market dominance"
                    },
                    {
                      industry: "Consulting Agency",
                      application: "Position as the premier European robotics consultancy, attract Fortune 500 clients, and command premium consulting fees"
                    }
                  ].map((useCase, index) => (
                    <tr key={index} className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors">
                      <td className="px-6 py-6 text-amber-400 font-semibold text-lg">
                        {useCase.industry}
                      </td>
                      <td className="px-6 py-6 text-slate-300 leading-relaxed">
                        {useCase.application}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Process Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Secure Transaction Process
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Your investment is protected with industry-leading security and guaranteed transfer processes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-green-600 to-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Escrow.com Protection</h3>
              <p className="text-slate-300">
                All transactions are secured through Escrow.com, ensuring both parties are protected throughout the transfer process.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Verified Ownership</h3>
              <p className="text-slate-300">
                Complete ownership verification and clean title guarantee. No hidden liens or legal complications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-amber-600 to-amber-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Instant Transfer</h3>
              <p className="text-slate-300">
                Fast, secure domain transfer process with immediate access to your new premium digital asset.
              </p>
            </motion.div>
          </div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-amber-400 text-6xl mb-4">&ldquo;</div>
              <p className="text-xl text-slate-300 italic mb-6">
                &ldquo;The domain acquisition process was seamless and professional. The seller provided excellent communication throughout, and the Escrow.com transfer was completed without any issues. Highly recommended for serious domain investors.&rdquo;
              </p>
              <div className="text-slate-400">
                <div className="font-semibold">Sarah Chen</div>
                <div>Digital Asset Manager, TechVentures</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-300">
              Everything you need to know about acquiring this premium domain.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What makes EuroRobotic.com so valuable?",
                answer: "This domain combines high-value keywords (European + Robotics) with exact-match potential for a rapidly growing market. The .com extension provides maximum credibility and memorability in the European robotics ecosystem."
              },
              {
                question: "Who is the ideal buyer for this asset?",
                answer: "Perfect for venture capital firms, SaaS companies, manufacturing corporations, consulting agencies, and any business looking to establish authority in the European robotics and automation market."
              },
              {
                question: "What is the process for making an offer?",
                answer: "Simply click 'Make an Offer' to send an email with your proposed price, or use WhatsApp for immediate discussion. All serious offers will receive prompt responses with detailed negotiation terms."
              },
              {
                question: "How does the secure transfer work?",
                answer: "We use Escrow.com for all transactions, ensuring both parties are protected. Payment is held in escrow until domain transfer is complete, with full verification and legal documentation provided."
              },
              {
                question: "Is this a one-time opportunity?",
                answer: "Yes, premium domains of this caliber rarely become available. The combination of exact-match keywords, .com extension, and market timing makes this a unique investment opportunity."
              },
              {
                question: "What's included with the domain purchase?",
                answer: "Complete domain ownership, clean title guarantee, immediate transfer access, and full documentation. No additional fees or hidden costs—just the domain at the agreed price."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-slate-400 text-lg">
              Made with ❤️ by <span className="text-amber-400 font-semibold">imrulo.eth</span>
            </p>
            <p className="text-slate-500">
              © {new Date().getFullYear()}. All rights reserved.
            </p>
            <p className="text-slate-600 text-sm italic">
              This is a domain landing page for sale purposes only. No active services are implied. Domain availability is subject to change.
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Sticky CTA */}
      {isStickyVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href="https://wa.link/6difl3"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Secure Domain
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      )}
    </div>
  );
}