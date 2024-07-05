"use client"
import { createMessage } from "@/actions/form-actions";
import styles from "./../app/page.module.css";
import { useRef } from "react";


const ContactForm = () => {

    const formRef = useRef<HTMLFormElement>(null)
  return (
    <div className="flex justify-center items-center h-screen">
      <form ref ={formRef} action={async formData => {
        const newMessage = await createMessage(formData)
        
        newMessage? alert('Mensaje enviado') : alert('Hay un error en los campos del formulario')
        formRef.current?.reset()
      }}>
        <input type="text" placeholder="Nombre" 
          className="border border-gray-300 rounded-md p-2 block mb-2"
          name="userName"
        />
        <input type="text" placeholder="Correo" 
          className="border border-gray-300 rounded-md p-2 block"
          name="userEmail"
        />

        <textarea name="userMessage" id="" placeholder="Dejame un mensaje"></textarea>
        <button
          className="bg-blue-500 text-white p-2 rounded-md mt-2 block w-full"
        >Enviar</button>
      </form>
    </div>
  )
}

export default ContactForm