import './App.css'
import ojoImage from './assets/Ojo.png';

import Aguacate from './assets/Aguacate2.png';
import PintrurasCard from './components/PinturaCard';
import Pintura_2 from './assets/Autorretrato expresionista - óleos_page-0001.png'
import Frog_1 from './assets/ilovepdf_pages-to-jpg/Frog_paintings_-_May_2023[1]_pages-to-jpg-0001.jpg'
import Frog_2 from './assets/ilovepdf_pages-to-jpg/Frog_paintings_-_May_2023[1]_pages-to-jpg-0002.jpg'
import CieloEstrellado from './assets/img10 (1).png'
import Paisaje from './assets/Paisaje.png'
import Alepinturas from './assets/Albun Ale/Grayscale Ale paintings - positivos y negativos_page-0001.jpg';
import Alepinturas2 from './assets/Albun Ale/Grayscale Ale paintings - positivos y negativos_page-0002.jpg'
import Alepinturas3 from './assets/Albun Ale/Grayscale Ale paintings - positivos y negativos_page-0003.jpg'
import Alepinturas4 from './assets/Albun Ale/Grayscale Ale paintings - positivos y negativos_page-0004.jpg'
import Alepatings from './assets/ilovepdf_pages-to-jpg (2)/Ale_paintings_-_Light[1]_pages-to-jpg-0001.jpg'
import Alepatings2 from './assets/ilovepdf_pages-to-jpg (2)/Ale_paintings_-_Light[1]_pages-to-jpg-0002.jpg'
import Alepatings3 from './assets/ilovepdf_pages-to-jpg (2)/Ale_paintings_-_Light[1]_pages-to-jpg-0003.jpg'
import Alepatings4 from './assets/ilovepdf_pages-to-jpg (2)/Ale_paintings_-_Light[1]_pages-to-jpg-0004.jpg'
import Alepatings5 from './assets/ilovepdf_pages-to-jpg (2)/Ale_paintings_-_Light[1]_pages-to-jpg-0005.jpg'
import Alepatings6 from './assets/ilovepdf_pages-to-jpg (2)/Ale_paintings_-_Light[1]_pages-to-jpg-0006.jpg'
import Alepatings7 from './assets/ilovepdf_pages-to-jpg (2)/Ale_paintings_-_Light[1]_pages-to-jpg-0007.jpg'
import Hongo1 from './assets/ilovepdf_pages-to-jpg/Paintings subasta - Mushrooms 2023_pages-to-jpg-0001.jpg'
import Hongo2 from './assets/ilovepdf_pages-to-jpg/Paintings subasta - Mushrooms 2023_pages-to-jpg-0002.jpg'


import { img } from 'framer-motion/client';
import { Button, Link, Modal } from "@nextui-org/react";
import Header from './components/navar'


function App() {
  const IMGINFO = [
    {
      img: Aguacate,
      Nombre: 'Aguacate',
      Descripcion: 'El Aguacate'
    },
    {
      img: Pintura_2,
      Nombre: 'Flor',
      Descripcion: 'La flor'
    },
    {
      img: Frog_1,
      Nombre: 'Rana',
      Descripcion: 'La rana'
    }, {
      img: Frog_2,
      Nombre: 'Rana2',
      Descripcion: 'La rana2'
    }, {
      img: CieloEstrellado,
      Nombre: 'Cieloestrellado',
      Descripcion: 'cieloestrellado'
    }, {
      img: Paisaje,
      Nombre: 'Paisaje',
      Descripcion: 'Paisaje'
    }, {
      img: Alepinturas,
      Nombre: 'Ale pinturas',
      Descripcion: 'Ale pinturas'
    }, {

      img: Alepinturas2,
      Nombre: 'Ale pinturas2',
      Descripcion: 'Ale pinturas2'
    }, {

      img: Alepinturas3,
      Nombre: 'Ale pinturas3',
      Descripcion: 'Ale pinturas3'
    }, {

      img: Alepinturas4,
      Nombre: 'Ale pinturas4',
      Descripcion: 'Ale pinturas4'
    },
    {
      img: Alepatings,
      Nombre: 'Ale pinturas',
      Descripcion: 'Ale pinturas'
    }, {

      img: Alepatings2,
      Nombre: 'Ale pinturas2',
      Descripcion: 'Ale pinturas2'
    }, {

      img: Alepatings3,
      Nombre: 'Ale pinturas3',
      Descripcion: 'Ale pinturas3'
    }, {

      img: Alepatings4,
      Nombre: 'Ale pinturas4',
      Descripcion: 'Ale pinturas4'
    }, {

      img: Alepatings5,
      Nombre: 'Ale pinturas5',
      Descripcion: 'Ale pinturas5'
    }, {

      img: Alepatings6,
      Nombre: 'Ale pinturas6',
      Descripcion: 'Ale pinturas6'
    }, {

      img: Alepatings7,
      Nombre: 'Ale pinturas7',
      Descripcion: 'Ale pinturas7'
    }, {

      img: Hongo1,
      Nombre: 'Hongo1',
      Descripcion: 'Hongo1'
    }, {

      img: Hongo2,
      Nombre: 'Hongo2',
      Descripcion: 'Hongo2'
    }
  ]

  return (
    <div className='flex flex-col  bg-[#F8EDEB]'>
      <div className='flex flex-col bg-[#F8EDEB]'>
  {/*       
      <header className='sticky z-[50] top-0 h-20 flex justify-between items-center px-8 bg-white border-1  border-[#ffafcc] '>
        <div className='text-2xl italic '>
          <h1 className='font-[dancing-script]   text-red-400'>Nathalie Rose Russi Maldonado</h1>
        </div>
        <div className='flex  mr-16 font-[dancing-script] italic gap-20 '>
          <Link href="#Welcome" className='text-lg cursor-pointer  text-red-400' color='#000000 ' underline="hover">Galery</Link>
     
          <Link href='#Footer' className='text-lg cursor-pointer  text-red-400' underline="hover">contact me</Link>


        </div>
      </header> */}
          <Header/>
      <div className=' fixed flex flex-col ml-[88%]  justify-end items-end top-[22%] gap-10 w-52  h-20  z-[999] pr-10'> 
        <a href="https://www.instagram.com/paintings.natha?igsh=MTk5N3dmdjlrbXp6Yg==">
      
        <Button  radius="full" size="sm"   variant='shadow' color='danger' className='w-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer  icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M16.5 7.5l0 .01" />
        </svg>
        </Button>
        </a>
        <a href="https://www.facebook.com/nathalie.russi.7?mibextid=ZbWKwL">
        <Button  radius="full" size="sm"  variant='shadow' color='primary' >
        <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
        </svg>
        </Button>
        </a>


      </div>  
      <div className='h-screen '>
        <div className=' relative flex justify-center items-center text-2xl text-white  bg-cover bg-center  h-5/6 bg-slate-800 px-5 sm:px-0 sm:text-4xl md:text-6xl ' style={{ backgroundImage: `url(${ojoImage})` }}>
          <div  className="absolute inset-0 bg-black opacity-45 "></div>

          <h1 id='Welcome' className='flex justify-center font-[dancing-script] items-center z-30 border-2 w-[55rem] h-28   shadow-md shadow-black'>Welcome to My Art World</h1>

        </div>
      </div>
      <div id='Gallery'  className='flex justify-center items-center w-full h-28 px-5  sm:px10   '>
      <div className='flex justify-center items-center w-full  h-20 bg-[#ffc8dd]  italic box shadow-xl scroll-smooth border-1  border-[#ffafcc] sm:h-28'>
        <h1 className='font-[dancing-script] text-4xl'>My gallery</h1>
      </div>
      </div>

      <div className='flex h-full  justify-center items-center mt-10'>
        <div className='grid grid-cols-1 gap-5 w-5/6 h-full  max-w-max animate-scroll mb-32   md:grid-cols-2 lg:grid-cols-3'>

          {
            IMGINFO.map((img) => {
              return <PintrurasCard img={img.img} Nombre={img.Nombre} descripcion={img.Descripcion}></PintrurasCard>
            })
          }

        </div>
      </div>


      <footer id='Footer' className="bg-[#7E1037]">
    <div className="container p-6 mx-auto">
        <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
                <div className="px-6">
                 

                    <h1 className="max-w-sm mt-2 text-white dark:text-gray-400">Nathalie Rose Russi Maldonado</h1>

                    <div className="flex mt-6 -mx-2">
                    
                    
                      
                    
                        <a href="https://github.com/Beltranposso?tab=overview&from=2024-09-01&to=2024-09-20"
                            class="mx-2 text-white transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                            aria-label="Github">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                                </path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div class="mt-6 lg:mt-0 lg:flex-1">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div>
                        <h3 className ="text-white uppercase dark:text-white">About me</h3>
                        <p  className="block mt-2 text-sm text-white dark:text-gray-400 ">Artist</p>
                        <p className="block mt-2 text-sm text-white dark:text-gray-400 ">weaver</p>
                        <p className="block mt-2 text-sm text-white dark:text-gray-400 ">bilingual</p>
            
                    </div>

                  

                    <div>
                        <h3 class="text-white uppercase dark:text-white">Services</h3>
                        <p  class="block mt-2 text-sm text-white dark:text-gray-400 ">Crochet</p>
                        <p className="block mt-2 text-sm text-white  dark:text-gray-400">Paintings</p>
                      
                    </div>

                    <div>
                        <h3 class="text-white uppercase dark:text-white">Contac us</h3>
                        <p  className="block mt-2 text-sm text-white dark:text-gray-400 ">nathalieroserussi@gmail.com </p>
                        <p  className="block mt-2 text-sm text-white  dark:text-gray-400">+57 305-417-1771</p>
                    </div>
                </div>
            </div>
        </div>

        <hr class="h-px my-6 bg-gray-200 border-none dark:bg-gray-700 "/>

        <div>
            <p class="text-center text-white dark:text-gray-400">© 2024 byAlexandro</p>
        </div>
    </div>
</footer>

      </div>
       
    </div>
  )
}

export default App
