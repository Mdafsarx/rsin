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
                            <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33109 19.5647C7.81593 17.4256 10.5338 17.0497 13.6385 18.4153C13.6441 18.4182 13.6497 18.4209 13.6553 18.4233C16.5581 19.5547 19.2135 20.282 21.5562 20.5845C22.0679 20.9587 22.1561 21.1858 22.1472 21.2384C22.1472 21.2415 22.0478 21.5679 20.6888 21.8775C20.2225 21.9839 18.7354 21.7058 17.5415 21.4826C16.5237 21.2921 15.56 21.1122 14.889 21.0767C14.8777 21.0761 14.8665 21.0758 14.8577 21.0761C14.1156 21.088 13.5584 21.2199 13.1464 21.479C13.0384 21.5476 12.962 21.6563 12.9341 21.7812C12.9062 21.9062 12.9291 22.037 12.9977 22.1451C13.0664 22.2531 13.1751 22.3295 13.3 22.3574C13.4249 22.3853 13.5558 22.3624 13.6638 22.2938C13.9083 22.1382 14.3205 22.051 14.855 22.0404C15.4635 22.0751 16.4301 22.2556 17.3657 22.4305C18.753 22.6898 19.7452 22.8643 20.4077 22.8639C20.5748 22.8668 20.7416 22.8512 20.9053 22.8176C21.7665 22.6211 22.9295 22.2626 23.0944 21.4228C23.1598 21.0805 23.0404 20.7683 22.8556 20.5047C23.3161 20.3623 23.7511 20.09 24.1946 19.674C24.2003 19.6689 24.2059 19.6635 24.2115 19.6581C25.2862 18.5522 26.4407 17.6367 27.6403 16.9367C27.8904 16.829 28.9622 16.9049 29.3178 17.2825C29.3747 17.3444 29.4941 17.4712 29.3178 17.8266C27.1656 21.0668 26.2672 22.1364 25.8948 22.4625C25.2352 23.0388 21.7525 25.2433 20.5811 25.8616C20.5506 25.8771 20.522 25.8961 20.4958 25.9182C19.3018 26.9167 17.4992 27.0813 15.1339 26.4079C10.0647 24.7851 8.6517 24.8678 8.03193 25.0714C8.01159 25.078 7.99165 25.0858 7.9722 25.0947C7.41331 25.3628 6.85224 25.6264 6.28906 25.8854L4.70275 19.9713C4.9243 19.8554 5.13464 19.7193 5.33109 19.5647ZM7.98363 15.2226H25.7669C25.8303 15.2226 25.893 15.2101 25.9515 15.1859C26.01 15.1616 26.0631 15.1261 26.1079 15.0813C26.1527 15.0366 26.1882 14.9834 26.2124 14.9249C26.2367 14.8664 26.2491 14.8037 26.2491 14.7404C26.2491 14.677 26.2367 14.6143 26.2124 14.5558C26.1882 14.4973 26.1527 14.4442 26.1079 14.3994C26.0631 14.3546 26.01 14.3191 25.9515 14.2949C25.893 14.2706 25.8303 14.2582 25.7669 14.2582H24.4736V5.29916H25.3208C25.4095 5.2992 25.4965 5.27478 25.5722 5.2286C25.6479 5.18242 25.7094 5.11626 25.75 5.03739C25.7905 4.95852 25.8085 4.87 25.802 4.78156C25.7955 4.69311 25.7648 4.60817 25.7132 4.53606L22.6029 0.201006C22.5581 0.138796 22.4992 0.088126 22.4309 0.0531764C22.3627 0.0182269 22.2872 0 22.2105 0C22.1339 0 22.0583 0.0182269 21.9901 0.0531764C21.9219 0.088126 21.863 0.138796 21.8182 0.201006L18.7076 4.53606C18.656 4.60817 18.6252 4.69311 18.6187 4.78156C18.6123 4.87 18.6303 4.95852 18.6708 5.03739C18.7114 5.11626 18.7729 5.18242 18.8486 5.2286C18.9243 5.27478 19.0113 5.2992 19.1 5.29916H19.95V14.2582H19.1371V7.03425C19.1371 6.97086 19.1245 6.9081 19.1002 6.84956C19.0759 6.79102 19.0402 6.73785 18.9954 6.69308C18.9505 6.6483 18.8972 6.61281 18.8386 6.58862C18.78 6.56444 18.7172 6.55203 18.6539 6.55211H15.0941C14.9665 6.55253 14.8443 6.60351 14.7542 6.69389C14.6642 6.78426 14.6136 6.90666 14.6136 7.03425V14.2582H13.8006V10.0091C13.8006 9.94568 13.788 9.88293 13.7637 9.8244C13.7393 9.76587 13.7037 9.7127 13.6588 9.66795C13.6139 9.62319 13.5607 9.58772 13.5021 9.56356C13.4435 9.5394 13.3807 9.52703 13.3173 9.52715H9.76054C9.69716 9.52703 9.63437 9.5394 9.57577 9.56356C9.51717 9.58772 9.4639 9.62319 9.41902 9.66795C9.37413 9.7127 9.3385 9.76587 9.31417 9.8244C9.28984 9.88293 9.27729 9.94568 9.27722 10.0091V14.258H7.98363C7.85574 14.258 7.73309 14.3088 7.64266 14.3992C7.55223 14.4897 7.50143 14.6123 7.50143 14.7402C7.50143 14.8681 7.55223 14.9907 7.64266 15.0812C7.73309 15.1716 7.85574 15.2224 7.98363 15.2224V15.2226ZM3.5826 19.509L0.588867 20.3105L2.65012 28L5.64097 27.1983L3.5826 19.509Z" fill="#2B9851" />
                            </svg>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-semibold">Invest</h3>
                            <p className="text-[#4A5578]">Choose and invest in a business that fits your goals.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 border rounded-2xl p-3">
                        <div className="bg-[#ECFBF1] size-14 flex items-center justify-center rounded-xl">
                            <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.0564 20.1437H1.3502C0.718945 20.1437 0.200195 20.6625 0.200195 21.2938V22.3375C0.200195 22.9688 0.718945 23.4875 1.3502 23.4875H24.0564C24.6877 23.4875 25.2064 22.9688 25.2064 22.3375V21.2938C25.2064 20.6562 24.6877 20.1437 24.0564 20.1437ZM16.3502 10.7812C17.7252 9.875 19.0189 8.85 20.2189 7.725V1.04375H16.3502V10.7812ZM9.5752 14.0812C10.9002 13.6375 12.2002 13.0938 13.4439 12.4625V8.35625H9.5752V14.0812ZM2.79395 15.4937C4.10019 15.3812 5.39395 15.1812 6.66895 14.8937V13.3062H2.79395V15.4937ZM6.66895 18.025C5.39395 18.2812 4.10645 18.4625 2.79395 18.5625V19.6437H6.66895V18.025ZM13.4439 15.8563C12.1877 16.4188 10.8939 16.9 9.5752 17.2938V19.6437H13.4439V15.8563ZM20.2252 11.7563C19.0002 12.725 17.7002 13.6 16.3564 14.375V19.6437H20.2252V11.7563ZM24.1439 4.05625C22.6502 6.04375 21.2064 7.6125 19.3314 9.18125C13.9814 13.6625 7.20645 16.125 0.206445 16.1V18.1625C2.64395 18.1688 4.9627 17.9062 7.3502 17.3687C7.98145 17.225 8.6127 17.0625 9.2377 16.875C9.2502 16.8687 9.2627 16.8687 9.2752 16.8625C10.7502 16.425 12.1877 15.8875 13.5814 15.2437C13.5939 15.2375 13.6002 15.2313 13.6127 15.2313C14.0814 15.0375 15.6064 14.2437 15.9689 14.0187C15.9752 14.0125 15.9877 14.0063 16.0002 14C17.5127 13.1375 18.9564 12.15 20.3127 11.0437C22.3814 9.35 24.2002 7.46875 25.8127 5.26875C25.8189 5.2625 25.8252 5.25 25.8314 5.2375C25.8314 5.23125 25.8314 5.23125 25.8502 5.20625C25.9252 5.0875 26.0814 5.05 26.2002 5.13125L27.3689 5.9375L27.8002 0.5L22.8752 2.8625L24.0752 3.6875C24.1939 3.76875 24.2377 3.93125 24.1439 4.05625Z" fill="#2B9851" />
                            </svg>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-semibold">Track Progress</h3>
                            <p className="text-[#4A5578]">Monitor your investment’s performance on our platform.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 border rounded-2xl p-3">
                        <div className="bg-[#ECFBF1] size-14 flex items-center justify-center rounded-xl">
                            <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4112 14.7558C14.3338 14.6783 14.2727 14.5862 14.2314 14.4848C14.1471 14.2811 14.1471 14.0522 14.2314 13.8485C14.2731 13.7469 14.3343 13.6546 14.4116 13.5766L19.4111 8.57756C19.4884 8.50005 19.5802 8.43858 19.6813 8.39668C19.7825 8.35478 19.8908 8.33328 20.0003 8.33341H1.16734C1.07893 8.33341 0.994137 8.36853 0.931621 8.43105C0.869105 8.49356 0.833984 8.57835 0.833984 8.66676L0.833984 17.5C0.833984 18.8806 1.95324 19.9999 3.33391 19.9999H20.0002C19.8908 20 19.7824 19.9785 19.6813 19.9366C19.5802 19.8947 19.4883 19.8332 19.4111 19.7557L14.4112 14.7558ZM10.0005 15H6.66722C6.20659 15 5.83389 14.6273 5.83389 14.1666C5.83389 13.706 6.20659 13.3333 6.66722 13.3333H10.0005C10.4611 13.3333 10.8338 13.706 10.8338 14.1666C10.8338 14.6273 10.4611 15 10.0005 15ZM29.1668 6.33346V2.50017C29.1668 1.1195 28.0475 0.000244141 26.6669 0.000244141H3.33391C1.95324 0.000244141 0.833984 1.1195 0.833984 2.50023V6.33351C0.833984 6.42192 0.869105 6.50671 0.931621 6.56923C0.994137 6.63174 1.07893 6.66686 1.16734 6.66686H28.8335C28.9219 6.66684 29.0067 6.6317 29.0692 6.56917C29.1317 6.50665 29.1668 6.42186 29.1668 6.33346Z" fill="#2B9851" />
                                <path d="M19.9999 8.33374C20.1094 8.33361 20.2178 8.35512 20.3189 8.39701C20.42 8.43891 20.5118 8.50038 20.5891 8.57789C20.9146 8.90339 20.9146 9.43075 20.5891 9.75625L17.0117 13.3336H26.6665C27.1271 13.3336 27.4998 13.7063 27.4998 14.167C27.4998 14.6276 27.1271 15.0003 26.6665 15.0003H17.0117L20.5891 18.5777C20.9146 18.9032 20.9146 19.4306 20.5891 19.7561C20.5118 19.8336 20.42 19.895 20.3189 19.9369C20.2178 19.9788 20.1094 20.0003 19.9999 20.0002H26.6665C28.0472 20.0002 29.1664 18.881 29.1664 17.5003V8.66709C29.1664 8.57868 29.1313 8.49389 29.0688 8.43138C29.0063 8.36886 28.9215 8.33374 28.8331 8.33374H19.9999Z" fill="#2B9851" />
                            </svg>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-semibold">Receive Returns</h3>
                            <p className="text-[#4A5578]">Get monthly repayments and profits directly.</p>
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
                            <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0999 13.2981H1.90454C1.18439 13.2981 0.600586 12.7143 0.600586 11.9941V7.62986C0.600586 6.90971 1.18439 6.32596 1.90454 6.32596H8.34792C9.15429 8.1091 10.9514 9.35477 13.03 9.35477C15.1086 9.35477 16.9051 8.1091 17.711 6.32596H19.5211C20.2413 6.32596 20.8251 6.90971 20.8251 7.62986V11.9941C20.8251 12.6888 20.2819 13.2565 19.5971 13.2959V11.7191C19.5971 10.4818 18.5871 9.46917 17.3497 9.46917C16.1129 9.46917 15.0999 10.4823 15.0999 11.7191V13.2981ZM2.77428 9.21403H8.12838C8.38072 9.21403 8.58551 9.00918 8.58551 8.7569C8.58551 8.50457 8.38072 8.29978 8.12838 8.29978H2.77428C2.52201 8.29978 2.31716 8.50457 2.31716 8.7569C2.31716 9.00918 2.52201 9.21403 2.77428 9.21403ZM2.77428 11.3242H12.6104C12.8627 11.3242 13.0675 11.1194 13.0675 10.8671C13.0675 10.6148 12.8627 10.41 12.6104 10.41H2.77428C2.52201 10.41 2.31716 10.6148 2.31716 10.8671C2.31716 11.1194 2.52201 11.3242 2.77428 11.3242ZM17.9857 25.894H9.26303C9.25013 25.8653 9.23595 25.8372 9.22052 25.8099C8.9399 25.3087 8.80956 24.8175 8.80956 24.2436V18.653C8.80956 17.9889 9.35337 17.4476 10.0149 17.4476C10.4109 17.4476 10.7617 17.638 10.9822 17.9337V17.7333C10.9822 17.0542 11.536 16.4978 12.2151 16.4978C12.7013 16.4978 13.1223 16.781 13.3252 17.192C13.3377 16.4553 13.9467 15.8588 14.6835 15.8588C15.335 15.8588 15.8813 16.32 16.0141 16.9339V11.7191C16.0141 10.9848 16.6155 10.3834 17.3497 10.3834C18.084 10.3834 18.6829 10.9848 18.6829 11.7191V18.059L19.144 18.0716C20.4721 18.1041 21.3993 18.9286 21.3993 20.2567L21.1913 22.5972C21.1137 23.4818 20.5598 24.1635 19.793 24.6095L18.4373 25.3988C18.2304 25.5195 18.0765 25.6904 17.9857 25.894ZM9.3584 26.8082H17.891V28H9.3584V26.8082ZM13.03 8.44052C10.7057 8.44052 8.80956 6.54561 8.80956 4.2214C8.80956 1.89714 10.7057 0.000976562 13.03 0.000976562C15.3543 0.000976562 17.2491 1.89714 17.2491 4.2214C17.2491 6.54561 15.3543 8.44052 13.03 8.44052ZM12.476 4.59282L11.533 3.64977C11.2887 3.40549 10.8921 3.40549 10.6478 3.64977C10.4036 3.8953 10.4036 4.29066 10.6478 4.53488L12.0341 5.92237C12.2783 6.16665 12.6749 6.16665 12.9192 5.92237C13.7552 5.08635 14.5811 4.24152 15.4134 3.40172C15.6564 3.15618 15.6552 2.76088 15.4109 2.51786C15.1666 2.27484 14.77 2.2761 14.527 2.52038L12.476 4.59282Z" fill="#2B9851" />
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
                                <path d="M13.8363 11.5851H13.848L19.5645 9.63681C19.5879 9.53181 19.5879 9.42682 19.5879 9.33348C19.5904 9.23422 19.5746 9.13533 19.5412 9.04182C19.4479 8.7735 19.2729 8.48184 19.0279 8.27184V5.7169C19.0279 3.82694 18.3512 3.0803 17.6513 2.64864C17.2896 1.552 15.7846 0.000366211 12.833 0.000366211C9.33311 0.000366211 6.69651 3.46529 6.69651 5.7169C6.69651 6.65021 6.66151 7.3852 6.62651 7.94518C6.62651 8.06185 6.61484 8.16684 6.61484 8.26018C6.35818 8.4935 6.18318 8.8085 6.10152 9.11182C6.08985 9.18182 6.07819 9.25182 6.07819 9.33348C6.07819 10.2435 6.59151 11.5618 6.66151 11.7134C6.7315 11.9118 6.88317 12.0751 7.0815 12.1684C7.09316 12.2151 7.10483 12.2851 7.10483 12.4251C7.10483 13.6617 8.16647 14.8284 8.74979 15.3883C8.69146 16.6716 8.3298 17.5583 7.81648 17.78L3.24325 19.2966C2.60781 19.508 2.03612 19.8766 1.58128 20.3682C1.12645 20.8597 0.803225 21.4583 0.641644 22.1082L0.023325 24.5815C-0.00764411 24.7105 -0.00903183 24.8448 0.0192657 24.9744C0.0475633 25.104 0.104813 25.2256 0.18673 25.3299C0.268646 25.4343 0.373107 25.5188 0.492294 25.5771C0.61148 25.6353 0.742304 25.6659 0.874972 25.6664H13.953C13.603 25.2231 13.2764 24.7331 12.973 24.2081C12.1207 22.7155 11.6704 21.0271 11.6664 19.3083V14.63C11.6664 13.2534 12.5414 12.0401 13.8363 11.5851Z" fill="#2B9851" />
                                <path d="M27.4059 13.7974L21.281 11.7138C21.0989 11.6507 20.9008 11.6507 20.7187 11.7138L14.5938 13.7974C14.4205 13.8558 14.27 13.9672 14.1634 14.1159C14.0569 14.2645 13.9997 14.4428 14 14.6257V19.3133C14 25.0345 20.3862 27.8157 20.658 27.9312C20.7662 27.9769 20.8824 28.0004 20.9998 28.0004C21.1173 28.0004 21.2335 27.9769 21.3417 27.9312C21.6135 27.8146 27.9997 25.0345 27.9997 19.3133V14.6257C28 14.4428 27.9428 14.2645 27.8363 14.1159C27.7297 13.9672 27.5792 13.8558 27.4059 13.7974ZM24.8334 18.2213L21.6252 22.3045C21.528 22.4283 21.4067 22.5312 21.2688 22.6069C21.1308 22.6826 20.9789 22.7296 20.8223 22.7451C20.6657 22.7605 20.5075 22.7442 20.3574 22.6969C20.2073 22.6497 20.0682 22.5726 19.9487 22.4702L17.9071 20.7202C17.7859 20.6221 17.6857 20.5006 17.6122 20.3631C17.5388 20.2255 17.4937 20.0747 17.4796 19.9194C17.4654 19.7641 17.4826 19.6075 17.53 19.459C17.5774 19.3104 17.6541 19.1729 17.7556 19.0545C17.8571 18.9361 17.9812 18.8393 18.1208 18.7697C18.2603 18.7001 18.4124 18.6592 18.568 18.6494C18.7236 18.6396 18.8796 18.661 19.0268 18.7126C19.174 18.7641 19.3093 18.8446 19.4249 18.9493L20.5425 19.9071L22.9983 16.7817C23.0928 16.661 23.2102 16.5602 23.3438 16.485C23.4773 16.4098 23.6244 16.3617 23.7766 16.3435C23.9288 16.3253 24.083 16.3373 24.2306 16.3789C24.3781 16.4204 24.516 16.4907 24.6363 16.5857C24.7569 16.6799 24.8578 16.797 24.9331 16.9303C25.0083 17.0636 25.0565 17.2105 25.0748 17.3625C25.0931 17.5145 25.0812 17.6686 25.0398 17.816C24.9984 17.9634 24.9282 18.1011 24.8334 18.2213Z" fill="#2B9851" />
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
                                <path d="M11.7515 6.50966H21.4949C22.4831 5.39419 23.4495 4.29738 23.8078 3.86748C24.931 2.51986 24.5469 1.31378 23.8772 0.691052C22.8879 -0.228303 20.9765 -0.312959 19.2077 0.942889C17.9101 -0.298139 15.3377 -0.299834 14.0383 0.942889C12.2695 -0.312959 10.358 -0.228248 9.36926 0.691052C8.69895 1.31378 8.31493 2.51986 9.43811 3.86748C9.79746 4.29842 10.7644 5.39638 11.7515 6.50966ZM27.6372 20.2882C26.6752 17.7088 23.2299 13.4595 21.5042 11.4259H11.7433C11.473 11.7452 11.2048 12.0662 10.9386 12.3889C11.3052 12.8221 11.5264 13.382 11.5264 13.9921V18.3446C12.5982 18.6581 13.5406 19.2765 14.2545 20.0981C13.9776 19.5551 14.3715 18.9067 14.9843 18.9067H17.0329C17.2584 18.9067 17.4426 18.7232 17.4426 18.4976C17.4426 18.272 17.2585 18.0879 17.0329 18.0879H16.2134C15.0837 18.0879 14.1649 17.1691 14.1649 16.04C14.1649 15.0508 14.8696 14.2232 15.8037 14.0331V13.9921C15.8037 13.5399 16.1703 13.1727 16.6231 13.1727C17.0755 13.1727 17.442 13.5393 17.4426 13.9921H18.262C18.7143 13.9921 19.0815 14.3587 19.0815 14.8115C19.0815 15.2638 18.7143 15.6309 18.262 15.6309H16.2135C15.9873 15.6309 15.8038 15.8144 15.8038 16.04C15.8038 16.2656 15.9873 16.4491 16.2135 16.4491H17.0329C18.1621 16.4491 19.0815 17.3679 19.0815 18.4976C19.0815 19.4868 18.3762 20.3144 17.4426 20.5045V20.5455C17.4426 20.9978 17.0755 21.3649 16.6232 21.3649C16.1703 21.3649 15.8038 20.9983 15.8038 20.5455H14.9843C14.8001 20.5458 14.6211 20.4836 14.4768 20.369C16.2466 22.674 16.018 25.9346 13.9305 27.9728H22.2432C26.1658 27.9728 29.0457 24.0617 27.6372 20.2882ZM13.0722 8.14848C12.6196 8.14848 12.2527 8.51533 12.2527 8.96787C12.2527 9.42041 12.6196 9.78725 13.0722 9.78725H20.1738C20.6263 9.78725 20.9932 9.42041 20.9932 8.96787C20.9932 8.51533 20.6264 8.14848 20.1738 8.14848H13.0722ZM4.78096 21.3376H0V23.8492H4.19301C4.19947 22.9154 4.40012 22.1227 4.78096 21.3376ZM9.88764 18.1423V17.2412H0V19.7534H5.93815C7.01184 18.7158 8.3933 18.157 9.88764 18.1423ZM4.41209 25.4333H0V27.1534C0 27.6203 0.379861 28.0001 0.846729 28.0001H5.96637C5.21239 27.265 4.69975 26.4281 4.41209 25.4333ZM9.88764 13.9921C9.88764 13.5253 9.50778 13.1455 9.04091 13.1455H0.846729C0.379861 13.1454 0 13.5253 0 13.9921V15.6574H9.88764V13.9921Z" fill="#2B9851" />
                                <path d="M9.91365 19.7534C7.64745 19.7534 5.80371 21.597 5.80371 23.8631C5.80371 26.1258 7.6433 27.9729 9.91524 27.9729C12.1814 27.9729 14.0252 26.1293 14.0252 23.8631C14.0252 21.597 12.1815 19.7534 9.91365 19.7534Z" fill="#2B9851" />
                            </svg>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-semibold">Listed for Funding</h3>
                            <p className="text-[#4A5578]">Approved businesses are listed for investors.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 border rounded-2xl p-3">
                        <div className="bg-[#ECFBF1] size-14 flex items-center justify-center rounded-xl">
                            <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8368 9.33859C13.8603 6.1729 14.5667 5.04965 15.8213 5.4399C16.2397 5.57009 16.5008 5.79203 16.7211 5.97346C17.1157 6.29846 17.4303 6.4499 17.7671 5.97178C18.5001 4.93146 19.1567 4.93146 19.8897 5.97178C20.2265 6.44984 20.5411 6.29846 20.9357 5.97346C21.1561 5.79203 21.4171 5.57009 21.8356 5.4399C23.0901 5.04965 23.7965 6.17284 21.8201 9.33859H15.8368ZM15.7896 11.1042H21.8671C22.1121 11.1042 22.3124 10.9038 22.3124 10.6588C22.3124 10.4139 22.1121 10.2135 21.8671 10.2135H15.7896C15.5447 10.2135 15.3443 10.4139 15.3443 10.6588C15.3443 10.9038 15.5447 11.1042 15.7896 11.1042ZM22.2968 11.9073C23.7626 13.538 24.9074 15.836 25.4391 17.8982C25.6682 18.787 25.7726 19.5568 25.765 20.2235C25.5742 20.2832 25.3906 20.3638 25.2175 20.4637C23.7266 21.3245 21.7682 22.6847 19.8476 23.5193C20.0889 22.4583 19.3291 21.2002 17.8482 21.2455C16.1646 21.2437 14.7346 20.9313 13.1745 20.3232C12.7579 20.1608 12.3331 19.9755 11.9016 19.8005C11.9326 19.2362 12.0356 18.605 12.2177 17.8982C12.7494 15.836 13.8942 13.538 15.36 11.9073C15.4982 11.955 15.6434 11.9793 15.7896 11.9792H21.8671C22.0175 11.9792 22.1621 11.9538 22.2968 11.9073ZM20.5611 17.0073C20.2873 16.7554 19.8873 16.5533 19.3724 16.4068C19.2236 16.3643 19.0642 16.3267 18.9097 16.2903C18.4942 16.1918 18.0647 16.0902 17.8204 15.9008C17.6547 15.7718 17.5604 15.6194 17.5492 15.4595C17.5381 15.3113 17.5999 15.1594 17.7224 15.0317C17.983 14.7602 18.5617 14.6247 19.1305 14.7021C19.5948 14.7657 19.9541 14.9555 20.0915 15.2106C20.1187 15.2612 20.1556 15.306 20.2001 15.3423C20.2447 15.3786 20.2959 15.4058 20.3509 15.4223C20.406 15.4388 20.4637 15.4443 20.5209 15.4385C20.578 15.4327 20.6335 15.4156 20.6841 15.3883C20.7347 15.3611 20.7794 15.3242 20.8157 15.2797C20.852 15.2352 20.8792 15.1839 20.8957 15.1289C20.9122 15.0739 20.9177 15.0161 20.9119 14.959C20.9061 14.9018 20.8891 14.8464 20.8618 14.7958C20.5901 14.2918 20.0096 13.9433 19.2661 13.8378V13.2078C19.2661 12.9659 19.07 12.7701 18.8284 12.7701C18.5868 12.7701 18.3913 12.9659 18.3913 13.2078V13.8338C17.8614 13.9057 17.3916 14.113 17.0911 14.4258C16.7943 14.7349 16.6473 15.1245 16.6763 15.523C16.7061 15.9315 16.9224 16.3111 17.2842 16.5922C17.6785 16.8982 18.2256 17.0275 18.7079 17.1419C18.8597 17.1775 19.0028 17.2112 19.1336 17.2485C19.5098 17.3555 19.7984 17.495 19.968 17.651C20.1554 17.8237 20.1566 18.0348 20.1412 18.1457C20.1099 18.3623 19.9662 18.5542 19.7553 18.6593C19.0835 18.9937 17.7812 18.831 17.4561 18.2367C17.4003 18.1348 17.3063 18.0594 17.1949 18.0268C17.0834 17.9943 16.9636 18.0074 16.8617 18.0632C16.76 18.1188 16.6846 18.2126 16.652 18.3239C16.6194 18.4352 16.6323 18.5549 16.6879 18.6567C16.9954 19.2183 17.6702 19.5542 18.3913 19.6633V20.3042C18.3913 20.5461 18.5868 20.7419 18.8284 20.7419C19.07 20.7419 19.2661 20.5461 19.2661 20.3042V19.6843C19.5861 19.6506 19.8891 19.57 20.1449 19.4423C20.6136 19.2098 20.9354 18.7705 21.0074 18.2687C21.0754 17.7912 20.9125 17.3318 20.5613 17.0073L20.5611 17.0073ZM25.6549 21.2215C23.4585 22.4895 19.9879 25.0333 17.0778 25.1238C15.5881 25.1603 13.8399 24.793 13.1298 24.4234C12.8234 24.2641 12.7723 23.9653 12.8849 23.7487C12.9976 23.532 13.3022 23.4445 13.5188 23.5572C14.1334 23.877 15.6875 24.1939 17.0382 24.1608C17.5554 24.1482 18.0313 24.0875 18.3845 23.959C19.435 23.5768 19.1256 22.0727 17.8628 22.1205C10.4381 22.1205 10.0192 16.416 3.78762 23.7773C3.79181 23.7814 3.79606 23.7854 3.80025 23.7896L8.07881 28.0681C8.09606 28.0853 8.11269 28.1029 8.12912 28.1206C9.48469 27.4828 10.9877 27.47 12.5972 27.5663C13.8356 27.6403 15.3133 27.8192 16.6691 27.7892C18.5635 27.7473 19.7245 27.2332 21.3881 26.3519C23.2819 25.3487 26.5736 23.3505 27.1478 22.5957C27.9696 21.5153 26.9086 20.4978 25.6551 21.2215H25.6549ZM3.13669 24.453C2.78337 24.0998 2.20531 24.0997 1.85206 24.453L0.5625 25.7426L6.12569 31.3058L7.41525 30.0163C7.7685 29.663 7.76856 29.0848 7.41525 28.7316L3.13669 24.4531V24.453ZM7.30294 12.3934V8.98346C5.21813 8.76365 3.58419 6.9919 3.58419 4.85046C3.58419 2.56128 5.45125 0.694214 7.74044 0.694214C10.0296 0.694214 11.8967 2.56128 11.8967 4.85046C11.8967 6.9919 10.2627 8.76365 8.17794 8.98346V12.4545C8.88031 10.5277 10.4616 9.26715 13.0016 9.81065C13.0016 12.4555 11.3456 14.3211 9.16438 14.8835C9.12333 14.8946 9.07989 14.893 9.03975 14.8789C8.99962 14.8649 8.96467 14.839 8.9395 14.8048C8.91348 14.7711 8.89827 14.7303 8.89587 14.6879C8.89347 14.6454 8.904 14.6032 8.92606 14.5668C9.39838 13.7656 9.96894 12.8668 10.7492 11.8373C10.3971 12.1066 9.32687 12.9424 8.17794 14.4671V16.7937C8.17794 16.9097 8.13184 17.021 8.0498 17.1031C7.96775 17.1851 7.85647 17.2312 7.74044 17.2312C7.62441 17.2312 7.51312 17.1851 7.43108 17.1031C7.34903 17.021 7.30294 16.9097 7.30294 16.7937V14.4375C6.1625 12.9315 5.10375 12.1048 4.75394 11.8373C5.53425 12.8668 6.10475 13.7656 6.57706 14.5668C6.5991 14.6032 6.60961 14.6454 6.60721 14.6879C6.60481 14.7303 6.58962 14.7711 6.56363 14.8048C6.53846 14.839 6.50351 14.8649 6.46337 14.8789C6.42324 14.893 6.3798 14.8946 6.33875 14.8835C4.15762 14.3211 2.50156 12.4555 2.50156 9.81065C5.01475 9.2729 6.58962 10.501 7.30294 12.3933V12.3934ZM7.30306 7.01565V7.35678C7.30306 7.5984 7.49856 7.79415 7.74044 7.79415C7.98231 7.79415 8.17787 7.59834 8.17787 7.35678V7.03315C8.37594 7.00153 8.56331 6.94484 8.72738 6.86303C9.09612 6.67959 9.34975 6.33371 9.40669 5.93728C9.46031 5.5574 9.33106 5.19165 9.05119 4.93378C8.843 4.74159 8.543 4.58915 8.15981 4.48009C8.05169 4.44965 7.93806 4.42253 7.82725 4.39634C7.56062 4.3334 7.25788 4.26165 7.10725 4.14478C7.04606 4.09715 6.97169 4.02065 6.96475 3.92515C6.95994 3.85734 6.99037 3.78509 7.05181 3.72146C7.20669 3.56003 7.57869 3.47834 7.93656 3.52715C8.21556 3.56509 8.44419 3.6799 8.51981 3.81996C8.54703 3.87057 8.58395 3.9153 8.62848 3.95162C8.673 3.98793 8.72425 4.0151 8.77929 4.03158C8.83433 4.04807 8.89208 4.05353 8.94924 4.04766C9.00639 4.0418 9.06183 4.02472 9.11238 3.9974C9.21442 3.94229 9.29043 3.84894 9.3237 3.73783C9.35697 3.62673 9.34478 3.50696 9.28981 3.40484C9.09206 3.03834 8.691 2.7784 8.17787 2.68028V2.34415C8.17784 2.22815 8.13174 2.11691 8.04971 2.0349C7.96768 1.95288 7.85644 1.90679 7.74044 1.90678C7.62445 1.90681 7.51322 1.9529 7.4312 2.03492C7.34919 2.11693 7.3031 2.22816 7.30306 2.34415V2.67771C6.94562 2.74521 6.6305 2.89696 6.42037 3.1154C6.18537 3.36034 6.0685 3.67059 6.09231 3.98903C6.11613 4.31409 6.286 4.61503 6.571 4.83615C6.87162 5.06934 7.27231 5.16421 7.626 5.24796C7.73175 5.27296 7.83112 5.29646 7.92062 5.32178C8.23244 5.41034 8.38488 5.50946 8.45869 5.57728C8.54725 5.65921 8.54788 5.76071 8.54031 5.81378C8.52406 5.92671 8.45056 6.02378 8.33788 6.07978C7.89175 6.30178 7.063 6.16203 6.88375 5.83459C6.76744 5.62284 6.50175 5.54509 6.29 5.66109C6.23956 5.68862 6.19505 5.72583 6.15901 5.77059C6.12297 5.81535 6.09611 5.86677 6.07996 5.92192C6.06382 5.97707 6.05871 6.03486 6.06493 6.09199C6.07114 6.14911 6.08856 6.20445 6.11619 6.25484C6.33969 6.66346 6.79919 6.9169 7.30313 7.01571L7.30306 7.01565Z" fill="#2B9851" />
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
