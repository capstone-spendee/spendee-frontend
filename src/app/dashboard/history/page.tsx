'use client';

import { ColumnDef, ColumnFiltersState, SortingState, VisibilityState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { ArrowUpDown, ChevronDown } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import HistorySkeleton from './skeleton';

// Updated type definition based on your backend data
export type HistoryData = {
  _id: string;
  createdAt: string;
  email: string;
  kategori: string;
  status: string;
  userId: string;
  __v: number;
};

// Fetch data function
const fetchData = async (): Promise<HistoryData[]> => {
  try {
    const dataFromDB = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/prediction/history`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    const result = await dataFromDB.json();
    // Assuming the API returns an array or has a data property
    return Array.isArray(result) ? result : result.data || [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

// Updated column definitions
const columns: ColumnDef<HistoryData>[] = [
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      const statusLower = status.toLowerCase();
      
      // Determine status color based on different variations
      const getStatusColor = (status: string) => {
        if (status === 'disetujui' || status === 'sukses' || status === 'success' || status === 'approved') {
          return ' text-chart-2 border border-chart-2';
        } else if (status === 'ditolak' || status === 'gagal' || status === 'failed' || status === 'rejected') {
          return 'text-destructive border border-destructive';
        } else {
          return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
        }
      };
      
      return (
        <div className="capitalize">
          <span 
            className={`px-3 py-1 rounded-lg text-xs font-semibold ${getStatusColor(statusLower)}`}
          >
            {status}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue('email')}</div>,
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Tanggal/Jam
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const dateStr = row.getValue('createdAt') as string;
      const date = new Date(dateStr);
      const formatted = date.toLocaleString('id-ID', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      });
      return <div className="text-sm">{formatted}</div>;
    },
  },
  {
    accessorKey: 'kategori',
    header: () => <div className="text-right">Kategori</div>,
    cell: ({ row }) => {
      const kategori = row.getValue('kategori') as string;
      return (
        <div className="text-right">
          <span className="text-sm font-medium capitalize">
            {kategori}
          </span>
        </div>
      );
    },
  },
  // {
  //   id: 'actions',
  //   enableHiding: false,
  //   cell: ({ row }) => {
  //     const record = row.original;

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button
  //             variant="ghost"
  //             className="h-8 w-8 p-0"
  //           >
  //             <span className="sr-only">Open menu</span>
  //             <MoreHorizontal className="h-4 w-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem onClick={() => navigator.clipboard.writeText(record._id)}>
  //             Copy ID
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>View Details</DropdownMenuItem>
  //           <DropdownMenuItem>Download</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
];

// Main component
export default function HistoryPage() {
  const [data, setData] = React.useState<HistoryData[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({
    // Hide email column on mobile by default
    email: typeof window !== 'undefined' ? window.innerWidth >= 768 : true,
  });

  // Fetch data on component mount
  React.useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error('Failed to load data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Handle responsive column visibility
  React.useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setColumnVisibility(prev => ({
        ...prev,
        email: !isMobile,
      }));
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  if (loading) {
    return (
      <div >
        <HistorySkeleton />
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden max-w-7xl mx-auto">
      {/* <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">History Prediksi</h1>
        <p className="text-muted-foreground">Lihat riwayat prediksi yang telah dilakukan</p>
      </div> */}

      <div className="flex items-center py-4 gap-4">
        <Input
          placeholder="Cari berdasarkan status..."
          value={(table.getColumn('status')?.getFilterValue() as string) ?? ''}
          onChange={(event) => table.getColumn('status')?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="ml-auto"
            >
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                const columnName = column.id === 'createdAt' 
                  ? 'Tanggal/Jam' 
                  : column.id === 'kategori' 
                  ? 'Kategori' 
                  : column.id.charAt(0).toUpperCase() + column.id.slice(1);
                
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {columnName}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="rounded-md border overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} className="whitespace-nowrap">
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="whitespace-nowrap">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
                    Tidak ada data tersimpan.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="flex items-center justify-between space-x-2 py-4">
        <div className="text-sm text-muted-foreground">
          Menampilkan {table.getRowModel().rows.length} dari {data.length} data
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
