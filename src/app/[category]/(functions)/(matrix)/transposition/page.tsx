'use client'

import Matrix from '@/components/implementations/matrix/Matrix'
import PageTitle from '@/components/misc/PageTitle'
import { calculateTransposition } from '@/functions/matrix/transposition'
import { useEffect, useState } from 'react'
import ScaleButtonsAndComputeButton from '@/components/implementations/matrix/ScaleButtonsAndComputeButton'
import { useHandleMatrixParameters } from '@/hooks/useHandleMatrixParameters'

export default function Determinant() {
	const [size, values, setValues, handleScalation] = useHandleMatrixParameters()
	const [newMatrix, setNewMatrix] = useState<number[][]>([])

	const handleTransposition = () => {
		const transposed = calculateTransposition(values)
		setNewMatrix(transposed)
	}

	useEffect(() => {
		setNewMatrix([])
	}, [values])

	return (
		<div className='w-full max-w-screen'>
			<PageTitle
				title='Transposition'
				subtitle='Given a MxN size matrix, convert it to its transposed NxM matrix'
			/>
			<ScaleButtonsAndComputeButton
				additionalHandlingCode={() => setNewMatrix([])}
				computeAction={() => handleTransposition()}
				handleScalation={handleScalation}
			/>

			<div className='flex items-center justify-center gap-10 py-10 flex-col md:flex-row'>
				<div className='text-center flex items-center justify-center'>
					<Matrix size={size} values={values} setValues={setValues} />
				</div>

				{newMatrix.length > 0 && newMatrix[0].length > 0 && (
					<>
						<p className='text-2xl'>
							is converted into M<sup>T</sup>=
						</p>

						<div className='text-center flex items-center justify-center'>
							<Matrix
								size={size}
								values={newMatrix}
								setValues={setValues}
								disabled={true}
							/>
						</div>
					</>
				)}
			</div>
		</div>
	)
}
