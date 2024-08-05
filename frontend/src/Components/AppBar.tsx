import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Link, TextField, Heading } from "@radix-ui/themes";

export default function AppBar() {
  return (
    <header className="flex items-center bg-white fixed w-full z-20 top-0 start-0 justify-between h-16 px-4 bg-background border-b md:px-6">
      <Link href="/" className="flex items-center gap-2">
        <Heading highContrast>BLOGS</Heading>
      </Link>
      <div className="relative flex-1 max-w-md">
        <TextField.Root placeholder="Search the blogs…">
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <Link
          href="/add"
          className="text-sm font-medium hover:underline underline-offset-4 text-muted-foreground hover:font-bold hover:text-black"
        >
          Add Blogs
        </Link>

        <Link
          href="#"
          className="text-sm font-medium underline-offset-4 text-muted-foreground hover:underline hover:font-bold hover:text-black"
        >
          About
        </Link>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button
              className="w-8 h-8 rounded-full bg-gray-800 text-white text-sm font-semibold shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-all duration-200"
              aria-label="User menu"
            >
              D
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="w-48 mt-2 py-2 bg-white rounded-lg shadow-xl border border-gray-200 focus:outline-none"
              sideOffset={5}
            >
              <DropdownMenu.Item className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer transition-colors duration-150 ease-in-out">
                Profile
              </DropdownMenu.Item>
              <DropdownMenu.Item className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer transition-colors duration-150 ease-in-out">
                Settings
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="my-1 border-t border-gray-200" />
              <DropdownMenu.Item className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 cursor-pointer transition-colors duration-150 ease-in-out">
                Log out
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </nav>
    </header>
  );
}
