import prisma from "@/app/libs/prismadb";
import { SafeReservation } from "@/app/types";

interface IParams {
  listingId?: string;
  userId?: string;
  authorId?: string;
  upcoming?: boolean;
  past?: boolean;
}

export default async function getReservations(params: IParams) {
  try {
    const { listingId, userId, authorId, upcoming, past } = params;

    const query: any = {};

    if (listingId) {
      query.listingId = listingId;
    }

    if (userId) {
      query.userId = userId;
    }

    if (authorId) {
      query.listing = { userId: authorId };
    }

    if (upcoming) {
      query.startDate = { lte: new Date() };
      query.endDate = { gte: new Date() };
    }

    if (past) {
      query.endDate = { lte: new Date() };
    }

    const reservations: any = await prisma.reservation.findMany({
      where: query,
      include: {
        listing: {
          include: {
            user: true,
          },
        },
        user: true,
        reviews: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeReservations: SafeReservation[] = reservations.map(
      (reservation: any) => ({
        ...reservation,
        createdAt: reservation.createdAt.toISOString(),
        startDate: reservation.startDate.toISOString(),
        endDate: reservation.endDate.toISOString(),
        listing: {
          ...reservation.listing,
          createdAt: reservation.listing.createdAt.toISOString(),
        },
        reviews: {
          ...reservation.reviews,
          createdAt: reservation.listing.createdAt.toISOString(),
        },
        user: {
          ...reservation.user,
          createdAt: reservation.listing.createdAt.toISOString(),
        },
      })
    );

    return safeReservations;
  } catch (error: any) {
    throw new Error(error);
  }
}
