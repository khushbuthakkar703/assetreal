import { AppRoutes } from "./routes";

export const ClientRoutes = [
  AppRoutes.Client.ClientManagement,
  AppRoutes.Client.ClientInfo,
  AppRoutes.Client.ClientPage,
  AppRoutes.Client.Information,
  AppRoutes.Client.Approvals,
] as const;
