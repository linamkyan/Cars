'use client'

import { PageContainer, ProductHeader, ProductImage, DetailSection, DetailTitle, DetailText } from './page.styles';

interface ProductType {
    id: number;
    title: string;
    image: string;
    brand: string;
    model: string;
    color: string;
    price: number;
    year: number;
    engineType: string;
    transmission: string;
    range?: number;
}

interface Params {
    id: string;
}

async function getProduct(id: string): Promise<ProductType | null> {
    try {
        const res = await fetch('http://localhost:3000/mockData/carItemsApi.json');
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        const data = await res.json();
        const products: ProductType[] = data.products;
        return products.find(p => p.id.toString() === id) || null;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

export default async function ProductPage({ params }: { params: Params }) {
    const product = await getProduct(params.id);

    return product ? (
        <PageContainer>
            <ProductHeader>Product Details</ProductHeader>
            <ProductImage src={product.image} alt={product.title} />
            <DetailSection>
                <DetailTitle>Brand</DetailTitle>
                <DetailText>{product.brand}</DetailText>
            </DetailSection>
            <DetailSection>
                <DetailTitle>Color</DetailTitle>
                <DetailText>{product.color}</DetailText>
            </DetailSection>
            <DetailSection>
                <DetailTitle>Model</DetailTitle>
                <DetailText>{product.model}</DetailText>
            </DetailSection>
            <DetailSection>
                <DetailTitle>Year</DetailTitle>
                <DetailText>{product.year}</DetailText>
            </DetailSection>
            <DetailSection>
                <DetailTitle>Range</DetailTitle>
                <DetailText>{product.range}</DetailText>
            </DetailSection>
            <DetailSection>
                <DetailTitle>Engine Type</DetailTitle>
                <DetailText>{product.engineType}</DetailText>
            </DetailSection>
            <DetailSection>
                <DetailTitle>Transmission</DetailTitle>
                <DetailText>{product.transmission}</DetailText>
            </DetailSection>
        </PageContainer>
    ) : (
        <PageContainer>
            <ProductHeader>Продукт не найден</ProductHeader>
        </PageContainer>
    );
}
