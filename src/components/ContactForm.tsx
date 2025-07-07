import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      // SOSTITUIRE CON L'URL REALE DI FORMSPREE
      const response = await axios.post('https://formspree.io/f/YOUR_FORM_ID', data);
      
      if (response.status === 200) {
        setIsSuccess(true);
        reset();
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center p-8 bg-dark-surface border border-neon-green/50 rounded-lg">
        <h3 className="text-2xl font-bold text-neon-green mb-4">Messaggio inviato con successo!</h3>
        <p className="text-gray-300">Grazie per avermi contattato. Ti risponderò il prima possibile.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neon-cyan mb-2">
            Nome
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Il nome è obbligatorio' })}
            className={`w-full bg-dark-surface border ${
              errors.name ? 'border-red-500' : 'border-neon-purple/50'
            } rounded-lg p-3 focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan outline-none transition`}
            placeholder="Il tuo nome"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neon-cyan mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'L\'email è obbligatoria',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Inserisci un indirizzo email valido',
              },
            })}
            className={`w-full bg-dark-surface border ${
              errors.email ? 'border-red-500' : 'border-neon-purple/50'
            } rounded-lg p-3 focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan outline-none transition`}
            placeholder="latuaemail@esempio.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neon-cyan mb-2">
            Messaggio
          </label>
          <textarea
            id="message"
            {...register('message', { required: 'Il messaggio è obbligatorio' })}
            rows={5}
            className={`w-full bg-dark-surface border ${
              errors.message ? 'border-red-500' : 'border-neon-purple/50'
            } rounded-lg p-3 focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan outline-none transition`}
            placeholder="Scrivi qui il tuo messaggio..."
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>

        {isError && (
          <p className="text-red-500 text-center">
            Si è verificato un errore durante l'invio. Riprova più tardi.
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-neon-purple text-white font-bold py-3 px-6 rounded-lg hover:bg-neon-cyan transition-colors duration-300 self-center disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
        </button>
        {/* Honeypot field for spam protection */}
        <input type="text" name="_gotcha" style={{ display: 'none' }} />
      </form>
    </div>
  );
};

export default ContactForm; 