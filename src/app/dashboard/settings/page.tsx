"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"
import { toast } from "sonner"

export default function EditProfilePage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [profilePic, setprofilePic] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  function normalizeImageUrl(url: string | null) {
    if (!url) return null
    if (url.startsWith("data:image")) return url
    if (url.startsWith("http")) return url
    if (url.startsWith("/")) return url
    return "/" + url
  }

  useEffect(() => {
    const storedName = localStorage.getItem("userName") || ""
    const storedEmail = localStorage.getItem("userEmail") || ""
    const storedPic = localStorage.getItem("userProfilePic") || ""

    setName(storedName)
    setEmail(storedEmail)
    setPreview(storedPic ? normalizeImageUrl(storedPic) : null)
  }, [])

  // Preview foto sebelum upload
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setprofilePic(file)
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => setPreview(reader.result as string)
      reader.readAsDataURL(file)
    } else {
      setPreview(null)
    }
  }

  // Update profile
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData()
    formData.append("name", name)
    formData.append("email", email)
    if (profilePic) {
      formData.append("profilePic", profilePic)
    }

    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/user/profile`, {
        method: "PUT",
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        body: formData,
      })

      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.message || "Gagal update profil")

      if (data.user) {
        const oldId = localStorage.getItem("userId")
        const oldName = localStorage.getItem("userName")
        const oldEmail = localStorage.getItem("userEmail")
        const oldPic = localStorage.getItem("userProfilePic")

        if (data.user._id !== oldId) localStorage.setItem("userId", data.user._id)
        if (data.user.name !== oldName) localStorage.setItem("userName", data.user.name || "")
        if (data.user.email !== oldEmail) localStorage.setItem("userEmail", data.user.email || "")
        if (data.user.profilePic !== oldPic) {
          const picUrl = data.user.profilePic
            ? data.user.profilePic.startsWith("http")
              ? data.user.profilePic
              : `https://ruangundanganmalang.biz.id/${data.user.profilePic}`
            : "";
          localStorage.setItem("userProfilePic", picUrl);
        }

        window.dispatchEvent(new Event("userProfileUpdated"))
      }

      toast.success("Profil berhasil diperbarui!")
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Gagal memperbarui profil.")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  // Delete profile picture dengan toast konfirmasi
  const handleDeletePhoto = () => {
    toast(
      "Hapus foto profil?",
      {
        description: "Tindakan ini tidak dapat dibatalkan.",
        action: {
          label: "Hapus",
          onClick: async () => {
            setDeleting(true)
            const token = typeof window !== "undefined" ? localStorage.getItem("token") : null
            try {
              const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/user/profile-pic`, {
                method: "DELETE",
                headers: {
                  "Authorization": `Bearer ${token}`,
                },
              })
              const data = await res.json().catch(() => ({}))
              if (!res.ok) {
                throw new Error(data.message || "Gagal hapus foto")
              }
              setprofilePic(null)
              setPreview(null)
              if (fileInputRef.current) fileInputRef.current.value = ""
              localStorage.removeItem("userProfilePic")
              window.dispatchEvent(new Event("userProfileUpdated"))
              toast.success("Foto profil berhasil dihapus!")
            } catch (error) {
              toast.error(error instanceof Error ? error.message : "Gagal menghapus foto profil.")
            } finally {
              setDeleting(false)
            }
          }
        },
        cancel: {
          label: "Batal",
          onClick: () => {}
        }
      }
    )
  }

  return (
    <div className="mt-16 flex items-center justify-center bg-background">
      <form
        onSubmit={handleUpdate}
        encType="multipart/form-data"
        className="bg-card md:shadow-md shadow-sm rounded-lg p-8 w-full max-w-md space-y-6 border border-border"
      >
        <div className="flex justify-center mb-6">
          <div className="relative">
            {preview ? (
              <Image
                src={preview}
                alt="Preview"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full object-cover border border-primary ring-2 ring-primary/30"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center border border-primary ring-2 ring-primary/30">
                <User className="w-16 h-16 text-muted-foreground" />
              </div>
            )}
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-2 text-foreground">Edit Profil</h2>
        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-foreground">Nama</label>
            <Input
              type="text"
              placeholder="Nama Lengkap"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-foreground">Email</label>
            <Input
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-foreground">Foto Profil</label>
            <div className="flex items-center gap-4">
              <Input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
              />
              <Button
                type="button"
                variant="destructive"
                size="sm"
                onClick={handleDeletePhoto}
                disabled={deleting}
              >
                {deleting ? "Menghapus..." : "Hapus Foto"}
              </Button>
            </div>
          </div>
        </div>
        <Button type="submit" className="w-full mt-2" disabled={loading}>
          {loading ? "Menyimpan..." : "Simpan Perubahan"}
        </Button>
      </form>
    </div>
  )
}