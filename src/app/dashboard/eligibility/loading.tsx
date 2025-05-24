'use client'
import { Skeleton } from "@/components/ui/skeleton"

export default function FormSkeleton() {
  return (
    <div className="w-full max-w-8xl mx-auto p-4">

        <Skeleton className="h-9 w-45 mb-5" />
      {/* Title and subtitle */}
      <div className="mb-6 pt-2">
        <Skeleton className="h-5 w-20 mb-2" />
        <Skeleton className="h-4 w-64" />
      </div>

      {/* Form fields - 4 columns on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Row 1 */}
        <FormFieldSkeleton />
        <FormFieldSkeleton />
        <FormFieldSkeleton />
        <FormFieldSkeleton />

        {/* Row 2 */}
        <FormFieldSkeleton />
        <FormFieldSkeleton />
        <FormFieldSkeleton />
        <FormFieldSkeleton />

        {/* Row 3 */}
        <FormFieldSkeleton />
        <FormFieldSkeleton />
        <FormFieldSkeleton />
        <FormFieldSkeleton />

        {/* Row 4 */}
        <FormFieldSkeleton />
        <FormFieldSkeleton />
        <FormFieldSkeleton />
        <FormFieldSkeleton />
      </div>

      {/* Button */}
      <div className="mt-8">
        <Skeleton className="h-10 w-40 rounded-md" />
      </div>
    </div>
  )
}

function FormFieldSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-40" />
      <Skeleton className="h-9 w-full rounded-md" />
    </div>
  )
}
