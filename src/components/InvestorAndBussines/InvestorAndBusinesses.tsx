import { FaPlay } from "react-icons/fa6";

export default function InvestorAndBusinesses() {
    return (
        <div className="max-w-[82rem] mx-auto space-y-6">
            {/* title */}
            <div className="w-full h-60 p-6 bg-white space-y-2.5 rounded-2xl">
                <h3 className="text-[#21763F]">How it Works</h3>
                <p className="text-3xl font-bold leading-snug">Our Process <br />
                    for Investors <br />
                    and Businesses</p>
            </div>
            {/* investor and businesses */}
            <div className="flex gap-6 ">
                {/* investors */}
                <div className="w-1/2 h-full bg-white rounded-2xl p-5 space-y-4">
                    <h1 className="text-lg font-medium">For Investors</h1>
                    {/* brand logo */}
                    <div className="flex items-center justify-center pb-4">
                        <div className="border rounded-2xl px-1.5 py-3">
                            <svg width="45" height="30" viewBox="0 0 153 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M110.549 36.9138V0.256348H118.854L144.797 26.6087V0.256348H153V36.9138H144.694L118.752 10.5102V36.9138H110.549Z" fill="#005397" />
                                <path d="M95.1787 36.9138V0.256348H103.382V36.9138H95.1787Z" fill="#36B0BE" />
                                <path d="M47.686 37.1701V30.5052L77.1658 30.5564C78.6697 30.5564 79.8147 30.2146 80.6008 29.531C81.4211 28.8133 81.8313 27.6683 81.8313 26.096C81.8313 24.5238 81.4211 23.3958 80.6008 22.7122C79.8147 21.9945 78.6697 21.6356 77.1658 21.6356H58.8114C55.0175 21.6356 52.061 20.7298 49.9419 18.9183C47.8569 17.0726 46.8145 14.3725 46.8145 10.8178C46.8145 7.26313 47.8569 4.58005 49.9419 2.76854C52.061 0.922846 55.0175 0 58.8114 0H87.6247V6.66499L59.683 6.61372C58.2133 6.61372 57.0683 6.95552 56.248 7.6391C55.4277 8.28851 55.0175 9.34808 55.0175 10.8178C55.0175 12.2875 55.4277 13.3642 56.248 14.0478C57.0683 14.6972 58.2133 15.0219 59.683 15.0219H78.0374C81.8313 15.0219 84.7707 15.9618 86.8557 17.8417C88.9748 19.6874 90.0344 22.4388 90.0344 26.096C90.0344 29.719 88.9748 32.4705 86.8557 34.3503C84.7707 36.2302 81.8313 37.1701 78.0374 37.1701H47.686Z" fill="#005397" />
                                <path d="M0 36.9138V0.256348H30.7102C34.5041 0.256348 37.4436 1.21337 39.5285 3.12742C41.6477 5.04147 42.7072 7.94672 42.7072 11.8432C42.7072 15.1586 41.9382 17.7562 40.4001 19.6361C38.862 21.516 36.6745 22.6952 33.8376 23.1737L42.2971 36.9138H32.9661L25.1219 23.43H8.20307V36.9138H0ZM29.7361 6.92134H8.20307V16.7138L29.7361 16.765C31.24 16.765 32.385 16.389 33.1711 15.6371C33.9915 14.8852 34.4016 13.6205 34.4016 11.8432C34.4016 10.0317 33.9915 8.76703 33.1711 8.04926C32.385 7.29731 31.24 6.92134 29.7361 6.92134Z" fill="#005397" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 border rounded-2xl p-3">
                        <div className="bg-[#ECFBF1] size-14 flex items-center justify-center rounded-xl">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 15.5403C14.854 15.5403 15.54 14.8473 15.54 14.0002C15.54 13.1532 14.854 12.4602 14 12.4602C13.153 12.4602 12.46 13.1532 12.46 14.0002C12.46 14.8473 13.153 15.5403 14 15.5403Z" fill="#2B9851" />
                                <path d="M14 0C6.26505 0 0 6.26505 0 14C0 21.7281 6.26505 28.0001 14 28.0001C21.735 28.0001 28.0001 21.7281 28.0001 14C28.0001 6.26505 21.7351 0 14 0ZM17.0661 17.0661L5.6 22.4001L10.934 10.934L22.4001 5.6L17.0661 17.0661Z" fill="#2B9851" />
                            </svg>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-semibold">Explore Opportunities</h3>
                            <p className="text-[#4A5578]">Browse verified businesses seeking investment.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 border rounded-2xl p-3">
                        <div className="bg-[#ECFBF1] size-14 flex items-center justify-center rounded-xl">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 15.5403C14.854 15.5403 15.54 14.8473 15.54 14.0002C15.54 13.1532 14.854 12.4602 14 12.4602C13.153 12.4602 12.46 13.1532 12.46 14.0002C12.46 14.8473 13.153 15.5403 14 15.5403Z" fill="#2B9851" />
                                <path d="M14 0C6.26505 0 0 6.26505 0 14C0 21.7281 6.26505 28.0001 14 28.0001C21.735 28.0001 28.0001 21.7281 28.0001 14C28.0001 6.26505 21.7351 0 14 0ZM17.0661 17.0661L5.6 22.4001L10.934 10.934L22.4001 5.6L17.0661 17.0661Z" fill="#2B9851" />
                            </svg>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-semibold">Explore Opportunities</h3>
                            <p className="text-[#4A5578]">Browse verified businesses seeking investment.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 border rounded-2xl p-3">
                        <div className="bg-[#ECFBF1] size-14 flex items-center justify-center rounded-xl">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 15.5403C14.854 15.5403 15.54 14.8473 15.54 14.0002C15.54 13.1532 14.854 12.4602 14 12.4602C13.153 12.4602 12.46 13.1532 12.46 14.0002C12.46 14.8473 13.153 15.5403 14 15.5403Z" fill="#2B9851" />
                                <path d="M14 0C6.26505 0 0 6.26505 0 14C0 21.7281 6.26505 28.0001 14 28.0001C21.735 28.0001 28.0001 21.7281 28.0001 14C28.0001 6.26505 21.7351 0 14 0ZM17.0661 17.0661L5.6 22.4001L10.934 10.934L22.4001 5.6L17.0661 17.0661Z" fill="#2B9851" />
                            </svg>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-semibold">Explore Opportunities</h3>
                            <p className="text-[#4A5578]">Browse verified businesses seeking investment.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 border rounded-2xl p-3">
                        <div className="bg-[#ECFBF1] size-14 flex items-center justify-center rounded-xl">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 15.5403C14.854 15.5403 15.54 14.8473 15.54 14.0002C15.54 13.1532 14.854 12.4602 14 12.4602C13.153 12.4602 12.46 13.1532 12.46 14.0002C12.46 14.8473 13.153 15.5403 14 15.5403Z" fill="#2B9851" />
                                <path d="M14 0C6.26505 0 0 6.26505 0 14C0 21.7281 6.26505 28.0001 14 28.0001C21.735 28.0001 28.0001 21.7281 28.0001 14C28.0001 6.26505 21.7351 0 14 0ZM17.0661 17.0661L5.6 22.4001L10.934 10.934L22.4001 5.6L17.0661 17.0661Z" fill="#2B9851" />
                            </svg>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-semibold">Explore Opportunities</h3>
                            <p className="text-[#4A5578]">Browse verified businesses seeking investment.</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-6 pt-4">
                        <button className="btn text-white rounded-full font-normal bg-[#005397] px-5">Start Investing</button>
                        <button className="btn text-black rounded-full font-medium btn-outline border-[#005397] px-7 gap-1.5">
                            <FaPlay className="text-[#005397] text-base" />
                            Tutorial
                        </button>
                    </div>

                </div>

                {/* Businesses */}
                <div className="w-1/2 h-full bg-white rounded-2xl p-5 space-y-4">
                    <h1 className="text-lg font-medium">For Businesses</h1>
                    {/* brand logo */}
                    <div className="flex items-center justify-center pb-4">
                        <div className="border rounded-2xl px-1.5 py-3">
                            <svg width="45" height="30" viewBox="0 0 153 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M110.549 36.9138V0.256348H118.854L144.797 26.6087V0.256348H153V36.9138H144.694L118.752 10.5102V36.9138H110.549Z" fill="#005397" />
                                <path d="M95.1787 36.9138V0.256348H103.382V36.9138H95.1787Z" fill="#36B0BE" />
                                <path d="M47.686 37.1701V30.5052L77.1658 30.5564C78.6697 30.5564 79.8147 30.2146 80.6008 29.531C81.4211 28.8133 81.8313 27.6683 81.8313 26.096C81.8313 24.5238 81.4211 23.3958 80.6008 22.7122C79.8147 21.9945 78.6697 21.6356 77.1658 21.6356H58.8114C55.0175 21.6356 52.061 20.7298 49.9419 18.9183C47.8569 17.0726 46.8145 14.3725 46.8145 10.8178C46.8145 7.26313 47.8569 4.58005 49.9419 2.76854C52.061 0.922846 55.0175 0 58.8114 0H87.6247V6.66499L59.683 6.61372C58.2133 6.61372 57.0683 6.95552 56.248 7.6391C55.4277 8.28851 55.0175 9.34808 55.0175 10.8178C55.0175 12.2875 55.4277 13.3642 56.248 14.0478C57.0683 14.6972 58.2133 15.0219 59.683 15.0219H78.0374C81.8313 15.0219 84.7707 15.9618 86.8557 17.8417C88.9748 19.6874 90.0344 22.4388 90.0344 26.096C90.0344 29.719 88.9748 32.4705 86.8557 34.3503C84.7707 36.2302 81.8313 37.1701 78.0374 37.1701H47.686Z" fill="#005397" />
                                <path d="M0 36.9138V0.256348H30.7102C34.5041 0.256348 37.4436 1.21337 39.5285 3.12742C41.6477 5.04147 42.7072 7.94672 42.7072 11.8432C42.7072 15.1586 41.9382 17.7562 40.4001 19.6361C38.862 21.516 36.6745 22.6952 33.8376 23.1737L42.2971 36.9138H32.9661L25.1219 23.43H8.20307V36.9138H0ZM29.7361 6.92134H8.20307V16.7138L29.7361 16.765C31.24 16.765 32.385 16.389 33.1711 15.6371C33.9915 14.8852 34.4016 13.6205 34.4016 11.8432C34.4016 10.0317 33.9915 8.76703 33.1711 8.04926C32.385 7.29731 31.24 6.92134 29.7361 6.92134Z" fill="#005397" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 border rounded-2xl p-3">
                        <div className="bg-[#ECFBF1] size-14 flex items-center justify-center rounded-xl">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 15.5403C14.854 15.5403 15.54 14.8473 15.54 14.0002C15.54 13.1532 14.854 12.4602 14 12.4602C13.153 12.4602 12.46 13.1532 12.46 14.0002C12.46 14.8473 13.153 15.5403 14 15.5403Z" fill="#2B9851" />
                                <path d="M14 0C6.26505 0 0 6.26505 0 14C0 21.7281 6.26505 28.0001 14 28.0001C21.735 28.0001 28.0001 21.7281 28.0001 14C28.0001 6.26505 21.7351 0 14 0ZM17.0661 17.0661L5.6 22.4001L10.934 10.934L22.4001 5.6L17.0661 17.0661Z" fill="#2B9851" />
                            </svg>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-semibold">Apply Online</h3>
                            <p className="text-[#4A5578]">Submit your financing application online.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 border rounded-2xl p-3">
                        <div className="bg-[#ECFBF1] size-14 flex items-center justify-center rounded-xl">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 15.5403C14.854 15.5403 15.54 14.8473 15.54 14.0002C15.54 13.1532 14.854 12.4602 14 12.4602C13.153 12.4602 12.46 13.1532 12.46 14.0002C12.46 14.8473 13.153 15.5403 14 15.5403Z" fill="#2B9851" />
                                <path d="M14 0C6.26505 0 0 6.26505 0 14C0 21.7281 6.26505 28.0001 14 28.0001C21.735 28.0001 28.0001 21.7281 28.0001 14C28.0001 6.26505 21.7351 0 14 0ZM17.0661 17.0661L5.6 22.4001L10.934 10.934L22.4001 5.6L17.0661 17.0661Z" fill="#2B9851" />
                            </svg>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-semibold">Get Verified</h3>
                            <p className="text-[#4A5578]">Our team reviews and approves your application.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 border rounded-2xl p-3">
                        <div className="bg-[#ECFBF1] size-14 flex items-center justify-center rounded-xl">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 15.5403C14.854 15.5403 15.54 14.8473 15.54 14.0002C15.54 13.1532 14.854 12.4602 14 12.4602C13.153 12.4602 12.46 13.1532 12.46 14.0002C12.46 14.8473 13.153 15.5403 14 15.5403Z" fill="#2B9851" />
                                <path d="M14 0C6.26505 0 0 6.26505 0 14C0 21.7281 6.26505 28.0001 14 28.0001C21.735 28.0001 28.0001 21.7281 28.0001 14C28.0001 6.26505 21.7351 0 14 0ZM17.0661 17.0661L5.6 22.4001L10.934 10.934L22.4001 5.6L17.0661 17.0661Z" fill="#2B9851" />
                            </svg>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-semibold">Listed for Funding</h3>
                            <p className="text-[#4A5578]">Approved businesses are listed for investors.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 border rounded-2xl p-3">
                        <div className="bg-[#ECFBF1] size-14 flex items-center justify-center rounded-xl">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 15.5403C14.854 15.5403 15.54 14.8473 15.54 14.0002C15.54 13.1532 14.854 12.4602 14 12.4602C13.153 12.4602 12.46 13.1532 12.46 14.0002C12.46 14.8473 13.153 15.5403 14 15.5403Z" fill="#2B9851" />
                                <path d="M14 0C6.26505 0 0 6.26505 0 14C0 21.7281 6.26505 28.0001 14 28.0001C21.735 28.0001 28.0001 21.7281 28.0001 14C28.0001 6.26505 21.7351 0 14 0ZM17.0661 17.0661L5.6 22.4001L10.934 10.934L22.4001 5.6L17.0661 17.0661Z" fill="#2B9851" />
                            </svg>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-semibold">Receive Funding</h3>
                            <p className="text-[#4A5578]">Get the capital needed to grow your business.</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-6 pt-4">
                        <button className="btn text-white rounded-full font-normal bg-[#005397] px-5">Get Funded</button>
                        <button className="btn text-black rounded-full font-medium btn-outline border-[#005397] px-7 gap-1.5">
                            <FaPlay className="text-[#005397] text-base" />
                            Tutorial
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
