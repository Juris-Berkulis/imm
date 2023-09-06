export type PageType = 'home' | 'article';

export interface Meta {
    title: string,
    description: string,
    slug: string,
};

export type ArticleLink = `/article-${number}`;

export interface Article {
    title: string, 
    link: ArticleLink, 
    image: `https://devtwit8.ru/img/${string}.${string}`,
};

export interface Body {
    type: string, 
    id: string, 
    data: {
        title: string, 
        articles: Array<Article>,
    },
};

export interface FetchResponse {
    page_type: PageType,
    meta: Meta,
    body: [Body],
};
