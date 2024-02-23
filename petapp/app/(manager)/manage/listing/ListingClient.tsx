"use client";

import { SafeListing, SafeUser } from "@/app/types";
import Container from "@/app/components/Container";
import ListingEdit from "@/app/components/manage/ListingEdit";
import Tabs from "@/app/components/Tabs";

interface ListingClientProps {
  listing: SafeListing | null | undefined;
  currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  currentUser,
}) => {
  let listingContent = (
    <div
      className="
          mt-10
          flex flex-col
          gap-8
        "
    >
      {listing && <ListingEdit listing={listing} />}
    </div>
  );

  return (
    <Container>
      <div
        className="
          max-w-screen-lg 
          mx-auto
          lg:pt-12 pt-20 pb-20
        "
      >
        <Tabs
          items={[
            {
              buttonTitle: "Информация",
              content: "Все още не е имплементирано",
            },
            {
              buttonTitle: "Снимки",
              content: "Все още не е имплементирано",
            },
            {
              buttonTitle: "График",
              content: "Все още не е имплементирано",
            },
          ]}
        />
      </div>
    </Container>
  );
};

export default ListingClient;
