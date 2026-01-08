import React, { useState } from 'react'
import Dropdown from '../layouts/Dropdown'
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider"
import Button from '../components/Button';
import { useGlobal } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';

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

    const { formData, updateField, predictNow, setLoadingState ,loadingState } = useGlobal()

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(loadingState);
        
        setLoadingState(true);
        const result = await predictNow(formData);
        navigate('/output' , {
            state : result
        })
    };



    return (
        <div>
            <div className='flex flex-col items-center gap-20 pt-28 min-h-screen customFontSmall'>
                <div className='text-3xl text-center md:text-4xl lg:text-6xl'>
                    Fill the Details for Prediction
                </div>

                <form className='' onSubmit={handleSubmit}>
                    <div className='text-lg md:text-xl lg:text-xl xl:text-2xl flex justify-center flex-col gap-6 md:gap-10 xl:gap-14 pb-10 w-[20vw] sm:w-[20vw] lg:w-[40vw] md:w-[30vw] xl:w-[70vw] 2xl:w-[70vw]'>

                        <div className='Bedrooms sliderCustom'>
                            <span className='formText'> Bedrooms :</span>
                            <Box sx={{ width: 200 }}>
                                <Slider
                                    defaultValue={1}
                                    value={formData.bedrooms}
                                    step={1}
                                    min={0}
                                    max={7}
                                    valueLabelDisplay='auto'
                                    onChange={(e, val) => updateField("bedrooms", val)}
                                    aria-label='bedrooms'
                                />
                            </Box>
                        </div>
                        <div className='Bathrooms sliderCustom'>
                            <span className='formText'>Bathrooms :</span>
                            
                            <Box sx={{ width: 200 }}>
                                <Slider
                                    defaultValue={1}
                                    value={formData.bathrooms}
                                    step={1}
                                    min={0}
                                    max={6}
                                    valueLabelDisplay='auto'
                                    onChange={(e, val) => updateField("bathrooms", val)}
                                    aria-label='bathrooms'
                                />
                            </Box>
                        </div>

                        <div className='Sqrt_living inputContainer'>
                            <span className='formText'>Living Area (sq ft) :</span>
                            <input className='focus:outline-none inputCustom' type="text" pattern='[0-9]*' value={formData.sqft_living} required inputMode='numeric' onChange={(e) => { updateField("sqft_living", Number(e.target.value)) }} />
                        </div>

                        <div className='Sqrt_lots inputContainer'>
                            <span className='formText'>Lot Size (sq ft) :</span>
                            <input className='focus:outline-none inputCustom' type="text" pattern='[0-9]*' value={formData.sqft_lot} required inputMode='numeric' onChange={(e) => { updateField("sqft_lot", Number(e.target.value)) }} />
                        </div>

                        <div className='Flors sliderCustom'>
                            <span className='formText'>Number of Floors :</span>
                            <Box sx={{ width: 200 }}>
                                <Slider
                                    defaultValue={1}
                                    value={formData.floors}
                                    step={1}
                                    min={1}
                                    max={4}
                                    valueLabelDisplay='auto'
                                    onChange={(e, val) => { updateField("floors", val) }}
                                    aria-label='bathrooms'
                                />
                            </Box>
                        </div>

                        <div className='waterfront inputContainer'>
                            <span className='formText'>Waterfront Property (Yes / No):</span>
                            <Dropdown optionsValues={[1, 0]} field={"waterfront"} value={formData.waterfront} />
                        </div>

                        <div className='ViewQuality sliderCustom'>
                            <span className='formText'>View Quality (0–4):</span>
                            <Box sx={{ width: 200 }}>
                                <Slider
                                    defaultValue={0}
                                    value={formData.view}
                                    step={1}
                                    min={0}
                                    max={4}
                                    valueLabelDisplay='auto'
                                    onChange={(e, val) => updateField("view", val)}
                                    aria-label='bathrooms'
                                />
                            </Box>
                        </div>

                        <div className='PropertyCondition sliderCustom'>
                            <span className='formText'>Property Condition (1–5) :</span>
                            <Box sx={{ width: 200 }}>
                                <Slider
                                    defaultValue={0}
                                    value={formData.condition}
                                    step={1}
                                    min={0}
                                    max={5}
                                    valueLabelDisplay='auto'
                                    onChange={(e, val) => updateField("condition", val)}
                                    aria-label='bathrooms'
                                />
                            </Box>
                        </div>

                        <div className=' ConstructionGrade sliderCustom'>
                            <span className='formText'>Construction Grade (1–13):</span>
                            <Box sx={{ width: 200 }}>
                                <Slider
                                    defaultValue={7}
                                    value={formData.grade}
                                    step={1}
                                    min={1}
                                    max={13}
                                    valueLabelDisplay='auto'
                                    onChange={(e, val) => updateField("grade", val)}
                                    aria-label='bathrooms'
                                />
                            </Box>
                        </div>

                        <div className=' AboveGroundArea inputContainer'>
                            <span className='formText'>Above-Ground Area (sq ft):</span>
                            <input className='focus:outline-none inputCustom' type="text" pattern='[0-9]*' value={formData.sqft_above} required inputMode='numeric' onChange={(e) => updateField("sqft_above", Number(e.target.value))} />
                        </div>

                        <div className=' AboveGroundArea inputContainer'>
                            <span className='formText'>Basement Area (sq ft):</span>
                            <input className='focus:outline-none inputCustom' type="text" pattern='[0-9]*' value={formData.sqft_basement} required inputMode='numeric' onChange={(e) => updateField("sqft_basement", Number(e.target.value))} />
                        </div>

                        <div className=' YearBuilt sliderCustom'>
                            <span className='formText'>Year Built:</span>
                            <Box sx={{ width: 200 }}>
                                <Slider
                                    defaultValue={2020}
                                    value={formData.yr_built}
                                    step={1}
                                    min={1950}
                                    max={2026}
                                    valueLabelDisplay='auto'
                                    onChange={(e, val) => updateField("yr_built", val)}
                                    aria-label='bathrooms'
                                />
                            </Box>
                        </div>

                        <div className=' AboveGroundArea inputContainer'>
                            <span className='formText'>Avg Living Area (Nearby Homes):</span>
                            <input className='focus:outline-none inputCustom' type="text" pattern='[0-9]*' value={formData.sqft_living15} required inputMode='numeric' onChange={(e) => updateField("sqft_living15", Number(e.target.value))} />
                        </div>

                        <div className='renovated inputContainer'>
                            <span className='formText'>Renovated? (Yes / No):</span>
                            <Dropdown optionsValues={[1, 0]} field={"is_renovated"} value={formData.is_renovated} />
                        </div>

                        <div className='flex gap-10 justify-center flex-col md:flex-col lg:flex-row xl:flex-col 2xl:flex-col'>
                            <div className=' Lat inputContainer'>
                                <span className='formText'> Latitude :</span>
                                <input className='focus:outline-none inputCustom' type="number"  value={formData.lat} required inputMode='numeric' onChange={(e) => updateField("lat", Number(e.target.value))} />
                            </div>
                            <div className=' Longitude inputContainer'>
                                <span className='formText'>Longitude :</span>
                                <input className='focus:outline-none inputCustom' type="number" value={formData.longitude} required inputMode='numeric' onChange={(e) => updateField("longitude", Number(e.target.value))} />
                            </div>
                        </div>

                        <div className=' Longitude inputContainer'>
                            <span className='formText'>Zipcode :</span>
                            <input className='focus:outline-none inputCustom' type="number" value={formData.zipcode_encoded} required inputMode='numeric' onChange={(e) => updateField("zipcode_encoded", Number(e.target.value))} />
                        </div>





                        <button className='flex justify-center items-center' type='submit'>
                            <Button text="Submit" loadingState={loadingState} />
                        </button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
