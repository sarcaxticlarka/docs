import React, { useRef } from 'react';
import Card from './Card';


function Foreground() { 
      const ref = useRef(null);
    const data = [
         
        {
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius iusto dolor", filesize: ".8mb", close: true, tag: {isOpen: true, tagTitle: "DownLoad Now", tagColor: "blue"} 
        },
        {
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius iusto dolor", filesize: "12mb", close: false, tag: {isOpen: true, tagTitle: "Upload", tagColor: "green"} 
        },
        {
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius iusto dolor", filesize: "12mb", close: false, tag: {isOpen: true, tagTitle: "Upload", tagColor: "green"} 
        },
        
        {
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius iusto dolor", filesize: "12mb", close: false, tag: {isOpen: true, tagTitle: "Upload", tagColor: "blue"} 
        },
        {
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius iusto dolor", filesize: "12mb", close: true, tag: {isOpen: false, tagTitle: "Upload", tagColor: "green"} 
        }
    ]
  return (
    
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full bg-stone-900/50 flex gap-10 flex-wrap p-5'>
             {data.map((item, index)=>(
                <Card data={item} reference={ref} />
             ))}
             
        </div>

     
  )
}

export default Foreground