import { LuMoveDiagonal2 } from 'react-icons/lu'
import { ICategory } from '../types/app'
import { TbSwitch } from 'react-icons/tb'
import { PiMathOperations, PiSelectionInverseFill } from 'react-icons/pi'

export const propsApplications: ICategory = {
	name: 'Properties',
	color: 'bg-cyan-500',
	icon: TbSwitch,
	apps: [
		{
			id: 'harshad_number',
			title: 'Harshad number',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam autem quaerat asperiores quisquam rerum atque.',
			icon: LuMoveDiagonal2
		},
		{
			id: 'amicable',
			title: 'Amicable numbers',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam autem quaerat asperiores quisquam rerum atque.',
			icon: TbSwitch
		},
		{
			id: 'power_calculator',
			title: 'Power calculator',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam autem quaerat asperiores quisquam rerum atque.',
			icon: PiMathOperations
		},
		{
			id: 'prime',
			title: 'Prime finder',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam autem quaerat asperiores quisquam rerum atque.',
			icon: PiSelectionInverseFill
		}
	]
}
