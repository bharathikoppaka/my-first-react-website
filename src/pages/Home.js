import { useEffect, useState } from "react";

function Home() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
      alt: "Modern office workspace"
    },
    {
      src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80",
      alt: "Team working on web project"
    },
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
      alt: "Laptop on desk with code editor"
    }
  ];

  const [index, setIndex] = useState(0);

  // Slider interval
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // SEO: title and meta description for React 19
  useEffect(() => {
    document.title = "Home | MyCompany";

    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "MyCompany builds responsive, fast, and scalable websites. Contact us for UI/UX, web development, and SEO services."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "MyCompany builds responsive, fast, and scalable websites. Contact us for UI/UX, web development, and SEO services.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <>
      {/* HERO SLIDER */}
      <section
        className="hero-slider"
        style={{ backgroundImage: `url(${images[index].src})` }}
        aria-label="Hero Slider"
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to My Company</h1>
          <p>We build amazing websites for growing businesses</p>
          </div>
          <div className="slider-dots">
  {images.map((_, i) => (
    <div
      key={i}
      className={`dot ${index === i ? "active" : ""}`}
      onClick={() => setIndex(i)}
    ></div>
  ))}
</div>

        
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          <article className="service-card">
            <h3>Web Development</h3>
            <p>Responsive, fast and scalable websites.</p>
          </article>

          <article className="service-card featured">
            <h3>UI / UX Design</h3>
            <p>Beautiful interfaces that convert users.</p>
          </article>

          <article className="service-card">
            <h3>SEO Services</h3>
            <p>Improve rankings and online visibility.</p>
          </article>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2 className="section-title light">Testimonials</h2>
        <blockquote className="testimonial-box">
          <p>“Great service and support. Highly professional team.”</p>
          <footer>— Happy Client</footer>
        </blockquote>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2 className="section-title">Contact Us</h2>
        <form className="contact-form">
          <label>
            Name
            <input type="text" placeholder="Your Name" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="Your Email" required />
          </label>
          <label>
            Message
            <textarea placeholder="Your Message" rows="5" required />
          </label>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
}

export default Home;
