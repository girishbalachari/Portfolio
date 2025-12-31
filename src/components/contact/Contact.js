import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser"; // Add this import
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Replace with YOUR EmailJS credentials
  const SERVICE_ID = "service_pnjqc5l"; // From EmailJS dashboard
  const TEMPLATE_ID = "template_2wrqxty"; // From EmailJS dashboard
  const PUBLIC_KEY = "f64TEo7vs1NjWcaTg"; // From EmailJS dashboard

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,})$/i);
  };

  const validatePhone = (phone) => {
    return /^\+?[1-9][\d]{0,15}$/.test(phone.replace(/\s/g, ""));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) newErrors.username = "Username is required!";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required!";
    else if (!validatePhone(formData.phoneNumber))
      newErrors.phoneNumber = "Invalid phone number!";
    if (!formData.email.trim()) newErrors.email = "Email is required!";
    else if (!validateEmail(formData.email))
      newErrors.email = "Email is not valid!";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required!";
    if (!formData.message.trim()) newErrors.message = "Message is required!";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSuccessMsg("");
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.username,
        from_email: formData.email,
        phone_number: formData.phoneNumber,
        subject: formData.subject,
        message: formData.message,
      };

      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      if (response.status === 200) {
        setSuccessMsg(
          `Thank you ${formData.username}! Your message has been sent successfully!`
        );

        setFormData({
          username: "",
          phoneNumber: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});

        setTimeout(() => {
          setSuccessMsg("");
        }, 5000);
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setErrors({
        submit: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-auto py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-6 p-4 lgl:p-10 rounded-lg shadow-shadowOne">
            <form
              className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-9"
              onSubmit={handleSend}
            >
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-green-500 text-center text-base tracking-wide animate-bounce rounded p-4 border border-green-400">
                  {successMsg}
                </p>
              )}

              {errors.submit && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-red-500 text-center text-base tracking-wide animate-bounce rounded p-4 border border-red-400">
                  {errors.submit}
                </p>
              )}

              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <label className="text-sm text-gray-400 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className={`contactInput ${
                      errors.username && "outline-red-500 border-red-500"
                    }`}
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                  {errors.username && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.username}
                    </p>
                  )}
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <label className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className={`contactInput ${
                      errors.phoneNumber && "outline-red-500 border-red-500"
                    }`}
                    type="tel"
                    placeholder="Enter phone number"
                    required
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`contactInput ${
                    errors.email && "outline-red-500 border-red-500"
                  }`}
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="flex flex-col gap-4">
                <label className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`contactInput ${
                    errors.subject && "outline-red-500 border-red-500"
                  }`}
                  type="text"
                  placeholder="Enter subject"
                  required
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div className="flex flex-col gap-4">
                <label className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`contactTextArea ${
                    errors.message && "outline-red-500 border-red-500"
                  } resize-none`}
                  rows="8"
                  placeholder="Enter your message"
                  required
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-[#141418] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
