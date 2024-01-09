import '@/assets/css/globals.css'
import {MainLayout} from "@/components/main-layout";
import SessionLayout from "@/components/SessionLayout"

export default function SimpleLayout({children}: { children: React.ReactNode }) {
    return (
        <SessionLayout>
            <MainLayout>
                {children}
            </MainLayout>
        </SessionLayout>
    )
}
