import { Nunito} from "next/font/google"
import './globals.css'
import Navbar from "./components/navbar/Navbar"
import ClientOnly from "./components/ClientOnly"
import Modal from "./components/Modals/Modal"

export const metadata = {
  title: 'AirBnB Clone',
  description: 'AirBnB Clone Project',
}

const font  = Nunito({
  subsets : ["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal isOpen title="SDE Sandip" actionLabel="SDE sk" />
        <Navbar />
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
