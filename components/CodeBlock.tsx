import { Highlight, themes } from "prism-react-renderer"
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({ subsets: ['latin'] })

interface CodeBlockProps {
    children: string
    className?: string
}

export default function CodeBlock({ children, className }: CodeBlockProps) {
    const language = className?.replace(/language-/, '') || 'typescript'

    return (
        <Highlight 
            theme={themes.nightOwl}
            code={children.trim()}
            language={language}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={`${className} ${firaCode.className} rounded-lg overflow-x-auto mb-4`} style={style}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })} className="table-row">
                            <span className="table-cell text-gray-500 pr-4 select-none text-right">{i + 1}</span>
                            <span className="table-cell">
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token })} />
                                ))}
                            </span>
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    )
} 