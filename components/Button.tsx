import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

export default function Button({ label, ...props }: ButtonProps) {
    return (
        <button
            className="bg-[#0a0a0a] text-[#ffffff] px-4 py-2 rounded-md hover:bg-[#5a5a5a] transition-colors font-bold"
            {...props}
        >
            {label}
        </button>
    );
}
