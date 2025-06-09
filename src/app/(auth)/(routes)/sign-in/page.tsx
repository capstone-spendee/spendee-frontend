"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
// import { jwtDecode } from "jwt-decode";
import { Mail, Lock } from "lucide-react";

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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message || "Login gagal");

    // Simpan token dan data user
    localStorage.setItem("token", data.token);
    localStorage.setItem("userId", data.user.id);
    localStorage.setItem("userEmail", data.user.email);
    localStorage.setItem("userName", data.user.name);
    localStorage.setItem(
      "userProfilePic",
      data.user.profilePic
        ? data.user.profilePic.startsWith("http")
          ? data.user.profilePic
          : `${process.env.NEXT_PUBLIC_API_BACKEND}/${data.user.profilePic.replace(/^\/+/, "")}`
        : ""
    );

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
        className="bg-card md:shadow-md shadow-sm rounded-2xl p-10 w-full max-w-md space-y-7 border border-border"
      >
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-1 tracking-tight">
            Masuk ke Spendee
          </h2>
          <p className="text-muted-foreground text-center text-sm">
            Silakan masukkan detail akun Anda untuk melanjutkan
          </p>
        </div>
        <div className="space-y-5">
          <div>
            <label
              className="block mb-1 text-sm font-medium text-foreground"
              htmlFor="email"
            >
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
                autoFocus
                className="pl-10"
              />
            </div>
          </div>
          <div>
            <label
              className="block mb-1 text-sm font-medium text-foreground"
              htmlFor="password"
            >
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
                className="pl-10"
              />
            </div>
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
