import React from 'react'
import Image from 'next/image'
import bg from '../../public/assets/bg-1.png'
import system from '../../public/assets/homepage-section4-icon1.png'
import web from '../../public/assets/homepage-section4-icon2.png'
import code from '../../public/assets/homepage-section4-icon3.png'
import hand from '../../public/assets/homepage-section4-icon4.png'

const Learn = () => {
  return (
    <>

    <div className='container-fluid bg_3 '>
        <Image
        src={bg}
        alt='bg img'
        fill
        className='bg_3'
        />
        <div className='container'>
            <div>
                <h2 className="text-center fw-bold fs-4 text-white pt-5">
                What Kids Learn Here
                </h2>
                <p className='text-white pt-3'>
                    Lorem ipsum dolor sit amet consectetur. 
                    Adipiscing nibh pulvinar facilisis
                     dignissim ac proin. Proin arcu quis 
                     vitae condimentum massa. Mauris 
                     integer Lorem ipsum dolor sit amet 
                     consectetur. Adipiscing nibh pulvinar 
                     facilisis 
                </p>
            </div>

            <div className='row pb-5'>
                <div className='col-sm-6 col-md-6 col-lg-3 mb-5 d-flex justify-content-center mt-5'>
                    <div className='card bg-transparent rounded border rounded-4 text-center rounded px-4 py-2'>
                        <Image
                        src={system}
                        alt='system'
                        height={100}
                        width={100}
                        />
                        <p className='text-white pt-3 fw-bold'>Software</p>
                    </div>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-3 mb-5 d-flex justify-content-center mt-5'>
                    <div className='card bg-transparent border rounded-4 text-center shadow-sm rounded px-4 py-2'>
                        <Image
                        src={web}
                        alt='system'
                        height={100}
                        width={100}
                        />
                        <p className='text-white pt-3 fw-bold'>Product</p>
                    </div>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-3 mb-5 d-flex justify-content-center mt-5'>
                    <div className='card bg-transparent border rounded-4 text-center shadow-sm rounded px-4 py-2'>
                        <Image
                        src={code}
                        alt='system'
                        height={100}
                        width={100}
                        />
                        <p className='text-white pt-3 fw-bold'>Programming</p>
                    </div>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-3 mb-5 d-flex justify-content-center mt-5'>
                    <div className='card bg-transparent border rounded-4 text-center shadow-sm rounded px-4 py-2'>
                        <Image
                        src={hand}
                        alt='system'
                        height={100}
                        width={100}
                        />
                        <p className='text-white pt-3 fw-bold'>Data</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Learn