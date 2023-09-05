import { RedirectSwitch } from "../../../../app/components";
import { DashView } from "../views/DashView";

export const DashRouteLayout: React.FC = ({ children }) => {
  return (
    <DashView>
      <RedirectSwitch>{children}</RedirectSwitch>
    </DashView>
  );
};
