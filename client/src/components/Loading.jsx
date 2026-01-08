import React from 'react'
import { motion } from "framer-motion"

const Loading = () => {
    return (
        <div className=''>

            <motion.div initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 1, ease: 'linear', repeat: Infinity }} className='bg-white w-10 h-10 rounded-full relative flex justify-center items-center overflow-hidden'>
                <div className='bg-[#1E201E] w-8 h-8 rounded-full absolute z-10'>
                </div>
                <div className='bg-blue-500 w-5 h-2 bottom-0 absolute'></div>
            </motion.div>

        </div>
    )
}

export default Loading
