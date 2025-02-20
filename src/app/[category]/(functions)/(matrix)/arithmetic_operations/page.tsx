'use client'

import Matrix from '@/components/implementations/matrix/Matrix'
import ScaleButtonsAndComputeButton from '@/components/implementations/matrix/ScaleButtonsAndComputeButton'
import PageTitle from '@/components/misc/PageTitle'
import { useHandleMatrixParameters } from '@/hooks/useHandleMatrixParameters'
import { useEffect, useState } from 'react'
import { ARITHMETICAL_OPERATIONS } from '@/functions/matrix/arithmeticalOperations'
import Error from '@/components/misc/Error'

export default function Arithmetic() {
	const [size, values, setValues, handleScalation] = useHandleMatrixParameters()
	const [size2, values2, setValues2, handleScalation2] =
		useHandleMatrixParameters()

	const [operation, setOperation] = useState('+')
	const [resultingMatrix, setResultingMatrix] = useState<
		number[][] | undefined
	>(undefined)
	const [error, setError] = useState({ err: false, msg: '' })

	const handleCalc = () => {
		const operatingResult = ARITHMETICAL_OPERATIONS[
			operation as keyof typeof ARITHMETICAL_OPERATIONS
		](values, values2)

		if (operatingResult.result.length === 0 && operatingResult.msg !== '') {
			// TODO: Create a toast or something similar?
			return setError({ err: true, msg: operatingResult.msg })
		}

		setResultingMatrix(operatingResult.result)
	}

	useEffect(() => {
		setResultingMatrix(undefined)
		setError({ err: false, msg: '' })
	}, [values, values2, operation, size, size2])

	return (
		<div className='w-full max-w-screen flex items-center justify-center flex-col'>
			<PageTitle
				title='Matrix arithmetic'
				subtitle='Want to add, substract, multiply or divide matrices? You are on the right spot!'
			/>
			<div className='mx-auto flex items-center justify-center gap-2 md:gap-10 flex-col'>
				<ScaleButtonsAndComputeButton
					computeAction={handleCalc}
					handleScalation={handleScalation}
					addMatrixID='M1'
				/>
				<ScaleButtonsAndComputeButton
					handleScalation={handleScalation2}
					addMatrixID='M2'
				/>
			</div>

			{error.err && <Error msg={error.msg} />}

			<div className='flex items-center justify-center gap-5 md:gap-2 flex-col py-4'>
				<div className='text-center flex items-center justify-center'>
					<Matrix size={size} values={values} setValues={setValues} />
				</div>
				<select
					className='size-32 text-6xl text-center bg-transparent border-2 rounded-full transition-all hover:bg-zinc-800 cursor-pointer'
					onChange={e => setOperation(e.target.value)}
					value={operation}
					id='selector'
				>
					<option className='text-black bg-slate-300' value='+'>
						+
					</option>
					<option className='text-black bg-slate-300' value='-'>
						-
					</option>
					<option className='text-black bg-slate-300' value='*'>
						·
					</option>
					<option className='text-black bg-slate-300' value='/'>
						/
					</option>
				</select>
				<div className='text-center flex items-center justify-center'>
					<Matrix size={size2} values={values2} setValues={setValues2} />
				</div>

				{resultingMatrix && resultingMatrix.length > 0 && (
					<>
						<p className='text-5xl font-semibold'>=</p>

						<div className='text-center flex items-center justify-center'>
							<Matrix
								size={size}
								values={resultingMatrix}
								setValues={setValues}
								disabled
							/>
						</div>
					</>
				)}
			</div>
		</div>
	)
}
