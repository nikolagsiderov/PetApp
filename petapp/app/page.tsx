import Container from "@/app/components/Container";
import ClientOnly from "@/app/components/ClientOnly";
import BecomeSitterModal from "./components/modals/BecomeSitterModal";
import HomePageClient from "./HomePageClient";

const Home = () => {
  return (
    <ClientOnly>
      <BecomeSitterModal />
      <Container>
        <HomePageClient />
      </Container>
    </ClientOnly>
  );
};

export default Home;
