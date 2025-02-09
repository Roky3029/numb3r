'use client'

import About from '@/components/implementations/properties/About'
import Input from '@/components/implementations/properties/Input'
import PageTitle from '@/components/misc/PageTitle'
import { ABOUT } from '@/data/about'
import { isHarshad } from '@/functions/numberMethods/harshad'
import { useEffect, useState } from 'react'

type Result = {
	isThereResult: boolean
	isHarshad: boolean
}

export default function Harshad() {
	const [value, setValue] = useState<string>('')
	const [result, setResult] = useState<Result>({
		isThereResult: false,
		isHarshad: false
	})

	const handleClick = () => {
		const isHarshadNumber = isHarshad(+value)
		setResult({ isHarshad: isHarshadNumber, isThereResult: true })
	}

	useEffect(() => {
		setResult({
			isThereResult: false,
			isHarshad: false
		})
	}, [value])
	return (
		<div>
			<PageTitle
				title='Harshad number'
				subtitle='Want to know if a number is a Harshad number? Just write it and find out! (for more info about Harshad numbers see "About")'
			/>

			<div className='flex items-center justify-center gap-10 pt-20'>
				<Input
					label='Harhsad number'
					placeholder='Input a number'
					type='number'
					value={value}
					setValue={setValue}
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
						{result.isHarshad ? '✅' : '❌'} The number {value} is{' '}
						{result.isHarshad ? '' : 'not'} a Harshad Number
					</p>
				</div>
			)}

			<About
				title={ABOUT.harshad_number.title}
				about={ABOUT.harshad_number.description}
			/>
		</div>
	)
}
