import React, { useState } from 'react'
import './ProductList.css'
import {
	Mayan,
	Mayan1,
	Mayan2,
	Mayan3,
	Mayan4,
	Limoges,
	Valet,
	Lance,
	Calais,
	Mayan5,
} from '../../utils/eExport.js'
import { useNavigate } from 'react-router-dom'

const ProductList = () => {
	const [modalOpen, setModalOpen] = useState(false)
	const [orderModalOpen, setOrderModalOpen] = useState(false)
	const [currentProduct, setCurrentProduct] = useState(null)
	const navigate = useNavigate()

	const products = [
		{
			id: 1,
			name: 'Mayen',
			image: Mayan,
			description: [
				'Кухня Mayen — современный дизайн с акцентом на качество:',
				'• оптимальные габариты гарнитура идеально подходят для кухонь любых размеров;',
				'• удобное расположение шкафов и ящиков для рационального использования пространства;',
				'• вместительность: достаточно места для хранения посуды, продуктов и кухонных принадлежностей;',
				'• современный дизайн: темно-серый цвет фасадов добавляет элегантности и подчеркивает стиль интерьера',
			],
			specs: [
				{ name: 'Ширина', value: '201 см' },
				{ name: 'Высота', value: '238 см' },
				{ name: 'Глубина', value: '50 см' },
				{ name: 'Высота верхних шкафов', value: '72 см' },
				{ name: 'Высота нижних шкафов (с учетом цоколя)', value: '87 см' },
				{ name: 'Глубина верхних шкафов', value: '34 см' },
				{ name: 'Глубина нижних шкафов', value: '56 см' },
				{ name: 'Поверхность фасадов', value: 'акрил' },
				{ name: 'Материал фасада', value: 'МДФ' },
				{ name: 'Материал каркаса', value: 'ЛДСП' },
				{ name: 'Цвет фасада', value: 'серый' },
				{ name: 'Цвет каркаса', value: 'дерево' },
				{ name: 'Фурнитура:', value: 'Blue, Hettich' },
			],
		},
		{
			id: 2,
			name: 'Limoges',
			image: Limoges,
			description: [
				'Кухня Limoges — современный дизайн с акцентом на качество:',
				'• Столешница из белого камня с натуральным рисунком прожилок',
				'• Глубокие матово-черные панели бытовой техники',
				'• Контрастное сочетание текстур и цветовых акцентов',
				'• Продуманная эргономика рабочего пространства',
			],
			specs: [
				{ name: 'Ширина', value: '201 см' },
				{ name: 'Высота', value: '238 см' },
				{ name: 'Глубина', value: '50 см' },
				{ name: 'Высота верхних шкафов', value: '72 см' },
				{ name: 'Высота нижних шкафов (с учетом цоколя)', value: '87 см' },
				{ name: 'Глубина верхних шкафов', value: '34 см' },
				{ name: 'Глубина нижних шкафов', value: '56 см' },
				{ name: 'Поверхность фасадов', value: 'акрил' },
				{ name: 'Материал фасада', value: 'МДФ' },
				{ name: 'Материал каркаса', value: 'ЛДСП' },
				{ name: 'Цвет фасада', value: 'серый' },
				{ name: 'Цвет каркаса', value: 'дерево' },
				{ name: 'Фурнитура:', value: 'Blue, Hettich' },
				// ... другие характеристики
			],
		},
		{
			id: 3,
			name: 'Valet',
			image: Valet,
			description: [
				'Кухня Valet — стиль и функциональность для комфортного общения:',
				'• Деревянный остров с массивной столешницей — уютный акцент интерьера',
				'• Эргономичные барные стулья с мягкой обивкой для долгих посиделок',
				'• Просторная зона для дружеских встреч и семейных ужинов',
				'• Гармония практичности и современного дизайна',
			],
			specs: [
				{ name: 'Ширина', value: '201 см' },
				{ name: 'Высота', value: '238 см' },
				{ name: 'Глубина', value: '50 см' },
				{ name: 'Высота верхних шкафов', value: '72 см' },
				{ name: 'Высота нижних шкафов (с учетом цоколя)', value: '87 см' },
				{ name: 'Глубина верхних шкафов', value: '34 см' },
				{ name: 'Глубина нижних шкафов', value: '56 см' },
				{ name: 'Поверхность фасадов', value: 'акрил' },
				{ name: 'Материал фасада', value: 'МДФ' },
				{ name: 'Материал каркаса', value: 'ЛДСП' },
				{ name: 'Цвет фасада', value: 'серый' },
				{ name: 'Цвет каркаса', value: 'дерево' },
				{ name: 'Фурнитура:', value: 'Blue, Hettich' },
				// ... другие характеристики
			],
		},
		{
			id: 4,
			name: 'Lance',
			image: Lance,
			description: [
				'Кухня Lance — современная элегантность в деталях:',
				'• Пастельная палитра — нежные серые и глубокие синие тона создают гармоничный ансамбль',
				'• Премиальные фасады с безупречной отделкой и четкими линиями',
				'• Продуманная эргономика — красота, сочетающаяся с удобством использования',
				'• Свежий современный образ с элементами уютной атмосферы',
			],
			specs: [
				{ name: 'Ширина', value: '201 см' },
				{ name: 'Высота', value: '238 см' },
				{ name: 'Глубина', value: '50 см' },
				{ name: 'Высота верхних шкафов', value: '72 см' },
				{ name: 'Высота нижних шкафов (с учетом цоколя)', value: '87 см' },
				{ name: 'Глубина верхних шкафов', value: '34 см' },
				{ name: 'Глубина нижних шкафов', value: '56 см' },
				{ name: 'Поверхность фасадов', value: 'акрил' },
				{ name: 'Материал фасада', value: 'МДФ' },
				{ name: 'Материал каркаса', value: 'ЛДСП' },
				{ name: 'Цвет фасада', value: 'серый' },
				{ name: 'Цвет каркаса', value: 'дерево' },
				{ name: 'Фурнитура:', value: 'Blue, Hettich' },
				// ... другие характеристики
			],
		},
		{
			id: 5,
			name: 'Calais',
			image: Calais,
			description: [
				'Кухня Calais — утончённая гармония современного дизайна:',
				'• Элегантная палитра — нежно-серый и тёплый розовый в идеальном сочетании',
				'• Двухцветные фасады как стильный акцент интерьера',
				'• Воздушная атмосфера с элементами современной эстетики',
				'• Продуманные детали для создания уютного пространства',
			],
			specs: [
				{ name: 'Ширина', value: '201 см' },
				{ name: 'Высота', value: '238 см' },
				{ name: 'Глубина', value: '50 см' },
				{ name: 'Высота верхних шкафов', value: '72 см' },
				{ name: 'Высота нижних шкафов (с учетом цоколя)', value: '87 см' },
				{ name: 'Глубина верхних шкафов', value: '34 см' },
				{ name: 'Глубина нижних шкафов', value: '56 см' },
				{ name: 'Поверхность фасадов', value: 'акрил' },
				{ name: 'Материал фасада', value: 'МДФ' },
				{ name: 'Материал каркаса', value: 'ЛДСП' },
				{ name: 'Цвет фасада', value: 'серый' },
				{ name: 'Цвет каркаса', value: 'дерево' },
				{ name: 'Фурнитура:', value: 'Blue, Hettich' },
				// ... другие характеристики
			],
		},
		// ... остальные продукты
	]

	const handleDetailsClick = product => {
		setCurrentProduct(product)
		setModalOpen(true)
		document.body.style.overflow = 'hidden'
	}

	const handleOrderClick = product => {
		setCurrentProduct(product)
		setOrderModalOpen(true)
		document.body.style.overflow = 'hidden'
	}

	const closeModal = () => {
		setModalOpen(false)
		document.body.style.overflow = 'auto'
	}

	const closeOrderModal = () => {
		setOrderModalOpen(false)
		document.body.style.overflow = 'auto'
	}

	const ProductSpecs = ({ specs }) => (
		<>
			<h2>Особенности</h2>
			<br />
			{specs.map((spec, index) => (
				<div key={index} className='spec-row'>
					<span className='spec-name'>{spec.name}</span>
					<span className='spec-value'>{spec.value}</span>
				</div>
			))}
		</>
	)

	const OrderModal = () => (
		<div className='modal-overlay'>
			<div className='modal-content'>
				<button className='modal-close' onClick={closeOrderModal}>
					×
				</button>
				<h2>Оформить заказ "{currentProduct.name}"</h2>
				<div className='modal-body'>
				<p>заказать</p>
					<br />
					<div className='contact-info'>
						<input type='text' />
						<input type='tel' />
					</div>
					<br />
					<button></button>
				</div>
			</div>
		</div>
	)

	return (
		<div className='content'>
			{products.map(product => (
				<div key={product.id} className='furniture'>
					<img src={product.image} alt={`Гарнитур ${product.name}`} />
					<h2>Угловой кухонный гарнитур "{product.name}"</h2>
					<div className='furniture_button'>
						<button onClick={() => handleDetailsClick(product)}>
							подробнее
						</button>
						<button onClick={() => handleOrderClick(product)}>Заказать</button>
					</div>
				</div>
			))}

			{modalOpen && currentProduct && (
				<div className='modal-overlay'>
					<div className='modal-content'>
						<button className='modal-close' onClick={closeModal}>
							×
						</button>
						<img
							src={currentProduct.image}
							alt={`Гарнитур ${currentProduct.name}`}
						/>
						<div className='modal-carousel'>
							<img src={Mayan1} alt='' />
							<img src={Mayan2} alt='' />
							<img src={Mayan3} alt='' />
							<img src={Mayan4} alt='' />
							<img src={Mayan5} alt='' />
						</div>
						<h2>Угловой кухонный гарнитур "{currentProduct.name}"</h2>
						<div className='modal-body'>
							{currentProduct.description.map((text, index) => (
								<React.Fragment key={index}>
									<p>{text}</p>
									{index < currentProduct.description.length - 1 && <br />}
								</React.Fragment>
							))}
							<br />
							<ProductSpecs specs={currentProduct.specs} />
						</div>
					</div>
				</div>
			)}

			{orderModalOpen && currentProduct && <OrderModal />}
		</div>
	)
}

export default ProductList
