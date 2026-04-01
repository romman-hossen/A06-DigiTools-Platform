import React from 'react';
import user from '../../assets/user.png';
import pack from '../../assets/package.png';
import rocket from '../../assets/rocket.png';

const Steps = () => {
    return (
        <div className='bg-[#F9FAFC]'>
            <div className="max-w-7xl mx-auto py-30 px-8 md:px-0">
                <div className='text-center space-y-4 mb-10'>
                    <h2 className="text-5xl font-extrabold">Get Started in 3 Steps</h2>
                    <p className='text-gray-400'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  ">
                    <div className="shadow border-2 border-gray-100  py-22 relative px-4 flex flex-col items-center text-center gap-5 rounded-lg bg-white transition-all duration-300 hover:shadow-xl hover:shadow-purple-100 hover:-translate-y-2 hover:scale-[1.02] hover:cursor-pointer">
                        <div className='w-20 h-20 p-4  bg-purple-100  flex items-center justify-center rounded-full '>
                            <img src={user} alt="userName" />
                        </div>
                        <h2 className='text-2xl font-bold'>Create Account</h2>
                        <p className='text-gray-400'>Sign up for free in seconds. No credit card required to get started.</p>
                        <div className='absolute h-10 w-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full flex justify-center items-center top-5 right-5'>01</div>
                    </div>
                    <div className="shadow border-2 border-gray-100  py-22 relative px-4 flex flex-col items-center text-center gap-5 rounded-lg bg-white transition-all duration-300 hover:shadow-xl hover:shadow-purple-100 hover:-translate-y-2 hover:scale-[1.02] hover:cursor-pointer">
                        <div className='w-20 h-20 p-4  bg-purple-100  flex items-center justify-center rounded-full '>
                            <img src={pack} alt="userName" />
                        </div>
                        <h2 className='text-2xl font-bold'>Choose Products</h2>
                        <p className='text-gray-400'>Browse our catalog and select the tools that fit your needs.</p>
                        <div className='absolute h-10 w-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full flex justify-center items-center top-5 right-5'>02</div>
                    </div>
                    <div className="shadow border-2 border-gray-100  py-22 relative px-4 flex flex-col items-center text-center gap-5 rounded-lg bg-white transition-all duration-300 hover:shadow-xl hover:shadow-purple-100 hover:-translate-y-2 hover:scale-[1.02] hover:cursor-pointer">
                        <div className='w-20 h-20 p-4  bg-purple-100  flex items-center justify-center rounded-full '>
                            <img src={rocket} alt="userName" />
                        </div>
                        <h2 className='text-2xl font-bold'>Start Creating</h2>
                        <p className='text-gray-400'>Download and start using your premium tools immediately.</p>
                        <div className='absolute h-10 w-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full flex justify-center items-center top-5 right-5'>03</div>
                    </div>       
                </div>
            </div>         
        </div>
    );
};

export default Steps;