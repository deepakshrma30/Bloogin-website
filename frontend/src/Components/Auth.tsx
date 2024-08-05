import * as Label from "@radix-ui/react-label";
import { Button, Text, TextField,Heading } from "@radix-ui/themes";

const Auth = ({ type }: { type: "signIn" | "signup" }) => {
  return (
    <div className="flex flex-col items-center justify-center  px-6 py-12 lg:p-20">
      <div className="max-w-md w-full space-y-8">
        <div>
          
          <Heading className="text-center">
          Sign in to your account
          </Heading>
          <p className="text-center text-sm">
            or{" "}
            <a href="" className="hover:underline ">
              Create a account
            </a>
          </p>
        </div>
        <form className="space-y-6">
          <div>
            <Label.Root htmlFor="email">Email Address</Label.Root>
            <TextField.Root
              type="text"
              id="email"
              placeholder="name@gmail.com"
              className="mt-1 bg-blackA2 shadow-blackA6  block  h-[35px] w-full appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
            />
          </div>
          <div>
            <div className="flex justify-between">
              <Label.Root htmlFor="password">Password</Label.Root>
              <Text className="hover:underline cursor-pointer">
                Forgot password?
              </Text>
            </div>
            <TextField.Root
              type="password"
              id="password"
              placeholder="**********"
              className="mt-1 bg-blackA2 shadow-blackA6  block  h-[35px] w-full appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
            />
          </div>
          <Button style={{width:"-webkit-fill-available"}} variant="solid" color="gray" highContrast type="submit">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
