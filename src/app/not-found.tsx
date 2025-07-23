
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Page | Venus ",
};

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      404 Not Found
    </div>
  );
};

export default ErrorPage;
