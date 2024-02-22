"use client";

import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { SafeListing, SafeUser } from "@/app/types";
import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";
import Tabs from "../components/Tabs";

interface ManageClientProps {
  listings: Array<SafeListing> | null | undefined | any;
  currentUser?: SafeUser | null;
}

const ManageClient: React.FC<ManageClientProps> = ({
  listings,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");

  const onDelete = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/listings/${id}`)
        .then(() => {
          toast.success("Обявата е изтрита!");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );

  let bodyContent = (
    <div
      className="
          mt-10
          flex flex-col
          gap-8
        "
    >
      {listings.map((listing: any) => (
        <ListingCard
          key={listing.id}
          data={listing}
          currentUser={currentUser}
          listingUserName={listing.user.name}
        />
      ))}
    </div>
  );

  return (
    <Container>
      <div
        className="
          max-w-screen-lg 
          mx-auto
          lg:pt-24 pt-32 pb-20
        "
      >
        <Heading
          title={`Здравейте, ${currentUser?.name}`}
          subtitle="От тук може да управлявате вашата обява."
        />
        <div
          className="
          max-w-screen-lg 
          mx-auto
          lg:pt-16 pt-20 pb-20
        "
        >
          <Tabs
            items={[
              { buttonTitle: "Престой", content: bodyContent },
              { buttonTitle: "Продай/Подари", content: "testing2" },
              { buttonTitle: "Партньор", content: "testing3" },
            ]}
          />
        </div>
      </div>
    </Container>
  );
};

export default ManageClient;
