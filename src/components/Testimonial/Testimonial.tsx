'use client'
import { useState } from "react"
import TestimonialCard from "./TestimonialCard"

export default function Testimonial() {

    const [carousel, setCarousel] = useState(1)

    return (
        <div className="bg-[#005397] py-16 min-h-[550px]">

            <div className="max-w-[82rem] mx-auto space-y-12">

                <div className="flex items-center justify-between">

                    {/* text */}
                    <div className="space-y-2">
                        <h4 className="text-[#7CE4A1]">Testimonial</h4>
                        <h2 className="text-3xl font-bold text-white leading-snug">For nearly 07 years, <br /> people have chosen <br /> VISAThing!</h2>
                    </div>
                    {/* Carousel button */}
                    <div className="space-y-8">
                        <p className="flex items-center gap-1.5 text-white">
                            See our <span className="font-bold underline">2000 reviews</span> on <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.6226 16.7767L16.673 15.4969L18.783 22L11.6226 16.7767ZM23.2453 8.37107H14.3553L11.6226 0L8.88994 8.37107H0L7.19497 13.5597L4.46226 21.9308L11.6572 16.7421L16.0849 13.5597L23.2453 8.37107Z" fill="#37C368" />
                            </svg> Trustpilot
                        </p>
                        <div className="flex items-center gap-8">
                            <button onClick={() => setCarousel(prev => prev - 1)} className="bg-white p-3 rounded-xl"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.00002 12H20" stroke="#005397" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.9999 17C8.9999 17 4 13.3176 4 12C4 10.6824 9 7 9 7" stroke="#005397" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></button>
                            <button onClick={() => setCarousel(prev => prev + 1)} className="bg-white p-3 rounded-xl"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 11.9998H4" stroke="#005397" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15.0001 17C15.0001 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="#005397" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></button>
                        </div>
                    </div>

                </div>

                {carousel === 1 && <div className="flex items-center gap-3 overflow-hidden">
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
                }

                {carousel === 2 && <div className="flex items-center gap-3 overflow-hidden">
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
                }

                {carousel === 3 && <div className="flex items-center gap-3 overflow-hidden">
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
                }

            </div>

        </div>
    )
}
