import axios from "axios";
import { useEffect, useState } from "react";

interface Branch {
  branchName: string;
  vercelLink: string | null;
}

const BranchList = () => {
  const [branches, setBranches] = useState<Branch[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    async function getBranches() {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BRANCH_SENTINEL_URL
        );
        setBranches(response.data);
        setLoading(false);
      } catch (error) {
        setError("failed to fetch guide info, try again after sometime!");
        setLoading(false);
      }
    }
    getBranches();
  }, []);

  if (loading) {
    return (
      <p className="mt-10 text-xl text-center text-white tracking-wider animate-pulse">
        Loading...
      </p>
    );
  }

  if (error) {
    return <p className="mt-10 text-xl text-center text-red-500">{error}</p>;
  }

  return (
    <div className="mt-10 min-w-[18rem] sm:min-w-[28rem] sm:floating-scrollbar">
      {branches.length > 0 &&
        branches.map(({ branchName, vercelLink }, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-4 py-2 mb-2 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white group"
          >
            <div className="inline-flex items-center h-4">
              <svg
                aria-hidden="true"
                viewBox="0 0 384 512"
                className="h-full pr-2 dark:fill-white opacity-70"
              >
                <path d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"></path>
              </svg>
              <a
                href={`https://github.com/nithinK-142/react-guide/tree/${branchName}`}
                target="_blank"
                className="text-xs sm:text-base group-hover:underline underline-offset-2 group-hover:text-red-300"
              >
                {branchName}
              </a>
            </div>

            {vercelLink && (
              <a
                href={`https://react-guide-git-${vercelLink}-nithink142s-projects.vercel.app`}
                target="_blank"
                className="h-4 dark:fill-white group-hover:scale-125 transition-transform duration-300"
              >
                <svg viewBox="0 0 512 512" className="h-full">
                  <path fillRule="evenodd" d="M256,48,496,464H16Z" />
                </svg>
              </a>
            )}
          </div>
        ))}
    </div>
  );
};

export default BranchList;
