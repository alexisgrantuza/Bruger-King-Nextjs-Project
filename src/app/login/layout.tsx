import { Toaster } from "@/components/ui/sonner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden h-screen">
      {children}
      <Toaster />
    </div>
  );
}
