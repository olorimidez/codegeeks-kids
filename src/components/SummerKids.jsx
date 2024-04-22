import React from 'react'
import Image from 'next/image'
import kid from  '../../public/assets/aboutpage-section1-img.png'
import styles from '../app/summer.module.css'
import Duration from './Duration'

const SummerKids = () => {
  return (
    <>
      <section id="section_2">
        <div className="container text-white">
          <div className="row gap-5 py-5">
            <div className="col-sm-12 col-md-6 col-lg-7">
            <h5>About Us</h5>

            <p className={`pt-3 ${styles.fs_8}`}>
            Code Geeks 9ja Kids is a subsidiary of Code
            Geeks 9ja virtual IT academy that strives 
            to prepare your kids future with top-notch 
            tech skills that stay relevant forever. 
            <br /> <br />

            The evolution of technology in every aspect
            of human life has made coding become a basic 
            literacy in the digital age. With our resources
            directed towards sitting the future programmers
            (kids) at the center of the next generation of 
            innovation, Code Geeks 9ja Kids help them 
            understand and equip them with the skils to 
            work with and understand the technology that
            controls the digital age.
            <br /> <br />

            Having children learn coding at a young age 
            prepares them for the future. Beyond just 
            building apps, coding helps children with 
            communication, creativity, math, writing, 
            and incredible self confidence.

            Our Summer 
            and Holiday Coding Classes for kids take your 
            child from the beginners to advanced levels of 
            coding and computer programming. It is the 
            right time to enroll your children and get them 
            ready for the digital age and in-demand digital 
            skills that are not going to fade away anytime 
            forever.
            </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 pt-5">
            <Image
                                src={kid}
                                alt='baby and computer'
                                height={300}
                                width={320}
                />
            </div>
          </div>
        </div>
      <Duration/>
      </section>
    </>
  )
}

export default SummerKids