"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { User, Mail, Lock } from "lucide-react";

export default function SignUpPage() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://13.54.145.211:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Registrasi gagal");

      // Simpan username ke localStorage
      localStorage.setItem("userName", username);

      window.location.href = "/sign-in";
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Registrasi gagal");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <form
        onSubmit={handleSubmit}
        className="bg-card shadow-xl rounded-2xl p-10 w-full max-w-md space-y-7 border border-border"
      >
        <div>
          <h2 className="text-3xl font-bold text-center mb-1 text-foreground tracking-tight">
            Daftar Akun Spendee
          </h2>
          <p className="text-muted-foreground text-center mb-4 text-sm">
            Silakan isi data di bawah untuk membuat akun baru
          </p>
        </div>
        <div className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-foreground" htmlFor="username">
              Nama Lengkap
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <User size={18} />
              </span>
              <Input
                id="username"
                type="text"
                placeholder="Nama Lengkap"
                value={username}
                onChange={(e) => setName(e.target.value)}
                required
                autoFocus
                className="pl-10 focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-foreground" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Mail size={18} />
              </span>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-10 focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-foreground" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Lock size={18} />
              </span>
              <Input
                id="password"
                type="password"
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pl-10 focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
        {error && (
          <p className="text-destructive text-sm text-center border border-destructive bg-destructive/10 rounded py-2">
            {error}
          </p>
        )}
        <Button type="submit" className="w-full mt-2" disabled={loading}>
          {loading ? "Loading..." : "Daftar"}
        </Button>
        <Button
          type="button"
          className="w-full mt-2 opacity-70 cursor-not-allowed"
          disabled
          variant="outline"
        >
          Daftar dengan Google (Coming soon)
        </Button>
        <div className="text-center text-sm mt-4 text-muted-foreground">
          Sudah punya akun?{" "}
          <a href="/sign-in" className="text-primary hover:underline">
            Masuk
          </a>
        </div>
      </form>
    </div>
  );
}