import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import Sidebar from "../components/navbar/manage/Sidebar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <ClientOnly>
      <Sidebar username={currentUser?.name} />
      <div>{children}</div>
    </ClientOnly>
  );
}
