import React from 'react'
import Image from 'next/image'
import background from "../../public/assets/homepage-section1-bg.png";
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import Kids from './Kids';
import Learn from './Learn';
import Roadmap from './Roadmap';
// import styles from "../app/hero.module.css"
const Herosection = () => {
  return (
<>
  <div>  
    <Image
    src={background}
    alt="Background image"
    fill={true}
    className="bg-img"
    /> 

    <div className='d-flex justify-content-center '>
      <div className='bg'>
        <p className='text-center fs-8 fw-bold py-8'>Welcome to Code Geeks 9ja Kids!</p>
        <p className='text-center fw-bold pt-6 pb-8'>Where Your Kids Are Prepared For The Digital Age</p>
        <p className='text-center fs-8 fw-bold '>The future is digital, and if your kids don’t have digital skills, like coding for kids, robotics, basic ICT, website design for kids etc, they will be left behind!—- We know you don’t want that. Enroll
          them today any of our ICT training
          in Abuja Nigeria.
        </p>
        </div>
    </div>

    <div className='text-center mb-3'>
        <Button className="btn_started">
          <Link href={"/"}>
          Get Started
          </Link>
        </Button>
    </div>
  </div>
  <Kids />
  <Learn/>
  <Roadmap/>
</>
  )
}

export default Herosection