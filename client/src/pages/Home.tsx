import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedLock } from "@/components/AnimatedLock";
import { 
  Shield, 
  FileCheck, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Globe, 
  TrendingUp,
  ShieldCheck,
  Target,
  Briefcase,
  Award
} from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Animated Lock */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#020617] px-4 sm:px-6 pt-20">
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-primary/20 rounded-full blur-[80px] md:blur-[160px] translate-x-1/3 -translate-y-1/3 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-900/20 rounded-full blur-[70px] md:blur-[140px] -translate-x-1/3 translate-y-1/3" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10 py-12 md:py-0 px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-lg mt-8"
            >
              <span className="inline-block px-3 py-1.5 mb-4 text-xs font-medium tracking-wider text-primary uppercase glass-panel rounded-full">
                Trust • Security • Compliance
              </span>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-tight mb-6">
                Data Privacy &<br />
                <span className="text-gradient">Regulatory Compliance</span>
              </h1>
              
              <p className="text-base md:text-lg leading-relaxed text-slate-400 max-w-xl mb-8">
                Trusted advisory firm helping organizations across Africa comply with data protection laws, strengthen cybersecurity governance, and manage privacy risks in modern digital operations.
              </p>

              {/* Key Points */}
              <div className="space-y-3 mb-10">
                {[
                  "NDPA & GDPR Compliance Expertise",
                  "Financial Services & Fintech Focus",
                  "Cross-border Data Flow Management"
                ].map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm md:text-base text-slate-300">{point}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto h-11 md:h-12 px-6 md:px-7 text-sm md:text-base bg-primary hover:bg-primary/90 text-white rounded-lg shadow-[0_0_30px_rgba(37,99,235,0.3)] button-hover">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto h-11 md:h-12 px-6 md:px-7 text-sm md:text-base text-white border-white/20 hover:bg-white/5 rounded-lg backdrop-blur-sm button-hover">
                    Our Services
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right Side - Animated Lock Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center h-[600px]"
            >
              <AnimatedLock />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold">Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* Trust Frameworks */}
      <section className="py-12 md:py-16 bg-[#030712] border-y border-white/5">
        <div className="container-responsive">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-xs md:text-sm uppercase tracking-widest text-slate-500 font-semibold">
              Regulatory Frameworks We Master
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-700">
            {["NDPA", "GDPR", "ISO 27001", "PCI-DSS", "NIST", "SOC 2"].map((brand, index) => (
              <motion.span 
                key={brand} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-lg md:text-xl lg:text-2xl font-bold tracking-widest text-white font-display hover:text-primary transition-colors"
              >
                {brand}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-12 md:py-20 bg-[#020617] relative">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader 
            title="Strategic Compliance Services" 
            subtitle="Comprehensive advisory for high-growth organizations navigating complex regulatory landscapes" 
            className="text-white"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Shield,
                title: "Data Protection Advisory",
                desc: "Sophisticated privacy engineering, impact assessments, and data governance frameworks tailored for complex environments.",
                features: ["Privacy Impact Assessments", "Data Mapping & Classification", "Consent Management"]
              },
              {
                icon: FileCheck,
                title: "Regulatory Compliance",
                desc: "Strategic alignment with NDPA, GDPR, and sector-specific regulations across African jurisdictions.",
                features: ["NDPA Compliance", "GDPR Alignment", "Regulatory Audits"]
              },
              {
                icon: Lock,
                title: "Cybersecurity Governance",
                desc: "Enterprise-grade security frameworks, risk management, and incident response protocols.",
                features: ["ISO 27001 Implementation", "Risk Assessments", "Security Audits"]
              },
              {
                icon: Users,
                title: "DPO Services",
                desc: "Certified Data Protection Officers providing ongoing oversight and compliance monitoring.",
                features: ["Virtual DPO", "DPO Training", "Compliance Monitoring"]
              },
              {
                icon: Briefcase,
                title: "Vendor Risk Management",
                desc: "Third-party security assessments and vendor compliance certification programs.",
                features: ["Vendor Assessments", "Due Diligence", "Contract Reviews"]
              },
              {
                icon: Target,
                title: "Training & Awareness",
                desc: "Executive workshops and staff training on data protection and cybersecurity best practices.",
                features: ["Executive Briefings", "Staff Training", "Custom Workshops"]
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-6 md:p-8 bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-primary/40 transition-all duration-300 card-hover group">
                  <div className="mb-5 p-3 bg-primary/10 border border-primary/20 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-slate-500">
                        <CheckCircle2 className="h-3 w-3 text-primary/60 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Link href="/services">
              <Button variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/5 rounded-lg backdrop-blur-sm button-hover h-10 px-6 text-sm">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Cealed */}
      <section className="section-padding bg-[#030712] relative">
        <div className="container-responsive">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeader 
                title="Why Leading Organizations Choose Cealed" 
                subtitle="Trusted by forward-thinking companies across Africa"
                align="left"
                className="text-white"
              />
              
              <div className="space-y-6 mt-8">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Proven Expertise",
                    desc: "Certified professionals with deep expertise in African regulatory landscapes and international standards."
                  },
                  {
                    icon: Globe,
                    title: "Pan-African Coverage",
                    desc: "Comprehensive knowledge of data protection laws across Nigeria, Kenya, South Africa, and beyond."
                  },
                  {
                    icon: Award,
                    title: "Industry Recognition",
                    desc: "Accredited by leading certification bodies and trusted by multinational corporations."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-5 glass-panel rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="shrink-0 p-3 bg-primary/10 border border-primary/20 rounded-lg h-fit">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { value: "500+", label: "Clients Served", icon: Users },
                { value: "98%", label: "Compliance Rate", icon: Target },
                { value: "15+", label: "Years Experience", icon: Award },
                { value: "20+", label: "Countries", icon: Globe },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 md:p-8 text-center bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-primary/40 transition-all duration-300 card-hover">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-display">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-[#020617] relative">
        <div className="container-responsive">
          <SectionHeader 
            title="Our Proven Process" 
            subtitle="A systematic approach to achieving and maintaining compliance"
            className="text-white"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-16">
            {[
              {
                step: "01",
                title: "Discovery & Assessment",
                desc: "Comprehensive audit of your current compliance posture and risk profile."
              },
              {
                step: "02",
                title: "Strategy Development",
                desc: "Tailored compliance roadmap aligned with your business objectives."
              },
              {
                step: "03",
                title: "Implementation",
                desc: "Hands-on support deploying policies, controls, and documentation."
              },
              {
                step: "04",
                title: "Monitoring & Support",
                desc: "Ongoing oversight, training, and continuous improvement."
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 -right-3 w-6 h-px bg-gradient-to-r from-primary to-transparent" />
                )}
                <div className="glass-panel p-6 rounded-lg hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="text-5xl font-bold text-primary/20 mb-4 font-display">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link href="/compliance">
              <Button variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/5 rounded-lg backdrop-blur-sm button-hover">
                Learn More About Our Process
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-[#030712] to-[#030712] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              Ready to Seal Your Compliance?
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              Schedule a consultation with our compliance experts and discover how we can protect your organization.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact">
                <Button size="lg" className="h-11 md:h-12 px-6 md:px-7 text-sm md:text-base bg-primary hover:bg-primary/90 text-white rounded-lg shadow-[0_0_30px_rgba(37,99,235,0.3)] button-hover">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="h-11 md:h-12 px-6 md:px-7 text-sm md:text-base text-white border-white/20 hover:bg-white/5 rounded-lg backdrop-blur-sm button-hover">
                  Learn About Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
