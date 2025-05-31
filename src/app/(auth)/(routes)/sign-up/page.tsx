"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function SignUpPage() {
  const [username, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("http://13.54.145.211:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.message || "Registrasi gagal")

      window.location.href = "/sign-in"
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("Registrasi gagal")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <form
        onSubmit={handleSubmit}
        className="bg-card shadow-md rounded-lg p-8 w-full max-w-md space-y-6 border border-border"
      >
        <h2 className="text-2xl font-bold text-center mb-2 text-foreground">Daftar Akun Spendee</h2>
        <p className="text-muted-foreground text-center mb-4 text-sm">
          Silakan isi data di bawah untuk membuat akun baru
        </p>
        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-foreground" htmlFor="username">
              Nama Lengkap
            </label>
            <Input
              id="username"
              type="text"
              placeholder="Nama Lengkap"
              value={username}
              onChange={(e) => setName(e.target.value)}
              required
              autoFocus
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-foreground" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-foreground" htmlFor="password">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        {error && <p className="text-destructive text-sm text-center">{error}</p>}
        <Button type="submit" className="w-full mt-2" disabled={loading}>
          {loading ? "Loading..." : "Daftar"}
        </Button>
        <Button type="button" className="w-full mt-2" disabled>
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
  )
}