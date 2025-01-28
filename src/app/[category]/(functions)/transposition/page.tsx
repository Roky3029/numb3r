'use client'

import Matrix from '@/components/implementations/determinant/Matrix'
import { checkCategory } from '@/functions/checkCategory'
import { createMatrix } from '@/functions/matrix/determinant'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { PARENTHESIS_SIZES } from '@/functions/matrix/parenthesisSizes'
import PageTitle from '@/components/PageTitle'
import { calculateTransposition } from '@/functions/matrix/transposition'

export default function Determinant() {
	const router = useRouter()
	const [isAppFromCategory, setIsAppFromCategory] = useState(true)
	const [size, setSize] = useState(3)
	const [values, setValues] = useState([
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	])
	const [newMatrix, setNewMatrix] = useState<number[][]>([])

	const path = usePathname().split('/')

	useEffect(() => {
		const checkIfAppCategoryIsCorrect = async () => {
			const validate = await checkCategory(path[1], path[2])
			setIsAppFromCategory(validate)
		}

		checkIfAppCategoryIsCorrect()
	}, [isAppFromCategory, path])

	if (!isAppFromCategory) router.push('/404')

	const handleMatrixScalation = (scaling: string) => {
		setNewMatrix([])
		if ((size === 2 && scaling === '-') || (size === 5 && scaling === '+'))
			return

		if (scaling === '-') {
			setSize(size - 1)

			const newMat = createMatrix(size - 1, 0, values)
			setValues(newMat as number[][])
			return
		}

		setSize(size + 1)
		const newMat = createMatrix(size + 1, 0, values)
		setValues(newMat as number[][])
	}

	const handleTransposition = () => {
		const transposed = calculateTransposition(values)
		setNewMatrix(transposed)
	}

	return (
		<>
			<PageTitle
				title='Transposition'
				subtitle='Given a MxN size matrix, convert it to its transposed NxM matrix'
			/>

			<div className='flex items-center justify-center gap-10'>
				<button
					className='px-8 py-4 bg-slate-600 border-4 border-slate-800 transition-all hover:bg-slate-700 shadow-lg rounded-lg'
					onClick={() => handleMatrixScalation('-')}
				>
					-1
				</button>
				<button
					className='px-8 py-4 bg-slate-600 border-4 border-slate-800 transition-all hover:bg-slate-700 shadow-lg rounded-lg'
					onClick={() => handleMatrixScalation('+')}
				>
					+1
				</button>

				<button
					className='px-8 py-4 bg-slate-600 border-4 border-slate-800 transition-all hover:bg-slate-700 shadow-lg rounded-lg'
					onClick={() => handleTransposition()}
				>
					Calculate
				</button>
			</div>

			<div className='flex items-center justify-center gap-10'>
				<div className='text-center flex items-center justify-center'>
					<p className={`${PARENTHESIS_SIZES[size - 2]}`}>(</p>
					<Matrix size={size} values={values} setValues={setValues} />
					<p className={`${PARENTHESIS_SIZES[size - 2]}`}>)</p>
				</div>

				{newMatrix.length > 0 && newMatrix[0].length > 0 && (
					<>
						<p className='text-2xl'>
							is converted into M<sup>T</sup>=
						</p>

						<div className='text-center flex items-center justify-center'>
							<p className={`${PARENTHESIS_SIZES[size - 2]}`}>(</p>
							<Matrix
								size={size}
								values={newMatrix}
								setValues={setValues}
								disabled={true}
							/>
							<p className={`${PARENTHESIS_SIZES[size - 2]}`}>)</p>
						</div>
					</>
				)}
			</div>
		</>
	)
}
