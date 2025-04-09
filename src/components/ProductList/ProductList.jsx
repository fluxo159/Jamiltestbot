import React, { useState } from 'react'
import './ProductList.css'
import MayanImg from '../../assets/img/Mayan.jpg'
import Limoges from '../../assets/img/Limoges.jpg'
import Valet from '../../assets/img/Valet.jpg'
import Lance from '../../assets/img/Lance.jpg'
import Calais from '../../assets/img/Calais.jpg'
import { useNavigate } from 'react-router-dom'

const ProductList = () => {
	const [modalOpen, setModalOpen] = useState(false)
	const [currentProduct, setCurrentProduct] = useState(null)
	const navigate = useNavigate()

	const products = [
		{
			id: 1,
			name: 'Mayen',
			image: MayanImg,
			description: [
				'Кухня Mayen — современный дизайн с акцентом на качество:',
				'• Матовые серые фасады из МДФ с акриловым покрытием',
				'• Деревянные декоративные элементы ручной работы',
				'• Мраморный фартук с уникальным природным узором',
				'• Эргономичная планировка и продуманное освещение',
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

	const closeModal = () => {
		setModalOpen(false)
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
						<button onClick={() => navigate('../Basket', {state: { product }})}>
							Заказать
						</button>
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
		</div>
	)
}

export default ProductList
// button должен перекидовать в регистрацию
