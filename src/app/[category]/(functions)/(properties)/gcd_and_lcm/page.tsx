'use client'

import PageTitle from '@/components/misc/PageTitle'
import Input from '@/components/implementations/properties/Input'
import { useEffect, useState } from 'react'
import Button from '@/components/implementations/properties/Button'
import { OPTIONS } from '@/functions/numberMethods/gcd_lcm'
import Error from '@/components/misc/Error'

export default function CommonNumbers() {
	const [value, setValue] = useState<string>('')
	const [value2, setValue2] = useState<string>('')
	const [option, setOption] = useState<string>('gcd')
	const [result, setResult] = useState<number>(0)
	const [err, setErr] = useState('')

	const handleClick = () => {
		if (+value > 10e11) return setErr('Number is too big to be handled!')
		else if (+value < 0)
			return setErr(
				'You tried to get away with this one, but you failed. Please, input a valid number :)'
			)

		const res = OPTIONS[option as keyof typeof OPTIONS](+value, +value2)
		console.log(res)
		setResult(res as number)
	}

	useEffect(() => {
		setResult(0)
		setErr('')
	}, [value, value2, option])

	return (
		<div className='flex flex-col items-center justify-center w-full max-w-screen'>
			<PageTitle
				title='GCD & LCM'
				subtitle='The pillars of arithmetic. Find the GCD (Greatest Common Divisor) and/or the LCM (Least Common Multiple) of two numbers'
			/>

			{err.length > 0 && <Error msg={err} />}

			<div className='flex items-center justify-center gap-10 pt-20 flex-col xl:flex-row pb-5'>
				<Input
					label='gcd'
					placeholder='Input number 1'
					type='number'
					value={value}
					setValue={setValue}
				/>

				<Input
					label='gcd'
					placeholder='Input number 2'
					type='number'
					value={value2}
					setValue={setValue2}
				/>

				<select
					className='size-24 text-3xl text-center bg-transparent border-2 rounded-lg transition-all hover:bg-zinc-800 cursor-pointer'
					onChange={e => setOption(e.target.value)}
					value={option}
					id='selector'
				>
					<option className='text-black bg-slate-300' value='gcd'>
						GCD
					</option>
					<option className='text-black bg-slate-300' value='lcm'>
						LCM
					</option>
				</select>

				<Button fn={handleClick} />
			</div>

			{result !== 0 && value !== '' && value2 !== '' && (
				<div className='pt-20 pb-10'>
					<p className='text-2xl md:text-5xl text-center'>
						{option.toUpperCase()}({value}, {value2}) = {result}
					</p>
				</div>
			)}
		</div>
	)
}
