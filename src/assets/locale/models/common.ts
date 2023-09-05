import { MakeObject } from "../../../utils";

export type LocaleKeys = "en";
export type DictionaryKeys =
  // Auth
  | "auth.forgot-password"
  | "auth.two-factor"
  | "auth.valid"
  | "auth.recover-account"
  | "auth.need-help"
  | "auth.reset-password"
  | "auth.send-reset-link"
  | "auth.set-new-password"
  | "auth.sent-email"

  // SignUp
  | "sign-up"
  | "sign-up.i-have-read"
  | "sign-up.terms-conds"
  | "sign-up.have-account"
  | "sign-up.two-factor-detail"

  // Welcome
  | "welcome.to-asset-reality"
  | "welcome.description"

  // SignIn
  | "sign-in"
  | "sign-in.no-account"
  | "sign-in.go-dashboard"

  // TWOFA
  | "2fa-new"
  | "2fa-old"

  // Operations
  | "dashboard.operations.add"

  // Global
  | "global.email"
  | "global.name"
  | "global.password"
  | "global.confirm-password"
  | "global.search"
  | "global.authenticate"
  | "global.continue";

export type CommonLocale = MakeObject<DictionaryKeys, string>;
export type CommonDictionary = MakeObject<LocaleKeys, CommonLocale>;
