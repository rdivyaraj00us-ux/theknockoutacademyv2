import { Skeleton } from "@/components/ui/skeleton";

export const ProductCardSkeleton = () => {
  return (
    <div className="bg-card rounded-xl border border-border p-6 space-y-4">
      <Skeleton className="aspect-square w-full rounded-xl" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <div className="flex items-center justify-between pt-4">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-10 w-28 rounded-xl" />
      </div>
    </div>
  );
};

export const ProductGridSkeleton = ({ count = 6 }: { count?: number }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
};

export const ProductDetailSkeleton = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12">
      {/* Image Skeleton */}
      <Skeleton className="aspect-square w-full rounded-2xl" />

      {/* Details Skeleton */}
      <div className="flex flex-col space-y-6">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-12 w-32" />
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-xl" />
          <Skeleton className="h-6 w-12" />
          <Skeleton className="h-12 w-12 rounded-xl" />
        </div>
        <Skeleton className="h-14 w-full rounded-xl" />
        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
          <div className="text-center space-y-2">
            <Skeleton className="h-5 w-5 mx-auto rounded-full" />
            <Skeleton className="h-3 w-16 mx-auto" />
          </div>
          <div className="text-center space-y-2">
            <Skeleton className="h-5 w-5 mx-auto rounded-full" />
            <Skeleton className="h-3 w-16 mx-auto" />
          </div>
          <div className="text-center space-y-2">
            <Skeleton className="h-5 w-5 mx-auto rounded-full" />
            <Skeleton className="h-3 w-16 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const MasterBundleSkeleton = () => {
  return (
    <section className="bg-secondary py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial-navy" />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Skeleton className="h-8 w-32 rounded-full" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-3/4" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-full opacity-60" />
              <Skeleton className="h-5 w-2/3 opacity-60" />
            </div>
            <div className="flex items-baseline gap-4">
              <Skeleton className="h-16 w-24" />
              <Skeleton className="h-6 w-16 opacity-50" />
              <Skeleton className="h-8 w-24 rounded-full" />
            </div>
            <Skeleton className="h-14 w-64 rounded-xl" />
            <div className="flex gap-6">
              <Skeleton className="h-5 w-28" />
              <Skeleton className="h-5 w-28" />
              <Skeleton className="h-5 w-28" />
            </div>
          </div>
          <div className="hidden lg:block">
            <Skeleton className="h-96 w-full rounded-3xl opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
};