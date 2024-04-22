import React from 'react'
import Image from 'next/image'
import bg_img from '../../../public/assets/bg-2.png'
// kids-file/public/assets/registerpage-section-img.png
// kids-file/public/
import styles from '../../app/register/Page.module.css'
const Register = () => {
  return (
    <>
    <div className="container-fluid">
       <div className={styles.bg}>
       <Image
        src={bg_img}
        alt='bg'
        fill={true}
        // layout='fill'
        className={styles.bg_register}
        />
       </div>
       <div>hello</div>
    </div>
    </>
  )
}

export default Register