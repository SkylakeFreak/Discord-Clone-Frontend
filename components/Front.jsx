"use client";
import React from 'react'
import { SocialIcon } from 'react-social-icons/component'

import 'react-social-icons/instagram'
import 'react-social-icons/facebook'
import 'react-social-icons/youtube'
import 'react-social-icons/x'
import 'react-social-icons/tiktok'
import { useState } from 'react'
// renders: vimeo icon


function Front() {
    const [state, setstate] = useState(false);
  return (
    <div className=''>
        <div className='bg-[#404EED] sm:h-[75vh] h-[74vh]'>
        <div className='absolute z-20 '>
        <div className='p-5 flex  z-1 ' id="navbar">
            <img className='h-10' src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg" alt="" />
            <a className='ml-auto' href="/Account"><button className='ml-auto text-black bg-white font-bold rounded-3xl p-2 text-sm'>Open Discord</button></a>
            <div className='text-white'><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="ml-2 w-10 h-10">
            <path stroke-linecap="" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </div>
        </div>
        <div id="alltext"></div>
        <div id='textarea' className='flex items-center justify-center mt-10 '>
            <h1 className='text-white font-bold text-4xl'>IMAGINE A PLACE...</h1>
        </div>
        <div id='textarea2' className='flex items-center justify-center mt-10 ml-10 mr-10'>
            <h1 className='text-white text-lg text-center'>...where you can belong to a school club, a gaming group or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often..</h1>
        </div>
        <div className='p-6 lg:flex lg:flex-row flex flex-col items-center justify-center mr-2' id='buttons'>

        <button className='text-black bg-white rounded-3xl mr-6 ml-10 p-4 text-xl flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-7 mr-4 ml-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>
<span className='mr-3'>Downlod for windows</span></button>
            <button className='text-white bg-[#313338] rounded-3xl ml-10 p-4 lg:mt-0 mr-6 mt-5 text-lg flex'>Download Discord to talk, chat, and hang out</button>
           
        </div>
        </div>
        
        <div className='top-80 absolute z-10' id='imageleft'>
        <div className='flex'>
    <img className="" src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/644fab4db9ca0a124b73d4b7_c40c84ca18d84633a9d86b4046a91437.svg" alt="" />
    
</div>
            </div>
            
            
        </div>
        <div className='flex absolute z-10 top-80 right-0'>
            <img className="ml-auto" src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/644fab4df2dc8d7a9a081ebd_8a8375ab7908384e1fd6efe408284203.svg" alt="" />
            </div>


            <div className='h-[80vh] flex items-center justify-center'>
                <div className='p-10 mt-20 lg:flex'>
                <img className='h-40 sm:h-60 md:h-80 flex w-screen' src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582c18a9cff186bd3731704_Create%20an%20invite-only%20place%20where%20you%20belong.svg" alt="" />

                <div className='mt-5  ml-20 mr-20 '>
                    <h1 className=' text-4xl lg:text-5xl font-bold text-center'>Create an invite-only place where you belong</h1>
                    <h1 className='mt-5 mb-10 text-center'>Discord servers are organised into topic-based channels where you can collaborate, share and just talk about your day without clogging up a group chat.</h1>
                </div>
                </div>
                
            </div>

            <div className='h-[80vh] flex items-center justify-center bg-[#F6F6F6]'>
                <div className='p-10 mt-20 lg:flex'>
                <div className='mt-5  ml-20 mr-20 '>
                    <h1 className=' text-4xl lg:text-5xl font-bold text-center'>Where hanging out is easy</h1>
                    <h1 className='mt-5 mb-20 text-center'>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</h1>
                </div>
                <img className='h-40 sm:h-60 md:h-80 flex w-screen' src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582c1b717efff2306ef179e_Where%20hanging%20out%20is%20easy.svg" alt="" />

               
                </div>
                
            </div>
            <div className='h-[70vh] flex items-center justify-center'>
                <div className='p-10 mt-20 lg:flex'>
                <img className='h-40 sm:h-60 md:h-80 flex w-screen' src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582c1d8348e5c81ca608138_From%20few%20to%20a%20fandom.svg" alt="" />
                <div className='mt-5  ml-20 mr-20 '>
                    <h1 className=' text-4xl lg:text-5xl font-bold text-center'>From few to a fandom</h1>
                    <h1 className='mt-5 mb-20 text-center'>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels and more.</h1>
                </div>
                

               
                </div>
                
            </div>





            <div className='h-[110vh] lg:h-[140vh] w-[100%] bg-[#F6F6F6] clear-start'>
                
                <h1 className='font-bold text-4xl flex justify-center text-center p-10'>RELIABLE TECH FOR STAYING CLOSE</h1>
                <h1 className='text-center p-10'>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games or gather together over a drawing session with Screen Share</h1>
                <div className='flex items-center justify-center '><img className='flex mb-10  w-[70%]' src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582c202770f02752be44796_RELIABLE%20TECH%20FOR%20STAYING%20CLOSE.svg" alt="" /></div>
                <div className='flex justify-center'>
                <img className=' absolute w-[50%]' src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/625bd8c9aab9924849ad9c5e_a188414ce83f2454b9d71a47c3d95909%20(3).svg" alt="" />
                </div>
                

                <h1 className='text-3xl font-bold flex justify-center mt-10 text-center'>Ready to Start Your Journey?</h1>
                <div className='flex justify-center'>
                <button className='text-white bg-[#5865F2] rounded-3xl mr-6 mt-10 ml-10 p-4 text-xl flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-7 mr-4 ml-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>
<span className='mr-3'>Downlod for windows</span></button>
                </div>
            </div>


            <div className='h-[40vh] md:h-[90vh] bg-[#23272A]'>
                <div className='py-10 ml-[10%] lg:flex'>

                <div className='md:justify-left'>
                <select className='bg-[#23272A] text-white ml-2 mb-10  ' name="dropdown" id="">
                    <option value="English (UK)">English (UK)</option>
                    <option value="English (UK)">Dansk</option>
                    <option value="English (UK)">Espanol</option>
                    <option value="English (UK)">Francais</option>
                    <option value="English (UK)">Hindi</option>
                    <option value="English (UK)">Cestina</option>
                </select>

                <div className='text-white'>
                    <div className='flex'>
                    <SocialIcon fgColor='white' bgColor='#23272A' url="www.instagram.com" />
                    <SocialIcon fgColor='white' bgColor='#23272A' url="www.x.com" />
                    <SocialIcon fgColor='white' bgColor='#23272A' url="www.facebook.com" />
                    <SocialIcon fgColor='white' bgColor='#23272A' url="www.youtube.com" />
                    <SocialIcon fgColor='white' bgColor='#23272A' url="www.tiktok.com" />

                    
                    </div>
                    
                </div>
                

                </div>
                {/* <div className='flex gap-[5%]'>
                    <div className=''>
                        <h1 className='text-[#5865F2] mb-2 md:mb-10'>Product</h1>
                        <div className='text-white'>
                        <h2 className='mb-4'>Download</h2>
                        <h2 className='mb-4'>Nitro</h2>
                        <h2 className='mb-4'>Status</h2>
                        <h2 className='mb-4'>App Directory</h2>
                        <h2 className='mb-4'>New Mobile Experience</h2>
                        </div>
                        
                    </div>
                    <div className=''>
                        <h1 className='text-[#5865F2]  mb-2 md:mb-10'>Company</h1>
                        <div className='text-white'>
                        <h2 className='mb-4'>About</h2>
                        <h2 className='mb-4'>Jobs</h2>
                        <h2 className='mb-4'>Brand</h2>
                        <h2 className='mb-4'>Newsroom</h2>
                        </div>
                        
                   
                    </div>
                    <div className=''>
                        <h1 className='text-[#5865F2]  mb-2 md:mb-10'>Resources</h1>
                        <div className='text-white'>
                        <h2 className='mb-4'>College</h2>
                        <h2 className='mb-4'>Support</h2>
                        <h2 className='mb-4'>Safety</h2>
                        <h2 className='mb-4'>Blog</h2>
                        <h2 className='mb-4'>StreamKit</h2>
                        <h2 className='mb-4'>Creators</h2>
                        <h2 className='mb-4'>Community</h2>
                        <h2 className='mb-4'>Developers</h2>
                        <h2 className='mb-4'>Gaming</h2>
                        <h2 className='mb-4'>Quests</h2>
                        <h2 className='mb-4'>Official Third-Party Merch</h2>
                        </div>
                        
                    </div>
                    <div className=''>
                        <h1 className='text-[#5865F2]  mb-2 md:mb-10'>Policies</h1>
                        <div className='text-white'>
                        <h2 className='mb-4'>Terms</h2>
                        <h2 className='mb-4'>Privacy</h2>
                        <h2 className='mb-4'>Cookie Settings</h2>
                        <h2 className='mb-4'>Guidelines</h2>
                        <h2 className='mb-4'>Acknowledgments</h2>
                        <h2 className='mb-4'>Licences</h2>
                        <h2 className='mb-4'>Company Information</h2>
                        </div>

                        
                        
                    </div>
                    
                    
                </div> */}
                
                </div>
                
                <div className='bg-[#5865F2] h-[0.01%] ml-[10%] mr-[10%]'></div>
                <div className='flex p-5 ml-[10%] mr-[10%]'><img className='h-10' src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg" alt="" />
            <a className='ml-auto' href="/Account"><button id='main' className='ml-auto text-white bg-[#5865F2] font-bold rounded-3xl p-2 text-sm'>Open Discord</button></a></div>
            </div>
            
            
            
    </div>

  )
}

export default Front