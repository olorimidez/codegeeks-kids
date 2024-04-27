import React from 'react'
import Image from 'next/image'
import bg from '../../../public/assets/bg-2.png'
import girl from '../../../public/assets/contactpage-section1-img.png'
import styles from '../contact/Page.module.css'
import { BsEnvelope, BsTelephone } from 'react-icons/bs'
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

  
           
              <div className={`container-fluid ${styles.bg_color}`}>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <Image
                  src={girl}
                  height={400}
                  width={650}
                  objectFit='cover'
                  alt='girl'/>
                </div>
                <div className={`col-sm-12 col-md-12 col-lg-6 ${styles.left}`}>
             
                  <div className=' fw-bold'>
                  <div className='bg-light text-dark text-center p-2'>
                    <h5 className={styles.fs_7}>Lets Have Some Discussions</h5>
                  </div>
                      <div className='text-white'>
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
                      <div className='d-flex gap-4 text-white'>
                        <BsEnvelope className='mt-3'/>
                        <div>
                          <p >Suggestion
                            <br />
                            <Link className='text-light' href="kids@codegeeks9ja.com">kids@codegeeks9ja.com</Link>
                          </p>
                         
                        </div>
                      </div>
                      <div className='d-flex gap-4 text-white'>
                        <BsEnvelope className='mt-3'/>
                        <div>
                          <p >Email Address
                            <br />
                            <Link className='text-light' href="info@codegeeks9ja.com">kids@codegeeks9ja.com</Link>
                          </p>
                         
                        </div>
                      </div>
                      <div className='d-flex gap-4 text-white'>
                        <BsTelephone className='mt-3'/>
                        <div>
                          <p >Phone
                            <br />
                            +234 904 683 2081
                          </p>
                         
                        </div>
                      </div>
                      <div className='d-flex gap-4 text-white'>
                        <BsTelephone className='mt-3'/>
                        <div>
                          <p >Whatsapp
                            <br />
                            +234 814 344 3420
                          </p>
                         
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