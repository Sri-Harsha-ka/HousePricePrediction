# 🏠 House Price Prediction – End-to-End Web + ML Project

An end-to-end **Machine Learning + Web Development** project where a trained ML model is exposed via a backend API and consumed by a modern frontend application.

This project was built to **understand how Machine Learning models integrate with real-world web applications**, covering everything from data preprocessing to deployment 🚀.

---

## 👨‍💻 Author

**K Sri Harsha**

---

## 🎯 Project Purpose

The main goal of this project is to:

- Understand how **Machine Learning and Web Development work together**
- Build a **complete end-to-end ML application**
- Explore how a trained ML model can be served via an API and used by a frontend
- Gain hands-on experience with **model deployment and frontend-backend communication**

This project marks my **first full ML project** and my **first complete Web + ML application**.

---

## 📊 Dataset

- **Source:** Kaggle  
- **Dataset:** House Price Dataset  
- **Link:** https://www.kaggle.com/datasets/mohamedbakrey/housecsv

The dataset contains various features related to houses such as size, location, condition, and other attributes used to predict house prices.

---

## 🤖 Machine Learning Model

I experimented with multiple models, including:

- Linear Regression
- Ridge Regression
- Random Forest Regressor

✅ **Final Model Used:** **Linear Regression**  
It performed best among all tested models for this dataset.

---

## 📈 Model Evaluation

- **Metric Used:** R² Score
- The model was evaluated using a train-test split
- Feature preprocessing and column alignment were carefully handled before inference

---

## 🌐 Web Application Features

### Frontend (React)

- Fully **responsive UI**
- Built using **React + Vite**
- Styled with **Tailwind CSS**
- Interactive **sliders (Material UI)** for numerical inputs
- Dropdowns for categorical values
- Smooth navigation using **React Router**
- Clean and user-friendly UX

### Backend (FastAPI)

- REST API built using **FastAPI**
- Request validation using **Pydantic**
- ML model loaded from `.pkl` files using `joblib`
- Incoming data is:
  - Validated
  - Converted to a DataFrame
  - Rearranged to match trained model columns
  - Missing values handled safely

---

## 🔁 Application Workflow

1. User lands on the home page
2. Navigates to the prediction form
3. Enters house details using sliders and inputs
4. Frontend sends data to the FastAPI backend
5. Backend validates and preprocesses the data
6. ML model predicts the house price
7. Prediction is returned and displayed to the user

---

## ⚠️ Challenges Faced & Learnings

This project came with **many learning moments**, including:

- Building a **fully responsive web app for the first time**
- Choosing **FastAPI** over Flask/Django to avoid overkill and align better with my stack
- Understanding how **data types and preprocessing decisions affect predictions**
- Debugging frontend–backend mismatches even when values looked identical
- Realizing the importance of:
  - Pipelines
  - Clean preprocessing functions
  - Column consistency
- Facing deployment issues and fixing environment/config mistakes
- Learning how **small EDA mistakes can cause major downstream issues**

Although the project had imperfections, it significantly improved my understanding of **real-world ML systems**.  
If I were to rebuild it today, I could design it **much better and cleaner** — and that itself is a big win 💡.

---

## 🛠️ Tech Stack

### Client (Frontend)
- React
- Vite
- Tailwind CSS
- Material UI (MUI)
- React Router

### Server (Backend)
- FastAPI
- Uvicorn
- Pydantic

### Machine Learning
- Python
- Pandas
- scikit-learn
- Seaborn
- Joblib

### Deployment
- **Frontend:** Netlify
- **Backend:** Render

---

## 🌍 Live Deployment

- 🔗 **Frontend:** https://housepriceprediction27.netlify.app/
- 🔗 **Backend:** https://housepriceprediction-1-urg4.onrender.com

---

## 📌 Repository Structure (High Level)

