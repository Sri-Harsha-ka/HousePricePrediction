import React from 'react'

import Tilt from 'react-parallax-tilt'

const Button = ({text}) => {
    return (
        <div>
            <Tilt className='customButton mt-10 md:mt-14 w-44 md:w-52 lg:56 xl:50 text-nowrap  overflow-hidden cursor-pointer'
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.1}
                glareEnable={true}
                glareColor='#fffff'
                glareMaxOpacity={0.7}
            >
                <div className='w-full text-xl  cursor-pointer '>
                    {text}
                </div>
            </Tilt>
        </div>
    )
}

export default Button
