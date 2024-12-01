import { hasUserAlreadyListed } from "../actions/listings/listingsValidations";
import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";
import BottomNav from "../components/navbar/BottomNav";
import Navbar from "../components/navbar/Navbar";

interface IParams {
  userId?: string;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  const params: IParams = { userId: currentUser?.id };
  const userHasAlreadyListed = currentUser
    ? await hasUserAlreadyListed(params)
    : false;

  return (
    <ClientOnly>
      <LoginModal />
      <RegisterModal />
      <Navbar
        currentUser={currentUser}
        hasUserAlreadyListed={userHasAlreadyListed}
      />
      <div>{children}</div>
      <BottomNav />
    </ClientOnly>
  );
}
