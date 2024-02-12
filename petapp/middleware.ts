export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/reservations", "/my-listings", "/favorites"],
};
