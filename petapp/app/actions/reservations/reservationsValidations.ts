import prisma from "@/app/libs/prismadb";

interface IParams {
  listingId?: string;
  userId?: string;
}

async function hasUserAlreadyReservedListing(params: IParams) {
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

async function isUserTryingToReserveOwnListing(params: IParams) {
  try {
    const { listingId, userId } = params;

    const listing = await prisma.listing.findFirst({
      where: {
        id: listingId,
        userId: userId,
      },
    });

    if (listing) {
      return true;
    } else {
      return false;
    }
  } catch (error: any) {
    throw new Error(error);
  }
}

export { hasUserAlreadyReservedListing, isUserTryingToReserveOwnListing };