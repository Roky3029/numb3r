'use client'

// import About from '@/components/implementations/properties/About'
import Button from '@/components/implementations/properties/Button'
import Input from '@/components/implementations/properties/Input'
import PageTitle from '@/components/misc/PageTitle'
import { ABOUT } from '@/data/about'
import { isHarshad } from '@/functions/numberMethods/harshad'
import { Result } from '@/types/result'
import { useEffect, useState } from 'react'

export default function Harshad() {
	const [value, setValue] = useState<string>('')
	const [result, setResult] = useState<Result>({
		isThereResult: false,
		isCorrect: false
	})

	const handleClick = () => {
		const isHarshadNumber = isHarshad(+value)
		setResult({ isCorrect: isHarshadNumber, isThereResult: true })
	}

	useEffect(() => {
		setResult({
			isThereResult: false,
			isCorrect: false
		})
	}, [value])
	return (
		<div className='w-full max-w-screen'>
			<PageTitle
				title='Harshad number'
				subtitle='Want to know if a number is a Harshad number? Just write it and find out! (for more info about Harshad numbers see "About")'
			/>

			<div className='flex items-center justify-center flex-col md:flex-row gap-10 pt-20'>
				<Input
					label='Harhsad number'
					placeholder='Input a number'
					type='number'
					value={value}
					setValue={setValue}
				/>

				<Button fn={handleClick} />
			</div>

			{result.isThereResult && value !== '' && (
				<div className='py-20'>
					<p className='text-2xl text-center'>
						{result.isCorrect ? '✅' : '❌'} The number {value} is{' '}
						{result.isCorrect ? '' : 'not'} a Harshad Number
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
