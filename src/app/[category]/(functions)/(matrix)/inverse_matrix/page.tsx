'use client'

import Matrix from '@/components/implementations/matrix/Matrix'
import ScaleButtonsAndComputeButton from '@/components/implementations/matrix/ScaleButtonsAndComputeButton'
import PageTitle from '@/components/PageTitle'
import { useCheckApplication } from '@/functions/checkApplication'
import { calculateInverse } from '@/functions/matrix/calculateInverse'
import { useHandleMatrixParameters } from '@/hooks/useHandleMatrixParameters'
import { useEffect, useState } from 'react'

export default function InverseMatrix() {
	useCheckApplication()
	const [size, values, setValues, handleScalation] = useHandleMatrixParameters()
	const [inverse, setInverse] = useState<number[][] | undefined>(undefined)

	const handleInverseCalculation = () => {
		const inv = calculateInverse(values)
		// TODO: handle the error if the inverse is undefined
		setInverse(inv)
	}

	useEffect(() => {
		setInverse(undefined)
	}, [values, size])

	return (
		<>
			<PageTitle
				title='Inverse matrix'
				subtitle='Find the matrix that gives the identity matrix when multiplied by the inputted one!'
			/>

			<ScaleButtonsAndComputeButton
				computeAction={() => handleInverseCalculation()}
				handleScalation={handleScalation}
			/>

			<div className='flex items-center justify-center gap-10'>
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
		</>
	)
}
