import { LuMoveDiagonal2 } from 'react-icons/lu'
import { ICategory } from '../../types/app'
import { TbMatrix, TbSwitch } from 'react-icons/tb'
import { PiMathOperations, PiSelectionInverseFill } from 'react-icons/pi'

export const matrixApplications: ICategory = {
	name: 'Matrix',
	color: 'bg-red-500',
	icon: TbMatrix,
	apps: [
		{
			id: 'determinant',
			title: 'Determinant',
			description:
				'Calculates the determinant of a matrix using recursive calls and development by cofactors',
			icon: LuMoveDiagonal2
		},
		{
			id: 'transposition',
			title: 'Transposition',
			description: 'Transposes an MxN matrix into an NxM matrix',
			icon: TbSwitch
		},
		{
			id: 'arithmetic_operations',
			title: 'Arithmetic operations',
			description:
				'Here you can perform the four basic arithmetical operations with matrices: addition, substraction, multiplication and division',
			icon: PiMathOperations
		},
		{
			id: 'inverse_matrix',
			title: 'Inverse matrix',
			description:
				'You will be able to calculate the inverse matrix of the one you typed in.',
			icon: PiSelectionInverseFill
		}
	]
}
