import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ChevronRight, ChevronLeft, Shield, Upload } from "lucide-react";
import emailjs from "@emailjs/browser";

type ArrayField =
    | "sharesDataWith"
    | "generalDataCollected"
    | "sensitiveDataCollected"
    | "technicalMeasures"
    | "dataProtectionPolicies";

type FormData = {
    // Section 1
    companyName: string;
    businessEmail: string;
    businessPhone: string;
    businessAddress: string;
    companyDescription: string;
    primaryCustomers: string;
    // Section 2
    dataVolume: string;
    sharesDataWith: string[];
    transferOutsideNigeria: string;
    generalDataCollected: string[];
    generalDataOther: string;
    sensitiveDataCollected: string[];
    // Section 3
    dpoFullName: string;
    dpoEmail: string;
    dpoPhone: string;
    dpoNin: string;
    dpoAddress: string;
    dpoCertFileName: string;
    // Section 4
    technicalMeasures: string[];
    dataProtectionPolicies: string[];
    // Section 5
    repFullName: string;
    repEmail: string;
    repPhone: string;
    // Consent
    consentAccuracy: boolean;
    consentPrivacy: boolean;
};

const initialData: FormData = {
    companyName: "", businessEmail: "", businessPhone: "", businessAddress: "",
    companyDescription: "", primaryCustomers: "",
    dataVolume: "", sharesDataWith: [], transferOutsideNigeria: "",
    generalDataCollected: [], generalDataOther: "", sensitiveDataCollected: [],
    dpoFullName: "", dpoEmail: "", dpoPhone: "", dpoNin: "", dpoAddress: "", dpoCertFileName: "",
    technicalMeasures: [], dataProtectionPolicies: [],
    repFullName: "", repEmail: "", repPhone: "",
    consentAccuracy: false, consentPrivacy: false,
};

const steps = ["About You", "Customers", "DPO Details", "Security", "Representative"];

const dataVolumeOptions = ["1 – 200 people", "201 – 999 people", "1,000 – 4,999 people", "5,000 or more"];

const sharesDataWithOptions = [
    "Other businesses in Nigeria",
    "Government agencies in Nigeria",
    "NGOs or charities in Nigeria",
    "Public sector organisations in Nigeria",
    "International organisations based in Nigeria",
    "Businesses outside Nigeria",
    "Government or public agencies outside Nigeria",
    "We do not share with any third parties",
];

const generalDataOptions = ["Full name", "Email address", "Phone number", "Physical address", "Other, please specify"];

const sensitiveDataOptions = [
    "Health or medical records",
    "Financial or bank details",
    "Government-issued IDs (e.g. NIN, BVN, passport)",
    "Biometric data (e.g. fingerprints, facial recognition)",
    "None — I only collect general information",
];

const technicalMeasuresOptions = [
    "Firewall and network security",
    "Data encryption (scrambling data so only authorised staff can read it)",
    "Access controls (restricting who can view customer data)",
    "Data backup and recovery systems",
    "Audit logs (records of who accessed which data and when)",
    "Tools to prevent data leaks (DLP)",
    "None of the above",
];

const dataProtectionPoliciesOptions = [
    "A written data protection or privacy policy",
    "Rules for how long you keep customer data (data retention policy)",
    "A privacy notice on your website or app",
    "A plan for responding to data breaches",
    "Regular data protection training for staff",
    "A process for customers to raise complaints or access requests",
    "Cookie consent on your website",
    "Regular privacy or security audits",
    "Data protection clauses in vendor contracts",
    "Privacy Impact Assessments (PIAs / DPIAs)",
    "None of the above",
];

const inputClass =
    "w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all";

function Field({
    label,
    error,
    hint,
    children,
}: {
    label: string;
    error?: string;
    hint?: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-300">{label}</label>
            {hint && <p className="text-xs text-slate-500">{hint}</p>}
            {children}
            {error && <p className="text-xs text-red-400">{error}</p>}
        </div>
    );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
            {children}
        </p>
    );
}

function InfoBox({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
            <p className="text-sm text-slate-300 leading-relaxed">{children}</p>
        </div>
    );
}

function ConsentCheckbox({
    checked,
    onChange,
    error,
    children,
}: {
    checked: boolean;
    onChange: () => void;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <label className="flex items-start gap-3 cursor-pointer">
                <div
                    onClick={onChange}
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all cursor-pointer ${
                        checked ? "border-primary bg-primary" : "border-slate-600 hover:border-slate-400"
                    }`}
                >
                    {checked && <CheckCircle className="w-3 h-3 text-white" />}
                </div>
                <span className="text-sm text-slate-300 leading-relaxed">{children}</span>
            </label>
            {error && <p className="text-xs text-red-400 mt-1 ml-8">{error}</p>}
        </div>
    );
}

function ProgressBar({ step }: { step: number }) {
    return (
        <div className="flex items-center justify-center gap-0 mb-10">
            {steps.map((label, i) => (
                <div key={i} className="flex items-center">
                    <div className="flex flex-col items-center gap-1.5">
                        <div
                            className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${
                                i < step
                                    ? "bg-primary border-primary text-white"
                                    : i === step
                                    ? "bg-transparent border-primary text-primary"
                                    : "bg-transparent border-slate-700 text-slate-600"
                            }`}
                        >
                            {i < step ? <CheckCircle className="w-4 h-4" /> : i + 1}
                        </div>
                        <span
                            className={`text-[10px] font-medium hidden sm:block tracking-wide ${
                                i === step ? "text-primary" : i < step ? "text-slate-400" : "text-slate-600"
                            }`}
                        >
                            {label}
                        </span>
                    </div>
                    {i < steps.length - 1 && (
                        <div
                            className={`w-6 sm:w-12 h-px mx-1 mb-5 transition-all duration-300 ${
                                i < step ? "bg-primary" : "bg-slate-700"
                            }`}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}

export default function DCMIRegistration() {
    const [step, setStep] = useState(-1);
    const [form, setFormState] = useState<FormData>(initialData);
    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const set = (field: keyof FormData, value: string) => {
        setFormState(f => ({ ...f, [field]: value }));
        setErrors(e => ({ ...e, [field]: "" }));
    };

    const setConsent = (field: "consentAccuracy" | "consentPrivacy") => {
        setFormState(f => ({ ...f, [field]: !f[field] }));
        setErrors(e => ({ ...e, [field]: "" }));
    };

    const toggleArray = (field: ArrayField, value: string) => {
        setFormState(f => ({
            ...f,
            [field]: (f[field] as string[]).includes(value)
                ? (f[field] as string[]).filter(v => v !== value)
                : [...(f[field] as string[]), value],
        }));
        setErrors(e => ({ ...e, [field]: "" }));
    };

    const isEmailValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPhoneValid = (phone: string) => /^\+?[\d\s\-]{7,15}$/.test(phone);

    const validateStep0 = () => {
        const e: Partial<Record<keyof FormData, string>> = {};
        if (!form.companyName.trim()) e.companyName = "Required";
        if (!form.businessEmail.trim() || !isEmailValid(form.businessEmail))
            e.businessEmail = "Valid email required";
        if (!form.businessPhone.trim() || !isPhoneValid(form.businessPhone))
            e.businessPhone = "Valid phone required";
        if (!form.businessAddress.trim()) e.businessAddress = "Required";
        if (!form.companyDescription.trim()) e.companyDescription = "Required";
        if (!form.primaryCustomers) e.primaryCustomers = "Required";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const validateStep1 = () => {
        const e: Partial<Record<keyof FormData, string>> = {};
        if (!form.dataVolume) e.dataVolume = "Required";
        if (form.sharesDataWith.length === 0) e.sharesDataWith = "Select at least one";
        if (!form.transferOutsideNigeria) e.transferOutsideNigeria = "Required";
        if (form.generalDataCollected.length === 0) e.generalDataCollected = "Select at least one";
        if (form.generalDataCollected.includes("Other, please specify") && !form.generalDataOther.trim())
            e.generalDataOther = "Please specify";
        if (form.sensitiveDataCollected.length === 0) e.sensitiveDataCollected = "Select at least one";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const validateStep2 = () => {
        const e: Partial<Record<keyof FormData, string>> = {};
        if (!form.dpoFullName.trim()) e.dpoFullName = "Required";
        if (!form.dpoEmail.trim() || !isEmailValid(form.dpoEmail)) e.dpoEmail = "Valid email required";
        if (!form.dpoPhone.trim() || !isPhoneValid(form.dpoPhone)) e.dpoPhone = "Valid phone required";
        if (!form.dpoNin || !/^\d{11}$/.test(form.dpoNin)) e.dpoNin = "NIN must be exactly 11 digits";
        if (!form.dpoAddress.trim()) e.dpoAddress = "Required";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const validateStep3 = () => {
        const e: Partial<Record<keyof FormData, string>> = {};
        if (form.technicalMeasures.length === 0) e.technicalMeasures = "Select at least one";
        if (form.dataProtectionPolicies.length === 0) e.dataProtectionPolicies = "Select at least one";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const validateStep4 = () => {
        const e: Partial<Record<keyof FormData, string>> = {};
        if (!form.repFullName.trim()) e.repFullName = "Required";
        if (!form.repEmail.trim() || !isEmailValid(form.repEmail)) e.repEmail = "Valid email required";
        if (!form.repPhone.trim() || !isPhoneValid(form.repPhone)) e.repPhone = "Valid phone required";
        if (!form.consentAccuracy) e.consentAccuracy = "You must confirm the accuracy of the information";
        if (!form.consentPrivacy) e.consentPrivacy = "You must accept the Privacy Notice";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const nextStep = () => {
        if (step === 0 && !validateStep0()) return;
        if (step === 1 && !validateStep1()) return;
        if (step === 2 && !validateStep2()) return;
        if (step === 3 && !validateStep3()) return;
        setStep(s => s + 1);
    };

    const handleSubmit = async () => {
        if (!validateStep4()) return;
        setSubmitting(true);
        try {
            await emailjs.send(
                "service_mr6tpqs",
                "template_1oea7wj",
                {
                    companyName: form.companyName,
                    businessEmail: form.businessEmail,
                    businessPhone: form.businessPhone,
                    businessAddress: form.businessAddress,
                    companyDescription: form.companyDescription,
                    primaryCustomers: form.primaryCustomers,
                    dataVolume: form.dataVolume,
                    sharesDataWith: form.sharesDataWith.join(", "),
                    transferOutsideNigeria: form.transferOutsideNigeria,
                    generalDataCollected: form.generalDataCollected.join(", "),
                    generalDataOther: form.generalDataOther,
                    sensitiveDataCollected: form.sensitiveDataCollected.join(", "),
                    dpoFullName: form.dpoFullName,
                    dpoEmail: form.dpoEmail,
                    dpoPhone: form.dpoPhone,
                    dpoNin: "******* (masked for security)",
                    dpoAddress: form.dpoAddress,
                    dpoCert: form.dpoCertFileName || "Not provided",
                    technicalMeasures: form.technicalMeasures.join(", "),
                    dataProtectionPolicies: form.dataProtectionPolicies.join(", "),
                    repFullName: form.repFullName,
                    repEmail: form.repEmail,
                    repPhone: form.repPhone,
                },
                "TDuOmmrz0I_Z9X6iz"
            );
        } finally {
            setSubmitted(true);
            setSubmitting(false);
        }
    };

    const RadioOption = ({ field, value }: { field: keyof FormData; value: string }) => (
        <label
            className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-all ${
                (form[field] as string) === value
                    ? "border-primary bg-primary/10 text-white"
                    : "border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-300"
            }`}
        >
            <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                    (form[field] as string) === value ? "border-primary" : "border-slate-600"
                }`}
            >
                {(form[field] as string) === value && <div className="w-2 h-2 rounded-full bg-primary" />}
            </div>
            <span className="text-sm font-medium">{value}</span>
            <input
                type="radio"
                className="sr-only"
                checked={(form[field] as string) === value}
                onChange={() => set(field, value)}
            />
        </label>
    );

    const CheckOption = ({ field, value }: { field: ArrayField; value: string }) => (
        <label
            className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-all ${
                (form[field] as string[]).includes(value)
                    ? "border-primary bg-primary/10 text-white"
                    : "border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-300"
            }`}
        >
            <div
                className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-all ${
                    (form[field] as string[]).includes(value)
                        ? "border-primary bg-primary"
                        : "border-slate-600"
                }`}
            >
                {(form[field] as string[]).includes(value) && <CheckCircle className="w-3 h-3 text-white" />}
            </div>
            <span className="text-sm font-medium">{value}</span>
            <input
                type="checkbox"
                className="sr-only"
                checked={(form[field] as string[]).includes(value)}
                onChange={() => toggleArray(field, value)}
            />
        </label>
    );

    const card = "bg-[#1e293b] border border-slate-700/60 rounded-2xl shadow-2xl";

    return (
        <div className="min-h-screen bg-[#0f172a] pt-24 pb-16 px-4">
            <div className="max-w-2xl mx-auto">

                {/* Welcome */}
                {step === -1 && (
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/20 mb-4">
                                <Shield className="w-7 h-7 text-primary" />
                            </div>
                            <span className="block text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                                NDPC Compliance
                            </span>
                            <h1 className="text-3xl font-bold text-white mb-2">NDPC DCMI Registration</h1>
                            <p className="text-base font-medium text-slate-300 mb-4">
                                Data Controller/Processor of Major Importance
                            </p>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
                                Registering your organisation as a DCMI is a key compliance step under Nigerian law,
                                and we're here to make the process as simple as possible for you.
                            </p>
                        </div>

                        <div className={`${card} p-6 mb-4 space-y-4`}>
                            {[
                                <>To get started, we need a few details about your business and data practices.</>,
                                <>This form takes approximately <span className="text-white font-medium">3 minutes</span> to complete.</>,
                                <>Once you submit, our team will be in touch shortly with your <span className="text-white font-medium">invoice and next steps</span>.</>,
                                <>If you have any questions before submitting, please email{" "}
                                    <a href="mailto:info@cealed.africa" className="text-primary hover:underline">
                                        info@cealed.africa
                                    </a>.</>,
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <p className="text-sm text-slate-300">{item}</p>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => setStep(0)}
                            className="w-full py-3.5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
                        >
                            Start Registration <ChevronRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                )}

                {/* Thank You */}
                {submitted && (
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`${card} p-8 text-center`}
                    >
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
                            <CheckCircle className="w-7 h-7 text-green-400" />
                        </div>
                        <h2 className="text-xl font-bold text-white mb-2">
                            Thank you, {form.companyName}!
                        </h2>
                        <p className="text-slate-400 text-sm mb-2">
                            We have received your details and will be in touch shortly with your invoice.
                        </p>
                        <p className="text-slate-400 text-sm mb-8">
                            If you have any questions or need clarification in the meantime, please email{" "}
                            <a href="mailto:info@cealed.africa" className="text-primary hover:underline">
                                info@cealed.africa
                            </a>.
                        </p>
                        <a
                            href="/"
                            className="inline-block py-3 px-8 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-xl transition-all"
                        >
                            Back to Home
                        </a>
                    </motion.div>
                )}

                {/* Multi-step form */}
                {step >= 0 && !submitted && (
                    <>
                        <ProgressBar step={step} />
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                                className={`${card} p-6 sm:p-8`}
                            >

                                {/* Step 0 — About Your Business */}
                                {step === 0 && (
                                    <div className="space-y-5">
                                        <div className="mb-6">
                                            <h2 className="text-xl font-bold text-white">About Your Business</h2>
                                            <p className="text-sm text-slate-500 mt-1">Section 1 of 5</p>
                                        </div>
                                        <Field label="Company Name *" error={errors.companyName}>
                                            <input
                                                className={inputClass}
                                                value={form.companyName}
                                                onChange={e => set("companyName", e.target.value)}
                                                placeholder="Your Company Name"
                                            />
                                        </Field>
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <Field label="Business Email Address *" error={errors.businessEmail}>
                                                <input
                                                    className={inputClass}
                                                    type="email"
                                                    value={form.businessEmail}
                                                    onChange={e => set("businessEmail", e.target.value)}
                                                    placeholder="hello@yourcompany.com"
                                                />
                                                <p className="text-xs text-slate-500 mt-0.5">
                                                    Automated confirmation email will be sent here.
                                                </p>
                                            </Field>
                                            <Field label="Business Phone Number *" error={errors.businessPhone}>
                                                <input
                                                    className={inputClass}
                                                    type="tel"
                                                    value={form.businessPhone}
                                                    onChange={e => set("businessPhone", e.target.value)}
                                                    placeholder="+234 800 000 0000"
                                                />
                                            </Field>
                                        </div>
                                        <Field
                                            label="Business Address *"
                                            error={errors.businessAddress}
                                            hint="Include your street, city, LGA, and state."
                                        >
                                            <textarea
                                                className={`${inputClass} resize-none`}
                                                rows={3}
                                                value={form.businessAddress}
                                                onChange={e => set("businessAddress", e.target.value)}
                                                placeholder="e.g. 14 Broad Street, Lagos Island, Lagos"
                                            />
                                        </Field>
                                        <Field
                                            label="Briefly describe what your company does *"
                                            error={errors.companyDescription}
                                        >
                                            <textarea
                                                className={`${inputClass} resize-none`}
                                                rows={3}
                                                value={form.companyDescription}
                                                onChange={e => set("companyDescription", e.target.value)}
                                                placeholder="e.g., we provide mobile savings and lending services to individuals across Nigeria."
                                            />
                                        </Field>
                                        <Field
                                            label="Who are your primary customers? *"
                                            error={errors.primaryCustomers}
                                        >
                                            <div className="flex flex-col sm:flex-row gap-2 mt-1">
                                                {["B2B", "B2C", "Both businesses and individuals"].map(v => (
                                                    <RadioOption key={v} field="primaryCustomers" value={v} />
                                                ))}
                                            </div>
                                        </Field>
                                    </div>
                                )}

                                {/* Step 1 — Customers & Information */}
                                {step === 1 && (
                                    <div className="space-y-7">
                                        <div className="mb-6">
                                            <h2 className="text-xl font-bold text-white">Your Customers and Their Information</h2>
                                            <p className="text-sm text-slate-500 mt-1">Section 2 of 5</p>
                                        </div>
                                        <Field
                                            label="Approximately how many people's information does your company handle? (Include customers, users, and employees.) *"
                                            error={errors.dataVolume}
                                        >
                                            <div className="flex flex-col gap-2 mt-1">
                                                {dataVolumeOptions.map(v => (
                                                    <RadioOption key={v} field="dataVolume" value={v} />
                                                ))}
                                            </div>
                                        </Field>
                                        <Field
                                            label="Who do you share your customers' information with? (Tick all that apply.) *"
                                            error={errors.sharesDataWith}
                                        >
                                            <div className="flex flex-col gap-2 mt-1">
                                                {sharesDataWithOptions.map(v => (
                                                    <CheckOption key={v} field="sharesDataWith" value={v} />
                                                ))}
                                            </div>
                                        </Field>
                                        <Field
                                            label="Do you send or transfer any customer information outside Nigeria? *"
                                            error={errors.transferOutsideNigeria}
                                        >
                                            <div className="flex gap-3 mt-1">
                                                {["Yes", "No"].map(v => (
                                                    <RadioOption key={v} field="transferOutsideNigeria" value={v} />
                                                ))}
                                            </div>
                                        </Field>
                                        <Field
                                            label="What general information do you collect about your customers? (Tick all that apply.) *"
                                            error={errors.generalDataCollected}
                                        >
                                            <div className="grid sm:grid-cols-2 gap-2 mt-1">
                                                {generalDataOptions.map(v => (
                                                    <CheckOption key={v} field="generalDataCollected" value={v} />
                                                ))}
                                            </div>
                                            {form.generalDataCollected.includes("Other, please specify") && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    className="mt-2"
                                                >
                                                    <input
                                                        className={inputClass}
                                                        value={form.generalDataOther}
                                                        onChange={e => set("generalDataOther", e.target.value)}
                                                        placeholder="Please specify..."
                                                    />
                                                    {errors.generalDataOther && (
                                                        <p className="text-xs text-red-400 mt-1">{errors.generalDataOther}</p>
                                                    )}
                                                </motion.div>
                                            )}
                                        </Field>
                                        <div>
                                            <SectionLabel>Special or Sensitive Information</SectionLabel>
                                            <Field
                                                label="Do you collect any of the following sensitive information? (Tick all that apply.) *"
                                                error={errors.sensitiveDataCollected}
                                            >
                                                <div className="flex flex-col gap-2 mt-1">
                                                    {sensitiveDataOptions.map(v => (
                                                        <CheckOption key={v} field="sensitiveDataCollected" value={v} />
                                                    ))}
                                                </div>
                                            </Field>
                                        </div>
                                    </div>
                                )}

                                {/* Step 2 — DPO Details */}
                                {step === 2 && (
                                    <div className="space-y-5">
                                        <div className="mb-2">
                                            <h2 className="text-xl font-bold text-white">Data Protection Officer (DPO) Details</h2>
                                            <p className="text-sm text-slate-500 mt-1">Section 3 of 5</p>
                                        </div>
                                        <InfoBox>
                                            A Data Protection Officer (DPO) is the person in your organisation responsible
                                            for managing data privacy and compliance. Please provide their details below.
                                        </InfoBox>
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <Field label="DPO Full Name *" error={errors.dpoFullName}>
                                                <input
                                                    className={inputClass}
                                                    value={form.dpoFullName}
                                                    onChange={e => set("dpoFullName", e.target.value)}
                                                    placeholder="Full Name"
                                                />
                                            </Field>
                                            <Field label="DPO Email Address *" error={errors.dpoEmail}>
                                                <input
                                                    className={inputClass}
                                                    type="email"
                                                    value={form.dpoEmail}
                                                    onChange={e => set("dpoEmail", e.target.value)}
                                                    placeholder="dpo@yourcompany.com"
                                                />
                                            </Field>
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <Field label="DPO Phone Number *" error={errors.dpoPhone}>
                                                <input
                                                    className={inputClass}
                                                    type="tel"
                                                    value={form.dpoPhone}
                                                    onChange={e => set("dpoPhone", e.target.value)}
                                                    placeholder="+234 800 000 0000"
                                                />
                                            </Field>
                                            <Field
                                                label="DPO National Identification Number (NIN) *"
                                                error={errors.dpoNin}
                                            >
                                                <input
                                                    className={inputClass}
                                                    value={form.dpoNin}
                                                    onChange={e =>
                                                        set("dpoNin", e.target.value.replace(/\D/g, "").slice(0, 11))
                                                    }
                                                    placeholder="11-digit NIN"
                                                    maxLength={11}
                                                />
                                            </Field>
                                        </div>
                                        <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
                                            <p className="text-xs text-amber-400/80 leading-relaxed">
                                                Your DPO's NIN is required for the official NDPC filing. It is held securely
                                                and used only for registration.
                                            </p>
                                        </div>
                                        <Field label="DPO Office Address *" error={errors.dpoAddress}>
                                            <textarea
                                                className={`${inputClass} resize-none`}
                                                rows={3}
                                                value={form.dpoAddress}
                                                onChange={e => set("dpoAddress", e.target.value)}
                                                placeholder="House number, street, city, LGA, state"
                                            />
                                        </Field>
                                        <Field label="DPO Certification Document (if available)">
                                            <div
                                                className="border-2 border-dashed border-slate-700 rounded-xl p-6 flex flex-col items-center gap-3 cursor-pointer hover:border-slate-500 transition-all"
                                                onClick={() => fileInputRef.current?.click()}
                                            >
                                                <Upload className="w-6 h-6 text-slate-500" />
                                                <p className="text-sm text-slate-500 text-center">
                                                    {form.dpoCertFileName ? (
                                                        <span className="text-primary">{form.dpoCertFileName}</span>
                                                    ) : (
                                                        "Upload your DPO certificate here"
                                                    )}
                                                </p>
                                                <p className="text-xs text-slate-600">PDF, JPG or PNG · Max 5 MB</p>
                                            </div>
                                            <input
                                                ref={fileInputRef}
                                                type="file"
                                                accept=".pdf,.jpg,.jpeg,.png"
                                                className="sr-only"
                                                onChange={e => {
                                                    const file = e.target.files?.[0];
                                                    if (file) set("dpoCertFileName", file.name);
                                                }}
                                            />
                                        </Field>
                                    </div>
                                )}

                                {/* Step 3 — Security & Data Protection */}
                                {step === 3 && (
                                    <div className="space-y-7">
                                        <div className="mb-2">
                                            <h2 className="text-xl font-bold text-white">Security and Data Protection Measures</h2>
                                            <p className="text-sm text-slate-500 mt-1">Section 4 of 5</p>
                                        </div>
                                        <InfoBox>
                                            Please tick all the measures your organisation currently has in place. This
                                            information is required for your NDPC registration.
                                        </InfoBox>
                                        <Field
                                            label="What technical security measures does your company currently have in place? (Tick all that apply.) *"
                                            error={errors.technicalMeasures}
                                        >
                                            <div className="flex flex-col gap-2 mt-1">
                                                {technicalMeasuresOptions.map(v => (
                                                    <CheckOption key={v} field="technicalMeasures" value={v} />
                                                ))}
                                            </div>
                                        </Field>
                                        <Field
                                            label="What data protection policies or procedures does your company have in place? (Tick all that apply.) *"
                                            error={errors.dataProtectionPolicies}
                                        >
                                            <div className="flex flex-col gap-2 mt-1">
                                                {dataProtectionPoliciesOptions.map(v => (
                                                    <CheckOption key={v} field="dataProtectionPolicies" value={v} />
                                                ))}
                                            </div>
                                        </Field>
                                    </div>
                                )}

                                {/* Step 4 — Representative + Consent */}
                                {step === 4 && (
                                    <div className="space-y-5">
                                        <div className="mb-2">
                                            <h2 className="text-xl font-bold text-white">Data Controller / Processor Representative</h2>
                                            <p className="text-sm text-slate-500 mt-1">Section 5 of 5</p>
                                        </div>
                                        <InfoBox>
                                            This is the officer or person who officially represents your organisation with the
                                            Nigeria Data Protection Commission (NDPC). This may be different from the person
                                            completing this form.
                                        </InfoBox>
                                        <Field label="Representative's Full Name *" error={errors.repFullName}>
                                            <input
                                                className={inputClass}
                                                value={form.repFullName}
                                                onChange={e => set("repFullName", e.target.value)}
                                                placeholder="Full Name"
                                            />
                                        </Field>
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <Field label="Representative's Email Address *" error={errors.repEmail}>
                                                <input
                                                    className={inputClass}
                                                    type="email"
                                                    value={form.repEmail}
                                                    onChange={e => set("repEmail", e.target.value)}
                                                    placeholder="rep@yourcompany.com"
                                                />
                                            </Field>
                                            <Field label="Representative's Phone Number *" error={errors.repPhone}>
                                                <input
                                                    className={inputClass}
                                                    type="tel"
                                                    value={form.repPhone}
                                                    onChange={e => set("repPhone", e.target.value)}
                                                    placeholder="+234 800 000 0000"
                                                />
                                            </Field>
                                        </div>

                                        {/* Privacy Consent */}
                                        <div className="border-t border-slate-700 pt-6 space-y-4">
                                            <p className="text-sm font-semibold text-slate-300">Privacy Consent</p>
                                            <ConsentCheckbox
                                                checked={form.consentAccuracy}
                                                onChange={() => setConsent("consentAccuracy")}
                                                error={errors.consentAccuracy}
                                            >
                                                I confirm that the information I have provided above is accurate to the best
                                                of my knowledge.
                                            </ConsentCheckbox>
                                            <ConsentCheckbox
                                                checked={form.consentPrivacy}
                                                onChange={() => setConsent("consentPrivacy")}
                                                error={errors.consentPrivacy}
                                            >
                                                I have read and accept Cealed Africa's{" "}
                                                <a href="/privacy" className="text-primary hover:underline">
                                                    Privacy Notice here
                                                </a>
                                                . I understand that my information will be used to process my DCMI
                                                registration request.
                                            </ConsentCheckbox>
                                            <p className="text-xs text-slate-600 leading-relaxed pt-2">
                                                By submitting this form, you consent to Cealed Africa Limited processing the
                                                information provided for the purpose of facilitating your NDPC DCMI
                                                registration, in accordance with the Nigeria Data Protection Act 2023 and our
                                                Privacy Notice.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Navigation */}
                                <div
                                    className={`flex mt-8 pt-6 border-t border-slate-700 gap-3 ${
                                        step > 0 ? "justify-between" : "justify-end"
                                    }`}
                                >
                                    {step > 0 && (
                                        <button
                                            onClick={() => setStep(s => s - 1)}
                                            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-slate-700 text-sm font-medium text-slate-400 hover:text-white hover:border-slate-500 transition-all"
                                        >
                                            <ChevronLeft className="w-4 h-4" /> Back
                                        </button>
                                    )}
                                    {step < 4 ? (
                                        <button
                                            onClick={nextStep}
                                            className="flex items-center gap-1.5 px-6 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-xl transition-all"
                                        >
                                            Continue <ChevronRight className="w-4 h-4" />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleSubmit}
                                            disabled={submitting}
                                            className="flex items-center gap-1.5 px-6 py-2.5 bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white text-sm font-semibold rounded-xl transition-all"
                                        >
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
