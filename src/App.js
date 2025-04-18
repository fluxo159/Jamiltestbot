import './App.css'
import { useEffect } from 'react'
import { useTelegram } from './hooks/useTelegram'
import Header from './components/Header/Header'
import { Route, Routes} from 'react-router-dom'
import ProductList from './components/ProductList/ProductList'
import Form from './components/Form/Form'
import Basket from './components/Basket/Basket'

function App() {
	const { onToggleButton, tg } = useTelegram()

	useEffect(() => {
		tg.ready()
	}, [])

	return (
		<div className='App'>
			<Routes>
				<Route index element={<ProductList />} />
				<Route path={'form'} element={<Form />} />
				{/* <Route path={'basket'} element={<Basket />} /> */}
			</Routes>
			<Header />
		</div>
	)
}

export default App
// git config core.autocrlf true