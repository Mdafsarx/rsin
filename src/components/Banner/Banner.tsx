import TrustedBy from "../TrustedBy/TrustedBy";

export default function Banner() {
    return (
        <div className="bg-[#FFFFFF]">
            <div className="max-w-[82rem] mx-auto">
                <div className="flex flex-col xl:flex-row items-center  min-h-[calc(80vh-80px)]  xl:min-h-[calc(100vh-80px)]">
                    {/* image */}
                    <div className="hidden xl:flex items-center gap-4 md:w-1/2">
                        <div className="flex flex-col justify-center gap-1">
                            <img src="https://res.cloudinary.com/dbrceqag4/image/upload/v1734441046/Frame_48095934_a8kgyo.png" alt="" />
                            <img src="https://res.cloudinary.com/dz1fy2tof/image/upload/v1734604187/Frame_48095936_1_xxopjy.png" className="w6" alt="" />
                        </div>
                        <div className="flex flex-col justify-center gap-4">
                            <img src="https://res.cloudinary.com/dbrceqag4/image/upload/v1734441360/Frame_48095935_mx3p1d.png" alt="" />
                            <img src="https://res.cloudinary.com/dbrceqag4/image/upload/v1734441438/Frame_48095937_qqj8gi.png" alt="" />
                        </div>
                    </div>
                    {/* content */}
                    <div className="w-full xl:w-1/2 p-8 md:p-20 xl:p-0">
                        <div className="xl:max-w-l space-y-3.5 flex flex-col items-center xl:items-start">
                            <button className="flex items-center gap-1.5 h-11 bg-[#00233F] rounded-2xl px-3 py-1 text-sm md:text-base`">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.9997 0.333008C12.0989 0.333008 9.26324 1.19319 6.85132 2.80479C4.4394 4.41638 2.55953 6.707 1.44945 9.38698C0.339363 12.067 0.0489137 15.0159 0.61483 17.861C1.18075 20.7061 2.57761 23.3194 4.62878 25.3706C6.67995 27.4217 9.2933 28.8186 12.1384 29.3845C14.9834 29.9504 17.9324 29.66 20.6124 28.5499C23.2924 27.4398 25.583 25.56 27.1946 23.148C28.8062 20.7361 29.6663 17.9005 29.6663 14.9997C29.6663 11.1098 28.1211 7.37931 25.3706 4.62878C22.6201 1.87824 18.8895 0.333008 14.9997 0.333008ZM11.195 10.5283C11.32 10.4034 11.4896 10.3331 11.6663 10.3331C11.8431 10.3331 12.0127 10.4034 12.1377 10.5283C13.4748 11.9138 14.2561 13.7424 14.333 15.6663C14.333 15.8432 14.2628 16.0127 14.1378 16.1377C14.0127 16.2628 13.8432 16.333 13.6663 16.333C13.4895 16.333 13.32 16.2628 13.1949 16.1377C13.0699 16.0127 12.9997 15.8432 12.9997 15.6663C12.9176 14.0961 12.2777 12.6067 11.195 11.4663C11.0715 11.3415 11.0021 11.173 11.0021 10.9973C11.0021 10.8217 11.0715 10.6532 11.195 10.5283ZM9.66635 16.9997C9.66635 17.5301 9.45563 18.0388 9.08056 18.4139C8.70549 18.789 8.19678 18.9997 7.66635 18.9997H6.33301C5.80258 18.9997 5.29387 18.789 4.9188 18.4139C4.54373 18.0388 4.33301 17.5301 4.33301 16.9997V16.333C4.33301 16.1562 4.40325 15.9866 4.52828 15.8616C4.6533 15.7366 4.82287 15.6663 4.99968 15.6663C5.17649 15.6663 5.34606 15.7366 5.47109 15.8616C5.59611 15.9866 5.66635 16.1562 5.66635 16.333V16.9997C5.66635 17.1765 5.73659 17.3461 5.86161 17.4711C5.98663 17.5961 6.1562 17.6663 6.33301 17.6663H7.66635C7.84316 17.6663 8.01273 17.5961 8.13775 17.4711C8.26278 17.3461 8.33301 17.1765 8.33301 16.9997V9.66634C8.33301 9.48953 8.40325 9.31996 8.52828 9.19494C8.6533 9.06991 8.82287 8.99967 8.99968 8.99967C9.17649 8.99967 9.34606 9.06991 9.47109 9.19494C9.59611 9.31996 9.66635 9.48953 9.66635 9.66634V16.9997ZM24.9997 18.9997H17.6663C17.3287 18.9995 16.9965 18.9138 16.7009 18.7506C16.4053 18.5874 16.1558 18.352 15.9757 18.0663C15.3562 18.6654 14.5281 19.0001 13.6663 18.9997H10.9997C10.8229 18.9997 10.6533 18.9294 10.5283 18.8044C10.4033 18.6794 10.333 18.5098 10.333 18.333C10.333 18.1562 10.4033 17.9866 10.5283 17.8616C10.6533 17.7366 10.8229 17.6663 10.9997 17.6663H13.6663C14.1968 17.6663 14.7055 17.4556 15.0806 17.0806C15.4556 16.7055 15.6663 16.1968 15.6663 15.6663V9.66634C15.6663 9.48953 15.7366 9.31996 15.8616 9.19494C15.9866 9.06991 16.1562 8.99967 16.333 8.99967C16.5098 8.99967 16.6794 9.06991 16.8044 9.19494C16.9294 9.31996 16.9997 9.48953 16.9997 9.66634V16.9997C16.9997 17.1765 17.0699 17.3461 17.1949 17.4711C17.32 17.5961 17.4895 17.6663 17.6663 17.6663H22.333C22.333 17.1359 22.1223 16.6272 21.7472 16.2521C21.3722 15.8771 20.8634 15.6663 20.333 15.6663H18.9997C18.8229 15.6663 18.6533 15.5961 18.5283 15.4711C18.4033 15.3461 18.333 15.1765 18.333 14.9997C18.333 14.8229 18.4033 14.6533 18.5283 14.5283C18.6533 14.4032 18.8229 14.333 18.9997 14.333H20.333C21.2167 14.3341 22.064 14.6856 22.6889 15.3105C23.3138 15.9354 23.6653 16.7826 23.6663 17.6663H24.9997C25.1765 17.6663 25.3461 17.7366 25.4711 17.8616C25.5961 17.9866 25.6663 18.1562 25.6663 18.333C25.6663 18.5098 25.5961 18.6794 25.4711 18.8044C25.3461 18.9294 25.1765 18.9997 24.9997 18.9997Z" fill="#29F2D0" />
                                </svg><span className="bg-gradient-to-r from-[#1FE6C5] to-[#19EB4B] text-transparent bg-clip-text">Islamic Finance, Shari’a Approved</span>
                            </button>
                            <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-center xl:text-start">Smart Investments <br /> for Verified SMEs</h1>
                            <p className="leading-relaxed text-balance text-center xl:text-start">Smart Investments for Verified SMEs connects investors with vetted small <br /> businesses, promoting informed decisions and local economic growth</p>
                            <div className="flex items-center gap-6 pt-3">
                                <button className="btn bg-[#005397] hover:bg-[#005397] text-white font-normal rounded-full">Start Investing</button>
                                <button className="btn btn-outline hover:bg-white hover:border-[#005397] hover:text-black border-[#005397]  font-normal text-black rounded-full">Get Funded</button>
                            </div>
                            <p className="flex items-center gap-1.5 text-sm md:text-base">
                                See our <span className="font-bold underline cursor-pointer">2000 reviews</span> on <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.6226 16.7767L16.673 15.4969L18.783 22L11.6226 16.7767ZM23.2453 8.37107H14.3553L11.6226 0L8.88994 8.37107H0L7.19497 13.5597L4.46226 21.9308L11.6572 16.7421L16.0849 13.5597L23.2453 8.37107Z" fill="#37C368" />
                                </svg> Trustpilot
                            </p>
                        </div>
                    </div>
                </div>
                <TrustedBy />
            </div>
        </div>
    )
}
