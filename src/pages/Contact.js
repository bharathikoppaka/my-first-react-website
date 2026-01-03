import { useEffect, useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // SEO: title & meta description
  useEffect(() => {
    document.title = "Contact Us | MyCompany";

    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Contact MyCompany for professional web development, UI/UX design, and digital services."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Contact MyCompany for professional web development, UI/UX design, and digital services.";
      document.head.appendChild(meta);
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validate()) return;
  
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
          }),
        }
      );
  
      if (!response.ok) {
        throw new Error("Failed to submit");
      }
  
      // Success
      setForm({ name: "", email: "", message: "" });
      setSuccess(true);
      setErrors({});
  
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      setErrors({ api: "Something went wrong. Please try again." });
    }
  };
  

  return (
    <section id="contact" className="contact-page">
      <h1>Contact MyCompany</h1>
      <p>We’d love to hear from you! Fill out the form below:</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            aria-required="true"
          />
        </label>
        {errors.name && <span className="error">{errors.name}</span>}

        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
            aria-required="true"
          />
        </label>
        {errors.email && <span className="error">{errors.email}</span>}

        <label>
          Message
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            aria-required="true"
          />
        </label>
        {errors.message && <span className="error">{errors.message}</span>}

        <button type="submit">Send Message</button>

        {success && <p className="success">Message sent successfully ✅</p>}
      </form>
    </section>
  );
}

export default Contact;
