import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { motion, scale } from 'motion/react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const Home = () => {

    const textOne = useRef(null)
    const textTwo = useRef(null)


    useGSAP(() => {
        const tl = gsap.timeline()
        tl.from(textOne.current.children, {
            y: 60,
            opacity: 0,
            duration: 0.2,
            stagger: 0.08
        })
        tl.from(textTwo.current.children, {
            y: 60,
            opacity: 0,
            duration: 0.2,
            stagger: -0.06
        })
    })



    return (
        <div>
            <div className='h-screen grid place-items-center'>
                <div className='text-center'>
                    <div className='text-center'>
                        <span ref={textOne} className='customFontBig'>
                            {
                                'house'.split('').map((ch, i) => {
                                    return <span key={i} className='inline-block'>{ch}</span>
                                })
                            }
                        </span>
                        <span ref={textTwo} className='customFontBig'>
                            {
                                'Price'.split('').map((ch, i) => {
                                    return <span key={i} className='inline-block'>{ch}</span>
                                })
                            }{' '}
                            {
                                'Prediction'.split('').map((ch, i) => {
                                    return <span key={i} className='inline-block'>{ch}</span>
                                })
                            }
                        </span>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Link to='/form'>
                            <Button text="Predict Now"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
