"use client";
import React, { useState } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { useSelector } from "react-redux";
import MyBreadcrumb from "../components/ui/MyBreadcrumb";
export default function BookPage() {
  const darkSelector = useSelector((state: any) => state.dark.dark);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setServerMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      console.log(response);

      if (!response.ok) {
        throw new Error(data.error || "Unable to send your message.");
      }

      setStatus("success");
      setServerMessage(data.message || "Message sent successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setServerMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    }
  };
  const dayMode =
    "flex flex-col items-center justify-center min-h-screen py-2 p-7  bg-gradient-to-tr from-[#0b1a2e] via-[#1b2537] to-black  text-gray-700";
  const className =
    "bg-gradient-to-tr from-[#5194df]  via-[#7793d0] to-[#ffffff] text-gray-700  p-7 flex flex-col items-center justify-center min-h-screen py-2  ";

  return (
    <>
      <Header
        about="/#about"
        home="/#home"
        contact="/#Contact"
        projects="/#projects"
      />

      <div className={darkSelector ? className : dayMode}>
        <div className=" w-full">
          <MyBreadcrumb />
        </div>

        <h1 className="text-3xl mt-5 sm:mt-2 font-bold mb-6 text-gray-100">
          Book a Call
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-4 "
        >
          {status === "success" && serverMessage && (
            <div className="bg-green-100 text-green-800 p-4 rounded">
              {serverMessage}
            </div>
          )}
          {status === "error" && serverMessage && (
            <div className="bg-red-100 text-red-800 p-4 rounded">
              {serverMessage}
            </div>
          )}
          <div>
            <label className="block mb-1 font-semibold" htmlFor="name">
              Name
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2"
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2"
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="phone">
              Phone
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2"
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full border border-gray-300 rounded px-3 py-2"
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-pink-300 w-full py-2 rounded font-bold hover:bg-pink-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Book Call"}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
