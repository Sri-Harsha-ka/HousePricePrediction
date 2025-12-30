import React from 'react'

import Tilt from 'react-parallax-tilt'

const Button = ({text}) => {
    return (
        <div>
            <Tilt className='customButton mt-20 w-60 overflow-hidden cursor-pointer'
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.1}
                glareEnable={true}
                glareColor='#fffff'
                glareMaxOpacity={0.7}
            >
                <button className='w-full text-2xl cursor-pointer '>
                    {text}
                </button>
            </Tilt>
        </div>
    )
}

export default Button
