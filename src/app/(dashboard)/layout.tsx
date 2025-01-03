import Link from "next/link";
import Image from "next/image";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="h-screen flex">
        { /* LEFT */ }
        <div className="w-[14%] md:w-[8%] lg:w-[16%] bg-red-200">
          <Link href="/" className="flex items-center justify-center gap-2">
            <Image src="/logo.png" alt="logo" width={32} height={32} />
            <span className="hidden lg:block">SchoolRubb</span>
          </Link>
        </div>
        { /* RIGHT */ }
        <div className="w-[84%] md:w-[92%] lg:w-[84%] bg-blue-200">right</div>
      </div>
  );
}
