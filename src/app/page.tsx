import Category from '@/components/Category'
import SubCategory from '@/components/Subcategory'
import Title from '@/components/Title'

import { BsArrowRight } from 'react-icons/bs'

import fs from 'fs/promises'
import { ICategory } from '@/types/app'

export default async function Home() {
	const dirContent = await fs.readdir('./src/data/')
	const content = await Promise.all(
		dirContent.map(async f => {
			const file = await import(`./../data/${f}`)
			return Object.values(file).at(0)
		})
	)

	return (
		<div className='flex flex-col items-center h-full pt-20 mb-20'>
			<Title />

			<div className='flex flex-col justify-between w-full mx-20 px-20 pt-20 gap-20'>
				{(content as ICategory[]).map(category => (
					<Category
						color={category.color}
						title={category.name}
						icon={<category.icon />}
						key={category.name}
					>
						{category.apps.map((app, index) => {
							if (index === 3) {
								return (
									<SubCategory
										key='See More'
										title=''
										description={`Don't find what you're looking for? Check out the rest of the ${category.name.toLowerCase()} apps`}
										icon={<BsArrowRight />}
										additionalClasses='opacity-80 scale-90 hover:scale-100'
										category={category.name}
									/>
								)
							}

							return (
								<SubCategory
									key={app.id}
									title={app.title}
									description={app.description}
									icon={<app.icon />}
									category={category.name}
								/>
							)
						})}
					</Category>
				))}
			</div>
		</div>
	)
}
