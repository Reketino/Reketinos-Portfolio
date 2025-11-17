"use client";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import TechEmailBg from "./techemailbg";

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
          setErrorMsg("Something went wrong, try again later.");
          setLoading(false);
          console.error(error);
        }
      );
  };

  return (
    <main className="relative w-full max-w-lg mx-auto">
      <TechEmailBg />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 p-8 rounded-2xl
    bg-white/10 backdrop-blur-xl
    border border-white/10
    shadow-[0_0_30px_rgba(0,0,0,0.5)]
    text-white"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Contact Me</h2>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-5"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            required
            className="p-3 rounded-lg bg-neutral-900/40 border border-neutral-700
          focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40
          transition outline-none"
          />

          <input
            type="email"
            name="user_email"
            placeholder="E-mail"
            required
            className="p-3 rounded-lg bg-neutral-900/40 border border-neutral-700
          focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40
          transition outline-none"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
            className="p-3 rounded-lg bg-neutral-900/40 border border-neutral-700
          focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40
          transition outline-none resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="p-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send message"}
          </button>

          {isSent && (
            <p className="text-green-400 text-center font-medium">
              Message sent! 👍
            </p>
          )}

          {errorMsg && (
            <p className="text-red-400 text-center font-medium">{errorMsg}</p>
          )}
        </form>
      </motion.div>
    </main>
  );
}
