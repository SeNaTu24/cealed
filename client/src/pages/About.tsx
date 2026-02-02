import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Globe, Users, Target, Briefcase, TrendingUp, Shield, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0f172a]">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px]" />
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-3 py-1.5 mb-4 text-xs font-medium tracking-wider text-primary uppercase glass-panel rounded-full">
              About Cealed
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              Regulatory Compliance <span className="text-gradient">Advisory</span> for Africa
            </h1>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed">
              More than a service provider—we act as your trusted advisor and strategic partner in navigating the complex intersection of data privacy, regulatory compliance, and cybersecurity governance across the African technology ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[#030712]">
        <div className="container-responsive">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-8 md:p-10 bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-primary/40 transition-all duration-300">
                <div className="mb-6">
                  <div className="inline-block p-3 bg-primary/10 border border-primary/20 rounded-lg">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-display">Our Mission</h3>
                <p className="text-slate-400 leading-relaxed">
                  To simplify data privacy and regulatory compliance for African businesses, enabling them to operate securely, build customer trust, and compete on a global scale. We believe compliance shouldn't be a bottleneck, but a business enabler that protects organizations from regulatory sanctions, reputational damage, financial losses, and operational disruptions.
                </p>
              </Card>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full p-8 md:p-10 bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-primary/40 transition-all duration-300">
                <div className="mb-6">
                  <div className="inline-block p-3 bg-primary/10 border border-primary/20 rounded-lg">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-display">Our Vision</h3>
                <p className="text-slate-400 leading-relaxed">
                  To be the leading authority on Data Protection and Privacy Law in Africa, fostering a digital ecosystem where innovation thrives alongside security and individual rights.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-[#020617]">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeader 
                title="Who We Are" 
                subtitle="Leading the regulatory compliance revolution across Africa"
                className="text-white"
              />
            </motion.div>
            
            <div className="space-y-6 text-slate-400 text-base md:text-lg mt-12">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="leading-relaxed"
              >
                Cealed is a regulatory compliance advisory and IT advisory organization with a strong focus on the African technology ecosystem. We specialize in helping organizations in highly regulated and technology-driven sectors, especially where personal data processing, digital platforms, and cross-border data flows are involved.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="leading-relaxed"
              >
                Our work spans several emerging and sensitive industries including financial services and fintech, health technology, agricultural technology, cryptocurrency and blockchain, and artificial intelligence. With the introduction of the Nigeria Data Protection Act (NDPA) and increasing global scrutiny on data practices, organizations face unprecedented pressure to demonstrate accountability.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="leading-relaxed"
              >
                Our multidisciplinary team brings decades of combined experience in:
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                { icon: Shield, text: "Law & Legal Expertise" },
                { icon: Lock, text: "Information Technology" },
                { icon: TrendingUp, text: "IT Security & Data Protection" },
                { icon: Users, text: "Research & Advisory Services" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel p-5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-primary/10 border border-primary/20 rounded-lg group-hover:scale-110 transition-transform">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium text-slate-300 text-sm md:text-base">{item.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-[#030712]">
        <div className="container-responsive">
          <SectionHeader 
            title="Our Core Values" 
            subtitle="The principles that guide everything we do"
            className="text-white"
          />

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
            {[
              {
                icon: Shield,
                title: "Trust & Integrity",
                desc: "We hold client confidentiality and ethical conduct as non-negotiable standards."
              },
              {
                icon: Globe,
                title: "Excellence",
                desc: "We pursue the highest standards in advisory quality and client service delivery."
              },
              {
                icon: Users,
                title: "Partnership",
                desc: "We work alongside our clients as trusted advisors, not just consultants."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-6 md:p-8 bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-primary/40 transition-all duration-300 card-hover group text-center">
                  <div className="mx-auto mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-display">
                    {value.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-[#020617]">
        <div className="container-responsive">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "500+", label: "Clients Served", icon: Users },
              { value: "20+", label: "Countries", icon: Globe },
              { value: "98%", label: "Success Rate", icon: Target },
              { value: "3+", label: "Years Combined", icon: Award },
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
          </div>
        </div>
      </section>
    </div>
  );
}
