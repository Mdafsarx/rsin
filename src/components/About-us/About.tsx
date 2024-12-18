
export default function About() {
    return (
        <div className="max-w-[82rem] mx-auto flex gap-6">

            <div className="bg-[#FFFFFF] w-1/2 rounded-2xl flex items-center p-8">
                {/* about us details */}
                <div className="space-y-4">
                    <h3 className="text-[#21763F]">About Us</h3>
                    <h1 className="text-4xl font-bold leading-tight">Aspired To Build A Better <br /> Financial World</h1>
                    <p className="leading-relaxed">Raqamyah is a Sharia-compliant crowdlending platform licensed by the Saudi Central Bank (SAMA). It connects SMEs seeking financing with investors looking for competitive returns. By directly funding SMEs, investors earn profits while supporting business growth and economic development. The platform’s mission is to simplify and accelerate funding for small businesses to help them thrive.</p>
                    <ul className="list-disc space-y-4 pl-4">
                        <li>Sharia-Compliant Crowdlending</li>
                        <li>Empowering Business Growth</li>
                        <li>Direct Investment Opportunities</li>
                        <li>Regulated and Trusted</li>
                    </ul>
                </div>
            </div>

            <div className="w-1/2 flex flex-col gap-6">
                {/* image */}
                <div className="bg-[#FFFFFF] h-1/2 p-6 rounded-2xl flex items-center">
                    <img src={'https://res.cloudinary.com/dz1fy2tof/image/upload/v1734491169/Frame_23_1_ceijnc.png'} className="h-full w-full object-fill" />
                </div>

                {/* icons */}
                <div className="bg-[#FFFFFF] h-1/2 p-6 rounded-2xl grid grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-2xl p-5">
                        <div className="flex items-center justify-center bg-[#C3F2D3] size-16 rounded-full">
                            <svg width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6505 22.9509V25.4213C14.6505 25.4558 14.6786 25.4839 14.7131 25.4839H17.6445C17.7863 25.4839 17.9049 25.6509 17.7791 25.8024L13.1432 31.2772C13.0671 31.3671 12.9298 31.3641 12.8555 31.275L8.21307 25.7926C8.10982 25.6705 8.19802 25.4843 8.35599 25.4843V25.4839H11.2875C11.3041 25.4839 11.32 25.4773 11.3317 25.4656C11.3434 25.4538 11.35 25.4379 11.35 25.4213V22.9509C11.3502 22.9372 11.3457 22.9239 11.3374 22.913C11.3291 22.9021 11.3174 22.8942 11.3042 22.8907C9.86691 22.4919 8.62779 21.5969 7.79137 20.3885C7.78572 20.38 7.77806 20.3732 7.76908 20.3685C7.76011 20.3638 7.75009 20.3614 7.73996 20.3615H5.58593C5.10893 20.3615 4.71884 19.9714 4.71884 19.4944V12.8625C4.71884 12.8452 4.72496 12.8304 4.73713 12.8182L12.5069 5.04843L12.506 5.0475C12.7766 4.77793 13.222 4.77685 13.4937 5.04851L21.2634 12.8181C21.2693 12.8238 21.2739 12.8307 21.2771 12.8383C21.2802 12.8459 21.2818 12.8541 21.2816 12.8623V19.4943C21.2816 19.9713 20.8916 20.3614 20.4146 20.3614H18.2605C18.2504 20.3613 18.2404 20.3636 18.2314 20.3683C18.2224 20.373 18.2148 20.3799 18.2091 20.3883C17.3728 21.5967 16.1336 22.4918 14.6964 22.8905C14.6831 22.8941 14.6714 22.9019 14.6631 22.9129C14.6548 22.9238 14.6504 22.9372 14.6505 22.9509ZM2.6731 13.5552L11.8433 4.38503L11.8443 4.38582C12.467 3.75092 13.5164 3.7443 14.1571 4.38488L23.3274 13.5552C24.009 14.2368 25.2057 13.7675 25.2057 12.7763C25.2057 12.4936 25.0989 12.2112 24.8851 11.9974L24.886 11.9965L15.4919 2.62671C14.1108 1.24921 11.8642 1.24878 10.4826 2.63046L1.11545 11.9975C0.43383 12.6791 0.903198 13.8759 1.89428 13.8759C2.17695 13.8759 2.45941 13.7689 2.6731 13.5552ZM24.5934 21.5396V24.7193C24.5934 24.7359 24.5868 24.7518 24.5751 24.7636C24.5634 24.7753 24.5475 24.7819 24.5309 24.7819H21.3511C21.2267 24.7819 21.1073 24.8313 21.0193 24.9193C20.9313 25.0073 20.8819 25.1267 20.8819 25.2511C20.8819 25.3756 20.9313 25.4949 21.0193 25.5829C21.1073 25.6709 21.2267 25.7204 21.3511 25.7204H25.0627C25.1871 25.7204 25.3064 25.6709 25.3944 25.5829C25.4824 25.4949 25.5319 25.3756 25.5319 25.2511V21.5396C25.5319 21.4152 25.4824 21.2958 25.3944 21.2078C25.3064 21.1198 25.1871 21.0704 25.0627 21.0704C24.9382 21.0704 24.8189 21.1198 24.7309 21.2078C24.6429 21.2958 24.5934 21.4152 24.5934 21.5396ZM25.5318 4.83798V1.12652C25.5318 1.00208 25.4824 0.882728 25.3944 0.794731C25.3064 0.706735 25.187 0.657299 25.0626 0.657299H21.3511C21.2266 0.657299 21.1073 0.706735 21.0193 0.794731C20.9313 0.882728 20.8818 1.00208 20.8818 1.12652C20.8818 1.25097 20.9313 1.37032 21.0193 1.45831C21.1073 1.54631 21.2266 1.59575 21.3511 1.59575H24.5308C24.5474 1.59577 24.5633 1.60236 24.575 1.61409C24.5867 1.62582 24.5933 1.64173 24.5934 1.65831V4.83805C24.5934 4.89967 24.6055 4.96069 24.6291 5.01761C24.6527 5.07454 24.6872 5.12626 24.7308 5.16983C24.7744 5.2134 24.8261 5.24796 24.8831 5.27154C24.94 5.29511 25.001 5.30724 25.0626 5.30724C25.1242 5.30723 25.1853 5.29509 25.2422 5.27151C25.2991 5.24792 25.3508 5.21336 25.3944 5.16978C25.438 5.12621 25.4725 5.07448 25.4961 5.01755C25.5197 4.96062 25.5318 4.8996 25.5318 4.83798ZM1.4072 4.83798V1.65824C1.40722 1.64165 1.41382 1.62575 1.42554 1.61402C1.43727 1.60229 1.45318 1.59569 1.46977 1.59567H4.6495C4.77395 1.59567 4.8933 1.54624 4.98129 1.45824C5.06929 1.37025 5.11873 1.2509 5.11873 1.12645C5.11873 1.002 5.06929 0.882656 4.98129 0.794659C4.8933 0.706663 4.77395 0.657227 4.6495 0.657227H0.937974C0.813529 0.657227 0.69418 0.706663 0.606183 0.794659C0.518186 0.882656 0.46875 1.002 0.46875 1.12645V4.83791C0.46874 4.96235 0.518167 5.08171 0.606157 5.16971C0.694147 5.25771 0.813492 5.30716 0.937938 5.30717C1.06238 5.30718 1.18174 5.25775 1.26974 5.16976C1.35774 5.08177 1.40719 4.96242 1.4072 4.83798ZM0.46875 21.5396V25.2511C0.46875 25.3756 0.518186 25.4949 0.606183 25.5829C0.69418 25.6709 0.813529 25.7204 0.937974 25.7204H4.6495C4.77395 25.7204 4.8933 25.6709 4.98129 25.5829C5.06929 25.4949 5.11873 25.3756 5.11873 25.2511C5.11873 25.1267 5.06929 25.0073 4.98129 24.9193C4.8933 24.8313 4.77395 24.7819 4.6495 24.7819H1.46969C1.45311 24.7819 1.4372 24.7753 1.42547 24.7636C1.41374 24.7518 1.40715 24.7359 1.40713 24.7193V21.5396C1.4056 21.4162 1.35549 21.2983 1.26767 21.2116C1.17985 21.1248 1.06138 21.0762 0.937938 21.0762C0.814499 21.0762 0.696032 21.1248 0.608208 21.2116C0.520385 21.2983 0.470279 21.4162 0.46875 21.5396ZM11.5405 19.6387L15.2226 14.4837C15.2585 14.4336 15.2842 14.377 15.2982 14.317C15.3121 14.257 15.3141 14.1948 15.304 14.134C15.2938 14.0733 15.2718 14.0151 15.2392 13.9629C15.2065 13.9107 15.1639 13.8654 15.1137 13.8297C15.0635 13.794 15.0067 13.7685 14.9467 13.7548C14.8866 13.7411 14.8244 13.7393 14.7637 13.7497C14.703 13.76 14.6449 13.7823 14.5928 13.8151C14.5407 13.848 14.4956 13.8908 14.4601 13.9412L10.7779 19.0961C10.742 19.1462 10.7164 19.2028 10.7024 19.2628C10.6884 19.3228 10.6865 19.385 10.6966 19.4458C10.7067 19.5065 10.7287 19.5647 10.7614 19.6169C10.7941 19.6692 10.8367 19.7144 10.8869 19.7501C10.9371 19.7859 10.9938 19.8113 11.0539 19.825C11.1139 19.8388 11.1761 19.8405 11.2368 19.8301C11.2976 19.8198 11.3556 19.7975 11.4078 19.7647C11.4599 19.7318 11.505 19.689 11.5405 19.6387ZM11.1592 13.7432C10.4657 13.7432 9.90334 14.3055 9.90334 14.9991C9.90334 16.1139 11.2577 16.6765 12.0472 15.887C12.8366 15.0976 12.2741 13.7432 11.1592 13.7432ZM11.3837 14.7745C11.1845 14.5753 10.8418 14.7167 10.8418 14.999C10.8418 15.2813 11.1845 15.4226 11.3837 15.2235C11.4432 15.1639 11.4767 15.0832 11.4767 14.999C11.4767 14.9148 11.4432 14.834 11.3837 14.7745ZM14.8413 17.3249C14.1478 17.3249 13.5855 17.8873 13.5855 18.5807C13.5855 19.6955 14.9399 20.2582 15.7294 19.4687C16.5188 18.6793 15.9562 17.3249 14.8413 17.3249ZM15.0658 18.3563C14.8666 18.157 14.5239 18.2985 14.5239 18.5808C14.5239 18.8631 14.8667 19.0044 15.0658 18.8053C15.1253 18.7457 15.1588 18.665 15.1588 18.5808C15.1588 18.4966 15.1253 18.4158 15.0658 18.3563ZM16.8016 12.9886C14.7023 10.8893 11.2983 10.8893 9.19904 12.9886C7.09973 15.0879 7.09973 18.4918 9.19904 20.5911C11.2983 22.6905 14.7024 22.6905 16.8016 20.5911C18.9009 18.4918 18.9008 15.0879 16.8016 12.9886Z" fill="#1A4C41" />
                            </svg>
                        </div>
                        <p className="pt-7">Lower Rates</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-5">
                        <div className="flex items-center justify-center bg-[#C3F2D3] size-16 rounded-full">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.0394 15.8352C23.3362 15.8352 26.8314 12.3394 26.8314 8.04261C26.8314 3.74579 23.3362 0.25 19.0394 0.25C14.7426 0.25 11.2468 3.74579 11.2468 8.04261C11.2468 12.3394 14.7426 15.8352 19.0394 15.8352ZM18.1166 3.46216V3.25052C18.1166 2.74049 18.5294 2.32766 19.0394 2.32766C19.5488 2.32766 19.9623 2.74049 19.9623 3.25052V3.46339C21.0605 3.69903 21.8867 4.67726 21.8867 5.84498C21.8867 6.3544 21.4733 6.76784 20.9639 6.76784C20.4538 6.76784 20.041 6.3544 20.041 5.84498C20.041 5.51952 19.7759 5.25435 19.4504 5.25435H18.6229C18.2974 5.25435 18.0323 5.51952 18.0323 5.84498C18.0324 5.93724 18.0541 6.02818 18.0956 6.11055C18.1372 6.19292 18.1975 6.26442 18.2716 6.31933L19.0394 6.88781L20.9048 8.2684C21.5176 8.72184 21.8867 9.4472 21.8917 10.2101V10.2187C21.896 10.8696 21.6468 11.4836 21.1891 11.9469C20.8494 12.2908 20.4249 12.5215 19.9623 12.6188V12.8347C19.9623 13.3447 19.5488 13.7576 19.0394 13.7576C18.5294 13.7576 18.1166 13.3447 18.1166 12.8347V12.6218C17.6662 12.5259 17.2521 12.3044 16.9175 11.9734C16.4542 11.5162 16.197 10.9059 16.1933 10.255C16.1902 9.74559 16.6006 9.32969 17.11 9.32661H17.1162C17.6231 9.32661 18.036 9.73636 18.039 10.2439C18.0394 10.3215 18.055 10.3982 18.085 10.4697C18.1151 10.5412 18.1589 10.6061 18.2141 10.6606C18.2692 10.7152 18.3346 10.7583 18.4064 10.7875C18.4783 10.8167 18.5552 10.8314 18.6327 10.8309C19.1427 10.8278 18.9527 10.8289 19.459 10.826C19.7866 10.8234 20.0485 10.5575 20.0459 10.231V10.2224C20.0447 10.0378 19.9555 9.86187 19.8066 9.75174L19.0394 9.18388L17.1734 7.80328C16.5557 7.34555 16.1866 6.61341 16.1866 5.84498C16.1866 4.6748 17.0153 3.69595 18.1166 3.46216ZM6.41343 20.2694C6.17687 19.8593 5.65139 19.7166 5.23875 19.9546L0.897752 22.4605C0.486711 22.6984 0.345699 23.2241 0.582996 23.6357L5.01973 31.3202C5.25721 31.7311 5.78262 31.8722 6.1944 31.6349L10.5354 29.1284C10.9471 28.8911 11.0875 28.3654 10.8502 27.9538L6.41343 20.2694ZM31.2869 18.7355C30.8692 18.1553 30.0607 18.0242 29.4812 18.442C27.7228 19.7088 24.3464 22.1414 24.0782 22.3352C23.9558 22.4396 23.8258 22.5348 23.6893 22.6201C23.1584 22.9541 22.5425 23.1326 21.8996 23.1326H17.4791C16.9697 23.1326 16.5562 22.7197 16.5562 22.2097C16.5562 21.6991 16.9703 21.2869 17.4791 21.2869H22.2066C22.9012 21.2869 23.4574 20.7085 23.4285 20.0127C23.4014 19.3525 22.8378 18.8407 22.1771 18.8407H18.5785C18.3349 18.5829 18.0679 18.3466 17.7818 18.1356C16.798 17.4102 15.5823 16.9814 14.2663 16.9814C11.9266 16.9814 9.59852 18.4555 8.63321 20.4231L12.4083 26.9612H19.4897C20.8801 26.9612 22.2497 26.6056 23.4549 25.9122C23.8727 25.6723 24.3199 25.3837 24.8048 25.0355C26.8363 23.5762 30.9897 20.5443 30.9928 20.5424C31.5736 20.1253 31.7053 19.3156 31.2869 18.7355Z" fill="#1A4C41" />
                            </svg>
                        </div>
                        <p className="pt-7">Financing up to SAR 7.5M</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-5">
                        <div className="flex items-center justify-center bg-[#C3F2D3] size-16 rounded-full">
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.252 20.9599H19.16L18.224 18.7639L17.252 20.9599Z" fill="#1A4C41" />
                                <path d="M27.3679 17.6119C27.1519 17.6119 26.9719 17.5039 26.8639 17.2879C26.7559 16.9999 26.8639 16.7119 27.1519 16.5679L29.0599 15.7039C28.0519 13.7599 26.4319 12.1039 24.3079 11.1679L23.2279 13.9759C23.1559 14.1919 22.9399 14.3359 22.7239 14.3359C22.6519 14.3359 22.5799 14.3359 22.5439 14.2999C22.2559 14.1919 22.1119 13.8679 22.2199 13.6159L23.2999 10.8079C21.0679 10.0879 18.7639 10.1959 16.7119 10.9879L17.5399 12.8959C17.6479 13.1839 17.5399 13.4719 17.2519 13.6159C17.1799 13.6519 17.1079 13.6519 17.0359 13.6519C16.8199 13.6519 16.6399 13.5439 16.5319 13.3279L15.7039 11.4199C13.7599 12.4279 12.1039 14.0479 11.1679 16.1719L13.9759 17.2519C14.2639 17.3599 14.4079 17.6839 14.2999 17.9359C14.2279 18.1519 14.0119 18.2959 13.7959 18.2959C13.7239 18.2959 13.6519 18.2959 13.6159 18.2599L10.8079 17.1799C10.0879 19.3399 10.1599 21.6439 10.9519 23.7679L12.8599 22.9039C13.1479 22.7959 13.4359 22.9039 13.5799 23.1919C13.6879 23.4799 13.5799 23.7679 13.2919 23.9119L11.3839 24.7759C12.4279 26.7919 14.0839 28.3759 16.1719 29.3119L17.2519 26.5039C17.3599 26.2159 17.6839 26.0719 17.9359 26.1799C18.2239 26.2879 18.3679 26.6119 18.2599 26.8639L17.1799 29.6719C18.1879 29.9959 19.2319 30.1759 20.2399 30.1759C21.4279 30.1759 22.6159 29.9599 23.7679 29.5279L22.9039 27.6199C22.7959 27.3319 22.9039 27.0439 23.1919 26.8999C23.4799 26.7919 23.7679 26.8999 23.9119 27.1879L24.7759 29.0959C26.7919 28.0519 28.3759 26.3959 29.3119 24.3079L26.5039 23.2279C26.2159 23.1199 26.0719 22.7959 26.1799 22.5439C26.2879 22.2559 26.6119 22.1119 26.8639 22.2199L29.6719 23.2999C30.3919 21.0679 30.2839 18.7639 29.4919 16.7119L27.5839 17.5759C27.5119 17.6119 27.4399 17.6119 27.3679 17.6119ZM20.8519 23.5519C20.7799 23.5879 20.7079 23.5879 20.6359 23.5879C20.4199 23.5879 20.2399 23.4799 20.1319 23.2639L19.6279 22.0399H16.8199L16.2799 23.2999C16.1719 23.5879 15.8479 23.6959 15.5599 23.5879C15.2719 23.4799 15.1639 23.1559 15.2719 22.8679L17.7199 17.2159C17.7919 17.0359 18.0079 16.8919 18.2239 16.8919C18.4399 16.8919 18.6199 17.0359 18.7279 17.2159L21.1759 22.8679C21.2479 23.1199 21.1399 23.4439 20.8519 23.5519ZM23.9119 23.0839C23.9119 23.3719 23.6599 23.6239 23.3719 23.6239C23.0839 23.6239 22.8319 23.3719 22.8319 23.0839V17.4319C22.8319 17.1439 23.0839 16.8919 23.3719 16.8919C23.6599 16.8919 23.9119 17.1439 23.9119 17.4319V23.0839ZM3.60794 9.43986H5.11994C5.40794 9.43986 5.65994 9.18786 5.65994 8.89986C5.65994 8.61186 5.44394 8.35986 5.11994 8.35986H3.57194C3.28394 8.35986 3.03194 8.61186 3.03194 8.89986C3.03194 9.18786 3.28394 9.43986 3.60794 9.43986ZM4.86794 18.4759C4.86794 18.1879 4.61594 17.9359 4.32794 17.9359H1.37594C1.08794 17.9359 0.835938 18.1879 0.835938 18.4759C0.835938 18.7639 1.08794 19.0159 1.37594 19.0159H4.29194C4.61594 19.0159 4.86794 18.7639 4.86794 18.4759ZM3.85994 27.5119H2.31194C2.02394 27.5119 1.77194 27.7639 1.77194 28.0519C1.77194 28.3399 2.02394 28.5919 2.31194 28.5919H3.85994C4.14794 28.5919 4.39994 28.3399 4.39994 28.0519C4.39994 27.7639 4.14794 27.5119 3.85994 27.5119Z" fill="#1A4C41" />
                                <path d="M27.8355 9.76392L28.7715 7.35192L29.3115 7.56792C29.5635 7.67592 29.8155 7.71192 30.0315 7.71192C30.8595 7.71192 31.6155 7.20792 31.9395 6.41592C32.1195 5.91192 32.1195 5.33592 31.9035 4.86792C31.6875 4.36392 31.2915 3.96792 30.7875 3.78792L23.5155 0.943923C22.4715 0.547923 21.2835 1.05192 20.8875 2.13192C20.4555 3.17592 20.9595 4.36392 22.0395 4.75992L22.5795 4.97592L21.6435 7.38792C19.4475 7.13592 17.1795 7.45992 15.0915 8.35992H8.32353C8.03553 8.35992 7.78353 8.61192 7.78353 8.89992C7.78353 9.18792 8.03553 9.43992 8.32353 9.43992H13.0755C12.1755 10.0519 11.3475 10.7359 10.6275 11.5639H6.41553C6.12753 11.5639 5.87553 11.8159 5.87553 12.1039C5.87553 12.3919 6.12753 12.6439 6.41553 12.6439H9.76353C9.29553 13.2919 8.86353 14.0119 8.50353 14.7679H2.05953C1.77153 14.7679 1.51953 15.0199 1.51953 15.3079C1.51953 15.5959 1.77153 15.8479 2.05953 15.8479H8.03553C7.42353 17.5759 7.17153 19.3759 7.27953 21.1399H3.96753C3.67953 21.1399 3.42753 21.3919 3.42753 21.6799C3.42753 21.9679 3.67953 22.2199 3.96753 22.2199H7.38753C7.49553 22.9399 7.67553 23.6239 7.89153 24.3439H5.73153C5.44353 24.3439 5.19153 24.5959 5.19153 24.8839C5.19153 25.1719 5.44353 25.4239 5.73153 25.4239H8.28753C8.28753 25.4599 8.32353 25.4959 8.32353 25.5319C8.64753 26.2519 9.00753 26.8999 9.43953 27.5479H6.99153C6.70353 27.5479 6.45153 27.7999 6.45153 28.0879C6.45153 28.3759 6.70353 28.6279 6.99153 28.6279H10.2315C11.6355 30.2839 13.3995 31.5799 15.4875 32.3719C16.9995 32.9479 18.5835 33.2359 20.1675 33.2359C21.9315 33.2359 23.7315 32.8759 25.3875 32.1199C28.5555 30.7159 30.9675 28.1599 32.2275 24.9559C34.4595 19.3039 32.4435 13.1479 27.8355 9.76392ZM22.3995 3.75192C21.8955 3.57192 21.6435 2.99592 21.8595 2.49192C22.0395 1.98792 22.6155 1.73592 23.1195 1.95192L30.3555 4.75992C30.6075 4.86792 30.7875 5.04792 30.8955 5.26392C31.0035 5.51592 31.0035 5.76792 30.9315 6.01992C30.7515 6.52392 30.1755 6.77592 29.6715 6.55992L23.4435 4.14792L22.3995 3.75192ZM27.7275 6.95592L26.8635 9.15192C26.2155 8.75592 25.5675 8.43192 24.8475 8.14392C24.1275 7.85592 23.4075 7.67592 22.6875 7.53192L23.5515 5.33592L27.7275 6.95592ZM31.2915 24.5239C28.9515 30.6439 22.0395 33.6679 15.9555 31.3279C13.0035 30.1759 10.6635 27.9439 9.36753 25.0639C8.07153 22.1479 7.99953 18.9439 9.15153 15.9919C9.65553 14.6959 10.3755 13.5079 11.2395 12.4999L11.2755 12.4639C12.3915 11.1679 13.7955 10.1239 15.4155 9.40392C16.9275 8.71992 18.5835 8.35992 20.2035 8.35992C21.6435 8.35992 23.0835 8.61192 24.4875 9.15192C30.6075 11.5279 33.6315 18.4039 31.2915 24.5239Z" fill="#1A4C41" />
                            </svg>
                        </div>
                        <p className="pt-7">Faster Decision</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-5">
                        <div className="flex items-center justify-center bg-[#C3F2D3] size-16 rounded-full">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.7491 16.2588L29.7254 14.9706C29.4001 14.5653 29.1709 14.0916 29.055 13.585C28.9391 13.0784 28.9394 12.5521 29.056 12.0456L29.4216 10.4425C29.5749 9.77142 29.575 9.07442 29.422 8.40328C29.2689 7.73214 28.9666 7.10411 28.5375 6.56585C28.1084 6.02758 27.5635 5.59292 26.9434 5.29413C26.3232 4.99535 25.6437 4.84013 24.9554 4.84001H23.3129C22.7931 4.84176 22.2796 4.72576 21.811 4.50072C21.3424 4.27568 20.9309 3.94744 20.6072 3.54063L19.5835 2.25251C19.1505 1.71995 18.6042 1.29061 17.9843 0.995735C17.3645 0.700856 16.6868 0.547852 16.0004 0.547852C15.314 0.547852 14.6362 0.700856 14.0164 0.995735C13.3966 1.29061 12.8503 1.71995 12.4172 2.25251L11.3935 3.54063C11.0699 3.94744 10.6583 4.27568 10.1898 4.50072C9.72116 4.72576 9.2077 4.84176 8.68787 4.84001H7.04537C6.357 4.84013 5.6775 4.99535 5.05735 5.29413C4.4372 5.59292 3.89234 6.02758 3.46324 6.56585C3.03415 7.10411 2.73184 7.73214 2.57877 8.40328C2.42571 9.07442 2.42583 9.77142 2.57912 10.4425L2.94475 12.0456C3.06135 12.5521 3.0617 13.0784 2.94576 13.585C2.82983 14.0916 2.60063 14.5653 2.27537 14.9706L1.25162 16.2588C0.827723 16.7989 0.529752 17.4268 0.37945 18.0968C0.229149 18.7667 0.23031 19.4618 0.382848 20.1312C0.535385 20.8006 0.835452 21.4276 1.26115 21.9663C1.68685 22.505 2.22745 22.9419 2.8435 23.245L4.3285 23.9594C4.79631 24.183 5.20738 24.5098 5.53082 24.915C5.85427 25.3203 6.08168 25.7936 6.196 26.2994L6.56162 27.9081C6.71575 28.5789 7.01887 29.2063 7.44852 29.7439C7.87817 30.2815 8.42332 30.7156 9.04356 31.0138C9.66379 31.312 10.3432 31.4668 11.0314 31.4667C11.7196 31.4666 12.399 31.3116 13.0191 31.0131L14.4985 30.2988C14.9672 30.0738 15.4805 29.957 16.0004 29.957C16.5203 29.957 17.0335 30.0738 17.5022 30.2988L18.9816 31.0131C19.6016 31.3125 20.2812 31.4682 20.9696 31.4687C21.6581 31.4692 22.3379 31.3146 22.9584 31.0162C23.5788 30.7179 24.1241 30.2835 24.5536 29.7454C24.9831 29.2073 25.2858 28.5793 25.4391 27.9081L25.8047 26.2994C25.9191 25.7936 26.1465 25.3203 26.4699 24.915C26.7934 24.5098 27.2044 24.183 27.6722 23.9594L29.1572 23.245C29.7733 22.9419 30.3139 22.505 30.7396 21.9663C31.1653 21.4276 31.4654 20.8006 31.6179 20.1312C31.7704 19.4618 31.7716 18.7667 31.6213 18.0968C31.471 17.4268 31.173 16.7989 30.7491 16.2588ZM26.9185 16.7031C26.9157 19.5979 25.7645 22.3734 23.7175 24.4203C21.6706 26.4672 18.8952 27.6184 16.0004 27.6213C1.516 27.0228 1.51993 6.38463 16.0004 5.78501C18.8949 5.78873 21.6698 6.94022 23.7165 8.98696C25.7633 11.0337 26.9148 13.8086 26.9185 16.7031Z" fill="#1A4C41" />
                                <path d="M16.0002 6.90991C13.4038 6.91289 10.9146 7.94562 9.07866 9.78154C7.24274 11.6175 6.21001 14.1067 6.20703 16.703C6.74478 29.6951 25.2572 29.6912 25.7933 16.703C25.7903 14.1067 24.7576 11.6175 22.9217 9.78154C21.0857 7.94562 18.5965 6.91289 16.0002 6.90991ZM12.1864 18.6493C12.1864 19.2878 11.9328 19.9002 11.4813 20.3516C11.0298 20.8031 10.4174 21.0568 9.77891 21.0568C9.1404 21.0568 8.52804 20.8031 8.07655 20.3516C7.62505 19.9002 7.37141 19.2878 7.37141 18.6493V18.008C7.37141 17.8589 7.43067 17.7158 7.53616 17.6103C7.64165 17.5048 7.78472 17.4455 7.93391 17.4455C8.08309 17.4455 8.22616 17.5048 8.33165 17.6103C8.43714 17.7158 8.49641 17.8589 8.49641 18.008V18.6493C8.49641 18.9894 8.63153 19.3156 8.87204 19.5562C9.11256 19.7967 9.43877 19.9318 9.77891 19.9318C10.119 19.9318 10.4453 19.7967 10.6858 19.5562C10.9263 19.3156 11.0614 18.9894 11.0614 18.6493V12.9174C11.0614 12.7682 11.1207 12.6252 11.2262 12.5197C11.3316 12.4142 11.4747 12.3549 11.6239 12.3549C11.7731 12.3549 11.9162 12.4142 12.0217 12.5197C12.1271 12.6252 12.1864 12.7682 12.1864 12.9174V18.6493ZM24.2408 18.3905C24.3628 18.433 24.4666 18.516 24.5348 18.6257C24.6031 18.7354 24.6317 18.8652 24.6159 18.9935C24.6001 19.1217 24.5409 19.2407 24.4481 19.3305C24.3553 19.4204 24.2345 19.4758 24.1058 19.4874L19.0939 19.8699C18.8305 19.8743 18.5689 19.8264 18.3242 19.729C18.0795 19.6316 17.8565 19.4867 17.6682 19.3025C17.4798 19.1184 17.3299 18.8987 17.227 18.6562C17.1242 18.4138 17.0704 18.1533 17.0689 17.8899V16.8718C15.7324 19.3963 14.3172 19.8035 13.9695 19.8699C13.8372 19.8673 13.71 19.8182 13.6102 19.7313C13.5104 19.6444 13.4443 19.5251 13.4235 19.3944C13.4027 19.2637 13.4286 19.1298 13.4965 19.0162C13.5645 18.9027 13.6702 18.8166 13.7952 18.773C13.8739 18.7449 15.0383 18.323 15.9945 16.5174L13.7277 13.9074C13.6326 13.7943 13.5857 13.6485 13.5971 13.5012C13.6084 13.3539 13.6771 13.2169 13.7883 13.1197C13.8995 13.0225 14.0444 12.9727 14.1919 12.9812C14.3394 12.9897 14.4777 13.0556 14.577 13.1649L16.4895 15.3699C16.7713 14.5505 16.9674 13.7041 17.0745 12.8443C17.0945 12.7039 17.1667 12.5762 17.2768 12.4868C17.3868 12.3974 17.5266 12.3529 17.6681 12.3621C17.8096 12.3714 17.9424 12.4337 18.0399 12.5367C18.1374 12.6396 18.1924 12.7756 18.1939 12.9174V17.8899C18.1939 18.0022 18.216 18.1134 18.259 18.2171C18.302 18.3208 18.3649 18.4151 18.4443 18.4945C18.5237 18.5739 18.618 18.6369 18.7217 18.6798C18.8254 18.7228 18.9366 18.7449 19.0489 18.7449L22.407 18.4862C22.2034 18.2867 22.0171 18.0703 21.8502 17.8393C21.2539 17.018 19.7745 17.1474 19.7577 17.1474C19.6124 17.1584 19.4686 17.1124 19.3566 17.0192C19.2447 16.9259 19.1735 16.7927 19.1582 16.6479C19.1428 16.503 19.1845 16.3578 19.2743 16.2432C19.3642 16.1285 19.4952 16.0534 19.6395 16.0337C19.7295 16.0224 21.777 15.8199 22.7614 17.1755C23.1296 17.7124 23.6426 18.1337 24.2408 18.3905Z" fill="#1A4C41" />
                            </svg>
                        </div>
                        <p className="pt-7">Shari’a Compliant</p>
                    </div>
                </div>
            </div>
        </div>
    )
}