import React from 'react';
import facebook from './icon/facebook (4).png'
import twitter from './icon/twitter.png'
import ins from './icon/instagram.png'
import linkedin from './icon/linkedin (1).png'
import youtube from './icon/youtube.png'
import skype from './icon/skype.png'

const SocialBanner = () => {
    return (
        <div className='lg:grid grid-cols-2 justify-between my-28 p-4'>
            <div >
                <p className='font-bold text-4xl'>Social Media</p>
                <p className='my-5'>Don’t Miss To Follow Us On Our Social <br />Networks Accounts.</p>
            </div>

            <div className='flex gap-3'>
                <div className='lg:p-6 hover:border-[1px] hover:border-blue-600 cursor-pointer shadow-xl rounded-2xl'>
                    <img className=' lg:mt-3' src={facebook} alt="" />
                </div>
                <div className='lg:p-6 hover:border-[1px] hover:border-blue-600 cursor-pointer shadow-xl rounded-2xl'>
                    <img className='lg:mt-3' src={twitter} alt="" />
                </div>
                <div className='lg:p-6 hover:border-[1px] hover:border-blue-600 cursor-pointer shadow-xl rounded-2xl'>
                    <img className='lg:mt-3' src={ins} alt="" />
                </div>
                <div className='lg:p-6 hover:border-[1px] hover:border-blue-600 cursor-pointer shadow-xl rounded-2xl'>
                    <img className='lg:mt-3' src={linkedin} alt="" />
                </div>
                <div className='lg:p-6 hover:border-[1px] hover:border-blue-600 cursor-pointer shadow-xl rounded-2xl ml-2'>
                    <img className='lg:mt-3' src={youtube} alt="" />
                </div>
                <div className='lg:p-6 hover:border-[1px] hover:border-blue-600 cursor-pointer shadow-xl rounded-2xl ml-2'>
                    <img className='lg:mt-3' src={skype} alt="" />
                </div>
                
            </div>


        </div>
    );
};

export default SocialBanner;