import { ICategory } from '../../types/app'
import { RiCharacterRecognitionLine } from 'react-icons/ri'
import { LuBinary } from 'react-icons/lu'
import {
	TbRelationOneToManyFilled,
	TbRelationManyToManyFilled
} from 'react-icons/tb'
import { BsPlusSlashMinus } from 'react-icons/bs'
import { FaUserFriends } from 'react-icons/fa'

export const propsApplications: ICategory = {
	name: 'Properties',
	color: 'bg-cyan-500',
	icon: RiCharacterRecognitionLine,
	apps: [
		{
			id: 'base_converter',
			title: 'Base converter',
			description:
				'Given a number in your desired base, it converts it to any other base from the available ones (Hexadecimal, Binary, Octal or Decimal)',
			icon: LuBinary
		},
		{
			id: 'prime_factorizer',
			title: 'Prime factorizer',
			description:
				'This calculator can give you the prime decomposition of a number, ie, that same number but as a series of product of prime numbers',
			icon: TbRelationOneToManyFilled
		},
		{
			id: 'gcd_and_lcm',
			title: 'GCD and LCM',
			description:
				'The pillars of arithmetic, here, you can calculate the Greastest Common Divisor or the Least Common Multiple',
			icon: TbRelationManyToManyFilled
		},
		{
			id: 'harshad_number',
			title: 'Harshad number',
			description:
				'Are you curious about Harshad Numbers? Input a number and find more about this special set of numbers',
			icon: BsPlusSlashMinus
		},
		{
			id: 'amicable_numbers',
			title: 'Amicable numbers',
			description:
				'Do you want to know if two numbers get along well? Input them here and find out!',
			icon: FaUserFriends
		}
	]
}
