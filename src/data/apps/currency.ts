import { BsPatchQuestion } from 'react-icons/bs'
import { PiMatrixLogoDuotone, PiSupersetProperOfFill } from 'react-icons/pi'
import { TbPigMoney } from 'react-icons/tb'
import { ICategory } from '../types/app'

export const currencyApplications: ICategory = {
	name: 'Currency',
	color: 'bg-emerald-500',
	icon: TbPigMoney,
	apps: [
		{
			id: 'currency_conversion',
			title: 'Currency conversion',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam autem quaerat asperiores quisquam rerum atque.',
			icon: PiSupersetProperOfFill
		},
		{
			id: 'crypto_exchange',
			title: 'Crypto exchange',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam autem quaerat asperiores quisquam rerum atque.',
			icon: TbPigMoney
		},
		{
			id: 'interest_calculator',
			title: 'Interest Calculator',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam autem quaerat asperiores quisquam rerum atque.',
			icon: PiMatrixLogoDuotone
		},
		{
			id: 'monthly_debt',
			title: 'Monthly debt',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam autem quaerat asperiores quisquam rerum atque.',
			icon: BsPatchQuestion
		}
	]
}
