"use server";

import {randomUUID} from 'crypto'

export const createMessage = async (formData: FormData) => {

  const userName = formData.get("userName");
  const userEmail = formData.get("userEmail");
  const userMessage = formData.get("userMessage");

  if (!userName || !userEmail || !userMessage) return;

  console.log(userName)


  return {
    id: randomUUID(),
    name: userName,
    email: userEmail,
    message: userMessage
  }
};