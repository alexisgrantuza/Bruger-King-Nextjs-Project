"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { TriangleAlert } from "lucide-react";
import { useEffect, useState } from "react";
import { signIn, getSession } from "next-auth/react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [pending, setPending] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.ok) {
        // Wait for session to be updated
        const session = await getSession();

        if (session?.user?.id) {
          console.log("Redirecting to:", `/home/${session.user.id}`);
          toast.success("Login successful");
          // Use replace instead of push to prevent back navigation to login
          router.push(`/home`);
        } else {
          setError("Session not found");
        }
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setPending(false);
    }
  };

  const handleProvider = async (
    e: React.MouseEvent<HTMLButtonElement>,
    value: "facebook" | "google"
  ) => {
    e.preventDefault();
    try {
      const session = await getSession();
      const result = await signIn(value, {
        redirect: false,
        callbackUrl: `/home/${session?.user?.id}`,
      });

      if (result?.ok) {
        const session = await getSession();

        if (session?.user?.id) {
          router.push(`/home/${session?.user?.id}`);
          toast.success(`${value} login successful!`);
        } else {
          setError(`${value} login failed`);
        }
      }
    } catch (error) {
      setError(`Something went wrong!`);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden z-50">
        <CardContent className="grid p-0 md:grid-cols-1">
          <form className="p-6 md:p-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold text-secondaryColor font-display">
                  Welcome back
                </h1>
                <p className="text-balance text-muted-foreground font-display">
                  Login to your Burger King account
                </p>
              </div>
              {!!error && (
                <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
                  <TriangleAlert />
                  <p>{error}</p>
                </div>
              )}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  disabled={pending}
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-2 hover:underline text-white font-display"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  disabled={pending}
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button disabled={pending} className="w-full" variant="outline">
                Login
              </Button>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground text-white bg-black">
                  Or continue with
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Button variant="outline" className="w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    id="onlyfans"
                  >
                    <path
                      fill="currentColor"
                      d="M6.02513 10.0251C6.6815 9.36875 7.57174 9 8.5 9C9.42826 9 10.3185 9.36875 10.9749 10.0251C11.6313 10.6815 12 11.5717 12 12.5C12 13.4283 11.6313 14.3185 10.9749 14.9749C10.3185 15.6313 9.42826 16 8.5 16C7.57174 16 6.6815 15.6313 6.02513 14.9749C5.36875 14.3185 5 13.4283 5 12.5C5 11.5717 5.36875 10.6815 6.02513 10.0251ZM8.5 11C8.10218 11 7.72064 11.158 7.43934 11.4393C7.15804 11.7206 7 12.1022 7 12.5C7 12.8978 7.15804 13.2794 7.43934 13.5607C7.72064 13.842 8.10218 14 8.5 14C8.89782 14 9.27936 13.842 9.56066 13.5607C9.84196 13.2794 10 12.8978 10 12.5C10 12.1022 9.84196 11.7206 9.56066 11.4393C9.27936 11.158 8.89782 11 8.5 11Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M17.9999 5.00001C17.7137 5.00001 17.4385 4.99811 17.1783 4.99631C16.7786 4.99355 16.414 4.99103 16.0984 4.99601C15.5674 5.0044 15.0684 5.03363 14.6054 5.13891C13.8177 5.31805 13.2375 5.69392 12.6977 6.28471C11.4668 5.45342 10.0068 5 8.5 5C6.51088 5 4.60322 5.79018 3.1967 7.1967C1.79018 8.60322 1 10.5109 1 12.5C1 14.4891 1.79018 16.3968 3.1967 17.8033C4.60322 19.2098 6.51088 20 8.5 20C10.4891 20 12.3968 19.2098 13.8033 17.8033C14.0607 17.5459 14.2975 17.2716 14.5126 16.9832C15.8243 16.8995 17.3478 16.5048 18.6676 15.8441C20.1319 15.111 21.5852 13.9244 21.9747 12.2232C22.0427 11.9264 21.9717 11.6149 21.782 11.3768C21.5923 11.1387 21.3044 11 20.9999 11H19.1517C19.4614 10.7844 19.7613 10.5586 20.0478 10.3244C21.4183 9.20422 22.6221 7.77662 22.9751 6.22138C23.0425 5.92481 22.9712 5.61372 22.7814 5.37606C22.5917 5.1384 22.3041 5.00001 21.9999 5.00001H17.9999ZM15.6372 14.8044C16.3501 14.6467 17.0941 14.3952 17.7723 14.0557C18.4 13.7414 18.9123 13.383 19.2926 13H15.9833C15.9421 13.6172 15.825 14.223 15.6372 14.8044ZM15.7629 10.6291C16.8172 10.1577 17.8799 9.51324 18.7821 8.77586C19.4994 8.18957 20.0683 7.58341 20.4604 7.00001H17.9999C17.6757 7.00001 17.3878 6.99794 17.1259 6.99606C16.7506 6.99336 16.4289 6.99104 16.13 6.99576C15.6326 7.00362 15.3028 7.0314 15.049 7.08912C14.7571 7.15548 14.5134 7.26684 14.1909 7.61491C14.9424 8.4903 15.4779 9.52291 15.7629 10.6291ZM8.5 7C7.04131 7 5.64236 7.57946 4.61091 8.61091C3.57946 9.64236 3 11.0413 3 12.5C3 13.9587 3.57946 15.3576 4.61091 16.3891C5.64236 17.4205 7.04131 18 8.5 18C9.95869 18 11.3576 17.4205 12.3891 16.3891C13.4205 15.3576 14 13.9587 14 12.5C14 11.0413 13.4205 9.64236 12.3891 8.61091C11.3576 7.57946 9.95869 7 8.5 7Z"
                    ></path>
                  </svg>

                  <span className="sr-only">Login with OnlyFans</span>
                </Button>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={(e) => handleProvider(e, "google")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="sr-only">Login with Google</span>
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={(e) => handleProvider(e, "facebook")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="sr-only">Login with Meta</span>
                </Button>
              </div>
              <div className="text-center text-sm text-white font-display">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="underline underline-offset-4">
                  Sign up
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary text-white">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
