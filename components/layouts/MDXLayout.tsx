export default function MDXLayout({ children }: { children: React.ReactNode }) {
    return (
        <article className="mdx-content mx-auto px-8 py-4">
            {children}
        </article>
    )
} 