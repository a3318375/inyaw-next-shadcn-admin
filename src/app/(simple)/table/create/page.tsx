import { Metadata } from "next"
import TableEditor from "@/components/table/table-editor";

export const metadata: Metadata = {
    title: "Tasks",
    description: "A task and issue tracker build using Tanstack TableShow.",
}

export default async function TableCreate() {
    return (
        <TableEditor />
    )
}
