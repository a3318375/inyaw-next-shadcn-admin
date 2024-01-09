"use client"

import Image from "next/image";
import TeamSwitcher from "@/components/team-switcher";
import {MainNav} from "@/components/main-nav";
import {Search} from "@/components/search";
import {UserNav} from "@/components/user-nav";

export function MainLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <div className="hidden flex-col md:flex">
                <div className="border-b">
                    <div className="flex h-16 items-center px-4">
                        <TeamSwitcher/>
                        <MainNav className="mx-6"/>
                        <div className="ml-auto flex items-center space-x-4">
                            <Search/>
                            <UserNav/>
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </>
    )
}