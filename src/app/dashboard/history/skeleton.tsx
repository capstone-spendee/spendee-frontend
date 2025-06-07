'use client'
import { Skeleton } from "@/components/ui/skeleton"

export default function HistorySkeleton() {
  return (
    <div className="w-full max-w-full mx-auto bg-background">
      {/* Header with Search and Columns */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex-1 max-w-sm">
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
        
        <div className="ml-4">
          <Skeleton className="h-10 w-24 rounded-md" />
        </div>
      </div>

      {/* Table Header */}
      <div className="px-6 py-3 bg-muted/50 border-b border-border">
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-2">
            <Skeleton className="h-4 w-12" />
          </div>
          <div className="col-span-3">
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="col-span-3">
            <Skeleton className="h-4 w-24" />
          </div>
          <div className="col-span-3">
            <Skeleton className="h-4 w-20" />
          </div>
          <div className="col-span-1 flex justify-end">
            <Skeleton className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Table Rows */}
      <div className="divide-y divide-border">
        {Array.from({ length: 10 }).map((_, index) => (
          <TableRowSkeleton key={index} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-border bg-muted/30">
        <Skeleton className="h-4 w-40" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-20 rounded-md" />
          <Skeleton className="h-8 w-16 rounded-md" />
        </div>
      </div>
    </div>
  )
}

function TableRowSkeleton() {
  return (
    <div className="px-6 py-4 hover:bg-muted/50 transition-colors">
      <div className="grid grid-cols-12 gap-4 items-center">
        {/* Status Badge */}
        <div className="col-span-2">
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
        
        {/* Email */}
        <div className="col-span-3">
          <Skeleton className="h-4 w-40" />
        </div>
        
        {/* Date/Time */}
        <div className="col-span-3">
          <Skeleton className="h-4 w-28" />
        </div>
        
        {/* Category */}
        <div className="col-span-3">
          <Skeleton className="h-4 w-16" />
        </div>
        
        {/* Actions */}
        <div className="col-span-1 flex justify-end">
          <Skeleton className="h-6 w-6 rounded" />
        </div>
      </div>
    </div>
  )
}