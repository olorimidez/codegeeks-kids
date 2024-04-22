import React from 'react'
import Image from 'next/image'
import roadmap from '../../public/assets/homepage-section5-img.png'
import Footer from '@/app/footer/page'

const Roadmap = () => {
  return (
    <div className='container-fluid'>
        <div className='container'>
            <section className='section_4'>
                <div className='text-center w-50  mx-auto my-1'>
                    <h6 className='pt-5 fw-bold'>Roadmap</h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. 
                            Adipiscing nibh pulvinar facilisis 
                            dignissim ac proin. Proin arcu quis 
                            vitae condimentum massa. Mauris integ
                        </p>
                </div>
                <div>
                    <div className='bg-road'>
                        <Image
                        src={roadmap}
                        alt='roadmap'
                        fill={true}
                        // objectFit='cover'
                        />
                        <div>
                            <div>
                                <p className='bg-danger text-white text-center custom_w_50 fs-7 text_4_1'>Easter Holiday Coding Starter Class</p>
                                <p className='border rounded-3 custom-border p-3 custom_w_50 fs-7 road_here'>Here is a 1-week-long program - a starter program that introduces the kids into the world of computing and software development - all in a fun way </p>
                            </div>

                            <div>
                                <p className='custom_bg_success text-white text-center custom_w_50 fs-7 text_4_2'>Summer Coding Classes</p>
                                <p className='border rounded-3 green_border p-3 custom_w_50 fs-7 starting_css'>Starting in July/August, the 1-month program kickstarts the kids journey into software development practical using Scratch/HTML/CSS (depending on the age-range) - all in a fun way</p>
                            </div>

                            <div className=''>
                                <p className='custom_bg_purple text-white text-center custom_w_50 fs-7 text_4_3'>Continued Coding Classes</p>
                                <p className='border rounded-3 p-3 custom_w_50 fs-7 now purple_border'>Now fully into the journey. The kids can continue to go deeper into the world of programming. This time, it becomes a normal routine. And the first event takes them to a straight 2 months of learning on weekends.</p>
                            </div>  

                            <div>
                                <p className='cont_reading'>continue reading...</p>
                            </div>
                        </div>

                    </div>
                </div>
              
            </section>
        </div>
    </div>
  )
}

export default Roadmap