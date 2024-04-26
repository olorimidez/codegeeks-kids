import Image from 'next/image'
import React from 'react'
import bg_1 from '../../../public/assets/aboutpage-section1-bg.jpeg'
import styles from '../about/About.module.css'
import Link from 'next/link'
import kid from  '../../../public/assets/aboutpage-section1-img.png'
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import toys from '../../../public/assets/aboutpage-section2-img1.png'
import SummerKids from '@/components/SummerKids'
import bg_2 from '../../../public/assets/bg-1.png'
import toy_2 from '../../../public/assets/aboutpage-section2-img2.png'

const About = () => {
  return (
    <>
       <div className="container-fluid">
            <Image 
                src={bg_1}
                alt='bg image'
                fill={true}  
                className={styles.img_abt}
            />
        <div className='container-fluid'>
         <div className="container mt-5">
     
           <div className="row gap-5">
            <div className="col-sm-12 col-md-6 col-lg-7 text-white">
                            <h2 className='fw-bold pb-4'>
                                Welcome To Code <br /> Geeks 9ja Kids
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, 
                                consectetur adipisicing elit. 
                                Fuga ipsam eaque deleniti quo molestias, 
                                ducimus nulla! Rerum ad, 
                                repellat inventore a iste eligendi aspernatur, 
                                enim delectus,
                                dolore repudiandae earum eaque!
                            </p>
                            <div className='pt-4 d-flex gap-5'>
                                <button className='border-2 border-white rounded-4 bg-transparent py-1 px-3'>
                                    <Link className='text-white fw-bold' href="/register">
                                        Register Now
                                    </Link>
                                </button>

                                <Link className='pt-1 text-white fw-bold' href="/about">About Us</Link>
                            </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <Image
                                src={kid}
                                alt='baby and computer'
                                height={380}
                                width={350}
                />
            </div>
             
           </div>
         </div>
       </div>
       </div>
      
        <div className={`container-fluid position-relative ${styles.purple}`}>
            <div className='container'>
                    <p className={`text-white d-flex justify-content-end fw-bold ${styles.fs}`}>Find  us on social media @codegeek9ja</p>
                    <div className="container d-flex justify-content-end gap-3 text-center pb-3">
                            <div className={styles.socialIcons}>
                            <Link href="/">
                            <BsInstagram size={20} color="white"/>
                            </Link>
                            </div>
                            <div className={styles.socialIcons}>
                            <Link href="/">
                            <BsTwitter size={20} color="white"/>
                            </Link>
                            </div>
                            <div className={styles.socialIcons}>
                            <Link href="/">
                            <BsLinkedin size={20} color="white"/>
                            </Link>
                            </div>
                        
                            
                    </div>
                    <div className={`position-absolute bottom-50 translate-middle-x ${styles.toys}`}>
                            <Image
                                src={toys}
                                alt='toy'
                                height={100}
                                width={100}
                            />
                    </div>
            </div>
        </div>
       <div className={`container-fluid ${styles.main}`}>
              <Image
               src={bg_2}
               fill={true}
               alt="Summer Kids"
                className={styles.bg_3}
               />
               <div className='container position-absolute top-n10 start-50 translate-middle text-center'>
                    <Image
                    src={toy_2}
                    alt='baby toy'
                    height={120}
                    width={150}/>
                </div>
                <SummerKids/>
                
       </div>
      
    </>
  )
}

export default About