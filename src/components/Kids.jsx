import Image from 'next/image'
import React from 'react'
import toy1 from  '../../public/assets/homepage-section2-img.png'
import toy2 from '../../public/assets/aboutpage-section1-img.png'
import boy1 from '../../public/assets/homepage-section3-img.jpeg'
import Link from  "next/link"
const Kids = () => {
  return (
    <>
    <div className='container-fluid section_2'>
        <div className='container'>
            <h6 className='text-center pt-4'>Prepare Your Kids For The Future That Is Already Here</h6>

            <div className='row w-70  d-flex justify-content-center'>
                <div className="col-md-8 col-sm-12 col-lg-8">
            <div className='border border-white rounded-4 p-4 mt-4 position-relative'>
                <p className='fs-8'>
                The evolution of Artificial Intelligence through various applications (chatbots, AI image generation, visual effects, etc) has opened our eyes to the limitless possibilities of technology. And software development sits at the heart of it all. The golden future is already here. 
                Software powers everything around us and that’s why you may want to put your kids on this path that guarantees a fulfilled, enviable and prosperous future. 
                </p>
            <div className='position-absolute bottom-75 start-100 translate-middle '>
            <Image 
            src={toy2}
            height={140}
            width={122}
            alt='kids playing'/>
          </div>
            </div>
                </div>
            </div>

        
            <div className='row mt-5'>
              <div className='col'>
                    <Image
                      src={toy1}
                      alt='kids toy'
                      objectFit='contain'
                      layout='responsive'
                    
                    />
              </div>
            </div>

            <div className='row bg-transparent kids_border'>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='bg-kids'>
                  <Image 
                  src={boy1}
                  fill
                  priority
                  alt='boy'
                  className='border-none rounded-3 bg-img mb-4'
                  />
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='bg-kids'>
                  <Image 
                  src={boy1}
                  fill
                  priority
                  alt='boy'
                  className='border-none rounded-3 bg-img mt-4'
                  />
                </div>
              </div>
              <div className='col-sm-12 col-md-4 col-lg-4 '>
                <div className='coding'>
                  <p className='pt-2'>Coding For Kids </p>
                </div>

                <p className='fs-8 pb-2'>Beyond basic IT and computer trainings.</p>
                <p className='fs-7 pb-3'>
                Coding has become the standard literacy in the digital 
                age, and with us, your kids are groomed to 
                invent and build amazing products that 
                solve underlying global problems
                </p>

                <Link className='text-white fs-7' href="/">Read more</Link>
              </div>
              
            </div>
      
         </div>
        
       </div>
  
    </>
  )
}

export default Kids