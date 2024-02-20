import prisma from "@/app/libs/prismadb";
import { SafeReview } from "@/app/types";

interface IParams {
  listingId?: string;
  reservationId?: string;
}

export default async function getReviews(params: IParams) {
  try {
    const { listingId, reservationId } = params;

    const query: any = {};

    if (listingId) {
      query.listingId = listingId;
    }

    if (reservationId) {
      query.reservationId = reservationId;
    }

    const reviews: any = await prisma.review.findMany({
      where: query,
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeReviews: SafeReview[] = reviews.map((review: any) => ({
      ...review,
      createdAt: review.createdAt.toISOString(),
      user: {
        ...review.user,
        createdAt: review.user.createdAt.toISOString(),
      },
    }));

    return safeReviews;
  } catch (error: any) {
    throw new Error(error);
  }
}
