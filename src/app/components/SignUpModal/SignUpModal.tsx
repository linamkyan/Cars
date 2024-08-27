'use client'

import { useState } from "react";
import { ModalOverlay, ModalContent, Input, Button } from './SignUpModal.styles';

interface SignUpModalProps {
    onSignUp: (user: { email: string; password: string; name: string }) => void;
    onClose: () => void;
    error: string | null;
}

export default function SignUpModal({ onSignUp, onClose, error }: SignUpModalProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSignUp({ email, password, name });
    };

    return (
        <ModalOverlay>
            <ModalContent>
                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        required
                    />
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    {error && <p>{error}</p>}
                    <Button type="submit">Регистрация</Button>
                    <Button type="button" onClick={onClose}>Отмена</Button>
                </form>
            </ModalContent>
        </ModalOverlay>
    );
}
