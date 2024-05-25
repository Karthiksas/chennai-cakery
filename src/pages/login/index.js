import React from 'react'
import User from '../../assets/Images/user.png'
import Baker1 from '../../assets/Images/baker1.png'

function index() {
  return (
    <div className="bg-gray-50 h-screen flex items-center justify-center py-5">

        <div  id="maincontainer" className="flex w-[1156px] p-11 items-center gap-11 rounded-[74px] shadow-lg bg-Layout-100">
           
           <div className='flex flex-row gap-11'>
            <div id="leftcontainer" className='flex flex-col w-[358px] justify-center items-center gap-11 shrink-0 self-stretch'>
                <div className='flex flex-col items-center self-stretch'>
                    <h2 className=' text-Primary-Gunmetalgrey font-poppins text-[44px] font-semibold leading-normal track-[-1.32px]'>Create Account</h2>
                    <p className=' text-Layout-500 text-center font-poppins text-[12px] font-medium leading-normal'>You have to register first to get all our Services</p>
                </div>
                <div className='flex flex-col items-start gap-6 self-stretch'>               
                <form action='#' id='formfields' className='flex flex-col items-start gap-[10px] self-stretch'>    
                    <div className='flex w-[375px] items-start gap-[10px] relative'>
                        <img className=' w-16 h-16 shrink-0 bg-cover bg-no-repeat' src={User} alt="user icon"></img>
                        <div className=' flex p-1 justify-center items-center gap-[10px] absolute bottom-0 left-[41.5px] rounded-[5px] bg-white shadow-3xl'>
                            <a href='#Home'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 17 16" fill="none">
                                    <path d="M9.33958 2.39982L3.86624 8.19315C3.65958 8.41315 3.45958 8.84649 3.41958 9.14649L3.17291 11.3065C3.08624 12.0865 3.64624 12.6198 4.41958 12.4865L6.56624 12.1198C6.86624 12.0665 7.28624 11.8465 7.49291 11.6198L12.9662 5.82649C13.9129 4.82649 14.3396 3.68649 12.8662 2.29315C11.3996 0.913152 10.2862 1.39982 9.33958 2.39982Z" stroke="#161E40" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8.42676 3.36621C8.71342 5.20621 10.2068 6.61288 12.0601 6.79954" stroke="#161E40" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2.5 14.667H14.5" stroke="#161E40" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className=' flex flex-col justify-center items-start gap-1 self-stretch'>           
                        <label className=' text-Layout-700 font-poppins text-[12px] font-normal leading-5'>Name</label>                     
                        <input type='text' className=' flex py-[11px] px-[16px] items-center self-stretch rounded-lg border-[1.4px] border-solid border-Layout-300 bg-Layout-100' placeholder='John Doe'></input>
                    </div>
                    <div className=' flex flex-col justify-center items-start gap-1 self-stretch'> 
                        <label className=' text-Layout-700 font-poppins text-[12px] font-normal leading-5'>Email</label>
                        <input type='email' className='flex py-[11px] px-[16px] items-center self-stretch rounded-lg border-[1.4px] border-solid border-Layout-300 bg-Layout-100' placeholder='JohnDoe@example.com'></input>
                    </div>
                    <div className=' flex flex-col items-start gap-1 self-stretch'> 
                        <label className=' text-Layout-700 font-poppins text-[12px] font-normal leading-5'>Address</label>
                        <textarea className="resize-none flex py-[11px] px-[16px] items-center self-stretch rounded-lg border-[1.4px] border-solid border-Layout-300 bg-Layout-100 h-[92px]" placeholder='Enter Address'></textarea>
                    </div>
                    <div className=' flex flex-col justify-center items-start gap-1 self-stretch'> 
                        <label className=' text-Layout-700 font-poppins text-[12px] font-normal leading-5'>Pincode</label>
                        <input type='email' className='flex py-[11px] px-[16px] items-center self-stretch rounded-lg border-[1.4px] border-solid border-Layout-300 bg-Layout-100' placeholder='629000'></input>
                    </div>
                    
                </form>
                <div className='flex py-[10px] px-[40px] justify-center items-center gap-[14px] self-stretch rounded-lg bg-gradient-to-r from-Primary-Pinkcus to-Primary-Rosecus'>
                    <button type="submit"  value="Submit" className=' text-Primary-White text-center font-poppins text-[12px] font-semibold leading-normal'>Create Account</button>
                </div>
                </div>
            </div>

            <div id="rightcontainer" className=' bg-Primary-Greencus w-[666px] h-[640px] shrink-0 rounded-[56px]'>
                <img src={Baker1} alt='baker' className='w-[555.286px] h-[546px]  bg-cover bg-no-repeat my-[47px] ml-[55px] mr-[55.7px]'></img>
            </div>

            {/* <div className=' h-[640px] flex-1'>
                <div className=' w-[666px] h-[640px] shrink-0 rounded-[56px] bg-Primary-Greencus'>
                    <div className=' w-[555.286px] h-[546px] shrink-0'>
                        <img src={Baker1} alt='baker'></img>
                    </div>
                </div>
            </div> */}



            </div>
        </div>
  </div>
  )
}

export default index