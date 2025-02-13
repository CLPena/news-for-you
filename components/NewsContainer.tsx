'use client';

import { useEffect, useState } from 'react';
import NewsArticlePreview from '@/components/NewsArticlePreview';

interface Article {
    title: string;
    urlToImage: string | null;
    url: string;
}

interface NewsContainerProps {
    category: string | null;
}

export default function NewsContainer({ category }: NewsContainerProps) {
    const [articles, setArticles] = useState<Article[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchNews() {
            try {
                const url = `/api/news?categories=${category || 'general'}`;
                const response = await fetch(url);
                if (!response.ok) throw new Error('Failed to fetch news');
                const data = await response.json();
                setArticles(data.articles.slice(0, 12));
            } catch (err) {
                console.error('Error:', err);
                setError(err instanceof Error ? err.message : 'Failed to load news');
            }
        }

        if (category) {
            fetchNews();
        }
    }, [category]);

    if (error) return <div>Error: {error}</div>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-4">
            {articles.map((article, index) => (
                <NewsArticlePreview
                    key={`${article.url}-${index}`}
                    title={article.title}
                    imageUrl={article.urlToImage}
                    articleUrl={article.url}
                />
            ))}
        </div>
    );
}
