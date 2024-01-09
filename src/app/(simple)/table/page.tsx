import { Metadata } from "next"
import { columns } from "@/components/table/columns"
import { TableShow } from "@/components/ui/table/table-show"
import * as React from "react";

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack TableShow.",
}

export default async function TaskPage() {
  return (
      <>
        <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
          <TableShow columns={columns} />
        </div>
      </>
  )
}
