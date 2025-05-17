
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-mall-navy dark:text-white">404</h1>
        <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8">Oops! Page not found</p>
        <p className="max-w-md mx-auto text-gray-500 dark:text-gray-400 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="btn-primary inline-flex items-center"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
