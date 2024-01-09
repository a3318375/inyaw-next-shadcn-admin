import '@/assets/css/globals.css'
import SessionLayout from "@/components/SessionLayout"

export default function SimpleLayout({children}: { children: React.ReactNode }) {
    return (
        <SessionLayout>
            {children}
        </SessionLayout>
    )
}
