import { Button } from "@radix-ui/themes";

const Quote = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center px-6 py-12 lg:p-20 ">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-white text-3xl text-center font-bold tracking-tight">
            Welcome to Our blog
          </h2>
          <p className="text-white text-center text-sm mt-2">
            Discover the latest
          </p>
        </div>
        <div className="grid gap-6">
          <p className="text-white text-center text-lg mt-2">Explore features</p>

          
        </div>
      </div>
    </div>
  );
};

export default Quote;
