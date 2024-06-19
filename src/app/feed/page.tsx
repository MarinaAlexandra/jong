import React from 'react';
import Link from 'next/link';

const FeedPage = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between px-[32px]">
            <div className="container pt-[48px]">
                <div className="grid grid-cols-1">

                    <div>
                        <img className="absolute top-0 left-[50%] translate-x-[-50%] z-[-2] min-h-[515px] object-cover" src="/peterzwart.png" alt=""/>

                        <div>
                            <h2 className="text-[16px] font-bold">Lezing</h2>
                            <h1 className="max-w-[50%] text-[24px] font-bold">Lezing met Pieter zwart</h1>
                            <p className="text-[12px] font-bold pt-[16px]">17 juni</p>
                        </div>

                        <div className="flex justify-end pt-[280px] pb-[28px]">
                            <Link className="btn-primary" href="/">Deelnemen</Link>
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-1 mt-[30px]">
                    <h2 className="mb-[15px]">Nieuws</h2>

                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-lilac">
                        <img className="w-full max-h-[195px]" src="/test.jpg" alt="Sunset in the mountains"/>
                            <div className="px-6 py-4">
                                <div className="font-bold text-[16px] mb-2">The Coldest Sunset</div>
                                <p className="text-gray-700 text-[12px] text-white">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                    </div>
                </div>


                <div className="grid grid-cols-1 mt-[30px]">

                    <div className="relative">
                        <img className="absolute top-0 left-[50%] translate-x-[-50%] z-[-2] min-h-[515px] object-cover" src="/post.jpg" alt=""/>

                        <div>
                            <h2 className="text-[16px] font-bold">Lezing</h2>
                            <h1 className="max-w-[50%] text-[24px] font-bold">Lezing met Pieter zwart</h1>
                            <p className="text-[12px] font-bold pt-[16px]">17 juni</p>
                        </div>

                        <div className="flex justify-end pt-[280px] pb-[28px]">
                            <Link className="btn-primary" href="/">Deelnemen</Link>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default FeedPage;