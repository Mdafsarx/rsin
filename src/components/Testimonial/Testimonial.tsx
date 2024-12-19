'use client'
import TestimonialCard from "./TestimonialCard"
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "@/store/carouselSlice";

interface redux {
    carousel: { value: number };
}

export default function Testimonial() {

    const carousel = useSelector((state: redux) => state.carousel.value);
    const dispatch = useDispatch();


    return (
        <div className="bg-[#005397] py-[4.5rem] min-h-[550px]">

            <div className="max-w-[82rem] mx-auto space-y-12">

                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* text */}
                    <div className="space-y-2 text-center md:text-start">
                        <h4 className="text-[#7CE4A1]">Testimonial</h4>
                        <h2 className="text-xl md:text-3xl font-bold text-white leading-snug">For nearly 07 years, <br /> people have chosen <br /> VISAThing!</h2>
                    </div>
                    {/* Carousel button */}
                    <div className="space-y-8 ">
                        <p className="hidden md:flex items-center gap-1.5 text-white">
                            See our <span className="font-bold underline cursor-pointer">2000 reviews</span> on <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.6226 16.7767L16.673 15.4969L18.783 22L11.6226 16.7767ZM23.2453 8.37107H14.3553L11.6226 0L8.88994 8.37107H0L7.19497 13.5597L4.46226 21.9308L11.6572 16.7421L16.0849 13.5597L23.2453 8.37107Z" fill="#37C368" />
                            </svg> Trustpilot
                        </p>
                        <div className="flex items-center justify-center md:justify-start gap-8">
                            <button
                                onClick={() => {
                                    if (carousel === 1) return
                                    dispatch(decrement())
                                }}
                                className={`${carousel === 1 ? 'bg-[#ffffffCC]' : 'bg-white'} p-3 rounded-xl`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.00002 12H20" stroke="#005397" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8.9999 17C8.9999 17 4 13.3176 4 12C4 10.6824 9 7 9 7" stroke="#005397" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button
                                onClick={() => {
                                    if (carousel === 3) return
                                    dispatch(increment())
                                }}
                                className={`${carousel === 3 ? 'bg-[#ffffffCC]' : 'bg-white'} p-3 rounded-xl`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 11.9998H4" stroke="#005397" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M15.0001 17C15.0001 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="#005397" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* small device */}
                {carousel === 1 && <div className="flex md:hidden items-center justify-center ">
                    <TestimonialCard name={'Razu Sardar'} title={'Fund Seeker'} position={'CEO of RSM'} date={'2 days ago'} comment={'Fast at letting me know I got approved for the loan. Fund deposit was fast.'} />
                </div>}
                {/* mid */}
                {carousel === 1 && <div className="hidden md:flex items-center gap-3 ">
                    <TestimonialCard name={'Razu Sardar'} title={'Fund Seeker'} position={'CEO of RSM'} date={'2 days ago'} comment={'Fast at letting me know I got approved for the loan. Fund deposit was fast.'} />
                    <TestimonialCard name={'Arlene McCoy'} title={'Investor'} position={'CTO Of The Walt Disney Company'} date={'2 days ago'} comment={'Fast at letting me know I got approved for the loan. Fund deposit was fast.'} />
                    <TestimonialCard name={'Floyd Miles'} title={'Investor'} position={'MD Of Starbucks'} date={'2 days ago'} comment={'Fast at letting me know I got approved for the loan. Fund deposit was fast.'} />
                    <TestimonialCard name={'Jane Cooper'} title={'Fund Seeker'} position={'HR Of Gillette'} date={'2 days ago'} comment={'Fast at letting me know I got approved for the loan. Fund deposit was fast.'} />
                    <TestimonialCard name={'Darlene Robertson'} title={'Investor'} position={"HDO Of McDonald's"} date={'2 days ago'} comment={'Fast at letting me know I got approved for the loan. Fund deposit was fast.'} />
                </div>}

                {/* small device */}
                {carousel === 2 && <div className="flex md:hidden items-center justify-center">
                    <TestimonialCard name={'Rayan Dal'} title={'Fund Seeker'} position={'MD Of Starbucks'} date={'2 days ago'} comment={'Fast at letting me know I got approved for the loan. Fund deposit was fast.'} />
                </div>}
                {/* mid */}
                {carousel === 2 && <div className="hidden md:flex items-center gap-3 ">
                    <TestimonialCard name={'Rayan Dal'} title={'Fund Seeker'} position={'MD Of Starbucks'} date={'2 days ago'} comment={'Fast at letting me know I got approved for the loan. Fund deposit was fast.'} />
                    <TestimonialCard name={'Team baners'} title={'Createor'} position={'CTO of PTSR'} date={'2 days ago'} comment={'Fast at letting me know I got approved for the loan. Fund deposit was fast.'} />
                    <TestimonialCard name={'Nazmul hasan'} title={'Fund Seeker'} position={'CTO of RSM'} date={'2 days ago'} comment={'Fast at letting me know I got approved for the loan. Fund deposit was fast.'} />
                    <TestimonialCard name={'Emon ahmed'} title={'Investor'} position={'Ceo Of NFT'} date={'2 days ago'} comment={'Fast at letting me know I got approved for the loan. Fund deposit was fast.'} />
                    <TestimonialCard name={'Floyd Miles'} title={'Fund Seeker'} position={"CTO Of The Walt Disney Company"} date={'2 days ago'} comment={'Fast at letting me know I got approved for the loan. Fund deposit was fast.'} />
                </div>}

                {/* small device */}
                {carousel === 3 && <div className="flex md:hidden items-center justify-center  ">
                    <TestimonialCard name={'Razu Sardar'} title={'Fund Seeker'} position={'CEO of RSM'} date={'2 days ago'} comment={'Fast at letting me know I got approved for the loan. Fund deposit was fast.'} />
                </div>}
                {/* mid */}
                {carousel === 3 && <div className="hidden md:flex items-center gap-3 ">
                    <TestimonialCard name={'Razu Sardar'} title={'Fund Seeker'} position={'CEO of RSM'} date={'2 days ago'} comment={'Fast at letting me know I got approved for the loan. Fund deposit was fast.'} />
                    <TestimonialCard name={'Arlene McCoy'} title={'Investor'} position={'CTO Of The Walt Disney Company'} date={'2 days ago'} comment={'Fast at letting me know I got approved for the loan. Fund deposit was fast.'} />
                    <TestimonialCard name={'Floyd Miles'} title={'Investor'} position={'MD Of Starbucks'} date={'2 days ago'} comment={'Fast at letting me know I got approved for the loan. Fund deposit was fast.'} />
                    <TestimonialCard name={'Jane Cooper'} title={'Fund Seeker'} position={'HR Of Gillette'} date={'2 days ago'} comment={'Fast at letting me know I got approved for the loan. Fund deposit was fast.'} />
                    <TestimonialCard name={'Darlene Robertson'} title={'Investor'} position={"HDO Of McDonald's"} date={'2 days ago'} comment={'Fast at letting me know I got approved for the loan. Fund deposit was fast.'} />
                </div>}

            </div>

        </div>
    )
}
