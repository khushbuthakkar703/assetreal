import { AppRoutes } from "./routes";

export const AuthRoutes = [
  AppRoutes.Auth.SignIn,
  AppRoutes.Auth.SignUp,
  AppRoutes.Auth.TwoFactor,
  AppRoutes.Auth.TwoFactorSuccess,
  AppRoutes.Auth.Recover,
  // AppRoutes.Auth.ResetPassword,
  // AppRoutes.Auth.NewPassword
] as const;
