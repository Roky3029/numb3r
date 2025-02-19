/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import PageTitle from '@/components/misc/PageTitle'
import Input from '@/components/implementations/properties/Input'
import { useEffect, useState } from 'react'
import Button from '@/components/implementations/properties/Button'
import Error from '@/components/misc/Error'
import { transformIntoBase } from '@/functions/numberMethods/transformIntoBase'
import { useCheckValidNumberFormat } from '@/hooks/useCheckValidNumberFormat'

const SUBINDEX = {
	BIN: '2',
	DEC: '10',
	HEX: '16',
	OCT: '8'
}

export default function Base() {
	const [value, setValue] = useState<string>('')
	const [option, setOption] = useState<string>('DEC')

	const [option2, setOption2] = useState<string>('BIN')

	const [result, setResult] = useState<number | string>(0)
	const [err, setErr] = useState('')

	const handleClick = () => {
		if (value === '') return
		if (option === option2)
			return setErr('It is redundant to convert to the same format')

		const validation = useCheckValidNumberFormat(value, option)

		if (validation.msg !== '') {
			setErr(
				`There has been errors in the inputs: <br /> ${
					validation.msg !== '' ? `Input 1: ${validation.msg}` : ''
				}`
			)
		}

		const res = transformIntoBase(value, option, option2)
		setResult(res)
	}

	useEffect(() => {
		setResult(0)
		setErr('')
	}, [value, option, option2])

	return (
		<div className='flex flex-col items-center justify-center w-full max-w-screen'>
			<PageTitle
				title='Base converter'
				subtitle='Deep dive into the basic data representations in computer science. You will be able to transform a number in your desired format into any other common data format in computer science'
			/>

			{err.length > 0 && <Error msg={err} />}

			<div className='flex items-center flex-col justify-center'>
				<div className='flex items-center justify-center gap-10 pt-20 flex-col lg:flex-row w-full'>
					<Input
						label='n1'
						placeholder='Input number'
						type='text'
						value={value}
						setValue={setValue}
					/>

					<select
						className='px-3 py-6 w-fit text-3xl text-center bg-transparent border-2 rounded-lg transition-all hover:bg-zinc-800 cursor-pointer'
						onChange={e => setOption(e.target.value)}
						value={option}
						id='selector'
					>
						<option className='text-black bg-slate-300' value='DEC'>
							Decimal
						</option>
						<option className='text-black bg-slate-300' value='BIN'>
							Binary
						</option>
						<option className='text-black bg-slate-300' value='OCT'>
							Octal
						</option>
						<option className='text-black bg-slate-300' value='HEX'>
							Hexadecimal
						</option>
					</select>
				</div>

				<div className='flex items-center justify-center w-full gap-10 py-5 flex-col md:flex-row'>
					<div className='flex items-center justify-center gap-4'>
						<p className='text-3xl'>Convert into</p>
						<select
							className='px-3 py-6 w-fit text-3xl text-center bg-transparent border-2 rounded-lg transition-all hover:bg-zinc-800 cursor-pointer'
							onChange={e => setOption2(e.target.value)}
							value={option2}
							id='selector'
						>
							<option className='text-black bg-slate-300' value='DEC'>
								Decimal
							</option>
							<option className='text-black bg-slate-300' value='BIN'>
								Binary
							</option>
							<option className='text-black bg-slate-300' value='OCT'>
								Octal
							</option>
							<option className='text-black bg-slate-300' value='HEX'>
								Hexadecimal
							</option>
						</select>
					</div>
				</div>
				<Button fn={handleClick} />
			</div>

			{result !== 0 && value !== '' && (
				<div className='py-20'>
					<p className='text-5xl text-center'>
						{value}
						<sub>{SUBINDEX[option as keyof typeof SUBINDEX]}</sub> ={' '}
						<span className='font-extrabold'>
							{result}
							<sub>{SUBINDEX[option2 as keyof typeof SUBINDEX]}</sub>
						</span>
					</p>
				</div>
			)}
		</div>
	)
}
