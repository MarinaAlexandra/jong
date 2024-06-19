import React from 'react';

const Navigation = () => {

    return (
        <nav className="fixed top-0 left-0 h-full w-full max-w-[185px] z-[999] pt-[114px] pb-[53px]">
            <div className="container w-full h-full px-[40px] lg:block md:hidden">
                <div className="grid grid-cols-1 h-full">
                    <div className="flex flex-col justify-between align-start h-full">
                        <div>
                            <div className="pb-[63px]">
                                <a className="flex justify-start align-center" href="">
                          <span className="flex justify-center align-center">
                            <i className="align-center fa-solid fa-house text-[16px] pr-[10px]"></i>
                          </span>
                                    <span className="flex justify-center text-[10px]">Feed</span>
                                </a>
                            </div>

                            <div className="">
                                <a className="flex justify-start align-center pb-[20px]" href="">
                                <span className="flex justify-center">
                                    <i className="fa-solid fa-calendar-days text-[16] pr-[10px]"></i>
                                </span>
                                    <span className="flex justify-center text-[10px]">Agenda</span>
                                </a>
                                <a className="flex justify-start align-center pb-[20px]" href="">
                        <span className="flex justify-center">
                                    <i className="relative fa-solid fa-comments text-[16px] pr-[10px]"> <label className="absolute top-[1px] right-[7px] flex justify-center align-center text-blue text-[4px] w-[8px] h-[8px] rounded-full border-blue">4</label>
</i>
                        </span>
                                    <span className="flex justify-center text-[10px]">Chat</span>
                                </a>
                                <a className="flex justify-start align-center" href="">
                          <span className="flex justify-center">
                        <i className="fa-solid fa-book text-[16px] pr-[10px]"></i>
                          </span>
                                    <span className="flex justify-center text-[8px]">Skillshare</span>
                                </a>
                            </div>
                        </div>


                        <div>
                            <a className="flex justify-center align-center bg-active w-[24px] h-[24px] rounded-full text-blue" href="">

                        <i className="fa-solid fa-moon text-[16px]"></i>

                            </a>

                            <div className="h-[1px] w-full bg-white mt-[20px]"></div>

                            <a className="flex justify-start align-center pb-[20px] pt-[50px]" href="">
                          <span className="flex justify-center">
                        <i className="fa-solid fa-user text-[16px] pr-[10px]"></i>
                          </span>
                                <span className="flex justify-center text-[8px]">Profile</span>
                            </a>

                            <a className="flex justify-start align-center" href="">
                          <span className="flex justify-center">
                        <i className="fa-solid fa-gear text-[16px] pr-[10px]"></i>
                          </span>
                                <span className="flex justify-center text-[8px]">Instellingen</span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
