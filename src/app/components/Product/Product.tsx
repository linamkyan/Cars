import ProductButton from "../ProductButton/ProductButton";
import {ProductContainer, StyledImage, Title, Price, Year} from './Product.styles'

interface ProductProps {
    key?: React.Key;
    image?: string;
    title: string;
    price: number;
    id: number;
    noButton?: boolean;
    year: number;
}

export default function Product({ image, title, price, year, id, noButton = false }: ProductProps) {
    return (
        <ProductContainer>
            {image && (
                <StyledImage
                    src={image}
                    alt={title}
                    width={200}
                    height={150}
                    quality={80}
                />
            )}
            <Title>{title}</Title>
            <Price>{price}$</Price>
            <Year>{year}</Year>
            {!noButton && <ProductButton id={id} />}
        </ProductContainer>
    );
}
