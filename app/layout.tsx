import "styles/tailwind.css"
import "react-toastify/dist/ReactToastify.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
