import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react';
import { useGlobal } from '../context/GlobalContext';

const Dropdown = ({ optionsValues ,field , value}) => {

    const {updateField} = useGlobal()

    const onClickDrophead = () => {
        setShow(!show);
    }

    const onClickOption = (item) => {
        updateField(field , item);
        
        setShow(!show);
    }

    const [show, setShow] = useState(false)


    return (
        <div className=' relative'>
            <div className='flex gap-5'>
                <div className='Drophead bg-zinc-800 text-2xl px-10 py-3 select-none cursor-pointer text-center w-[11.88vw] ' onClick={onClickDrophead}>
                    {value}
                </div>
            </div>
            <AnimatePresence>
                {
                    show &&
                    <motion.div className='absolute bg-[#1f1f23] w-[11.88vw] origin-top flex flex-col px-5 py-2 text-center gap-3 z-10 ' initial={{ scaleY: 0, opacity: 0 }} animate={{ scaleY: 1, opacity: 1 }} exit={{ scaleY: -0, opacity: 0 }}>
                        {
                            optionsValues.map((item) => {
                                return <div className='text-xl hover:bg-zinc-800 cursor-pointer' key={item} onClick={() => onClickOption(item)}>
                                    {item}
                                </div>
                            })
                        }
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export default Dropdown
