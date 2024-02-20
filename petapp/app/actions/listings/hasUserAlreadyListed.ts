import prisma from "@/app/libs/prismadb";

interface IParams {
  userId?: string;
}

export default async function hasUserAlreadyListed(params: IParams) {
  try {
    const { userId } = params;

    const listing = await prisma.listing.findFirst({
      where: {
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
