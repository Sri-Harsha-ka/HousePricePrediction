import Button from '../components/Button'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Tilt from 'react-parallax-tilt'

const Output = () => {

    const loc = useLocation()

    let { prediction } = loc.state
    prediction = Math.floor(prediction)

    return (
        <div className='grid place-items-center h-screen'>
            <div className='flex flex-col items-center'>

                <div className='text-center flex gap-10 items-center justify-center flex-col sm:flex-row'>
                    <div className='text-xl md:text-2xl lg:text-3xl '>
                        The Predicted Price is :
                    </div>
                    <div className='customFontSmall'>
                        ${prediction<0?"Invalid Data Please Try again":prediction}K
                    </div>
                </div>

                <Link to='/form'><div>
                    <Tilt className='customButton mt-20 w-60 overflow-hidden cursor-pointer'
                        tiltMaxAngleX={15}
                        tiltMaxAngleY={15}
                        scale={1.1}
                        glareEnable={true}
                        glareColor='#fffff'
                        glareMaxOpacity={0.7}
                    >
                        <div className='w-full text-2xl cursor-pointer text-center'>
                            Predict again
                        </div>
                    </Tilt>
                </div></Link>
            </div>
        </div>
    )
}

export default Output
