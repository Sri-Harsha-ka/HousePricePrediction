from fastapi import FastAPI
import pandas as pd
import numpy as np
from pydantic import BaseModel
import joblib as jb

app = FastAPI()

@app.get('/')
def root():
    return {"message": "Hey!"}

class inputData(BaseModel):
    bedrooms : float
    bathrooms : float
    sqft_living : float
    sqft_lot : float
    floors : float
    waterfront : float
    view : float
    condition : float
    grade : float
    sqft_above : float
    sqft_basement : float
    yr_built : float
    lat : float
    long : float
    sqft_living15 : float
    is_renovated : int
    year_since_renovation : float 
    zipcode_encoded : float
    
model = jb.load('./dumps/LR_Model.pkl')
scale = jb.load('./dumps/Scalar.pkl')
expCols = jb.load('./dumps/Columns.pkl')


@app.post('/predict')
def prediction(inputBody: inputData):
    
    inputVal = inputBody.dict()
    inputDf = pd.DataFrame([inputVal])
    for col in expCols:
        if col not in inputDf.columns:
            inputDf[col] = 0
    inputDf = inputDf[expCols]
    inputScaled = scale.transform(inputDf)
    pred = model.predict(inputScaled)
    
    return {
        "prediction" : pred[0]
    }




