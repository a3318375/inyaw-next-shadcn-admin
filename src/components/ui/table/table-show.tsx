"use client"

import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    PaginationState,
    SortingState,
    useReactTable,
    VisibilityState,
} from "@tanstack/react-table"

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/base/table"

import {TablePagination} from "@/components/ui/table/table-pagination"
import {TableToolbar} from "@/components/ui/table/table-toolbar"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
}

export function TableShow<TData, TValue>({
                                             columns,
                                         }: DataTableProps<TData, TValue>) {
    const [internalData, setInternalData] = React.useState<TData[]>([])
    const [totalPage, setTotalPage] = React.useState<number>(0)
    const [rowSelection, setRowSelection] = React.useState({})
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [tableData, setTableData] = React.useState<any>([])


    const [{pageIndex, pageSize}, setPagination] =
        React.useState<PaginationState>({
            pageIndex: 0,
            pageSize: 10,
        })

    const fetchDataOptions = {
        pageIndex,
        pageSize,
    }

    const pagination = React.useMemo(
        () => ({
            pageIndex,
            pageSize,
        }),
        [pageIndex, pageSize]
    )

    React.useEffect(() => {
        console.log(111, pagination)
        fetch('https://admin.inyaw.com/api/blog/web/page?page=' + (pagination.pageIndex + 1)) // Use the correct URL, it can be an API Route URL, an external URL...
            .then((res) => res.json())
            .then((data) => {
                setInternalData(data.data.content)
                setTotalPage(data.data.totalPages)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [pagination]);

    const table = useReactTable({
        data: internalData,
        columns,
        pageCount: totalPage,
        state: {
            sorting,
            columnVisibility,
            pagination,
            rowSelection,
            columnFilters,
        },
        enableRowSelection: true,
        manualPagination: true,
        onRowSelectionChange: setRowSelection,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        onPaginationChange: setPagination,
        debugTable: true,
    })

    return (
        <div className="space-y-4">
            <TableToolbar table={table}/>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <TablePagination table={table}/>
        </div>
    )
}