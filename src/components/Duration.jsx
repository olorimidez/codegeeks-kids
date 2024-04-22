import React from 'react'
import styles from '../app/summer.module.css'
import Pricing from './Pricing'
import toy from '../../public/assets/aboutpage-section3-img.png'
import Image from 'next/image'

const Duration = () => {
  return (
    <>
        <div className="container">
            <div className={`container border-0 rounded-5 p-5 ${styles.bg_4}`}>
              <div className='position-absolute top-10 start-00 translate-middle'>
                <Image
                src={toy}
                alt='toy'
                width={120}
                height={150}
                />
              </div>
              <div className='d-flex justify-content-center pt-5'>
                 <p className={styles.kids}>Our Roadmap For Kids</p>
              </div>
             <div className="row gx-1 gap-5">
             <Pricing/>
             <Pricing/>
             <Pricing/>
             </div>
            </div>
           
        </div>
    </>
  )
}

export default Duration