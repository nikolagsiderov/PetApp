import EmptyState from "@/app/components/EmptyState";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getListings from "@/app/actions/listings/getListings";
import ManageClient from "./ManageClient";
import ClientOnly from "@/app/components/ClientOnly";

const MyListingsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Нямате достъп" subtitle="Влезте в своя профил" />
      </ClientOnly>
    );
  }

  const listings = await getListings({ userId: currentUser.id });

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="Няма обяви"
          subtitle="Изглежда, че нямате публикувани обяви."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ManageClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default MyListingsPage;
