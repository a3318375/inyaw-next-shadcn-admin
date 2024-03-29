"use client"

import Link from "next/link"
import {DropdownMenuTrigger} from "@radix-ui/react-dropdown-menu"
import {MixerHorizontalIcon} from "@radix-ui/react-icons"
import {Table} from "@tanstack/react-table"

import {Button} from "@/components/ui/base/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/base/dropdown-menu"

interface TableViewOptionsProps<TData> {
    table: Table<TData>
}

export function TableViewOptions<TData>({
                                                table,
                                            }: TableViewOptionsProps<TData>) {

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        size="sm"
                        className="ml-auto hidden h-8 lg:flex"
                    >
                        <MixerHorizontalIcon className="mr-2 h-4 w-4"/>
                        View
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[150px]">
                    <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    {table
                        .getAllColumns()
                        .filter(
                            (column) =>
                                typeof column.accessorFn !== "undefined" && column.getCanHide()
                        )
                        .map((column) => {
                            return (
                                <DropdownMenuCheckboxItem
                                    key={column.id}
                                    className="capitalize"
                                    checked={column.getIsVisible()}
                                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                                >
                                    {column.id}
                                </DropdownMenuCheckboxItem>
                            )
                        })}
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="pl-4">
                <Button
                    variant="outline"
                    size="sm"
                    className="ml-auto hidden h-8 lg:flex"
                >
                    <MixerHorizontalIcon className="mr-2 h-4 w-4"/>
                    <Link href="/table/create">Create</Link>
                </Button>
            </div>
        </>
    )
}
