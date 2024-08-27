'use client'

import { useState, useEffect } from "react";
import SignUpModal from "../components/SignUpModal/SignUpModal";
import SignInModal from "../components/SignInModal/SignInModal";
import AddCarModal from "../components/AddCarModal/AddCarModal";
import { Container, Title, FilterSection, AuthButtons, AuthStatus, ProductsGrid, Button, ByttonsSection, Header } from "./page.styles";
import Product from "../components/Product/Product";
import ErrorModal from "../components/ErrorModal";

interface ProductType {
    id: number;
    title: string;
    price: number;
    image: string;
    year: number;
    brand: string;
    model: string;
    color: string;
    engineType: string;
    transmission: string;
    range?: number;
}

interface UserType {
    email: string;
    name: string;
    password: string;
}

async function fetchProducts(): Promise<ProductType[]> {
    const res = await fetch('http://localhost:3000/mockData/carItemsApi.json');
    return (await res.json()).products;
}

export default function Products() {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [sortedProducts, setSortedProducts] = useState<ProductType[]>([]);
    const [isAddCarModalOpen, setIsAddCarModalOpen] = useState(false);
    const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<UserType | null>(null);
    const [authError, setAuthError] = useState<string | null>(null);
    const [addCarError, setAddCarError] = useState<string | null>(null);

    useEffect(() => {
        fetchProducts().then(setProducts);
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            setIsAuthenticated(true);
        }
    }, []);

    useEffect(() => {
        setSortedProducts(products);
    }, [products]);

    const updateSortedProducts = (newProducts: ProductType[]) => {
        setSortedProducts([...newProducts]);
    };

    const sortOldestFirst = () => updateSortedProducts([...products].sort((a, b) => a.year - b.year));
    const sortNewestFirst = () => updateSortedProducts([...products].sort((a, b) => b.year - a.year));
    const sortByPriceAscending = () => updateSortedProducts([...products].sort((a, b) => a.price - b.price));
    const sortByPriceDescending = () => updateSortedProducts([...products].sort((a, b) => b.price - a.price));

    const addCar = (newCar: ProductType) => {
        if (isAuthenticated) {
            const updatedProducts = [...products, newCar];
            setProducts(updatedProducts);
            updateSortedProducts(updatedProducts);
            setIsAddCarModalOpen(false);
            setAddCarError(null); // Clear any previous errors
        } else {
            console.log("Setting addCarError");
            setAddCarError("Чтобы добавить автомобиль, нужно войти в систему.");
        }
    };

    const handleSignIn = (user: { email: string; password: string }) => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser: UserType = JSON.parse(storedUser);
            if (user.email === parsedUser.email && user.password === parsedUser.password) {
                setIsAuthenticated(true);
                setUser(parsedUser);
                setAuthError(null);
                setIsSignInModalOpen(false);
            } else {
                setAuthError("Неверный email или пароль");
            }
        } else {
            setAuthError("Пожалуйста, сначала зарегистрируйтесь");
        }
    };

    const handleSignUp = (newUser: { email: string; password: string; name: string }) => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            if (newUser.email === parsedUser.email) {
                setAuthError("Пользователь уже зарегистрирован");
            } else {
                localStorage.setItem('user', JSON.stringify(newUser));
                setIsAuthenticated(true);
                setUser(newUser);
                setAuthError(null);
                setIsSignUpModalOpen(false);
            }
        } else {
            localStorage.setItem('user', JSON.stringify(newUser));
            setIsAuthenticated(true);
            setUser(newUser);
            setAuthError(null);
            setIsSignUpModalOpen(false);
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <Container>
            <Header>
                <Title>Машины</Title>
                <>
                    {!isAuthenticated ? (
                        <AuthButtons>
                            <Button onClick={() => setIsSignUpModalOpen(true)}>Sign Up</Button>
                            <Button onClick={() => setIsSignInModalOpen(true)}>Sign In</Button>
                        </AuthButtons>
                    ) : (
                        <AuthStatus>
                            <h2>Привет {user?.name}!</h2>
                            <Button onClick={handleLogout}>Log Out</Button>
                        </AuthStatus>
                    )}
                </>
            </Header>
            <ByttonsSection>
                <>
                    <FilterSection>
                        <h2>Фильтр по году</h2>
                        <Button onClick={sortOldestFirst}>Сначала старые</Button>
                        <Button onClick={sortNewestFirst}>Сначала новые</Button>
                    </FilterSection>
                    <FilterSection>
                        <h2>Фильтр по цене</h2>
                        <Button onClick={sortByPriceAscending}>Цена по возрастанию</Button>
                        <Button onClick={sortByPriceDescending}>Цена по убыванию</Button>
                    </FilterSection>
                </>
                <Button onClick={() => {
                    if (!isAuthenticated) {
                        setAddCarError("Чтобы добавить автомобиль, нужно войти в систему.");
                    } else {
                        setIsAddCarModalOpen(true);
                    }
                }}>Добавить автомобиль</Button>
            </ByttonsSection>

            <ProductsGrid>
                {sortedProducts.map(({ id, title, price, image, year }) => (
                    <Product key={id} id={id} title={title} price={price} image={image} year={year} />
                ))}
            </ProductsGrid>

            {isAddCarModalOpen && (
                <AddCarModal onAddCar={addCar} onClose={() => setIsAddCarModalOpen(false)} />
            )}
            {isSignInModalOpen && (
                <SignInModal
                    onSignIn={handleSignIn}
                    onClose={() => setIsSignInModalOpen(false)}
                    error={authError}
                />
            )}
            {isSignUpModalOpen && (
                <SignUpModal
                    onSignUp={handleSignUp}
                    onClose={() => setIsSignUpModalOpen(false)}
                    error={authError}
                />
            )}
            {addCarError && (
                <ErrorModal error={addCarError} onClose={() => setAddCarError(null)} />
            )}
        </Container>
    );
}
