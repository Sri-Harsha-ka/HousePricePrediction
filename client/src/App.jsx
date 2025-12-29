import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Form from './pages/Form'
import Output from './pages/Output'
import Navbar from './layouts/Navbar'

const App = () => {
	return (
		<div className='min-h-screen bg-zinc-900 text-white'>
			<Navbar/>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/form' element={<Form/>}/>
				<Route path='/output' element={<Output/>}/>
			</Routes>
		</div>
	)
}

export default App
