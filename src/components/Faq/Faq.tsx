'use client'
import { useState } from "react"

export default function Faq() {

    const [faq, setFaq] = useState(1)

    return (
        <div className="bg-white py-14">
            <div className="max-w-[82rem] mx-auto space-y-10 px-6 md:px-0">
                <div className="text-center space-y-2.5">
                    <h6 className="text-[#21763F]">Faq</h6>
                    <h3 className="text-xl md:text-3xl font-bold">Frequently asked questions</h3>
                </div>
                {/* tabs */}
                <div className="flex items-center justify-center flex-wrap gap-5 md:gap-10">
                    <button onClick={() => setFaq(1)} className={`btn ${faq === 1 ? 'bg-[#005397] text-white' : 'btn-outline border-[#005397] text-black'} font-normal rounded-full px-6 hover:bg-[#005397] hover:border-[#005397]`}>Investor</button>
                    <button onClick={() => setFaq(2)} className={`btn ${faq === 2 ? 'bg-[#005397] text-white' : 'btn-outline border-[#005397] text-black'} font-normal rounded-full px-6 hover:bg-[#005397] hover:border-[#005397]`}>Business</button>
                    <button onClick={() => setFaq(3)} className={`btn ${faq === 3 ? 'bg-[#005397] text-white' : 'btn-outline border-[#005397] text-black'} font-normal rounded-full px-6 hover:bg-[#005397] hover:border-[#005397]`}>Raqamyah</button>
                    <button onClick={() => setFaq(4)} className={`btn ${faq === 4 ? 'bg-[#005397] text-white' : 'btn-outline border-[#005397] text-black'} font-normal rounded-full px-6 hover:bg-[#005397] hover:border-[#005397]`}>Shari’a Compliant</button>
                    <button onClick={() => setFaq(5)} className={`btn ${faq === 5 ? 'bg-[#005397] text-white' : 'btn-outline border-[#005397] text-black'} font-normal rounded-full px-6 hover:bg-[#005397] hover:border-[#005397]`}>Finance Application</button>
                </div>
                {/* faq */}
                {faq === 1 && (<div className="join join-vertical w-full pt-4">
                    <div className="collapse collapse-arrow join-item border-b text-sm md:text-base">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-base md:text-xl font-medium">How can i register as a n investor?</div>
                        <div className="collapse-content">
                            <p>The Corporate VISA Managers simplifies visa management for organizations, reducing administrative hassles, ensuring compliance, and facilitating a smooth and timely visa process for their employees.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-b text-sm md:text-base">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-base md:text-xl font-medium">What is the maximum and minimum investment in RSIN Platform?</div>
                        <div className="collapse-content">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos atque soluta excepturi exercitationem illo ducimus?</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-b text-sm md:text-base">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-base md:text-xl font-medium">How can i upgrade my account to a qualified on RSIN Platform?</div>
                        <div className="collapse-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo natus nesciunt, facilis veritatis dolor error expedita placeat commodi at necessitatibus suscipit soluta esse aliquam non maxime voluptates hic porro omnis.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-b text-sm md:text-base">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-base md:text-xl font-medium">What is automatic investment?</div>
                        <div className="collapse-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates hic aperiam quidem nulla excepturi cupiditate culpa iusto? Ducimus, quia dolorum!</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-b text-sm md:text-base">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-base md:text-xl font-medium">when can i receive profits?</div>
                        <div className="collapse-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, omnis?</p>
                        </div>
                    </div>
                </div>)}
                {faq === 2 && (
                    <div className="join join-vertical w-full pt-4 text-sm md:text-base">
                        <div className="collapse collapse-arrow join-item border-b">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title text-base md:text-xl font-medium">How can I apply for business financing?</div>
                            <div className="collapse-content">
                                <p>Apply by submitting your business details and required documents on the platform.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border-b">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-base md:text-xl font-medium">What types of businesses are eligible?</div>
                            <div className="collapse-content">
                                <p>Small and medium enterprises (SMEs) with operational records are eligible.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border-b">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-base md:text-xl font-medium">How long does the approval process take?</div>
                            <div className="collapse-content">
                                <p>Approval typically takes 2-4 weeks after document submission and evaluation.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border-b">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-base md:text-xl font-medium">Are there any hidden fees?</div>
                            <div className="collapse-content">
                                <p>All applicable fees are transparently listed during the application process.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border-b">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-base md:text-xl font-medium">How can I repay my financing?</div>
                            <div className="collapse-content">
                                <p>Repayment can be made through automated bank transfers based on agreed terms.</p>
                            </div>
                        </div>
                    </div>
                )}
                {faq === 3 && (
                    <div className="join join-vertical w-full pt-4 text-sm md:text-base">
                        <div className="collapse collapse-arrow join-item border-b">
                            <input type="radio" name="my-accordion-3" defaultChecked />
                            <div className="collapse-title text-base md:text-xl font-medium">What is Raqamyah?</div>
                            <div className="collapse-content">
                                <p>Raqamyah is a financial platform that connects investors with businesses seeking funding.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border-b">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-base md:text-xl font-medium">Is Raqamyah licensed?</div>
                            <div className="collapse-content">
                                <p>Yes, Raqamyah is fully licensed by relevant financial regulatory authorities.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border-b">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-base md:text-xl font-medium">What services does Raqamyah offer?</div>
                            <div className="collapse-content">
                                <p>Raqamyah offers financing services, investment opportunities, and business evaluation tools.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border-b">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-base md:text-xl font-medium">How do I contact Raqamyah support?</div>
                            <div className="collapse-content">
                                <p>You can contact support through the official website’s contact form or email support.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border-b">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-base md:text-xl font-medium">Is Raqamyah secure?</div>
                            <div className="collapse-content">
                                <p>Yes, Raqamyah uses secure encryption protocols to protect user data and transactions.</p>
                            </div>
                        </div>
                    </div>
                )}
                {faq === 4 && (
                    <div className="join join-vertical w-full pt-4 text-sm md:text-base">
                        <div className="collapse collapse-arrow join-item border-b">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-base md:text-xl font-medium">What is Shari’a compliance?</div>
                            <div className="collapse-content">
                                <p>Shari’a compliance ensures financial services adhere to Islamic law principles.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border-b">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-base md:text-xl font-medium">Are investments Shari’a-compliant?</div>
                            <div className="collapse-content">
                                <p>Yes, all investments are reviewed and approved by Shari’a advisors.</p>
                            </div>
                        </div>
                    </div>
                )}
                {faq === 5 && (
                    <div className="join join-vertical w-full pt-4 text-sm md:text-base">
                        <div className="collapse collapse-arrow join-item border-b">
                            <input type="radio" name="my-accordion-5" defaultChecked />
                            <div className="collapse-title text-base md:text-xl font-medium">How do I apply for financing?</div>
                            <div className="collapse-content">
                                <p>Submit your application online through the finance portal.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border-b">
                            <input type="radio" name="my-accordion-5" />
                            <div className="collapse-title text-base md:text-xl font-medium">What documents are required for financing?</div>
                            <div className="collapse-content">
                                <p>You need to provide business registration, financial statements, and a valid ID.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border-b">
                            <input type="radio" name="my-accordion-5" />
                            <div className="collapse-title text-base md:text-xl font-medium">How long does the approval process take?</div>
                            <div className="collapse-content">
                                <p>The approval process typically takes 5-7 business days after submitting all required documents.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
