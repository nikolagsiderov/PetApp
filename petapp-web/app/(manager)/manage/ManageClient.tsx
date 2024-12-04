"use client";

import { SafeUser } from "@/app/types";
import Heading from "@/app/components/Heading";
import ManageContainer from "@/app/components/ManageContainer";
import Image from "next/image";

interface ManageClientProps {
  currentUser?: SafeUser | null;
}

const ManageClient: React.FC<ManageClientProps> = ({ currentUser }) => {
  return (
    <>
      <ManageContainer>
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
        <Image
          className="fixed bottom-0 right-0 md:w-auto w-1/2"
          width={256}
          height={100}
          alt="Cat repairman"
          src={"/images/cat repairman.png"}
        />
      </ManageContainer>
    </>
  );
};

export default ManageClient;
