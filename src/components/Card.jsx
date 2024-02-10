import React from 'react';
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from  "framer-motion";



function Card({ data, reference }) {
  return (
     
        <motion.div drag dragConstraints={reference} className=' relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-fuchsia-50 text-black px-8 py-10 overflow-hidden'>
            <FaFileAlt/>
            <p className='text-sm leading-tight font-semibold mt-5'>{data.description}</p>
            <div className='footer absolute bottom-0 w-full h-[105px]  py-4  left-0  '>
                <div className='flex justify-between items-center px-8 mb-2'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-zinc-200 rounded-full flex items-center justify-center'> 
                        {data.close ? <IoMdClose color='#000'/> : <MdOutlineFileDownload size=".8em" color='#000'/> }
                        </span>
                    
                </div>
                {
                    data.tag.isOpen && (
                        <div className={`tag h-20 w-full ${data.tag.tagColor === "blue" ? "bg-blue-800" : "bg-green-800"} flex items-center justify-center `} >
                         <h3 className='text-sm font-semibold mb-8 '>{data.tag.tagTitle}</h3> 
                       </div>
                    ) 
                }
                
                
            </div>
        </motion.div>
     
  )
}

export default Card