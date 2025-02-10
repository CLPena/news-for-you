import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    fullWidth?: boolean;
}

export default function Button({ label, fullWidth = false, ...props }: ButtonProps) {
    return (
        <button
            className={`bg-[#0a0a0a] text-[#ffffff] font-bold px-4 py-2 rounded-md hover:bg-[#5a5a5a] transition-colors ${
                fullWidth ? 'w-full' : ''
            }`}
            {...props}
        >
            {label}
        </button>
    );
}
