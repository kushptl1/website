import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Me | Kush Patel',
    description: 'things about me',
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 