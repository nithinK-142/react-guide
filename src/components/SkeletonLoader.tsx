const SkeletonLoader = () => {
  return (
    <div className="grid grid-cols-2 gap-x-10">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-center px-12 py-3 mb-6 rounded-lg bg-white/10"
        >
          <div className="w-20 h-20 bg-gray-300 rounded-full animate-pulse"></div>
          <span className="w-20 h-4 mt-2 bg-gray-300 rounded animate-pulse"></span>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
