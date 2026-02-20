export default function Terms() {
    const sections = [
        { id: "about", title: "About Us" },
        { id: "eligibility", title: "Eligibility" },
        { id: "authority", title: "Authority to Bind Organisation" },
        { id: "relationship", title: "Relationship of Parties" },
        { id: "fees", title: "Fees and Payment" },
        { id: "client-responsibilities", title: "Client Responsibilities" },
        { id: "acceptable-use", title: "Acceptable Use of the Website" },
        { id: "confidentiality", title: "Confidentiality" },
        { id: "record-retention", title: "Record Retention" },
        { id: "communications", title: "Communications and Electronic Signatures" },
        { id: "data-compliance", title: "Data Compliance and Protection" },
        { id: "intellectual-property", title: "Intellectual Property" },
        { id: "privacy-notice", title: "Privacy Notice" },
        { id: "trademarks", title: "Trademarks" },
        { id: "indemnification", title: "Indemnification" },
        { id: "limitation", title: "Limitation of Liability" },
        { id: "dispute", title: "Dispute Resolution" },
        { id: "miscellaneous", title: "Miscellaneous Provisions" },
        { id: "contact", title: "Contact Information" },
    ];

    return (
        <div className="min-h-screen bg-background">
            <section className="pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
                <div className="container-responsive max-w-4xl">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
                        Terms of Use
                    </h1>

                    <div className="glass-panel rounded-lg p-4 sm:p-6 mb-8">
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
                            Please read these terms and conditions ("Terms of Use" or "Terms") carefully as they govern your access to and use of our website (the "Website") and services provided by Cealed Africa Limited ("Cealed", "We", or "Us"), and contain important information about your legal rights, remedies, and obligations in relation to your use of the Website, <a href="https://cealed.africa" className="text-primary hover:underline">www.cealed.africa</a>.
                        </p>
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
                            You understand that your use of the Website is subject to our privacy notice, and any other agreement entered into as a precondition or condition for accessing our services. In the event of a conflict between these Terms and any other related agreements, the applicable terms of the related agreements shall prevail.
                        </p>
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                            We may amend these Terms without prior notice by posting an updated version on the Website. You acknowledge and agree to review these Terms periodically to familiarise yourself with any modifications. Your continued use of this Website after any modifications constitutes acceptance of the revised Terms.
                        </p>
                    </div>

                    {/* Table of Contents */}
                    <div className="glass-panel rounded-lg p-4 sm:p-6 mb-8">
                        <h2 className="text-lg font-semibold text-white mb-4">Contents</h2>
                        <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="text-sm text-slate-300 hover:text-primary transition-colors"
                                >
                                    → {section.title}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="max-w-none space-y-10 sm:space-y-12 text-slate-300">
                        <section id="about">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                                About Us
                            </h2>
                            <p className="text-sm sm:text-base leading-relaxed mb-3">
                                Cealed is a legal and consultancy firm that provides the following services ("Services") to individuals, businesses, companies, and other entities (collectively referred to as "Clients"):
                            </p>
                            <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base">
                                <li><strong>Legal and Regulatory Advisory:</strong> Legal guidance on regulatory, compliance, and corporate matters affecting Clients' operations.</li>
                                <li><strong>Startup Advisory:</strong> Guidance on business model, operationality, and corporate governance.</li>
                                <li><strong>Information Technology Services:</strong> Services relating to Artificial Intelligence (AI) governance, data protection, and information security.</li>
                                <li><strong>Research and Support Services:</strong> Research and advisory support on business strategy, product development, and operational structures.</li>
                            </ul>
                        </section>

                        <section id="eligibility">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                                Eligibility
                            </h2>
                            <p className="text-sm sm:text-base leading-relaxed">
                                Our Services are intended for Clients with the legal capacity to enter into valid contracts. By accessing or using the Website or engaging our Services, you confirm that you have such legal capacity. We do not knowingly engage with or provide Services to individuals under 18 (eighteen) years without parental or legal guardian supervision. Where access to the Website or Services occurs on behalf of a minor, such access must be exercised by a parent or legal guardian, who shall be solely responsible for any interaction with the Website, as We shall not be liable for such unsupervised minor access. We reserve the right to suspend or terminate access to our Services and Website in the event of a breach of this section of the Terms.
                            </p>
                        </section>

                        <section id="authority">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                                Authority to Bind Organisation
                            </h2>
                            <p className="text-sm sm:text-base leading-relaxed">
                                If you are accepting these Terms on behalf of an organisation or company, you confirm that you have the authority to bind the entity to these Terms.
                            </p>
                        </section>

                        <section id="relationship">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                                Relationship of Parties
                            </h2>
                            <p className="text-sm sm:text-base leading-relaxed">
                                Nothing in these Terms creates a partnership, agency, employment, or joint venture relationship between Cealed and any user or client. Neither party has authority to bind the other except as expressly agreed in writing.
                            </p>
                        </section>

                        <section id="fees">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                                Fees and Payment
                            </h2>
                            <p className="text-sm sm:text-base leading-relaxed">
                                The fees for the Services shall be agreed in writing before commencement of the relevant engagement contract or other written service agreement. Clients shall pay all fees in accordance with the timelines and payment terms set out in the applicable document. Taxes shall be charged in accordance with applicable laws. Failure to settle invoices within agreed timelines may result in suspension or termination of the Services.
                            </p>
                        </section>

                        <section id="client-responsibilities">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                                Client Responsibilities
                            </h2>
                            <p className="text-sm sm:text-base leading-relaxed mb-3">Clients shall:</p>
                            <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base">
                                <li>provide complete, accurate, and timely information as reasonably required for the provision of the Services;</li>
                                <li>provide instructions and approvals within reasonable timeframes;</li>
                                <li>cooperate in good faith and comply with applicable laws;</li>
                                <li>not misrepresent their identity, authority, or capacity, nor act on behalf of any individual or entity without proper authorisation;</li>
                                <li>ensure that all instructions and materials provided are lawful and do not infringe any third-party rights; and</li>
                                <li>understand that Cealed relies on the information and instructions provided and is not responsible for outcomes caused by incomplete, inaccurate, or delayed instructions.</li>
                            </ul>
                            <p className="text-sm sm:text-base leading-relaxed mt-3">
                                We are not responsible for any delay, error, or omission arising from the client's failure to meet these responsibilities.
                            </p>
                        </section>

                        <section id="acceptable-use">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                                Acceptable Use of the Website
                            </h2>
                            <p className="text-sm sm:text-base leading-relaxed mb-3">Users agree to comply with the following when accessing the Website:</p>
                            
                            <h3 className="text-base sm:text-lg font-semibold text-white mt-4 mb-2">Compliance with Laws:</h3>
                            <p className="text-sm sm:text-base leading-relaxed mb-3">
                                Users must comply with applicable laws and regulations and must not breach these Terms, the Privacy Notice, or any other agreement entered into with Us.
                            </p>

                            <h3 className="text-base sm:text-lg font-semibold text-white mt-4 mb-2">Website Integrity:</h3>
                            <p className="text-sm sm:text-base leading-relaxed mb-3">
                                Users shall not reproduce, duplicate, copy, sell, resell, or otherwise exploit any part of the Website or its content without our prior written consent.
                            </p>

                            <h3 className="text-base sm:text-lg font-semibold text-white mt-4 mb-2">Conduct and Harassment:</h3>
                            <p className="text-sm sm:text-base leading-relaxed mb-3">
                                Harassment, threats, or abusive conduct towards our employees, agents, or representatives is strictly prohibited.
                            </p>

                            <h3 className="text-base sm:text-lg font-semibold text-white mt-4 mb-2">Security and Unauthorised Access:</h3>
                            <p className="text-sm sm:text-base leading-relaxed mb-3">
                                Users shall not engage in any unauthorised access to the Website or its servers and networks.
                            </p>

                            <h3 className="text-base sm:text-lg font-semibold text-white mt-4 mb-2">Suspension and Termination of Services:</h3>
                            <p className="text-sm sm:text-base leading-relaxed mb-3">
                                We may suspend or terminate access to the Website or Services, in whole or in part, where these Terms are breached, fees remain unpaid, or continued access would result in a breach of professional obligations or applicable law. Upon suspension or termination, all fees and expenses incurred up to the effective date shall immediately become due and payable. Such termination shall be without prejudice to any rights or remedies accrued before the effective date.
                            </p>

                            <h3 className="text-base sm:text-lg font-semibold text-white mt-4 mb-2">Website Content Reliance:</h3>
                            <p className="text-sm sm:text-base leading-relaxed mb-3">
                                All information and materials published on our Website are provided for general informational purposes only and do not constitute legal, consultancy, information security, or other professional advice, nor do they constitute a solicitation or an offer to provide services. Such information is based on laws, regulations, and industry practices as of the date of publication and may become outdated or inaccurate over time. While we make reasonable efforts to ensure accuracy, we make no representations or warranties as to the completeness, accuracy, or timeliness of the content and disclaim all liability arising from reliance on such information.
                            </p>

                            <h3 className="text-base sm:text-lg font-semibold text-white mt-4 mb-2">Cross-Border Services:</h3>
                            <p className="text-sm sm:text-base leading-relaxed mb-3">
                                We are registered in Nigeria, but we may provide Services or publish content relevant to other jurisdictions. Such information is for general informational purposes only and does not constitute professional advice for those jurisdictions. Users accessing the Website or Services from outside Nigeria are responsible for ensuring compliance with the laws of their jurisdiction. We are not responsible for any reliance on information or Services provided outside Nigeria unless We have been specifically engaged to provide Services in that jurisdiction.
                            </p>

                            <h3 className="text-base sm:text-lg font-semibold text-white mt-4 mb-2">Third-Party Resources:</h3>
                            <p className="text-sm sm:text-base leading-relaxed">
                                Our Website may include links to third-party websites or services for reference. We do not control or endorse these websites and assume no liability for their content, features, products, or practices. Your access to such websites is subject to their respective terms and policies.
                            </p>
                        </section>

                        <section id="confidentiality">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                                Confidentiality
                            </h2>
                            <p className="text-sm sm:text-base leading-relaxed">
                                We shall treat all Client information as confidential, subject to applicable law and professional obligations. Clients shall also maintain the confidentiality of any proprietary or sensitive information received during the engagement.
                            </p>
                        </section>

                        <section id="record-retention">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                                Record Retention
                            </h2>
                            <p className="text-sm sm:text-base leading-relaxed">
                                Client files and records may be retained for a limited period in accordance with internal policies and applicable laws. We are not obligated to retain records indefinitely unless required to do so by law or agreed upon in writing.
                            </p>
                        </section>

                        <section id="communications">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                                Communications and Electronic Signatures
                            </h2>
                            <p className="text-sm sm:text-base leading-relaxed">
                                You consent to electronic communications and agree that electronic records and signatures are valid for all purposes under these Terms.
                            </p>
                        </section>

                        <section id="data-compliance">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                                Data Compliance and Protection
                            </h2>
                            <p className="text-sm sm:text-base leading-relaxed mb-3">
                                We comply with all applicable data protection laws, including the Nigerian Data Protection Act, 2023 (NDPA). We take reasonable steps to ensure that all Personally Identifiable Information (PII) collected or processed through our Services or the Website is secure and handled in compliance with the law. We are not responsible for any misuse of data caused by Clients.
                            </p>
                            <p className="text-sm sm:text-base leading-relaxed">
                                Read our <a href="/privacy" className="text-primary hover:underline">Privacy Notice</a> for detailed information on data collection, storage, and usage.
                            </p>
                        </section>

                        <section id="intellectual-property">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                                Intellectual Property
                            </h2>
                            <p className="text-sm sm:text-base leading-relaxed">
                                We do not grant you any licenses, express or implied, except as expressly stated in these Terms. All content, including text, graphics, software, and design, is exclusively owned, controlled, and/or licensed by Cealed or its licensors. You must not copy, reproduce, republish, or distribute any materials without prior written consent. If you believe your rights have been infringed, contact us at <a href="mailto:info@cealed.com" className="text-primary hover:underline">info@cealed.com</a>.
                            </p>
                        </section>

                        <section id="privacy-notice">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                                Privacy Notice
                            </h2>
                            <p className="text-sm sm:text-base leading-relaxed">
                                By using the Website, you consent to the collection, use, storage, and disclosure of your information as outlined in these Terms and our <a href="/privacy" className="text-primary hover:underline">Privacy Notice</a>.
                            </p>
                        </section>

                        <section id="trademarks">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                                Trademarks
                            </h2>
                            <p className="text-sm sm:text-base leading-relaxed">
                                "Cealed Africa Limited," "www.cealed.africa" and associated logos are trademarks of Cealed. You may not copy, modify, or use them without prior written consent. All rights, title, and interest in the Website, Services, and related technology belong to Cealed.
                            </p>
                        </section>

                        <section id="indemnification">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                                Indemnification
                            </h2>
                            <p className="text-sm sm:text-base leading-relaxed">
                                You agree to indemnify and hold harmless Us, our affiliates, subsidiaries, directors, managers, members, officers, and employees from any and/or all claims, demands, actions, damages, losses, costs, or expenses, including reasonable legal fees, arising out of or relating to; (a) your use of the Website or engagement with any service; (b) any breach of these Terms or any other applicable policy; (c) feedback, submissions or communications you provide; (d) false, incomplete, or misleading information provided to Us for verification or engagement purposes; or (e) any violation of your rights by a third party, including intellectual property, privacy, or other legal rights. This indemnity does not apply to claims or losses resulting from our gross negligence or willful misconduct. It applies to your successors and assigns and survives any termination or cancellation of these Terms.
                            </p>
                        </section>

                        <section id="limitation">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                                Limitation of Liability
                            </h2>
                            <p className="text-sm sm:text-base leading-relaxed mb-3">
                                To the maximum extent permitted by applicable law, We assume no liability for any (i) errors, mistakes, or inaccuracies of content; (ii) personal injury or property damage, of any nature whatsoever, resulting from your access to or use of our Website; (iii) any unauthorised access to or use of our secure servers and/or any personal information stored therein; (iv) any interruption on the Website; (v) any viruses or malware that may be transmitted to or through our Website by any third party; (vi) any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the Website; and (vii) any defamatory, offensive, or illegal conduct of a third party.
                            </p>
                            <p className="text-sm sm:text-base leading-relaxed">
                                All warranties, indemnities, and limitations of liability (express or implied) are excluded to the fullest extent permitted by law, unless otherwise provided herein. Nothing in these Terms excludes or limits liability that cannot be excluded under applicable law, including gross negligence or fraud.
                            </p>
                        </section>

                        <section id="dispute">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                                Dispute Resolution
                            </h2>
                            <p className="text-sm sm:text-base leading-relaxed">
                                Any dispute arising out of these Terms which is not settled by mutual agreement/negotiation within 14 (fourteen) days shall be settled as agreed in the engagement letter or applicable service contract.
                            </p>
                        </section>

                        <section id="miscellaneous">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                                Miscellaneous Provisions
                            </h2>
                            
                            <h3 className="text-base sm:text-lg font-semibold text-white mt-4 mb-2">Governing Law:</h3>
                            <p className="text-sm sm:text-base leading-relaxed mb-3">
                                These Terms are governed by the laws of the Federal Republic of Nigeria.
                            </p>

                            <h3 className="text-base sm:text-lg font-semibold text-white mt-4 mb-2">Severability:</h3>
                            <p className="text-sm sm:text-base leading-relaxed mb-3">
                                If any provision of these Terms is found to be invalid, illegal, or unenforceable, that provision will be treated as severed, and the remainder of the Terms will remain in full force and effect. Where possible, an invalid provision will be construed or modified to achieve its intended purpose to the fullest extent permitted by applicable law.
                            </p>

                            <h3 className="text-base sm:text-lg font-semibold text-white mt-4 mb-2">Assignment:</h3>
                            <p className="text-sm sm:text-base leading-relaxed mb-3">
                                You may not transfer or assign any of your rights or obligations under these Terms without our prior written consent, and any attempted transfer without such consent shall be void. We may transfer or assign these Terms, or any related rights or obligations, where necessary to continue, improve, or restructure the provision of the Services, or where such transfer is otherwise permitted by applicable law.
                            </p>

                            <h3 className="text-base sm:text-lg font-semibold text-white mt-4 mb-2">Waiver:</h3>
                            <p className="text-sm sm:text-base leading-relaxed mb-3">
                                If We choose not to enforce any right under these Terms, it does not mean We are waiving that right.
                            </p>

                            <h3 className="text-base sm:text-lg font-semibold text-white mt-4 mb-2">Notices:</h3>
                            <p className="text-sm sm:text-base leading-relaxed mb-3">
                                We may send notices to you via the email address you provide, and it is your responsibility to ensure it is accurate and active. Notices are deemed received upon successful transmission unless the sender receives a clear delivery failure notification. You must send notices to Us in writing, in English, signed, and directed to the official contact address published on the Website, which may be updated from time to time.
                            </p>

                            <h3 className="text-base sm:text-lg font-semibold text-white mt-4 mb-2">Force Majeure:</h3>
                            <p className="text-sm sm:text-base leading-relaxed mb-3">
                                We are not liable for delays or failure to meet any obligations due to events beyond our reasonable control, including, but not limited to, natural disasters, pandemics, government actions, civil unrest, acts of terrorism, labour disputes, widespread technological disruptions, or systemic banking failures. We shall take reasonable steps to mitigate the effects of such events and resume our Services as soon as possible.
                            </p>

                            <h3 className="text-base sm:text-lg font-semibold text-white mt-4 mb-2">Third-Party Beneficiary:</h3>
                            <p className="text-sm sm:text-base leading-relaxed">
                                Except as expressly stated, nothing in these Terms confers any rights on any third party. However, our third-party service providers may enforce those provisions of these Terms that directly relate to the services they provide, to the extent necessary for the performance of their obligations.
                            </p>
                        </section>

                        <section id="contact">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                                Contact Information
                            </h2>
                            
                            <h3 className="text-base sm:text-lg font-semibold text-white mt-4 mb-2">How You Can Contact Us:</h3>
                            <p className="text-sm sm:text-base leading-relaxed mb-4">
                                If you have any questions, complaints, feedback, or concerns relating to these Terms or the Services, you may contact us at <a href="mailto:info@cealed.com" className="text-primary hover:underline">info@cealed.com</a>. You may be required to provide sufficient information to enable us to identify you and respond appropriately.
                            </p>

                            <h3 className="text-base sm:text-lg font-semibold text-white mt-4 mb-2">How We Will Contact You:</h3>
                            <p className="text-sm sm:text-base leading-relaxed">
                                We may contact you via text or email using the details provided. You are responsible for ensuring that your contact information remains accurate and up to date. We shall not be liable for any failure to receive communications where such communications are sent to your registered contact details.
                            </p>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
}
