import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { description, imageSrc, category, location, price } = body;

  const listing = await prisma.listing.create({
    data: {
      description,
      imageSrc,
      category,
      locationCode: location.code,
      price: parseInt(price, 2),
      userId: currentUser.id,
    },
  });

  return NextResponse.json(listing);
}
