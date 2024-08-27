'use client'

import { useState } from "react";
import { ModalOverlay, ModalContent, Input, Button } from './AddCarModal.styles';

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
}

interface AddCarModalProps {
    onAddCar: (newCar: ProductType) => void;
    onClose: () => void;
}

export default function AddCarModal({ onAddCar, onClose }: AddCarModalProps) {
    const [newCar, setNewCar] = useState<ProductType>({
        id: Date.now(),
        title: "",
        image: "",
        brand: "",
        model: "",
        color: "",
        price: 0,
        year: new Date().getFullYear(),
        engineType: "",
        transmission: ""
    });
    const [imagePreview, setImagePreview] = useState<string | undefined>(undefined);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, files } = e.target;

        if (type === 'file' && files && files[0]) {
            const file = files[0];
            const fileURL = URL.createObjectURL(file);

            setImagePreview(fileURL);
            setNewCar((prev) => ({ ...prev, image: fileURL }));
        } else {
            setNewCar((prev) => ({
                ...prev,
                [name]: name === 'year' ? Number(value) : value
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newCar.image) {
            onAddCar(newCar);
            onClose();
        } else {
            alert("Please upload an image.");
        }
    };

    return (
        <ModalOverlay>
            <ModalContent>
                <h1>Добавление машины</h1>
                <form onSubmit={handleSubmit}>

                    {imagePreview && (
                        <img
                            src={imagePreview as string}
                            alt={newCar.title || 'Image preview'}
                            width={200}
                            height={150}
                        />
                    )}
                    <Input
                        type="text"
                        name="title"
                        value={newCar.title}
                        onChange={handleChange}
                        placeholder="Заголовок"
                        required
                    />
                    <Input
                        type="text"
                        name="brand"
                        value={newCar.brand}
                        onChange={handleChange}
                        placeholder="Бренд"
                        required
                    />
                    <Input
                        type="text"
                        name="model"
                        value={newCar.model}
                        onChange={handleChange}
                        placeholder="Модель"
                        required
                    />
                    <Input
                        type="text"
                        name="color"
                        value={newCar.color}
                        onChange={handleChange}
                        placeholder="Цвет"
                        required
                    />
                    <Input
                        type="number"
                        name="price"
                        value={newCar.price}
                        onChange={handleChange}
                        placeholder="Цена"
                        required
                    />
                    <Input
                        type="text"
                        name="engineType"
                        value={newCar.engineType}
                        onChange={handleChange}
                        placeholder="Тип двигателя"
                        required
                    />
                    <Input
                        type="text"
                        name="transmission"
                        value={newCar.transmission}
                        onChange={handleChange}
                        placeholder="Передача инфекции"
                        required
                    />
                    <Input
                        type="number"
                        name="year"
                        value={newCar.year}
                        onChange={handleChange}
                        placeholder="Год"
                        required
                    />
                    <Input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                        required
                    />
                    <Button type="submit">Добавить машину</Button>
                    <Button type="button" onClick={onClose}>Отмена</Button>
                </form>
            </ModalContent>
        </ModalOverlay>
    );
}
