"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";

export function ProfileOverview() {
  const { data: session } = useSession();
  const [userName, setUserName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (session?.user?.name) {
      setUserName(session.user.name);
    }

    // Check if the URL has the profile-overview parameter
    if (searchParams.get("view") === "profile-overview") {
      setIsOpen(true);
    }
  }, [session, searchParams]);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      // Add the parameter when opening the modal
      router.push(`/profile/${params.id}?view=profile-overview`);
    } else {
      // Remove the parameter when closing the modal
      router.push(`/profile/${params.id}`);
    }
  };

  async function handleProfileUpdate(e: React.FormEvent) {
    e.preventDefault();
    console.log("Profile updated!");

    const res = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: userName }),
    });
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <span className="text-gray-500 text-sm cursor-pointer">
          <i className="fa-regular fa-user mr-2"></i>Profile Overview
        </span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form
          className="grid gap-4 py-4"
          onSubmit={(e) => handleProfileUpdate(e)}
        >
          {/* Name */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right text-black">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Pedro Duarte"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="col-span-3 text-black"
            />
          </div>
          {/* Email (read-only) */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right text-black">
              Email
            </Label>
            <Input
              id="email"
              placeholder="user@example.com"
              defaultValue={session?.user?.email || ""}
              readOnly
              className="col-span-3 text-gray-500 bg-slate-100 cursor-not-allowed border-none focus:outline-none focus-visible:ring-0"
            />
          </div>
          {/* Cellphone */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="cellphone" className="text-right text-black">
              Cellphone
            </Label>
            <Input
              id="cellphone"
              placeholder="123-456-7890"
              defaultValue=""
              className="col-span-3 text-black"
            />
          </div>
          {/* Street Address */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="street-address" className="text-right text-black">
              Street Address
            </Label>
            <Input
              id="street-address"
              placeholder="123 Main St"
              defaultValue=""
              className="col-span-3 text-black"
            />
          </div>
          {/* City */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="city" className="text-right text-black">
              City
            </Label>
            <Input
              id="city"
              placeholder="City"
              defaultValue=""
              className="col-span-3 text-black"
            />
          </div>
          {/* Province */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="province" className="text-right text-black">
              Province
            </Label>
            <Input
              id="province"
              placeholder="Province"
              defaultValue=""
              className="col-span-3 text-black"
            />
          </div>
          {/* Postal Code */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="postal-code" className="text-right text-black">
              Postal Code
            </Label>
            <Input
              id="postal-code"
              placeholder="Postal Code"
              defaultValue=""
              className="col-span-3 text-black"
            />
          </div>
          {/* Password */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right text-black">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              defaultValue=""
              className="col-span-3 text-black"
            />
          </div>
          {/* Change Password */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="change-password" className="text-right text-black">
              Change Password
            </Label>
            <Input
              id="change-password"
              type="password"
              placeholder="New password"
              defaultValue=""
              className="col-span-3 text-black"
            />
          </div>
          <DialogFooter>
            <Button type="submit" variant={"outline"}>
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
