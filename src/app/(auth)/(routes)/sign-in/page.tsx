"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://13.54.145.211:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Login gagal");

      localStorage.setItem("token", data.token);

      const decoded = jwtDecode<{ id: string; email: string }>(data.token);

      // validasi
      if (!localStorage.getItem("userId")) {
        localStorage.setItem("userId", decoded.id);
        localStorage.setItem("userEmail", decoded.email);
      }

      window.location.href = "/dashboard";
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Terjadi kesalahan saat login");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <form
        onSubmit={handleSubmit}
        className="bg-card shadow-md rounded-lg p-8 w-full max-w-md space-y-6 border border-border"
      >
        <h2 className="text-2xl font-bold text-center mb-2 text-foreground">
          Masuk ke Spendee
        </h2>
        <p className="text-muted-foreground text-center mb-4 text-sm">
          Silakan masukan detail akun anda untuk melanjutkan
        </p>
        <div className="space-y-4">
          <div>
            <label
              className="block mb-1 text-sm font-medium text-foreground"
              htmlFor="email"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
            />
          </div>
          <div>
            <label
              className="block mb-1 text-sm font-medium text-foreground"
              htmlFor="password"
            >
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        {error && (
          <p className="text-destructive text-sm text-center">{error}</p>
        )}
        <Button type="submit" className="w-full mt-2" disabled={loading}>
          {loading ? "Loading..." : "Masuk"}
        </Button>
        <div className="text-center text-sm mt-4 text-muted-foreground">
          Belum punya akun?{" "}
          <a href="/sign-up" className="text-primary hover:underline">
            Daftar
          </a>
        </div>
      </form>
    </div>
  );
}
