import React, { useRef, useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Image } from "@nextui-org/react";

export default function App({ Nombre, img, descripcion }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  useEffect(() => {
    if (isOpen) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const imgElement = imageRef.current;

      if (imgElement) {
        imgElement.onload = () => {
          // Obtener el ancho y alto natural de la imagen
          let imgWidth = imgElement.naturalWidth;
          let imgHeight = imgElement.naturalHeight;

          // Condición: si el ancho es menor que el largo
          if (imgWidth < imgHeight) {
            imgWidth = 30;  // Fijar ancho en 30
            imgHeight = 39; // Fijar altura en 39
          }

          // Ajustar el canvas al tamaño determinado
          canvas.width = imgWidth;
          canvas.height = imgHeight;

          // Dibujar la imagen en el canvas
          ctx.drawImage(imgElement, 0, 0, imgWidth, imgHeight);

          // Obtener los datos de los píxeles de la imagen
          const imageData = ctx.getImageData(0, 0, imgWidth, imgHeight);
          const pixels = imageData.data;

          console.log(`Ancho de la imagen: ${imgWidth}px, Alto de la imagen: ${imgHeight}px`);

     
        };
      }
    }
  }, [isOpen, img]);

  return (
    <>
      <div className="flex w-full flex-wrap gap-3 md:w-max ">
        <Button className="w-full" color="primary"  onPress={() => handleOpen(size)}>Open</Button>
      </div>
      <Modal className="overflow-scroll" size="full" isOpen={isOpen} onClose={onClose}>
        <ModalContent className="flex justify-center items-center sm:block">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-1xl">{Nombre}</ModalHeader>
              <ModalBody  className="flex justify-center items-center ">
                {/* Imagen oculta para procesar sus píxeles */}
                <img ref={imageRef} src={img} alt="Imagen para procesar" style={{ display: "none" }} />
                
                {/* Canvas donde se dibuja la imagen */}
                <canvas ref={canvasRef} style={{ display: "none" }}></canvas>

                {/* Mostrar la imagen en el modal */}
                <img
                  loading="lazy"
                  className="object-cover bg-center "
                  src={img}
                  
                />
              </ModalBody>
              <ModalFooter>
                <Button size="lg" color="danger"  onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
