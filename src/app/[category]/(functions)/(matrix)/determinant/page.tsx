'use client'

import Matrix from '@/components/implementations/matrix/Matrix'
import {
	calculate2x2Determinant,
	calculateNxNDeterminant,
	checkForEmptyRows
} from '@/functions/matrix/determinant'
import { useEffect, useState } from 'react'
import PageTitle from '@/components/misc/PageTitle'
import { useHandleMatrixParameters } from '@/hooks/useHandleMatrixParameters'
import ScaleButtonsAndComputeButton from '@/components/implementations/matrix/ScaleButtonsAndComputeButton'

export default function Determinant() {
	const [size, values, setValues, handleScalation] = useHandleMatrixParameters()
	const [determinant, setDeterminant] = useState<number | undefined>(undefined)

	useEffect(() => {
		setDeterminant(undefined)
	}, [values])

	const handleDeterminantCalculation = () => {
		if (checkForEmptyRows(values)) return setDeterminant(0)
		if (size == 2) {
			setDeterminant(calculate2x2Determinant(values))
			return
		}
		setDeterminant(calculateNxNDeterminant(values))
		return
	}

	return (
		<div className='w-full max-w-screen'>
			<PageTitle
				title='Matrix determinant'
				subtitle='Calculate a matrix determinant of a matrix with a MxM size'
			/>
			<ScaleButtonsAndComputeButton
				additionalHandlingCode={() => setDeterminant(undefined)}
				computeAction={() => handleDeterminantCalculation()}
				handleScalation={handleScalation}
			/>

			<div className='text-center flex items-center justify-center flex-col md:flex-row py-4 gap-4'>
				<Matrix size={size} values={values} setValues={setValues} usePipes />

				{determinant !== undefined && (
					<span className='text-4xl font-semibold'>= {determinant}</span>
				)}
			</div>
		</div>
	)
}
