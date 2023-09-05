import { AppRoutes } from "./routes";

export const UsersRoutes = [
  AppRoutes.Users.Users,
  AppRoutes.Users.Email,
  AppRoutes.Users.invoices,
  AppRoutes.Users.Groups,
] as const;
