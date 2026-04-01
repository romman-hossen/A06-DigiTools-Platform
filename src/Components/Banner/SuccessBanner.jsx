import React from 'react';

const SuccessBanner = () => {
    return (
        <div className='mt-20 mb-30 mx-6 md:mx-0 py-15 bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='grid grid-cols-1 md:grid-cols-5 max-w-7xl mx-auto justify-center items-center space-y-6 md:space-y-0'>
                <div className='text-center md:text-left'>
                    <h2 className='text-6xl font-extrabold text-white'>50K+</h2>
                    <p className='mt-3 text-xl text-white/70  '>Active Users</p>
                </div>
              
                <div className="divider divider-horizontal divider-warning ml-14"></div>
                
                <div className='text-center md:text-left'>
                    <h2 className='text-6xl font-extrabold text-white'>200+</h2>
                    <p className='mt-3 text-xl text-white/70'>Premium Tools</p>
                </div>
                <div className="divider divider-horizontal divider-warning ml-14"></div>

                <div className='text-center md:text-left'>
                    <h2 className='text-6xl font-extrabold text-white'>4.9</h2>
                    <p className='mt-3 pl-4 text-xl text-white/70'>Rating</p>
                </div>
            </div>    
        </div>
    );
};

export default SuccessBanner;