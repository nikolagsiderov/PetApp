import prisma from "@/app/libs/prismadb";

interface IParams {
  listingId?: string;
  userId?: string;
}

export default async function hasUserAlreadyReservedListing(params: IParams) {
  try {
    const { listingId, userId } = params;

    const reservation = await prisma.reservation.findFirst({
      where: {
        listingId: listingId,
        userId: userId,
      },
    });

    if (reservation) {
      return true;
    } else {
      return false;
    }
  } catch (error: any) {
    throw new Error(error);
  }
}
