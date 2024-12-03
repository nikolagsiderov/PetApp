"use client";

import { SafeUser } from "@/app/types";
import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";

interface ManageClientProps {
  currentUser?: SafeUser | null;
}

const ManageClient: React.FC<ManageClientProps> = ({
  currentUser,
}) => {
  return (
    <>
      <Container>
        <div
          className="
          max-w-screen-lg 
          mx-auto
          lg:pt-12 pt-20 pb-20
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
            Все още не е имплементирана страницата.
          </div>
        </div>
      </Container>
      <div className="relative bottom-20 right-0 w-full bg-white">
        <Heading title="" imageSrc="/images/cat repairman.png" />
      </div>
    </>
  );
};

export default ManageClient;
