import EmptyState from "@/app/components/EmptyState";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/reservations/getReservations";
import ReviewClient from "./ReviewClient";
import ClientOnly from "@/app/components/ClientOnly";

const ReviewPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Нямате достъп" subtitle="Влезте в своя профил" />
      </ClientOnly>
    );
  }

  const reservations = await getReservations({ userId: currentUser.id });

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="Няма намерени резервации"
          subtitle="Изглежда, че не сте направили резервации."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ReviewClient
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default ReviewPage;
