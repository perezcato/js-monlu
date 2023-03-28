import { Inter } from 'next/font/google'
import DashboardLayout from "@/components/layout";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <DashboardLayout />
  )
}
