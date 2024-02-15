import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
  userId?: string;
  startDate?: string;
  endDate?: string;
  locationCode?: string;
  category?: string;
}

export default async function getListings(params: IListingsParams) {
  try {
    const { userId, locationCode, startDate, endDate, category } = params;

    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    if (category) {
      query.category = category;
    }

    if (locationCode) {
      query.locationCode = locationCode;
    }

    if (startDate && endDate) {
      query.NOT = {
        reservations: {
          some: {
            OR: [
              {
                endDate: { gte: startDate },
                startDate: { lte: startDate },
              },
              {
                startDate: { lte: endDate },
                endDate: { gte: endDate },
              },
            ],
          },
        },
      };
    }

    const listings = await prisma.listing.findMany({
      where: query,
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
      user: {
        ...listing.user,
        createdAt: listing.user.createdAt.toISOString(),
      },
    }));

    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}
