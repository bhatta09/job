import React from 'react'
import {BiTimeFive} from "react-icons/bi"
import logo1 from "../../assets/viber.png";
import logo2 from "../../assets/twitter.png";
import logo3 from "../../assets/linkedin.png";
import logo4 from "../../assets/whatsapp.png";
import logo5 from "../../assets/facebook.png";
import logo6 from "../../assets/instagram.png";
import logo7 from "../../assets/amazon.png";
import logo8 from "../../assets/google.png";


const Data = [
  {
    id:1,
    image: logo1,
    title: 'Web Devloper',
    time: 'Now',
    location: 'Canada',
    desc: 'lorem djhfbefhg jhbvfhjbvf hjcbdhbd jbd sdv ',
    company: 'Viber.com'
  },
  {
    id:2,
    image: logo2,
    title: 'Front-end Devloper',
    time: '10hrs',
    location: 'USA',
    desc: 'lorem djhfbefhg jhbvfhjbvf hjcbdhbd jbd sdv ',
    company: 'Twitter.com'
  },
  {
    id:3,
    image: logo3,
    title: 'Back-end Devloper',
    time: '8hrs',
    location: 'Uk',
    desc: 'lorem djhfbefhg jhbvfhjbvf hjcbdhbd jbd sdv ',
    company: 'Linkedin.com'
  },
  {
    id:4,
    image: logo4,
    title: 'Web Devloper',
    time: '2months',
    location: 'Japan',
    desc: 'lorem djhfbefhg jhbvfhjbvf hjcbdhbd jbd sdv ',
    company: 'Whatsapp.com'
  },
  {
    id:5,
    image: logo5,
    title: 'Full-stack Devloper',
    time: '5hrs',
    location: 'USA',
    desc: 'lorem djhfbefhg jhbvfhjbvf hjcbdhbd jbd sdv ',
    company: 'Facebook.com'
  },
  {
    id:6,
    image: logo6,
    title: 'SoftWare Devloper',
    time: '1month',
    location: 'Nepal',
    desc: 'lorem djhfbefhg jhbvfhjbvf hjcbdhbd jbd sdv ',
    company: 'Instagram.com'
  },
  {
    id:7,
    image: logo7,
    title: 'QA Tester',
    time: '3hrs',
    location: 'Mexico',
    desc: 'lorem djhfbefhg jhbvfhjbvf hjcbdhbd jbd sdv ',
    company: 'Amazon.com'
  },
  {
    id:8,
    image: logo8,
    title: 'Digital Marketing',
    time: '9hrs',
    location: 'Germany',
    desc: 'lorem djhfbefhg jhbvfhjbvf hjcbdhbd jbd sdv ',
    company: 'Google.com'
  }
]

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">

       
      {
        Data.map(({id,image,title,time,location,desc,company}) =>{
          return(
            <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px]
        hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

          <span className='flex justify-between items-center gap-4'>
          <h1 className='text-[16px] font-semibold text-textColor
          group-hover:text-white'>{title}</h1>
         <span className='flex items-center text-[#ccc] gap-1'>
          <BiTimeFive/>{time}
         </span>
          </span>
        <h6 className='text-[#ccc]'>{location}</h6>

        <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]
        group-hover:text-white'>{desc}
        </p>

        <div className='company flex items-center gap-2'>
      <img src={image} alt="Company Logo" className='w-[10%]' />
      <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
    </div>

    <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px]
    font-semibold text-textColor hover:bg-blue
    group-hover/item:text-textColor group-hover:text-white'>
      Apply Now
    </button>
      </div>
          )
        })
      }

    </div>
    </div>
    
  );
};

export default Jobs;