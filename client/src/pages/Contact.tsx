import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-24 bg-[#0f172a] p-4">
            <section className="container-responsive mb-8 sm:mb-12 md:mb-16">
                <SectionHeader
                    title="Schedule Your Consultation"
                    subtitle="Discuss your compliance needs and get customized pricing based on organization size, complexity, and scope of services."
                />
            </section>

            <section className="container-responsive">
                <div className="grid gap-6 sm:gap-8 md:gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="order-2 lg:order-1">
                        <div className="bg-white/5 border border-white/10 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-2xl shadow-sm mb-4 sm:mb-6 md:mb-8">
                            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 md:mb-6 font-display text-white">
                                Contact Information
                            </h3>
                            <div className="space-y-3 sm:space-y-4 md:space-y-5 md:space-y-6">
                                <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                                    <div className="bg-primary/10 p-2 sm:p-2.5 md:p-3 rounded-lg text-primary shrink-0 flex-shrink-0">
                                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-semibold text-white text-xs sm:text-sm md:text-base">
                                            Our Office
                                        </p>
                                        <p className="text-slate-300 text-xs sm:text-sm md:text-base break-words">
                                            Plot 9a, Femi Ogun street, Magodo
                                            <br />
                                            Lagos, Nigeria
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                                    <div className="bg-primary/10 p-2 sm:p-2.5 md:p-3 rounded-lg text-primary shrink-0 flex-shrink-0">
                                        <Phone className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-semibold text-white text-xs sm:text-sm md:text-base">
                                            Phone
                                        </p>
                                        <a
                                            href="tel:+2348143708860"
                                            className="text-slate-300 hover:text-primary transition-colors text-xs sm:text-sm md:text-base break-all"
                                        >
                                            +234 8143708860
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                                    <div className="bg-primary/10 p-2 sm:p-2.5 md:p-3 rounded-lg text-primary shrink-0 flex-shrink-0">
                                        <Mail className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-semibold text-white text-xs sm:text-sm md:text-base">
                                            Email
                                        </p>
                                        <a
                                            href="mailto:info@cealed.com"
                                            className="text-slate-300 hover:text-primary transition-colors text-xs sm:text-sm md:text-base break-all"
                                        >
                                            info@cealed.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 backdrop-blur-md text-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-2xl shadow-xl">
                            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 font-display">
                                NDPA Compliance Reminder
                            </h3>
                            <p className="text-slate-300 italic text-xs sm:text-sm md:text-base leading-relaxed">
                                "UHL and EHL organizations must file an annual
                                Compliance Audit Return (CAR) with the NDPC no
                                later than March 31 each year. Organizations
                                established after June 12, 2023 must file within
                                15 months of establishment."
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="order-1 lg:order-2">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </div>
    );
}
