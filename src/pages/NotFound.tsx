import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        <h1 className="font-display text-5xl font-bold text-deep mb-2">404</h1>
        <p className="font-body text-lg text-neutral-shade3 mb-8">This path isn&apos;t part of the atrium.</p>
        <Button asChild className="rounded-full bg-deep text-cream hover:bg-deep-tint1 font-body px-8">
          <Link to="/">Return home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
