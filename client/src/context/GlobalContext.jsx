import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios"


const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

    const baseURL = import.meta.env.VITE_ML_API

    const [formData, setFormData] = useState({
        bedrooms: 1,
        bathrooms: 1,
        sqft_living: 0,
        sqft_lot: 0,
        floors: 1,
        waterfront: 0,
        view: 0,
        condition: 0,
        grade: 7,
        sqft_above: 0,
        sqft_basement: 0,
        yr_built: 2020,
        lat: 47.55,
        longitude: -122.25,
        sqft_living15: 0,
        is_renovated: 0,
        year_since_renovation: 0,
        zipcode_encoded: 92.5
    });

    const updateField = (key, value) => {
        setFormData(prev => ({
            ...prev, [key]: value
        }));
        
    }


    const predictNow = async (data) => {
        try {
                        
            const res = await axios.post(`${baseURL}/predict`, data)
            console.log(res.data);
            return res.data
        } catch (err) {
            console.error(err)
            throw err
        }
    }



    return (
        <GlobalContext.Provider value={{
            formData,
            updateField,
            setFormData,
            predictNow
        }}>
            {children}
        </GlobalContext.Provider>
    )
}


export const useGlobal = () => useContext(GlobalContext);




