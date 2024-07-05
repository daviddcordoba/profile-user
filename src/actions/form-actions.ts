"use server";

import { randomUUID } from 'crypto';

// Definir un tipo para los datos del formulario
type FormValues = {
  userName: string;
  userEmail: string;
  userMessage: string;
};

export const createMessage = async (formData: FormData): Promise<FormValues | { error: string }> => {
  // Obtener los valores del formulario utilizando el tipo definido
  const userName = formData.get("userName") as string | null;
  const userEmail = formData.get("userEmail") as string | null;
  const userMessage = formData.get("userMessage") as string | null;

  // Validar que los campos no estén vacíos
  if (!userName || !userEmail || !userMessage) {
    return { error: "Todos los campos son obligatorios." };
  }

  // Validar longitud mínima
  if (userName.length < 2) {
    return { error: "El nombre debe tener al menos 2 caracteres." };
  }

  if (userMessage.length < 10) {
    return { error: "El mensaje debe tener al menos 10 caracteres." };
  }

  // Validar formato del email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(userEmail)) {
    return { error: "El correo electrónico no es válido." };
  }

  // Si pasa las validaciones, retornar los datos del formulario
  return {
    userName: userName,
    userEmail: userEmail,
    userMessage: userMessage
  };
};