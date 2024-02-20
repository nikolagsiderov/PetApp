import prisma from "@/app/libs/prismadb";

interface IParams {
  reservationId?: string;
}

export default async function getListingById(params: IParams) {
  try {
    const { reservationId } = params;

    const reservation = await prisma.reservation.findUnique({
      where: {
        id: reservationId,
      },
      include: {
        user: true,
      },
    });

    if (!reservation) {
      return null;
    }

    return {
      ...reservation,
      createdAt: reservation.createdAt.toString(),
      user: {
        ...reservation.user,
        createdAt: reservation.user.createdAt.toString(),
        updatedAt: reservation.user.updatedAt.toString(),
        emailVerified: reservation.user.emailVerified?.toString() || null,
      },
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
