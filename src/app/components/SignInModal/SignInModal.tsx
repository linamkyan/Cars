'use client'

import { useState } from "react";
import { ModalOverlay, ModalContent, Input, Button } from './SignInModal.styles';

interface SignInModalProps {
    onSignIn: (user: { email: string; password: string }) => void;
    onClose: () => void;
    error: string | null;
}

export default function SignInModal({ onSignIn, onClose, error }: SignInModalProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSignIn({ email, password });
    };

    return (
        <ModalOverlay>
            <ModalContent>
                <form onSubmit={handleSubmit}>
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
                    <Button type="submit">Войти</Button>
                    <Button type="button" onClick={onClose}>Отмена</Button>
                </form>
            </ModalContent>
        </ModalOverlay>
    );
}
