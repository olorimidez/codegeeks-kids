import React from 'react'
import Image from 'next/image'
import bg from '../../../public/assets/bg-2.png'
import girl from '../../../public/assets/contactpage-section1-img.png'
import styles from '../contact/Page.module.css'
import { BsEnvelope } from 'react-icons/bs'
import Link from 'next/link'


const page = () => {
  return (
   <>
      <div className="container-fluid">
        <Image
        src={bg}
        alt="bg"
        fill={true}
        className={styles.bg}
        />
      </div>

   
      <div className="container-fluid text-white position-relative">
         <Image
                src={girl}
                alt="overlay"
                fill={true}
                className={styles.girl}
                style={{filter: "blur(10px)"}}
              />
               
            <div className="container">
           
              <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <Image
                  src={girl}
                  height={200}
                  width={200}
                  objectFit='cover'
                  alt='girl'/>
                </div>
                <div className={`col-sm-12 col-md-12 col-lg-6 ${styles.left}`}>
             
                  <div className=' fw-bold'>
                  <div className='bg-light text-dark text-center p-2'>
                    <h5 className={styles.fs_7}>Lets Have Some Discussions</h5>
                  </div>
                      <div>
                          <div className='text-center '>
                            <p>You have our listening ears</p>
                          </div>
                          <p className={styles.spacing}>
                              For more information about our programs, 
                              suggestions on how we can do better, 
                              marketing, promotion, or partnership
                              proposals, and any other related opinions, 
                              you can always reach out to us via these 
                              channels. We will get in touch right away.
                          </p>
                      </div>
                      <div className={styles.icon_spacing}>
                      <div className='d-flex gap-4'>
                        <BsEnvelope className='mt-3'/>
                        <div>
                          <p >Suggestion</p>
                          <Link className='text-light' href="kids@codegeeks9ja.com">kids@codegeeks9ja.com</Link>
                        </div>
                      </div>
                     
                      </div>
                  </div>
             

                </div>
              </div>
                
                </div>
            </div>
           
      </div>
     
   </>
  )
}

export default page