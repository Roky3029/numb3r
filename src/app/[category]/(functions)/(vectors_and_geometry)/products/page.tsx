'use client'

import ProductSelect from '@/components/implementations/vectors/ProductSelect'
import Vector from '@/components/implementations/vectors/Vector'
import PageTitle from '@/components/misc/PageTitle'
import { useEffect, useState } from 'react'
import parse from 'html-react-parser'
import Button from '@/components/implementations/properties/Button'
import { checkValidInputs } from '@/functions/vectors_geometry/checkValidInputs'
import { PRODUCTS } from '@/functions/vectors_geometry/products'
import Error from '@/components/misc/Error'

const OPERATION_STATEMENT = {
	DOT: '&#x20d7;u · &#x20d7;v =',
	CRO: '&#x20d7;u x &#x20d7;v =',
	// MIX: '[&#x20d7;u, &#x20d7;v, &#x20d7;w] ='
	MIX: '[u, v, w] ='
}

export default function Products() {
	const [u, setU] = useState<number[]>([4, 4, 4])
	const [v, setV] = useState<number[]>([4, 4, 4])
	const [w, setW] = useState<number[]>([4, 4, 4])

	const [product, setProduct] = useState<string>('DOT')

	const [result, setResult] = useState<
		number | { i: number; j: number; k: number }
	>(NaN)
	const [err, setErr] = useState(false)

	const handleCalculations = () => {
		if (!checkValidInputs(u, v, w, product)) return setErr(true)

		const res = PRODUCTS[product as keyof typeof PRODUCTS](u, v, w)

		setResult(res)

		console.log(result)
	}

	useEffect(() => {
		setResult(NaN)
		setErr(false)
	}, [u, v, w, product])

	return (
		<div className='flex items-center justify-center flex-col h-full w-full max-w-screen'>
			<PageTitle
				title='Vectorial products'
				subtitle='This is the place if you want to calculate either the dot, cross or mixed product of some vectors in 2D or 3D'
			/>

			{err && <Error msg='There is an error on data input' />}
			<div className='grid w-full px-10 h-full grid-cols-1'>
				<div className='flex items-center justify-center h-full flex-col md:flex-row mx-20 gap-20 py-20'>
					<Vector vectorName='u' state={{ variable: u, setter: setU }} />
					<Vector vectorName='v' state={{ variable: v, setter: setV }} />
					<Vector vectorName='w' state={{ variable: w, setter: setW }} />
				</div>
				<div className='grid grid-rows-2 place-content-center py-10'>
					<div className='flex items-center justify-center gap-10 flex-col md:flex-row pb-10'>
						<ProductSelect setter={setProduct} value={product} />
						<Button text='Calculate' fn={handleCalculations} />
					</div>

					<div className='flex justify-center gap-10 text-4xl'>
						{!Number.isNaN(result) && (
							<p className='font-semibold'>
								{parse(
									OPERATION_STATEMENT[
										product as keyof typeof OPERATION_STATEMENT
									]
								)}
							</p>
						)}

						{product !== 'CRO' && !Number.isNaN(result) && (
							<p className='font-bold'>{result as number}</p>
						)}

						{product === 'CRO' && !Number.isNaN(result) && (
							<div className='flex justify-center gap-10'>
								[{result['i' as keyof typeof result]},{' '}
								{result['j' as keyof typeof result]},{' '}
								{result['k' as keyof typeof result]}]
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
