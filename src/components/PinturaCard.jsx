import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import Modal from './Modal';

const CardPinturas = ({Nombre,img,descripcion}) => {
 
    return (
         <div id="Card" className="flex  max-w-80">
          
       <Card
      isFooterBlurred
      radius="lg"
      className="border-none w-full  h-full  relative flex justify-center items-center"
    >
      <img
      className="object-cover  w-[300px] h-[300px]  md:h-[400px]"
      loading="lazy"
    
      src={img}
        
      />
      <CardFooter className="justify-between h-14 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="hidden  text-lg text-white md:block">{Nombre}</p>
        <Modal Nombre={Nombre}  descripcion={descripcion} img={img}/>
      </CardFooter>
    </Card>
      </div>
    )
}
export default CardPinturas