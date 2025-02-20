'use client'

import Error from '@/components/misc/Error'
import Matrix from '@/components/implementations/matrix/Matrix'
import ScaleButtonsAndComputeButton from '@/components/implementations/matrix/ScaleButtonsAndComputeButton'
import PageTitle from '@/components/misc/PageTitle'
import { calculateInverse } from '@/functions/matrix/calculateInverse'
import { useHandleMatrixParameters } from '@/hooks/useHandleMatrixParameters'
import { useEffect, useState } from 'react'

export default function InverseMatrix() {
	const [size, values, setValues, handleScalation] = useHandleMatrixParameters()
	const [inverse, setInverse] = useState<number[][] | undefined>(undefined)
	const [error, setError] = useState<{ err: boolean; msg: string }>({
		err: false,
		msg: ''
	})

	const handleInverseCalculation = () => {
		const inv = calculateInverse(values)
		if (inv === undefined)
			setError({
				err: true,
				msg: 'The determinant of the matrix is 0, thus it does not have an inverse matrix'
			})

		setInverse(inv)
	}

	useEffect(() => {
		setInverse(undefined)
		setError({ err: false, msg: '' })
	}, [values, size])

	return (
		<div className='w-full max-w-screen flex items-center justify-center flex-col'>
			<PageTitle
				title='Inverse matrix'
				subtitle='Find the matrix that gives the identity matrix when multiplied by the inputted one!'
			/>

			<ScaleButtonsAndComputeButton
				computeAction={() => handleInverseCalculation()}
				handleScalation={handleScalation}
			/>

			{error.err && <Error msg={error.msg} />}

			<div className='flex items-center justify-center gap-10 py-5 flex-col md:flex-row'>
				<Matrix setValues={setValues} size={size} values={values} />

				{inverse && (
					<>
						<p>has inverted matrix </p>
						<Matrix
							setValues={setValues}
							size={size}
							values={inverse}
							disabled
						/>
					</>
				)}
			</div>
		</div>
	)
}
