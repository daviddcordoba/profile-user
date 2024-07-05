"use client"
import { createMessage } from "@/actions/form-actions";
import styles from "./../app/page.module.css";
import { useRef } from "react";


const ContactForm = () => {

    const formRef = useRef<HTMLFormElement>(null)
    
  return (
    <div className={styles.formContainer}>
    <h2>Contactame</h2>
      <form ref ={formRef} action={async formData => {
        const newMessage = await createMessage(formData)
        if (!newMessage || 'error' in newMessage) {
            const errorMessage = newMessage ? newMessage.error : 'Error al enviar el mensaje.';
            alert(`Error: ${errorMessage}`);
          } else {
            alert('Mensaje enviado');
            formRef.current?.reset();
          }
      }}>
        <input type="text" placeholder="Nombre" 
          
          name="userName"
        />
        <input type="text" placeholder="Correo" 
          
          name="userEmail"
        />

        <textarea name="userMessage" rows={2} id="" placeholder="Dejame un mensaje"></textarea>
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default ContactForm