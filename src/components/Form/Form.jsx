import React, { useCallback, useEffect, useState } from 'react'
import './Form.css'
import { useTelegram } from '../../hooks/useTelegram'

const Form = () => {
	const [userName, setUserName] = useState('')
	const [surName, setSurName] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [phoneError, setPhoneError] = useState('')
	const { tg } = useTelegram()

	const validateUzbekPhone = phone => {
		const regex = /^(?:\+998|998|0)(90|91|93|94|95|97|98|99|33|88|77)[0-9]{7}$/
		return regex.test(phone)
	}

	const onSendData = useCallback(() => {
		const data = {
			userName,
			surName,
			phoneNumber,
		}
		tg.sendData(JSON.stringify(data))
	}, [userName, surName, phoneNumber, tg])

	useEffect(() => {
		tg.onEvent('mainButtonClicked', onSendData)
		return () => {
			tg.offEvent('mainButtonClicked', onSendData)
		}
	}, [onSendData, tg])

	useEffect(() => {
		tg.MainButton.setParams({
			text: 'Отправить данные',
		})
	}, [tg])

	useEffect(() => {
		const isValidPhone = validateUzbekPhone(phoneNumber)
		if (!surName || !userName || !isValidPhone) {
			tg.MainButton.hide()
		} else {
			tg.MainButton.show()
		}
	}, [userName, surName, phoneNumber, tg])

	const onChangeUserName = e => {
		setUserName(e.target.value)
	}

	const onChangeSurName = e => {
		setSurName(e.target.value)
	}

	const onChangePhoneNumber = e => {
		const value = e.target.value
		setPhoneNumber(value)

		if (value && !validateUzbekPhone(value)) {
			setPhoneError('Введите узбекский номер (например: +998338007011)')
		} else {
			setPhoneError('')
		}
	}

	return (
		<div className={'form'}>
			<h3>Регистрация</h3>
			<h4> Заполните форму, чтобы получить:</h4>
			<ul className={'ulText'}>
				<li>✓ 3D-проект кухни бесплатно</li>
				<li>✓ Расчет стоимости за 30 минут</li>
				<li>✓ Скидку 10% на первый заказ</li>
			</ul>
			<input
				className={'input'}
				type='text'
				placeholder={'Имя'}
				value={userName}
				onChange={onChangeUserName}
			/>
			<input
				className={'input'}
				type='text'
				placeholder={'Фамилия'}
				value={surName}
				onChange={onChangeSurName}
			/>
			<input
				className={'input'}
				type='tel'
				placeholder={'Номер телефона (+998)'}
				value={phoneNumber}
				onChange={onChangePhoneNumber}
			/>
			{phoneError && <div className='error-message'>{phoneError}</div>}
		</div>
	)
}

export default Form


// "Заполните форму, чтобы получить:

// 3D-проект кухни бесплатно

// Расчет стоимости за 30 минут

// Скидку 10% на первый заказ"