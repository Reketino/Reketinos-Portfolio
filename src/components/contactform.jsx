"use client";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSent(true);
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          setErrorMsg("Noe gikk galt, prøv igjen senere.");
          setLoading(false);
          console.error(error);
        }
      );
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-neutral-800 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-white">Kontakt meg</h2>

      <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="user_name"
          placeholder="Navn"
          required
          className="p-3 rounded-lg bg-neutral-700 text-white outline-none"
        />

        <input
          type="email"
          name="user_email"
          placeholder="E-post"
          required
          className="p-3 rounded-lg bg-neutral-700 text-white outline-none"
        />

        <textarea
          name="message"
          placeholder="Melding"
          rows="5"
          required
          className="p-3 rounded-lg bg-neutral-700 text-white outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="p-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-semibold disabled:opacity-50"
        >
          {loading ? "Sender..." : "Send melding"}
        </button>

        {isSent && (
          <p className="text-green-400 font-medium">Meldingen ble sendt! 👍</p>
        )}

        {errorMsg && (
          <p className="text-red-400 font-medium">{errorMsg}</p>
        )}
      </form>
    </div>
  );
}

