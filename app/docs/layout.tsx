import MDXLayout from '@/components/layouts/MDXLayout'

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <MDXLayout>{children}</MDXLayout>
} 