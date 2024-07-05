"use client"
import { createMessage } from "@/actions/form-actions";
import styles from "./../app/page.module.css";
import { useRef } from "react";


const ContactForm = () => {

    const formRef = useRef<HTMLFormElement>(null)
  return (
    <div >
      <form ref ={formRef} action={async formData => {
        const newMessage = await createMessage(formData)
        
        newMessage? alert('Mensaje enviado') : alert('Hay un error en los campos del formulario')
        formRef.current?.reset()
      }}>
        <input type="text" placeholder="Nombre" 
          
          name="userName"
        />
        <input type="text" placeholder="Correo" 
          
          name="userEmail"
        />

        <textarea name="userMessage" id="" placeholder="Dejame un mensaje"></textarea>
        <button
          >Enviar</button>
      </form>
    </div>
  )
}

export default ContactForm