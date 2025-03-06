import React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession, signOut } from "next-auth/react";
import { useRouter, useParams, usePathname } from "next/navigation";
import path from "path";

function OrderLoginSignup() {
  const router = useRouter();
  const { data: session } = useSession();

  const avatarFallback = session?.user?.name;

  let userNames = session?.user?.name;
  if (userNames && avatarFallback?.includes(" ")) {
    userNames = avatarFallback?.split(" ")[0];
  }

  const handleSignOut = async () => {
    await signOut({
      redirect: false,
    });
    router.push("/");
  };

  return (
    <>
      {session ? (
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger className="outline-none relative float-right p-4 md:p-8">
            <div className="flex gap-4 items-center font-display">
              <span>{`Hello, ${userNames}`}</span>
              <Avatar className="size-10 hover:opacity-75 transition">
                <AvatarImage
                  className="size-10 hover:opacity-75 transition"
                  src={session.user?.image || "/image/burger-1.png"}
                />
                <AvatarFallback className="bg-sky-900 text-white">
                  {avatarFallback}
                </AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="center"
            side="bottom"
            className="w-50 ml-32"
          >
            <DropdownMenuItem
              className="h-10 cursor-pointer font-display"
              onClick={() => {
                handleSignOut();
              }}
            >
              Log out
            </DropdownMenuItem>
            <DropdownMenuItem className="h-10 cursor-pointer font-display">
              <Link href={`/profile/${session?.user?.id}`}>Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="h-10 cursor-pointer font-display">
              <Link href="/orders">Orders</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link
          href="/login"
          className="text-sm font-semibold leading-6 bg-secondaryColor text-white px-4 py-2 rounded ml-10"
        >
          Order Now <span aria-hidden="true">&rarr;</span>
        </Link>
      )}
    </>
  );
}

export default OrderLoginSignup;
