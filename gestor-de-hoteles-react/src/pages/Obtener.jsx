import React, {useEffect, useState} from 'react'
import axios from 'axios'

export const Obtener = () => {

    const [image, setImage] = useState()
    
    const getImage = async() => {
        try{
            const data = await axios('http://localhost:3418/room/getImage/cYu6pJ6XsxWhqO_NS3Q_6bug.jpg')
                setImage(data.request.responseURL)
                         console.log(data.request.responseURL);
            
                
        }catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{getImage()},[])
    console.log(image);
  return (
    <>
       <img crossorigin="anonymous" src={image} alt='hola' width={'100px'} height={'100px'}/> 
        
    </>
    )
}
