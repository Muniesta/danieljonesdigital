export interface PortfolioItem {
    id: string;
    title: string;
    category: "interiors" | "exteriors" | "product-shots";
    description: string;
    image: string;
    images?: string[];
    featured?: boolean;
    order?: number;
}

export interface PortfolioData {
    items: PortfolioItem[];
}
