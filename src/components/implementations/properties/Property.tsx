'use client'

import PageTitle from '@/components/misc/PageTitle'
import Input from '@/components/implementations/properties/Input'
import { useEffect, useState } from 'react'
import { Result } from '@/types/result'
import { isAmicable } from '@/functions/numberMethods/amicable'
import About from '@/components/implementations/properties/About'
import { ABOUT } from '@/data/about'

export default function Amicable() {
	const [value, setValue] = useState<string>('')
	const [value2, setValue2] = useState<string>('')
	const [result, setResult] = useState<Result>({
		isThereResult: false,
		isCorrect: false
	})

	const handleClick = () => {
		const areAmicableNumbers = isAmicable(+value, +value2)
		setResult({ isCorrect: areAmicableNumbers, isThereResult: true })
	}

	useEffect(() => {
		setResult({
			isThereResult: false,
			isCorrect: false
		})
	}, [value, value2])

	return (
		<div>
			<PageTitle
				title='Amicable numbers'
				subtitle='We all love friendship. What about finding if two numbers get along well? Find out if they are amicable'
			/>

			<div className='flex items-center justify-center gap-10 pt-20'>
				<Input
					label='amicable_numbers'
					placeholder='Input number 1'
					type='number'
					value={value}
					setValue={setValue}
				/>

				<Input
					label='amicable_numbers'
					placeholder='Input number 2'
					type='number'
					value={value2}
					setValue={setValue2}
				/>

				<button
					className='bg-slate-200 border-2 border-slate-300 text-xl px-10 py-5 text-black rounded-lg transition-all hover:scale-105 hover:bg-slate-300'
					onClick={() => handleClick()}
				>
					Check
				</button>
			</div>

			{result.isThereResult && value !== '' && (
				<div className='pt-20'>
					<p className='text-2xl text-center'>
						{result.isCorrect ? '✅' : '❌'} Numbers {value} and {value2} are{' '}
						{result.isCorrect ? '' : 'not'} amicable
					</p>
				</div>
			)}

			<About title={ABOUT.amicable.title} about={ABOUT.amicable.description} />
		</div>
	)
}
