import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return <SignUp appearance={{
        elements: {
          formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white font-semibold",
          card: "shadow-lg rounded-lg",
          headerTitle: "text-2xl font-bold text-center",
        },
        variables: {
          colorPrimary: "#1D4ED8", // warna utama
        },
      }}
    />
}