import React, { useState } from 'react'
import Counter from './counter'

const CounterList = () => {
	const initialState = [
		{ id: 0, value: 0, name: 'Ненужная вещь' },
		{ id: 1, value: 0, name: 'Ложка' },
		{ id: 2, value: 0, name: 'Вилка' },
		{ id: 3, value: 0, name: 'Тарелка' },
		{ id: 4, value: 0, name: 'Набор минималиста' },
	]
	const [counters, setCounters] = useState(initialState)
	const handleDelete = id => {
		const newCounters = counters.filter(c => c.id !== id)
		setCounters(newCounters)
	}
	const handleReset = () => {
		setCounters(initialState)
	}
	const handleIncrement = id => {
		const element = counters.findIndex(c => c.id === id)
		const newCounters = [...counters]
		newCounters[element].value++
		setCounters(newCounters)
	}

	const handleDecrement = id => {
		const element = counters.findIndex(c => c.id === id)
		const newCounters = [...counters]
		newCounters[element].value--
		setCounters(newCounters)
	}
	return (
		<>
			{counters.map(count => (
				<Counter
					key={counters.id}
					onDelete={handleDelete}
					onIncrement={handleIncrement}
					onDecrement={handleDecrement}
					{...count}
				/>
			))}
			<button className='btn btn-primary btn-sm m-2' onClick={handleReset}>
				Сброс
			</button>
		</>
	)
}

export default CounterList
