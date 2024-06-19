import React from 'react';

const MobileNavigation = () => {

    return (
        <nav className="fixed bottom-0 left-[50%] translate-x-[-50%] w-full z-[999] pt-[24px] pb-[9px] lg:hidden md:block">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-5">
                    <a className="flex flex-col justify-center align-center" href="">
                          <span className="flex justify-center pb-[6px]">
                            <i className="align-center fa-solid fa-house text-[25px]"></i>
                          </span>
                        <span className="flex justify-center text-[8px]">Feed</span>
                    </a>
                    <a className="flex flex-col justify-center align-center" href="">
                        <span className="flex justify-center pb-[6px]">
                            <i className="fa-solid fa-calendar-days text-[25px] "></i>
                        </span>
                        <span className="flex justify-center text-[8px]">Agenda</span>
                    </a>
                    <a className="flex flex-col justify-center align-center" href="">
                        <span className="flex justify-center pb-[6px]">
                                    <i className="relative fa-solid fa-comments text-[25px]"> <label className="absolute top-[4px] right-[-3px] flex justify-center align-center text-blue text-[6px] w-[10px] h-[10px] rounded-full border-blue">4</label>
</i>
                        </span>
                        <span className="flex justify-center text-[8px]">Chat</span>
                    </a>
                    <a className="flex flex-col justify-center align-center" href="">
                          <span className="flex justify-center pb-[6px]">
                        <i className="fa-solid fa-book text-[25px]"></i>
                          </span>
                        <span className="flex justify-center text-[8px]">Skillshare</span>
                    </a>
                    <a className="flex flex-col justify-center align-center" href="">
                          <span className="flex justify-center pb-[6px]">
                        <i className="fa-solid fa-user text-[25px]"></i>
                          </span>
                        <span className="flex justify-center text-[8px]">Profile</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default MobileNavigation;
