import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import Header from '@/components/misc/Header'
import Footer from '@/components/misc/Footer'

const rubik = Rubik({
	variable: '--font-rubik-sans',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Numb3r',
	description:
		'Need to compute vectorial operations? Or maybe do some calculations on a matrix? In Numb3r you will find everything you need!'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${rubik.variable} antialiased flex flex-col items-center min-h-screen w-full overflow-x-hidden max-w-screen`}
				// className={`${rubik.variable} antialiased`}
			>
				<Header />

				{children}

				<Footer />
			</body>
		</html>
	)
}
