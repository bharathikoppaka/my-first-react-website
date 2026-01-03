import { useState } from "react";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await res.json();

      const admin = users.find(
        (user) => user.email.toLowerCase() === email.toLowerCase()
      );

      if (admin && password === "admin123") {
        localStorage.setItem("admin", "true");
        window.location.href = "/admin/dashboard";
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-page">
      <h1>Admin Login</h1>

      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="hint">
        Demo Password: <strong>admin123</strong>
      </p>
    </section>
  );
}

export default AdminLogin;
