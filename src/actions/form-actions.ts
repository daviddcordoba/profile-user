"use server";

import {randomUUID} from 'crypto'

export const createMessage = async (formData: FormData) => {
    const userName = formData.get("userName") as string | null;
    const userEmail = formData.get("userEmail") as string | null;
    const userMessage = formData.get("userMessage") as string | null;
  

    if (!userName || !userEmail || !userMessage) return;
    
    if (!userName || !userEmail || !userMessage) {
        return { error: "Todos los campos son obligatorios." };
    }

    if (userName.length < 2) {
        return { error: "El nombre debe tener al menos 2 caracteres." };
    }

    if (userMessage.length < 5) {
        return { error: "El mensaje debe tener al menos 5 caracteres." };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
        return { error: "El correo electronico no es válido." };
    }

    return {
        id: randomUUID(),
        name: userName,
        email: userEmail,
        message: userMessage
    }
};