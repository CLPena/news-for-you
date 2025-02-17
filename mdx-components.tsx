import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import { Fira_Code } from 'next/font/google'
import CodeBlock from '@/components/CodeBlock'

const firaCode = Fira_Code({ subsets: ['latin'] })

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Headings
        h1: ({ children }) => (
            <h1 className="text-4xl font-bold mb-4 mt-8">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-3xl font-semibold mb-3 mt-6">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-2xl font-semibold mb-3 mt-6">
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className="text-xl font-semibold mb-2 mt-4">
                {children}
            </h4>
        ),
        h5: ({ children }) => (
            <h5 className="text-lg font-semibold mb-2 mt-4">
                {children}
            </h5>
        ),
        h6: ({ children }) => (
            <h6 className="text-base font-semibold mb-2 mt-4">
                {children}
            </h6>
        ),

        // Paragraph and text elements
        p: ({ children }) => (
            <p className="mb-4 leading-relaxed">
                {children}
            </p>
        ),
        strong: ({ children }) => (
            <strong className="font-bold">
                {children}
            </strong>
        ),
        em: ({ children }) => (
            <em className="italic">
                {children}
            </em>
        ),
        
        // Lists
        ul: ({ children }) => (
            <ul className="list-style-type: disc pl-6 mb-4">
                {children}
            </ul>
        ),
        ol: ({ children }) => (
            <ol className="list-style-type: decimal pl-6 mb-4">
                {children}
            </ol>
        ),
        li: ({ children }) => (
            <li className="mb-1">
                {children}
            </li>
        ),

        // Blockquotes
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-300 pl-4 my-4 italic">
                {children}
            </blockquote>
        ),

        // Code blocks
        pre: ({ children }) => <>{children}</>,
        code: ({ children, className }) => {
            if (className) {
                return <CodeBlock className={className}>{children as string}</CodeBlock>
            }
            return (
                <code className={`${firaCode.className} bg-gray-800 dark:bg-gray-900 text-gray-100 px-1.5 py-0.5 rounded-md text-sm`}>
                    {children}
                </code>
            )
        },

        // Table elements
        table: ({ children }) => (
            <div className="overflow-x-auto mb-4">
                <table className="min-w-full border-collapse">
                    {children}
                </table>
            </div>
        ),
        thead: ({ children }) => (
            <thead className="bg-gray-50 dark:bg-gray-700">
                {children}
            </thead>
        ),
        tbody: ({ children }) => (
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {children}
            </tbody>
        ),
        tr: ({ children }) => (
            <tr>
                {children}
            </tr>
        ),
        th: ({ children }) => (
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                {children}
            </th>
        ),
        td: ({ children }) => (
            <td className="px-6 py-4 whitespace-nowrap">
                {children}
            </td>
        ),

        // Links
        a: ({ children, href }) => {
            const isInternal = href && href.startsWith('/')
            if (isInternal) {
                return (
                    <Link href={href} className="text-blue-600 dark:text-blue-400 hover:underline">
                        {children}
                    </Link>
                )
            }
            return (
                <a 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                    {children}
                </a>
            )
        },

        // Horizontal rule
        hr: () => (
            <hr className="my-8 border-t border-gray-300 dark:border-gray-700" />
        ),

        ...components,
    };
}