import { routeConfigs } from "Utils/routeConfig";
import withAuthRedirect from "./withAuthRedirect";

const withAuth = (WrappedComponent, location = routeConfigs.userLogin) => {
  return withAuthRedirect({
    WrappedComponent,
    expectedAuth: true,
    location,
  });
};
export default withAuth;
