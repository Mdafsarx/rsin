export default function OurFinance() {
    return (
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-[82rem] mx-auto px-6 md:px-0">

            {/* images */}
            <div className="bg-[#EFF1F5] py-8 mt-3 md:w-1/2 rounded-2xl flex items-center">
                <div >
                    <div className="flex items-center justify-center gap-4">
                        <img src="https://res.cloudinary.com/dz1fy2tof/image/upload/v1734494552/Rectangle_1770_ttr1kc.png" alt="" className="w-[45%] rounded-md" />
                        <img src="https://res.cloudinary.com/dz1fy2tof/image/upload/v1734494617/Rectangle_1771_k7xvpb.png" alt="" className="w-[45%] rounded-md md:-mb-32" />
                    </div>
                    <div className="flex justify-center">
                        <div className="bg-[#26FC0326] size-[170px] md:size-[260px] -mt-28 rounded-md"></div>
                    </div>
                </div>
            </div>

            <div className="md:w-1/2 space-y-4">
                <h3 className="text-[#21763F]">Solutions</h3>
                <h1 className="text-xl md:text-3xl font-bold">Our Finance Solutions</h1>
                <div className="*:text-[#7D89B0]">
                    <div className="border-y border-gray-200 py-3 pl-4">
                        <h3 className="text-[#005397] pb-1.5">Business Expansion</h3>
                        <p className="text-[#4A5578]">Scale your business by adding new products, service or open <br /> new branch</p>
                    </div>
                    <p className="border-b border-gray-200 py-3 pl-4">Upgrade Your Premises</p>
                    <p className="border-b border-gray-200 py-3 pl-4">Marketing</p>
                    <p className="border-b border-gray-200 py-3 pl-4">Purchase Equipment</p>
                    <p className="border-b border-gray-200 py-3 pl-4">Increase Inventory</p>
                    <p className="border-b border-gray-200 py-3 pl-4">Invoice Finance</p>
                </div>
                <div className="flex items-center gap-6 pt-4">
                    <button className="btn text-white rounded-full font-normal bg-[#005397] hover:bg-[#005397] px-5">Get Started</button>
                    <button className="btn hover:bg-[#F3F7FB] hover:border-[#005397] hover:text-black text-black rounded-full font-normal btn-outline border-[#005397] px-5">Learn more</button>
                </div>
            </div>

        </div>
    )
}
