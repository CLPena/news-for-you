'use client'

import { Highlight, themes, Language } from "prism-react-renderer"
import { Fira_Code } from 'next/font/google'
import { useTheme } from 'next-themes'

const firaCode = Fira_Code({ subsets: ['latin'] })

interface CodeBlockProps {
    children: string
    className?: string
}

export default function CodeBlock({ children, className }: CodeBlockProps) {
    const { theme } = useTheme()
    const language = className?.replace(/language-/, '') || 'typescript'

    return (
        <div className="overflow-x-auto">
            <Highlight
                theme={theme === 'dark' ? themes.nightOwl : themes.github}
                code={children}
                language={language as Language}
            >
                {({ tokens, getLineProps, getTokenProps }) => (
                    <pre className={`${firaCode.className} table w-full`}>
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line })} className="table-row">
                                <span className="table-cell text-right pr-4 text-gray-500 select-none w-12">
                                    {i + 1}
                                </span>
                                <span className="table-cell whitespace-pre">
                                    {line.map((token, key) => (
                                        <span key={key} {...getTokenProps({ token })} />
                                    ))}
                                </span>
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
        </div>
    )
} 