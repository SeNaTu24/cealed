import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { 
  Search, 
  FileText, 
  Settings, 
  ShieldCheck, 
  RefreshCw, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";

export default function Compliance() {
  const steps = [
    {
      icon: Search,
      title: "Week 1 - Preparation",
      number: "01",
      desc: "Kick-off meeting with stakeholders to understand your business model and define audit scope.",
      details: [
        "Kick-off meeting with key stakeholders",
        "Understanding the business model and operations",
        "Identifying types of personal data collected",
        "Defining audit metrics and procedures"
      ]
    },
    {
      icon: FileText,
      title: "Weeks 2-3 - Compliance Review & Assessment",
      number: "02",
      desc: "Comprehensive review of your privacy governance framework and data processing activities.",
      details: [
        "Review of privacy governance framework",
        "Analysis of websites, web apps, and mobile apps",
        "Review of privacy notices, contracts, and policies",
        "Assessment of third-party data processors",
        "Evaluation of data subject rights handling",
        "Review of employee access controls and privacy awareness"
      ]
    },
    {
      icon: Settings,
      title: "Week 4 - Reporting",
      number: "03",
      desc: "Preparation of comprehensive audit reports for both regulatory and internal purposes.",
      details: [
        "Preparation of regulatory audit report",
        "Internal report with detailed recommendations",
        "Gap analysis and remediation priorities",
        "Risk assessment and mitigation strategies"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Week 5 - Client Review & Filing",
      number: "04",
      desc: "Client review of draft reports, management presentation, and regulatory filing support.",
      details: [
        "Client review of draft audit reports",
        "Management review meeting and presentation",
        "Filing of Compliance Audit Return (CAR) with NDPC",
        "Regulatory submission and follow-up"
      ]
    },
    {
      icon: RefreshCw,
      title: "Week 6 - Post-Audit",
      number: "05",
      desc: "Final deliverables including audit seal and trustmark issuance from NDPC.",
      details: [
        "Issuance of audit seal and trustmark",
        "Final documentation and certification",
        "Post-audit support and guidance",
        "Ongoing compliance recommendations"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#020617] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs md:text-sm font-medium tracking-wider text-primary uppercase glass-panel rounded-full">
              Our Process
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-display">
              NDPA <span className="text-gradient">Compliance Audit</span> Process
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              Our structured 6-week audit process ensures your organization meets NDPA and GAID requirements efficiently and correctly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-[#030712]">
        <div className="container-responsive">
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-6 md:p-10 bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-primary/40 transition-all duration-300 card-hover">
                  <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-start">
                    {/* Icon and Number */}
                    <div className="lg:col-span-3 flex flex-col items-center text-center">
                      <div className="mb-4 p-5 bg-primary/10 border border-primary/20 rounded-lg">
                        <step.icon className="h-10 w-10 text-primary" />
                      </div>
                      <span className="text-5xl md:text-6xl font-bold text-primary/20 font-display">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-9">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-display">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-6">
                        {step.desc}
                      </p>
                      
                      <div className="grid sm:grid-cols-2 gap-3">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-3 glass-panel p-3 rounded-lg">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-400">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="section-padding bg-[#020617]">
        <div className="container-responsive">
          <SectionHeader 
            title="Why Our Process Works" 
            subtitle="Built on industry best practices and real-world experience"
            className="text-white"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 md:mt-16">
            {[
              {
                title: "Risk-Based Approach",
                desc: "We prioritize efforts based on actual risk exposure, not checkbox compliance."
              },
              {
                title: "Phased Implementation",
                desc: "Manageable milestones prevent overwhelm and demonstrate continuous progress."
              },
              {
                title: "Stakeholder Engagement",
                desc: "We work with all levels—from board to IT—ensuring organization-wide buy-in."
              },
              {
                title: "Documentation Focus",
                desc: "Audit-ready evidence and documentation from day one, not as an afterthought."
              },
              {
                title: "Continuous Monitoring",
                desc: "Compliance isn't one-and-done; our process builds ongoing oversight mechanisms."
              },
              {
                title: "Scalable Framework",
                desc: "Our methodology adapts to your size, sector, and growth trajectory."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-6 bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-primary/40 transition-all duration-300 card-hover">
                  <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Start Your Compliance Journey?
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              Let's discuss how our proven methodology can help you achieve and maintain compliance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="h-14 md:h-16 px-8 md:px-10 text-base md:text-lg bg-primary hover:bg-primary/90 text-white rounded-lg shadow-[0_0_30px_rgba(37,99,235,0.3)] button-hover">
                  Schedule Discovery Call
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="h-14 md:h-16 px-8 md:px-10 text-base md:text-lg text-white border-white/20 hover:bg-white/5 rounded-lg backdrop-blur-sm button-hover">
                  View Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
