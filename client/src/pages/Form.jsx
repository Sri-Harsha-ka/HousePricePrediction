import React, { useState } from 'react'
import Dropdown from '../layouts/Dropdown'
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider"
import Button from '../components/Button';

const Form = () => {

    // bedrooms : float Done
    // bathrooms : float Done
    // sqft_living : float Done 
    // sqft_lot : float Done
    // floors : float Done 
    // waterfront : float Done
    // view : float Done
    // condition : float  Done
    // grade : float Done
    // sqft_above : float Done
    // sqft_basement : float Done
    // yr_built : float Done
    // lat : float---------------
    // long : float---------
    // sqft_living15 : float Done
    // is_renovated : int Done
    // year_since_renovation : float ---------
    // zipcode_encoded : float ----------

    const [bedrooms, setBedrooms] = useState("Select")
    const [openBedroom, setOpenBedroom] = useState(false)


    const checkFun = (value) => {
        console.log(value);
    }


    return (
        <div>
            <div className='flex flex-col items-center gap-20 pt-28 min-h-screen customFontSmall'>
                <div>
                    Fill the Details for Prediction
                </div>

                <form className='' action="">
                    <div className='text-2xl flex justify-center flex-col gap-10 pb-10'>

                        <div className='Bedrooms flex gap-10 justify-center items-center'>
                            Bedrooms :
                            <Box sx={{ width: 200 }}>
                                <Slider
                                    defaultValue={1}
                                    step={1}
                                    min={0}
                                    max={7}
                                    valueLabelDisplay='auto'
                                    getAriaValueText={checkFun}
                                    aria-label='bedrooms'
                                />
                            </Box>
                        </div>
                        <div className='Bathrooms flex gap-10 justify-center items-center'>
                            Bathrooms :
                            <Box sx={{ width: 200 }}>
                                <Slider
                                    defaultValue={1}
                                    step={1}
                                    min={0}
                                    max={6}
                                    valueLabelDisplay='auto'
                                    getAriaValueText={checkFun}
                                    aria-label='bathrooms'
                                />
                            </Box>
                        </div>

                        <div className='Sqrt_living flex gap-10 justify-center items-center'>
                            Living Area (sq ft) :
                            <input className='focus:outline-none bg-zinc-800 px-3 py-2 text-lg text-center w-60' type="text" pattern='[0-9]*' inputMode='numeric' />
                        </div>

                        <div className='Sqrt_lots flex gap-10 justify-center items-center'>
                            Lot Size (sq ft) :
                            <input className='focus:outline-none bg-zinc-800 px-3 py-2 text-lg text-center w-60' type="text" pattern='[0-9]*' inputMode='numeric' />
                        </div>

                        <div className='Flors flex gap-10 justify-center items-center'>
                            Number of Floors :
                            <Box sx={{ width: 200 }}>
                                <Slider
                                    defaultValue={1}
                                    step={1}
                                    min={1}
                                    max={4}
                                    valueLabelDisplay='auto'
                                    getAriaValueText={checkFun}
                                    aria-label='bathrooms'
                                />
                            </Box>
                        </div>

                        <div className='Flors flex gap-10 justify-center items-center'>
                            Waterfront Property (Yes / No):
                            <Dropdown optionsValues={[1, 0]} />
                        </div>

                        <div className='ViewQuality flex gap-10 justify-center items-center'>
                            View Quality (0–4):
                            <Box sx={{ width: 200 }}>
                                <Slider
                                    defaultValue={0}
                                    step={1}
                                    min={0}
                                    max={4}
                                    valueLabelDisplay='auto'
                                    getAriaValueText={checkFun}
                                    aria-label='bathrooms'
                                />
                            </Box>
                        </div>

                        <div className='PropertyCondition flex gap-10 justify-center items-center'>
                            Property Condition (1–5) :
                            <Box sx={{ width: 200 }}>
                                <Slider
                                    defaultValue={0}
                                    step={1}
                                    min={0}
                                    max={4}
                                    valueLabelDisplay='auto'
                                    getAriaValueText={checkFun}
                                    aria-label='bathrooms'
                                />
                            </Box>
                        </div>

                        <div className=' ConstructionGrade flex gap-10 justify-center items-center'>
                            Construction Grade (1–13):
                            <Box sx={{ width: 200 }}>
                                <Slider
                                    defaultValue={7}
                                    step={1}
                                    min={1}
                                    max={13}
                                    valueLabelDisplay='auto'
                                    getAriaValueText={checkFun}
                                    aria-label='bathrooms'
                                />
                            </Box>
                        </div>

                        <div className=' AboveGroundArea flex gap-10 justify-center items-center'>
                            Above-Ground Area (sq ft):
                            <input className='focus:outline-none bg-zinc-800 px-3 py-2 text-lg text-center w-60' type="text" pattern='[0-9]*' inputMode='numeric' />
                        </div>

                        <div className=' AboveGroundArea flex gap-10 justify-center items-center'>
                            Basement Area (sq ft):
                            <input className='focus:outline-none bg-zinc-800 px-3 py-2 text-lg text-center w-60' type="text" pattern='[0-9]*' inputMode='numeric' />
                        </div>

                        <div className=' YearBuilt flex gap-10 justify-center items-center'>
                            Year Built:
                            <Box sx={{ width: 200 }}>
                                <Slider
                                    defaultValue={2020}
                                    step={1}
                                    min={1950}
                                    max={2026}
                                    valueLabelDisplay='auto'
                                    getAriaValueText={checkFun}
                                    aria-label='bathrooms'
                                />
                            </Box>
                        </div>

                        <div className=' AboveGroundArea flex gap-10 justify-center items-center'>
                            Avg Living Area (Nearby Homes):
                            <input className='focus:outline-none bg-zinc-800 px-3 py-2 text-lg text-center w-60' type="text" pattern='[0-9]*' inputMode='numeric' />
                        </div>

                        <div className='Flors flex gap-10 justify-center items-center'>
                            Renovated? (Yes / No):
                            <Dropdown optionsValues={[1, 0]} />
                        </div>

                        <div className='flex justify-center items-center'>
                            <Button text="Submit" />
                        </div>




                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
