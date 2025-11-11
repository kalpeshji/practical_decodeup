export const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-96">
      <div className="relative">
        <div className="animate-spin rounded-full h-20 w-20 border-4 border-indigo-200"></div>
        <div className="animate-spin rounded-full h-20 w-20 border-4 border-indigo-600 border-t-transparent absolute top-0"></div>
      </div>
      <p className="mt-4 text-gray-600 font-medium">
        Loading amazing products...
      </p>
    </div>
  );
};
