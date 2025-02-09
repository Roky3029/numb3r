'use client'

import { useCheckApplication } from '@/functions/checkApplication'

export default function AppLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	useCheckApplication()
	return <>{children}</>
}
