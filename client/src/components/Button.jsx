import React from 'react'

import Tilt from 'react-parallax-tilt'
import Loading from './Loading'

const Button = ({text , loadingState}) => {
    return (
        <div className=''>
            <Tilt className='customButton mt-10 md:mt-14 w-44 md:w-52 lg:56 xl:50 text-nowrap  overflow-hidden cursor-pointer'
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.1}
                glareEnable={true}
                glareColor='#fffff'
                glareMaxOpacity={0.7}
            >
                <div className='w-full text-xl text-center  cursor-pointer  flex justify-center items-center  gap-5'>
                    <div>
                        {text}
                    </div>
                    {
                        loadingState && <Loading />
                    }
                </div>
            </Tilt>
        </div>
    )
}

export default Button
