'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

    const pathName = usePathname();

    return (
        <div className="border-b bg-[#FFFFFF]">
            <div className="navbar max-w-[82rem] mx-auto py-4 md:px-6 xl:px-0">

                {/* logo and page-link for small device */}
                <div className="navbar-start">
                    {/* small device page links */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link href={'/'} className={pathName === '/' ? 'text-[#A5ECBE] font-medium' : 'hover:text-[#A5ECBE]'}>Home</Link></li>
                            <li><Link href={'/For-Business'} className={pathName === '/For-Business' ? 'text-[#A5ECBE] font-medium' : 'hover:text-[#A5ECBE]'}>For Business</Link></li>
                            <li><Link href={'/For-Investors'} className={pathName === '/For-Investors' ? 'text-[#A5ECBE] font-medium' : 'hover:text-[#A5ECBE]'}>For Investors</Link></li>
                            <li><Link href={'/Financing-Rates'} className={pathName === '/Financing-Rates' ? 'text-[#A5ECBE] font-medium' : 'hover:text-[#A5ECBE]'}>Financing Rates</Link></li>
                            <li>
                                <details>
                                    <summary className='hover:text-[#A5ECBE]'>Others</summary>
                                    <ul className="p-2">
                                        <li><a className='hover:text-[#A5ECBE]'>Submenu 1</a></li>
                                        <li><a className='hover:text-[#A5ECBE]'>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                    {/* brand logo */}
                    <Link href={'/'}><svg width="95" height="38" viewBox="0 0 153 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M110.549 36.9138V0.256348H118.854L144.797 26.6087V0.256348H153V36.9138H144.694L118.752 10.5102V36.9138H110.549Z" fill="#005397" />
                        <path d="M95.1787 36.9138V0.256348H103.382V36.9138H95.1787Z" fill="#36B0BE" />
                        <path d="M47.686 37.1701V30.5052L77.1658 30.5564C78.6697 30.5564 79.8147 30.2146 80.6008 29.531C81.4211 28.8133 81.8313 27.6683 81.8313 26.096C81.8313 24.5238 81.4211 23.3958 80.6008 22.7122C79.8147 21.9945 78.6697 21.6356 77.1658 21.6356H58.8114C55.0175 21.6356 52.061 20.7298 49.9419 18.9183C47.8569 17.0726 46.8145 14.3725 46.8145 10.8178C46.8145 7.26313 47.8569 4.58005 49.9419 2.76854C52.061 0.922846 55.0175 0 58.8114 0H87.6247V6.66499L59.683 6.61372C58.2133 6.61372 57.0683 6.95552 56.248 7.6391C55.4277 8.28851 55.0175 9.34808 55.0175 10.8178C55.0175 12.2875 55.4277 13.3642 56.248 14.0478C57.0683 14.6972 58.2133 15.0219 59.683 15.0219H78.0374C81.8313 15.0219 84.7707 15.9618 86.8557 17.8417C88.9748 19.6874 90.0344 22.4388 90.0344 26.096C90.0344 29.719 88.9748 32.4705 86.8557 34.3503C84.7707 36.2302 81.8313 37.1701 78.0374 37.1701H47.686Z" fill="#005397" />
                        <path d="M0 36.9138V0.256348H30.7102C34.5041 0.256348 37.4436 1.21337 39.5285 3.12742C41.6477 5.04147 42.7072 7.94672 42.7072 11.8432C42.7072 15.1586 41.9382 17.7562 40.4001 19.6361C38.862 21.516 36.6745 22.6952 33.8376 23.1737L42.2971 36.9138H32.9661L25.1219 23.43H8.20307V36.9138H0ZM29.7361 6.92134H8.20307V16.7138L29.7361 16.765C31.24 16.765 32.385 16.389 33.1711 15.6371C33.9915 14.8852 34.4016 13.6205 34.4016 11.8432C34.4016 10.0317 33.9915 8.76703 33.1711 8.04926C32.385 7.29731 31.24 6.92134 29.7361 6.92134Z" fill="#005397" />
                    </svg>
                    </Link>
                </div>
                {/* center page links */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4 flex items-center ">
                        <li><Link href={'/'} className={pathName === '/' ? 'btn btn-sm bg-[#A5ECBE] font-medium hover:bg-[#A5ECBE] border-0' : 'hover:bg-[#A5ECBE] border-0 font-medium'}>Home</Link></li>
                        <li><Link href={'/For-Business'} className={pathName === '/For-Business' ? 'btn btn-sm bg-[#A5ECBE] font-medium hover:bg-[#A5ECBE] border-0' : 'hover:bg-[#A5ECBE] border-0 font-medium'}>For Business</Link></li>
                        <li><Link href={'/For-Investors'} className={pathName === '/For-Investors' ? 'btn btn-sm bg-[#A5ECBE] font-medium hover:bg-[#A5ECBE] border-0' : 'hover:bg-[#A5ECBE] border-0 font-medium'}>For Investors</Link></li>
                        <li><Link href={'/Financing-Rates'} className={pathName === '/Financing-Rates' ? 'btn btn-sm bg-[#A5ECBE] font-medium hover:bg-[#A5ECBE] border-0' : 'hover:bg-[#A5ECBE] border-0 font-medium'}>Financing Rates</Link></li>
                        <li>
                            <details>
                                <summary className={'hover:bg-[#A5ECBE] border-0 font-medium'}>Others</summary>
                                <ul className="p-2">
                                    <li><a className={'hover:bg-[#A5ECBE] border-0 font-medium'}>Submenu 1</a></li>
                                    <li><a className={'hover:bg-[#A5ECBE] border-0 font-medium'}>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                {/* login and apply now button */}
                <div className="navbar-end flex items-center gap-x-10 pr-4 md:pr-0">
                    <button className="text-[#005397] hover:underline">Login</button>
                    <button className="btn bg-[#005397] hover:bg-[white] hover:border-[#005397] hover:text-black  rounded-full text-white font-normal hidden xl:block">Apply Now</button>
                </div>

            </div>
        </div>
    )
}
