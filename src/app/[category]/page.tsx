import PageTitle from '@/components/misc/PageTitle'
import SubCategory from '@/components/Subcategory'
import { ICategory } from '@/types/app'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

const Home = async () => {
	const headersList = headers()
	const URL = (await headersList).get('referer') || ''

	if (URL.length < 1) return redirect('/404')

	const category = URL.split('/')[3]
	// read the custom x-url header
	// const { category } = await params
	const file = await import(`./../../data/apps/${category}`)
	const [data]: ICategory[] = Object.values(file)

	return (
		<>
			<div className='grid place-content-center'>
				<div className='flex items-center justify-center gap-5 w-full'>
					<PageTitle title={data.name} />
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center w-full px-10 md:px-20 lg:px-32 gap-10 my-10'>
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
		</>
	)
}

export default Home
