import React from 'react'
import styles from '../app/summer.module.css'

const Pricing = () => {
  return (
   <>
        <div className='container'>
           <div className="row justify-content-center">
            <div className="col-sm-12 col-md-12 col-lg-6 border-0 rounded-4 bg-light variant-dark p-4">
                <h6 className='text-center fw-bold py-2'>Coding Stater Course - Eatser Holiday</h6>
                <p className={`pb-3 ${styles.fs_8}`}>Here is a 1-week-long program - a starter 
                    program that introduces the kids into the
                    world of computing and software 
                    development - all in a fun way.
                </p>

                <div>
                <table className={styles.transparent_bg}>
                <thead>
                    <tr>
                    <th className={styles.table_right} scope='row'>Date:</th>
                    <th className={styles.table_right} scope='row'>Duration:</th>
                    <th className={styles.table_right} scope='row'>Class days:</th>
                    <th scope='row'>Price:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className={styles.table_right}>2nd week of April, 2024</td>
                    <td className={styles.table_right}>1 Week Max</td>
                    <td className={styles.table_right}>3 times of the week</td>
                    <td>$20</td>
                    </tr>
                </tbody>
                
                </table>
                </div>
            </div>
           </div>
            
            
        </div>
     
   </>
  )
}

export default Pricing