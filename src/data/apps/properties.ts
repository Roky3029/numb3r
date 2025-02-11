import { LuMoveDiagonal2 } from 'react-icons/lu'
import { ICategory } from '../../types/app'
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
			id: 'amicable_numbers',
			title: 'Amicable numbers',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam autem quaerat asperiores quisquam rerum atque.',
			icon: TbSwitch
		},
		{
			id: 'prime_factorizer',
			title: 'Prime factorizer',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam autem quaerat asperiores quisquam rerum atque.',
			icon: PiMathOperations
		},
		{
			id: 'gcd_and_lcm',
			title: 'GCD and LCM',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam autem quaerat asperiores quisquam rerum atque.',
			icon: PiSelectionInverseFill
		},
		{
			id: 'base_converter',
			title: 'Base converter',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam autem quaerat asperiores quisquam rerum atque.',
			icon: PiSelectionInverseFill
		}
	]
}
