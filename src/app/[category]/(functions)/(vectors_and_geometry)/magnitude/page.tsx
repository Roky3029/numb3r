'use client'

import Button from '@/components/implementations/properties/Button'
import Vector from '@/components/implementations/vectors/Vector'
import Error from '@/components/misc/Error'
import PageTitle from '@/components/misc/PageTitle'
import { checkNonNaNVector } from '@/functions/vectors_geometry/checkValidInputs'
import { magnitude } from '@/functions/vectors_geometry/magnitude'
import { useEffect, useState } from 'react'

export default function Magnitude() {
	const [u, setU] = useState<number[]>([NaN, NaN, NaN])

	const [err, setErr] = useState(false)
	const [result, setResult] = useState<number | string>(NaN)

	const handleCalculations = () => {
		if (!checkNonNaNVector(u)) return setErr(true)

		const res = magnitude(u)
		setResult(res)
	}

	useEffect(() => {
		setResult(NaN)
		setErr(false)
	}, [u])

	return (
		<div className='flex items-center justify-center flex-col h-full'>
			<PageTitle
				title='Magnitude'
				subtitle="Using the ubiquitously famous Pithagorean theorem, introduce a vector and it will give you it's length"
			/>

			{err && <Error msg='There is an error on data input' />}
			<div className='w-full grid grid-cols-2 place-content-center gap-10 px-10 h-full'>
				<div className='h-full mx-20 gap-20 py-20'>
					<Vector vectorName='u' state={{ variable: u, setter: setU }} />
				</div>
				<div className='grid grid-rows-2 gap-10 place-content-center py-10'>
					<div className='flex items-center justify-center gap-10'>
						<Button text='Calculate' fn={handleCalculations} />
					</div>

					<div className='flex justify-center gap-10 text-4xl'>
						{!Number.isNaN(result) && (
							<p>
								|u| = {(+result).toFixed(4)} u<sup>2</sup>
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
