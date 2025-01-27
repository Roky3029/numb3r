import { LuMoveDiagonal2 } from 'react-icons/lu'
import { ICategory } from '../types/app'
import { TbSwitch } from 'react-icons/tb'
import { PiMathOperations, PiSelectionInverseFill } from 'react-icons/pi'

export const matrixApplications: ICategory = {
	name: 'Matrix',
	color: 'bg-red-500',
	icon: TbSwitch,
	apps: [
		{
			id: 'determinant',
			title: 'Determinant',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam autem quaerat asperiores quisquam rerum atque.',
			icon: LuMoveDiagonal2
		},
		{
			id: 'transposition',
			title: 'Transposition',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam autem quaerat asperiores quisquam rerum atque.',
			icon: TbSwitch
		},
		{
			id: 'basic_arithmetic',
			title: 'Arithmetic operations',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam autem quaerat asperiores quisquam rerum atque.',
			icon: PiMathOperations
		},
		{
			id: 'inverse',
			title: 'Inverse matrix',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam autem quaerat asperiores quisquam rerum atque.',
			icon: PiSelectionInverseFill
		}
	]
}
