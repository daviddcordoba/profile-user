import { useRef, FormEvent } from 'react';
import { createMessage } from '@/actions/form-actions';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const newMessage = await createMessage(formData);

    if ('error' in newMessage) {
      alert(`Error: ${newMessage.error}`);
    } else {
      alert('Mensaje enviado');
      formRef.current.reset();
    }
  };

  return (
    <div >
      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          name="userName"
        />
        <input
          type="text"
          placeholder="Correo"
          name="userEmail"
        />

        <textarea
          name="userMessage"
          placeholder="Dejame un mensaje"
          rows={4}
        ></textarea>

        <button
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;