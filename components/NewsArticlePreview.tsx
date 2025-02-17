import Image from 'next/image';
import Link from 'next/link';
import placeholderImage from '@/public/placeholderImage.png';

interface NewsArticlePreviewProps {
    title: string;
    imageUrl: string | null;
    articleUrl: string;
}

function isValidImageUrl(url: string | null): boolean {
    if (!url) return false;
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

export default function NewsArticlePreview({ title, imageUrl, articleUrl }: NewsArticlePreviewProps) {
    const safeImageUrl = (isValidImageUrl(imageUrl) && imageUrl) || placeholderImage.src;
        
    return (
        <Link href={articleUrl} target="_blank" rel="noopener noreferrer" 
            className="block bg-white dark:bg-[#1e1e1e] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
        >
            <div className="relative h-48 w-full">
                <Image
                    src={safeImageUrl}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority
                />
            </div>
            <div className="p-4">
                <h2 className="font-bold text-lg line-clamp-2">{title}</h2>
            </div>
        </Link>
    );
}
