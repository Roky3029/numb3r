'use client'

import Matrix from '@/components/implementations/determinant/Matrix'
import { checkCategory } from '@/functions/checkCategory'
import {
	calculate2x2Determinant,
	calculateNxNDeterminant,
	checkForEmptyRows,
	createMatrix
} from '@/functions/matrix/determinant'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { PARENTHESIS_SIZES } from '@/functions/matrix/parenthesisSizes'
import PageTitle from '@/components/PageTitle'

export default function Determinant() {
	const router = useRouter()
	const [isAppFromCategory, setIsAppFromCategory] = useState(true)
	const [size, setSize] = useState(3)
	const [values, setValues] = useState([
		[3, 7, 0],
		[0, 0, 12],
		[0, 8, 11]
	])
	const [determinant, setDeterminant] = useState<number | undefined>(undefined)

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
		setDeterminant(undefined)
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
		<>
			<PageTitle
				title='Matrix determinant'
				subtitle='Calculate a matrix determinant of a matrix with a MxM size'
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
					onClick={() => handleDeterminantCalculation()}
				>
					Calculate
				</button>
			</div>

			<div className='text-center flex items-center justify-center'>
				<p className={`${PARENTHESIS_SIZES[size - 2]}`}>|</p>
				<Matrix size={size} values={values} setValues={setValues} />
				<p className={`${PARENTHESIS_SIZES[size - 2]}`}>|</p>

				{determinant !== undefined && (
					<span className='text-4xl font-semibold'>= {determinant}</span>
				)}
			</div>
		</>
	)
}
