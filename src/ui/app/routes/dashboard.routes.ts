import { AppRoutes } from "./routes";

export const DashboardRoutes = [
  AppRoutes.Dashboard.Index,
  AppRoutes.Dashboard.Operation,
  AppRoutes.Dashboard.Overview,


  // AppRoutes.Orders.Index,
  // AppRoutes.Products.Index,
  // AppRoutes.Settings.Index,
  // AppRoutes.Supports.Index,
  // AppRoutes.Admin.Index,
  // AppRoutes.Auth.NewAccount,
] as const;
