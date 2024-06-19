import React from 'react';

const Navigation = () => {

    return (
        <nav className="fixed top-0 left-0 h-full w-full max-w-[185px] z-[999] pt-[114px] pb-[53px] lg:block hidden">
            <div className="container w-full h-full px-[40px]">
                <div className="grid grid-cols-1 h-full">
                    <div className="flex flex-col justify-between items-start h-full">
                        <div>
                            <div className="pb-[63px]">
                                <a className="flex justify-start items-center" href="">
                          <span className="flex justify-center items-center w-[16px] mr-[10px]">
                            <i className="items-center fa-solid fa-house text-[16px]"></i>
                          </span>
                                    <span className="flex justify-center text-[10px]">Feed</span>
                                </a>
                            </div>

                            <div>
                                <a className="flex justify-start items-center pb-[20px]" href="">
                                <span className="flex justify-center w-[16px] mr-[10px]">
                                    <i className="fa-solid fa-calendar-days text-[16]"></i>
                                </span>
                                    <span className="flex justify-center text-[10px]">Agenda</span>
                                </a>
                                <a className="flex justify-start items-center pb-[20px]" href="">
                        <span className="flex justify-center w-[16px] mr-[10px]">
                                    <i className="relative fa-solid fa-comments text-[16px]"> <label className="absolute top-[1px] right-[-3px] flex justify-center items-center text-blue text-[4px] w-[8px] h-[8px] rounded-full border-blue">4</label>
</i>
                        </span>
                                    <span className="flex justify-center text-[10px]">Chat</span>
                                </a>
                                <a className="flex justify-start items-center" href="">
                          <span className="flex justify-center w-[16px] mr-[10px]">
                        <i className="fa-solid fa-book text-[16px]"></i>
                          </span>
                                    <span className="flex justify-center text-[10px]">Skillshare</span>
                                </a>
                            </div>
                        </div>


                        <div>
                            <a className="relative w-[24px] h-[24px] bg-active rounded-full text-blue flex justify-center items-center" href="">
                                <span className="">
                                    <i className="fa-solid fa-moon text-[16px] w-[16px] h-[16px]"></i>
                                </span>
                            </a>

                            <div className="h-[1px] w-full bg-border mt-[20px]"></div>

                            <a className="flex justify-start items-center pb-[20px] pt-[50px]" href="">
                          <span className="flex justify-center w-[16px] mr-[10px]">
                        <i className="fa-solid fa-user text-[16px]"></i>
                          </span>
                                <span className="flex justify-center text-[8px]">Profile</span>
                            </a>

                            <a className="flex justify-start items-center" href="">
                          <span className="flex justify-center w-[16px] mr-[10px]">
                        <i className="fa-solid fa-gear text-[16px]"></i>
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
