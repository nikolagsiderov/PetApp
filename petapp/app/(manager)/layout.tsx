import ClientOnly from "../components/ClientOnly";
import SideNavbar from "../components/navbar/SideNavbar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientOnly>
      <SideNavbar />
      <div>{children}</div>
    </ClientOnly>
  );
}
