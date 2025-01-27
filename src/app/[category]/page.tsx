import SubCategory from '@/components/Subcategory'
import { ICategory } from '@/types/app'

const Home = async ({ params }: { params: { category: string } }) => {
	const { category } = await params
	const file = await import(`./../../data/${category}`)
	const [data]: ICategory[] = Object.values(file)

	return (
		<div className='grid place-content-center'>
			<h1 className='font-extrabold text-3xl uppercase flex items-center justify-center gap-5'>
				{data.name}{' '}
				<span>
					{' '}
					<data.icon />{' '}
				</span>
			</h1>

			<div className='grid grid-cols-3 place-content-center w-full px-32 gap-10 my-10'>
				{data.apps.map(app => (
					<SubCategory
						description={app.description}
						icon={<app.icon />}
						title={app.title}
						key={app.title}
						additionalClasses={`${data.color} opacity-90`}
						category={data.name}
					/>
				))}
			</div>
		</div>
	)
}

export default Home
