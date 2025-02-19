'use client'

import Button from '@/components/implementations/properties/Button'
import Vector from '@/components/implementations/vectors/Vector'
import Error from '@/components/misc/Error'
import PageTitle from '@/components/misc/PageTitle'
import { calculateAngle } from '@/functions/vectors_geometry/calculateAngle'
import { checkNonNaNVector } from '@/functions/vectors_geometry/checkValidInputs'
import { useEffect, useState } from 'react'

export default function Angle() {
	const [u, setU] = useState<number[]>([4, 4, 4])
	const [v, setV] = useState<number[]>([4, 4, 4])

	const [err, setErr] = useState(false)
	const [result, setResult] = useState<number | string>(NaN)

	const handleCalculations = () => {
		if (!checkNonNaNVector(u, v)) return setErr(true)

		const res = calculateAngle(u, v)
		setResult(res)
	}

	useEffect(() => {
		setResult(NaN)
		setErr(false)
	}, [u, v])

	return (
		<div className='flex items-center justify-center flex-col h-full w-full max-w-screen'>
			<PageTitle
				title='Angle between vectors'
				subtitle='Making use of the definition of the dot product, calculate the angle between two vectors'
			/>

			{err && <Error msg='There is an error on data input' />}
			<div className='grid w-full grid-cols-1 place-content-center px-10 h-full'>
				<div className='flex items-center justify-center h-full mx-20 gap-20 py-20 flex-col md:flex-row'>
					<Vector vectorName='u' state={{ variable: u, setter: setU }} />
					<Vector vectorName='v' state={{ variable: v, setter: setV }} />
				</div>
				<div className='grid grid-rows-2 place-content-center py-10'>
					<div className='flex items-center justify-center gap-10'>
						<Button text='Calculate' fn={handleCalculations} />
					</div>

					<div className='flex justify-center gap-10 text-4xl text-center py-5'>
						{!Number.isNaN(result) && <p>Angle(u, v) = {result}</p>}
					</div>
				</div>
			</div>
		</div>
	)
}
