export default function Information() {
    return (
        <div className="bg-[#F9F9FB] p-8 md:p-16">
            <div className="max-w-[82rem] mx-auto grid md:grid-cols-4 gap-4">

                <img src="https://res.cloudinary.com/dz1fy2tof/image/upload/v1734532973/Frame_528_1_y3shjx.png" alt="" className="hover:scale-105 duration-500" />
                <div className="size-[315px] bg-white p-5 flex flex-col justify-between rounded-2xl hover:scale-105 duration-500 ">
                    <h3>New investors <br /> last month</h3>
                    <h1 className="text-5xl font-bold pb-3">3,964</h1>
                </div>
                <img src="https://res.cloudinary.com/dz1fy2tof/image/upload/v1734534834/Frame_531_2_bja11c.png" alt="" className="rounded-2xl hover:scale-105 duration-500" />
                <div className="size-[315px]  bg-[#7CE4A1] p-5 flex flex-col justify-between rounded-2xl hover:scale-105 duration-500">
                    <h3>Unique investments <br /> last month</h3>
                    <h1 className="text-5xl font-bold pb-3">8,457</h1>
                </div>

                <div className="size-[315px] bg-[#7CE4A1] p-5 flex flex-col justify-between rounded-2xl hover:scale-105 duration-500">
                    <h3>Total invested <br /> last month</h3>
                    <h1 className="text-5xl font-bold pb-3">$7.5m</h1>
                </div>
                <img src="https://res.cloudinary.com/dz1fy2tof/image/upload/v1734534268/Frame_534_vdtxva.png" className="rounded-2xl hover:scale-105 duration-500" alt="" />
                <div className="size-[315px] bg-white p-5 flex flex-col justify-between rounded-2xl hover:scale-105 duration-500">
                    <h3>Site visitors <br /> last month</h3>
                    <h1 className="text-5xl font-bold pb-3">308k</h1>
                </div>
                <img src="https://res.cloudinary.com/dz1fy2tof/image/upload/v1734534560/Frame_536_dh0ea6.png" alt="" className="rounded-2xl hover:scale-105 duration-500" />

            </div>
        </div>
    )
}
