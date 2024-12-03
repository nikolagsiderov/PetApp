import ClientOnly from "../components/ClientOnly";
import ManagerBottomNav from "../components/navbar/ManagerBottomNav";
import ManagerNavbar from "../components/navbar/ManagerNavbar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientOnly>
      <ManagerNavbar />
      <div>{children}</div>
      <ManagerBottomNav />
    </ClientOnly>
  );
}
