import React from 'react';
import Link from "next/link";

const Navigation = () => {

    return (
        <nav className="fixed top-0 left-0 h-full w-full max-w-[185px] z-[999] pt-[114px] pb-[53px] lg:block hidden">
            <div className="container w-full h-full px-[40px]">
                <div className="grid grid-cols-1 h-full">
                    <div className="flex flex-col justify-between items-start h-full">
                        <div>
                            <ul className="pb-[63px]">
                                <li>
                                    <Link className="flex justify-start items-center" href="/feed">
                                         <span className="flex justify-center items-center w-[16px] mr-[10px]">
                                            <i className="items-center fa-solid fa-house text-[16px]"></i>
                                         </span>
                                        <span className="flex justify-center text-[10px]">Feed</span>
                                    </Link>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                    <Link className="flex justify-start items-center pb-[20px]" href="/agenda">
                                         <span className="flex justify-center items-center w-[16px] mr-[10px]">
                                            <i className="items-center fa-solid fa-calendar-days text-[16px]"></i>
                                         </span>
                                        <span className="flex justify-center text-[10px]">Agenda</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link className="flex justify-start items-center pb-[20px]" href="/chat">
                                         <span className="flex justify-center items-center w-[16px] mr-[10px]">
                                            <i className="relative items-center fa-solid fa-comments text-[16px]">
                                                <label className="absolute top-[1px] right-[-3px] flex justify-center items-center text-blue text-[4px] w-[8px] h-[8px] rounded-full border-blue">4</label>
                                            </i>
                                         </span>
                                        <span className="flex justify-center text-[10px]">Chat</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link className="flex justify-start items-center pb-[20px]" href="/">
                                         <span className="flex justify-center items-center w-[16px] mr-[10px]">
                                            <i className="items-center fa-solid fa-book text-[16px]"></i>
                                         </span>
                                        <span className="flex justify-center text-[10px]">Skillshare</span>
                                    </Link>
                                </li>
                            </ul>

                        </div>


                        <div>
                            <ul>
                                <li>
                                    <a className="relative w-[24px] h-[24px] bg-active rounded-full text-blue flex justify-center items-center" href="">
                                <span className="">
                                    <i className="fa-solid fa-moon text-[16px] w-[16px] h-[16px]"></i>
                                </span>
                                    </a>
                                </li>

                                <div className="h-[1px] w-full bg-border mt-[20px] mb-[50px]"></div>

                                <li>
                                    <Link className="flex justify-start items-center pb-[20px]" href="/">
                                         <span className="flex justify-center items-center w-[16px] mr-[10px]">
                                            <i className="items-center fa-solid fa-user text-[16px]"></i>
                                         </span>
                                        <span className="flex justify-center text-[10px]">Profiel</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link className="flex justify-start items-center pb-[20px]" href="/">
                                         <span className="flex justify-center items-center w-[16px] mr-[10px]">
                                            <i className="items-center fa-solid fa-gear text-[16px]"></i>
                                         </span>
                                        <span className="flex justify-center text-[10px]">Instellingen</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
