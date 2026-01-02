from fastapi import FastAPI
import pandas as pd
from pydantic import BaseModel
import joblib as jb
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    
)

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
    longitude : float
    sqft_living15 : float
    is_renovated : int
    year_since_renovation : float 
    zipcode_encoded : float
    
model = jb.load('./dumps/LR_Model.pkl')
scale = jb.load('./dumps/Scalar.pkl')
expCols = jb.load('./dumps/Columns.pkl')


@app.post('/predict')
def prediction(inputBody: inputData):
    
    inputVal = inputBody.model_dump()
    
    print("RAW INPUT BODY:")    
    for k, v in inputVal.items():
        print(k, v, type(v))
    
    inputDf = pd.DataFrame([inputVal])
    inputDf = inputDf.rename(columns={"longitude": "long"})
    for col in expCols:
        if col not in inputDf.columns:
            inputDf[col] = 0
    for k, v in inputVal.items():
        print(k, v, type(v))
    
    inputDf = inputDf[expCols]
    inputScaled = scale.transform(inputDf)
    pred = model.predict(inputScaled)
    
    print(pred)
    
    return {
        "prediction" : pred[0]
    }




