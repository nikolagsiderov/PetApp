import EmptyState from "@/app/components/EmptyState";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getListings from "@/app/actions/getListings";
import MyListingsClient from "./MyListingsClient";

const MyListingsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Нямате достъп" subtitle="Влезте в своя профил" />;
  }

  const listings = await getListings({ userId: currentUser.id });

  if (listings.length === 0) {
    return (
      <EmptyState
        title="Няма обяви"
        subtitle="Изглежда, че нямате публикувани обяви."
      />
    );
  }

  return <MyListingsClient listings={listings} currentUser={currentUser} />;
};

export default MyListingsPage;
