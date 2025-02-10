import { NextResponse } from 'next/server';

const BASE_URL = 'https://newsapi.org/v2';
const TOP_HEADLINES_ENDPOINT = '/top-headlines';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const categories = searchParams.get('categories');

    const response = await fetch(
        `${BASE_URL}${TOP_HEADLINES_ENDPOINT}?country=us&category=${categories}&apiKey=${process.env.NEWS_API_KEY}`
    );
    const data = await response.json();
    
    return NextResponse.json(data);
}