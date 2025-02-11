'use client'

import PageTitle from '@/components/misc/PageTitle'
import Input from '@/components/implementations/properties/Input'
import { useEffect, useState } from 'react'
import Button from '@/components/implementations/properties/Button'
import { primeFactorizer } from '@/functions/numberMethods/primeFactorizer'
import Error from '@/components/misc/Error'

export default function Amicable() {
	const [value, setValue] = useState<string>('')
	const [result, setResult] = useState<number[]>([])
	const [err, setErr] = useState('')

	const handleClick = () => {
		if (+value > 10e11) return setErr('Number is too big to be handled!')
		else if (+value < 0)
			return setErr(
				'You tried to get away with this one, but you failed. Please, input a valid number :)'
			)
		const factorization = primeFactorizer(+value)
		setResult(factorization)
	}

	useEffect(() => {
		setResult([])
		setErr('')
	}, [value])

	return (
		<div className='flex flex-col items-center justify-center'>
			<PageTitle
				title='Prime factorizer'
				subtitle='This app will help you decompose a number into a set of prime numbers. You can find if the number is prime itself too!'
			/>

			{err.length > 0 && <Error msg={err} />}

			<div className='flex items-center justify-center gap-10 pt-20'>
				<Input
					label='prime_factorizer'
					placeholder='Input number'
					type='number'
					value={value}
					setValue={setValue}
				/>

				<Button fn={handleClick} text='Factorize' />
			</div>

			{result.length === 1 && value !== '' && (
				<div className='pt-20'>
					<p className='text-2xl text-center'>
						The number {value} is a prime number!
					</p>
				</div>
			)}

			{result.length > 1 && value !== '' && (
				<div className='pt-20'>
					<p className='text-2xl text-center'>
						The number {value} is decomposed into:{' '}
					</p>
					<p className='text-3xl text-center py-10'>
						{value} ={' '}
						{result.map((n, i) => (
							<span key={i}>
								{' '}
								{n} {i === result.length - 1 ? '' : '*'}
							</span>
						))}
					</p>
				</div>
			)}
		</div>
	)
}
