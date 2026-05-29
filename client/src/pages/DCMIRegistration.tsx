import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertTriangle, ChevronRight, ChevronLeft, Shield } from "lucide-react";
import emailjs from "@emailjs/browser";

type FormData = {
    fullName: string;
    brandName: string;
    email: string;
    phone: string;
    address: string;
    industry: string;
    website: string;
    dataVolume: string;
    sensitiveData: string;
    outsideNigeria: string;
    nin: string;
    dataTypes: string[];
    dataReasons: string[];
    renewalReminders: string;
};

const initialData: FormData = {
    fullName: "", brandName: "", email: "", phone: "", address: "",
    industry: "", website: "", dataVolume: "", sensitiveData: "",
    outsideNigeria: "", nin: "", dataTypes: [], dataReasons: [], renewalReminders: "",
};

const industries = ["Fashion/Clothing", "Beauty/Skincare", "Hair/Wigs", "Food & Confectionery", "Tech", "Other"];
const dataTypeOptions = ["Names", "Phone numbers", "Emails", "Delivery addresses", "Payment confirmations", "WhatsApp chats", "Other"];
const dataReasonOptions = ["To deliver orders", "To contact customers", "For marketing/promos", "For account management", "Other"];
const steps = ["About You", "Quick Check", "Details", "Payment"];

const inputClass = "w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all";

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-300">{label}</label>
            {children}
            {error && <p className="text-xs text-red-400">{error}</p>}
        </div>
    );
}

function ProgressBar({ step }: { step: number }) {
    return (
        <div className="flex items-center justify-center gap-0 mb-10">
            {steps.map((label, i) => (
                <div key={i} className="flex items-center">
                    <div className="flex flex-col items-center gap-1.5">
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${
                            i < step
                                ? "bg-primary border-primary text-white"
                                : i === step
                                ? "bg-transparent border-primary text-primary"
                                : "bg-transparent border-slate-700 text-slate-600"
                        }`}>
                            {i < step ? <CheckCircle className="w-4 h-4" /> : i + 1}
                        </div>
                        <span className={`text-[11px] font-medium hidden sm:block tracking-wide ${
                            i === step ? "text-primary" : i < step ? "text-slate-400" : "text-slate-600"
                        }`}>{label}</span>
                    </div>
                    {i < steps.length - 1 && (
                        <div className={`w-12 sm:w-20 h-px mx-1 mb-5 transition-all duration-300 ${i < step ? "bg-primary" : "bg-slate-700"}`} />
                    )}
                </div>
            ))}
        </div>
    );
}

export default function DCMIRegistration() {
    const [step, setStep] = useState(-1);
    const [form, setForm] = useState<FormData>(initialData);
    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
    const [bigTable, setBigTable] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const set = (field: keyof FormData, value: string) => {
        setForm(f => ({ ...f, [field]: value }));
        setErrors(e => ({ ...e, [field]: "" }));
    };

    const toggleArray = (field: "dataTypes" | "dataReasons", value: string) => {
        setForm(f => ({
            ...f,
            [field]: f[field].includes(value) ? f[field].filter(v => v !== value) : [...f[field], value],
        }));
    };

    const validateStep1 = () => {
        const e: Partial<Record<keyof FormData, string>> = {};
        if (!form.fullName.trim()) e.fullName = "Required";
        if (!form.brandName.trim()) e.brandName = "Required";
        if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
        if (!form.phone.trim() || !/^\+?[\d\s\-]{7,15}$/.test(form.phone)) e.phone = "Valid phone required";
        if (!form.address.trim()) e.address = "Required";
        if (!form.industry) e.industry = "Required";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const validateStep2 = () => {
        const e: Partial<Record<keyof FormData, string>> = {};
        if (!form.dataVolume) e.dataVolume = "Required";
        if (!form.sensitiveData) e.sensitiveData = "Required";
        if (!form.outsideNigeria) e.outsideNigeria = "Required";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const validateStep3 = () => {
        const e: Partial<Record<keyof FormData, string>> = {};
        if (!form.nin || !/^\d{11}$/.test(form.nin)) e.nin = "NIN must be exactly 11 digits";
        if (form.dataTypes.length === 0) e.dataTypes = "Select at least one";
        if (form.dataReasons.length === 0) e.dataReasons = "Select at least one";
        if (!form.renewalReminders) e.renewalReminders = "Required";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const nextStep = () => {
        if (step === 0 && !validateStep1()) return;
        if (step === 1) {
            if (!validateStep2()) return;
            if (form.dataVolume === "1000+" || form.sensitiveData === "Yes") { setBigTable(true); return; }
        }
        if (step === 2 && !validateStep3()) return;
        setStep(s => s + 1);
    };

    const handleSubmit = async () => {
        setSubmitting(true);
        try {
            await emailjs.send(
                "service_mr6tpqs",
                "template_1oea7wj",
                {
                    fullName: form.fullName,
                    brandName: form.brandName,
                    email: form.email,
                    phone: form.phone,
                    address: form.address,
                    industry: form.industry,
                    website: form.website,
                    dataVolume: form.dataVolume,
                    sensitiveData: form.sensitiveData,
                    outsideNigeria: form.outsideNigeria,
                    nin: form.nin,
                    dataTypes: form.dataTypes.join(", "),
                    dataReasons: form.dataReasons.join(", "),
                    renewalReminders: form.renewalReminders,
                },
                "TDuOmmrz0I_Z9X6iz"
            );
        } finally {
            setSubmitted(true);
            setSubmitting(false);
        }
    };

    const RadioOption = ({ field, value }: { field: keyof FormData; value: string }) => (
        <label className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-all ${
            form[field] === value
                ? "border-primary bg-primary/10 text-white"
                : "border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-300"
        }`}>
            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                form[field] === value ? "border-primary" : "border-slate-600"
            }`}>
                {form[field] === value && <div className="w-2 h-2 rounded-full bg-primary" />}
            </div>
            <span className="text-sm font-medium">{value}</span>
            <input type="radio" className="sr-only" checked={form[field] === value} onChange={() => set(field, value)} />
        </label>
    );

    const CheckOption = ({ field, value }: { field: "dataTypes" | "dataReasons"; value: string }) => (
        <label className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-all ${
            form[field].includes(value)
                ? "border-primary bg-primary/10 text-white"
                : "border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-300"
        }`}>
            <div className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-all ${
                form[field].includes(value) ? "border-primary bg-primary" : "border-slate-600"
            }`}>
                {form[field].includes(value) && <CheckCircle className="w-3 h-3 text-white" />}
            </div>
            <span className="text-sm font-medium">{value}</span>
            <input type="checkbox" className="sr-only" checked={form[field].includes(value)} onChange={() => toggleArray(field, value)} />
        </label>
    );

    const card = "bg-[#1e293b] border border-slate-700/60 rounded-2xl shadow-2xl";

    return (
        <div className="min-h-screen bg-[#0f172a] pt-24 pb-16 px-4">
            <div className="max-w-xl mx-auto">

                {/* Welcome */}
                {step === -1 && (
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/20 mb-4">
                                <Shield className="w-7 h-7 text-primary" />
                            </div>
                            <span className="block text-xs font-semibold uppercase tracking-widest text-primary mb-2">NDPA Compliance</span>
                            <h1 className="text-3xl font-bold text-white mb-3">DCMI/DCPMI Registration</h1>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto">
                                Register your business as a <span className="text-white font-medium">Data Controller/Processor of Minor Importance</span> under Nigeria's NDPA and get your compliance documents in 5 working days.
                            </p>
                        </div>

                        <div className={`${card} p-6 mb-4`}>
                            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">What you'll receive</p>
                            <ul className="space-y-3">
                                {["DCMI/DCPMI Certificate", "Privacy Notice", "Data Protection Agreement (DPA)", "Cookie Policy", "Data Retention Policy"].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                                        <CheckCircle className="w-4 h-4 text-primary shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
    
                        </div>

                        <button onClick={() => setStep(0)}
                            className="w-full py-3.5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 text-sm">
                            Start Registration <ChevronRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                )}

                {/* Big Table */}
                {bigTable && (
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className={`${card} p-8 text-center`}>
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
                            <AlertTriangle className="w-7 h-7 text-amber-400" />
                        </div>
                        <h2 className="text-xl font-bold text-white mb-3">Additional Compliance Steps Required</h2>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Your business processes a high volume of data or handles sensitive personal data, placing you in a higher compliance tier.
                            <br /><br />
                            Our team will reach out within <span className="text-white font-medium">one business day</span> to guide you through the next steps.
                        </p>
                        <button onClick={() => { setBigTable(false); setStep(1); }}
                            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors">
                            <ChevronLeft className="w-4 h-4" /> Go back
                        </button>
                    </motion.div>
                )}

                {/* Thank You */}
                {submitted && (
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className={`${card} p-8 text-center`}>
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
                            <CheckCircle className="w-7 h-7 text-green-400" />
                        </div>
                        <h2 className="text-xl font-bold text-white mb-2">Registration Submitted!</h2>
                        <p className="text-slate-400 text-sm mb-6">Thank you, {form.fullName}. Here's what happens next:</p>
                        <div className="text-left space-y-3 mb-8">
                            {[
                                "We'll review your registration details",
                                "You'll receive a payment confirmation email",
                                "Our team prepares your compliance documents",
                                "All documents delivered within 5 working days",
                                "You'll receive your DCMI/DCPMI Certificate",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">{i + 1}</div>
                                    <p className="text-sm text-slate-300">{item}</p>
                                </div>
                            ))}
                        </div>
                        <a href="/" className="inline-block py-3 px-8 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-xl transition-all">
                            Back to Home
                        </a>
                    </motion.div>
                )}

                {/* Multi-step form */}
                {step >= 0 && !bigTable && !submitted && (
                    <>
                        <ProgressBar step={step} />
                        <AnimatePresence mode="wait">
                            <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}
                                className={`${card} p-6 sm:p-8`}>

                                {step === 0 && (
                                    <div className="space-y-5">
                                        <div className="mb-6">
                                            <h2 className="text-xl font-bold text-white">About You</h2>
                                            <p className="text-sm text-slate-500 mt-1">Tell us about your business</p>
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <Field label="Full Name *" error={errors.fullName}>
                                                <input className={inputClass} value={form.fullName} onChange={e => set("fullName", e.target.value)} placeholder="John Doe" />
                                            </Field>
                                            <Field label="Business / Brand Name *" error={errors.brandName}>
                                                <input className={inputClass} value={form.brandName} onChange={e => set("brandName", e.target.value)} placeholder="Acme Store" />
                                            </Field>
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <Field label="Business Email *" error={errors.email}>
                                                <input className={inputClass} type="email" value={form.email} onChange={e => set("email", e.target.value)} placeholder="hello@yourbrand.com" />
                                            </Field>
                                            <Field label="Phone Number *" error={errors.phone}>
                                                <input className={inputClass} type="tel" value={form.phone} onChange={e => set("phone", e.target.value)} placeholder="+234 800 000 0000" />
                                            </Field>
                                        </div>
                                        <Field label="Full Business Address *" error={errors.address}>
                                            <textarea className={`${inputClass} resize-none`} rows={2} value={form.address} onChange={e => set("address", e.target.value)} placeholder="123 Main St, Lagos" />
                                        </Field>
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <Field label="Industry *" error={errors.industry}>
                                                <select className={inputClass} value={form.industry} onChange={e => set("industry", e.target.value)}>
                                                    <option value="">Select industry</option>
                                                    {industries.map(i => <option key={i}>{i}</option>)}
                                                </select>
                                            </Field>
                                            <Field label="Website (optional)">
                                                <input className={inputClass} value={form.website} onChange={e => set("website", e.target.value)} placeholder="https://yourbrand.com" />
                                            </Field>
                                        </div>
                                    </div>
                                )}

                                {step === 1 && (
                                    <div className="space-y-7">
                                        <div className="mb-6">
                                            <h2 className="text-xl font-bold text-white">Quick Check</h2>
                                            <p className="text-sm text-slate-500 mt-1">Help us understand your data practices</p>
                                        </div>
                                        <Field label="How many people's data have you collected in the last 6 months? *" error={errors.dataVolume}>
                                            <div className="flex flex-col gap-2 mt-1">
                                                {["1–200", "201–999", "1000+"].map(v => <RadioOption key={v} field="dataVolume" value={v} />)}
                                            </div>
                                        </Field>
                                        <Field label="Do you handle sensitive data (health, religion, biometrics)? *" error={errors.sensitiveData}>
                                            <div className="flex gap-3 mt-1">
                                                {["Yes", "No"].map(v => <RadioOption key={v} field="sensitiveData" value={v} />)}
                                            </div>
                                        </Field>
                                        <Field label="Do you store data outside Nigeria? *" error={errors.outsideNigeria}>
                                            <div className="flex gap-3 mt-1">
                                                {["Yes", "No"].map(v => <RadioOption key={v} field="outsideNigeria" value={v} />)}
                                            </div>
                                        </Field>
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="space-y-7">
                                        <div className="mb-6">
                                            <h2 className="text-xl font-bold text-white">Registration Details</h2>
                                            <p className="text-sm text-slate-500 mt-1">A few more details to complete your registration</p>
                                        </div>
                                        <Field label="NIN (National Identification Number) *" error={errors.nin}>
                                            <input className={inputClass} value={form.nin}
                                                onChange={e => set("nin", e.target.value.replace(/\D/g, "").slice(0, 11))}
                                                placeholder="11-digit NIN" maxLength={11} />
                                        </Field>
                                        <Field label="What types of data do you collect? *" error={errors.dataTypes}>
                                            <div className="grid sm:grid-cols-2 gap-2 mt-1">
                                                {dataTypeOptions.map(v => <CheckOption key={v} field="dataTypes" value={v} />)}
                                            </div>
                                        </Field>
                                        <Field label="Why do you collect this data? *" error={errors.dataReasons}>
                                            <div className="flex flex-col gap-2 mt-1">
                                                {dataReasonOptions.map(v => <CheckOption key={v} field="dataReasons" value={v} />)}
                                            </div>
                                        </Field>
                                        <Field label="Would you like renewal reminders? *" error={errors.renewalReminders}>
                                            <div className="flex gap-3 mt-1">
                                                {["Yes", "No"].map(v => <RadioOption key={v} field="renewalReminders" value={v} />)}
                                            </div>
                                        </Field>
                                    </div>
                                )}

                                {step === 3 && (
                                    <div className="space-y-6">
                                        <div className="mb-6">
                                            <h2 className="text-xl font-bold text-white">Payment</h2>
                                            <p className="text-sm text-slate-500 mt-1">Review and complete your registration</p>
                                        </div>
                                        <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-center">
                                            <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">Registration Fee</p>
                                            <p className="text-5xl font-bold text-white">₦100,000</p>
                                        </div>
                                        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5">
                                            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">What's included</p>
                                            <ul className="space-y-3">
                                                {["DCMI/DCPMI Certificate", "Privacy Notice", "Data Protection Agreement (DPA)", "Cookie Policy", "Data Retention Policy"].map(item => (
                                                    <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                                                        <CheckCircle className="w-4 h-4 text-primary shrink-0" /> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <p className="text-xs text-slate-600 text-center">Delivered within 5 working days after payment confirmation.</p>
                                    </div>
                                )}

                                <div className={`flex mt-8 pt-6 border-t border-slate-700 gap-3 ${step > 0 ? "justify-between" : "justify-end"}`}>
                                    {step > 0 && (
                                        <button onClick={() => setStep(s => s - 1)}
                                            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-slate-700 text-sm font-medium text-slate-400 hover:text-white hover:border-slate-500 transition-all">
                                            <ChevronLeft className="w-4 h-4" /> Back
                                        </button>
                                    )}
                                    {step < 3 ? (
                                        <button onClick={nextStep}
                                            className="flex items-center gap-1.5 px-6 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-xl transition-all">
                                            Continue <ChevronRight className="w-4 h-4" />
                                        </button>
                                    ) : (
                                        <button onClick={handleSubmit} disabled={submitting}
                                            className="flex items-center gap-1.5 px-6 py-2.5 bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white text-sm font-semibold rounded-xl transition-all">
                                            {submitting ? "Submitting..." : "Submit Registration"}
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </>
                )}
            </div>
        </div>
    );
}
