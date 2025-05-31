"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function EditProfilePage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [profilePic, setprofilePic] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

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
// Update profile
const handleUpdate = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  if (profilePic) {
    formData.append("profilePic", profilePic); 
  }

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  try {
    const res = await fetch("http://13.54.145.211:3000/api/user/profile", {
      method: "PUT",
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      body: formData,
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.message || "Gagal update profil");

    alert("Profil berhasil diperbarui!");
  } catch (error) {
    alert(error instanceof Error ? error.message : "Gagal memperbarui profil.");
    console.error(error);
  } finally {
    setLoading(false);
  }
};


  // Delete profile picture
 const handleDeletePhoto = async () => {
  if (!window.confirm("Hapus foto profil?")) return;
  setDeleting(true);

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  try {
    const res = await fetch("http://13.54.145.211:3000/api/user/profile-pic", {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    const data = await res.json().catch(() => ({}));
    
    if (!res.ok) {
      console.error("Response error:", data);
      throw new Error(data.message || "Gagal hapus foto");
    }

    setprofilePic(null);
    setPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";

    alert("Foto profil berhasil dihapus!");
  } catch (error) {
    alert(error instanceof Error ? error.message : "Gagal menghapus foto profil.");
    console.error(error);
  } finally {
    setDeleting(false);
  }
};




  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <form
        onSubmit={handleUpdate}
        encType="multipart/form-data"
        className="bg-card shadow-md rounded-lg p-8 w-full max-w-md space-y-6 border border-border"
      >
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
              {preview && (
                <>
                  <Image
                    src={preview}
                    alt="Preview"
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full object-cover border"
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
                </>
              )}
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