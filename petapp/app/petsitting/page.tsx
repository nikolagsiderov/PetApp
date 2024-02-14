import EmptyState from "@/app/components/EmptyState";
import getCurrentUser from "@/app/actions/getCurrentUser";
import Container from "@/app/components/Container";
import ClientOnly from "@/app/components/ClientOnly";
import getListings, { IListingsParams } from "@/app/actions/getListings";
import ListingCard from "@/app/components/listings/ListingCard";
import SearchModal from "../components/modals/SearchModal";
import BecomeSitterModal from "../components/modals/BecomeSitterModal";

export const dynamic = "force-dynamic";

interface PetSittingProps {
  searchParams: IListingsParams;
}

const PetSittingPage = async ({ searchParams }: PetSittingProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <SearchModal />
      <BecomeSitterModal />
      <Container>
        <div
          className="
            pt-36
            lg:pt-28
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
        >
          {listings.map((listing: any) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default PetSittingPage;
