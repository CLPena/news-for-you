export default function MDXLayout({ children }: { children: React.ReactNode }) {
    return (
        <article className="mdx-content max-w-3xl mx-auto px-4 py-8">
            {children}
        </article>
    )
} 