export function LazyLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen gap-1">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black dark:border-blue-500"></div>
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="pb-9 shadow-md rounded-lg hover:shadow-lg transition-all animate-pulse"
        >
          {/* Image Skeleton */}
          <div className="w-full h-40 bg-gray-200 rounded-t-lg" />
          
          {/* Content Skeleton */}
          <div className="px-6 mt-6">
            {/* Title Skeleton */}
            <div className="h-6 bg-gray-200 rounded-md w-3/4 mb-4" />
            
            {/* Population Skeleton */}
            <div className="h-4 bg-gray-200 rounded-md w-2/3 mb-2" />
            
            {/* Region Skeleton */}
            <div className="h-4 bg-gray-200 rounded-md w-1/2 mb-2" />
            
            {/* Capital Skeleton */}
            <div className="h-4 bg-gray-200 rounded-md w-2/3" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function SkeletonCardDetails() {
  return (
    <div className="px-8 lg:px-20 mx-auto py-8">
      <div className="mb-6">
        <div className="h-10 w-24 bg-gray-200 rounded-md animate-pulse" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Image skeleton */}
        <div className="w-full h-72 bg-gray-200 animate-pulse" />

        {/* Details skeleton */}
        <div className="space-y-6">
          <div className="h-8 w-3/4 bg-gray-200 rounded-md animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-4 w-full bg-gray-200 rounded-md animate-pulse" />
              <div className="h-4 w-5/6 bg-gray-200 rounded-md animate-pulse" />
              <div className="h-4 w-2/3 bg-gray-200 rounded-md animate-pulse" />
            </div>
            <div className="space-y-4">
              <div className="h-4 w-full bg-gray-200 rounded-md animate-pulse" />
              <div className="h-4 w-5/6 bg-gray-200 rounded-md animate-pulse" />
              <div className="h-4 w-2/3 bg-gray-200 rounded-md animate-pulse" />
            </div>
          </div>

          <div className="h-4 w-1/2 bg-gray-200 rounded-md animate-pulse" />
        </div>
      </div>
    </div>
  );
}