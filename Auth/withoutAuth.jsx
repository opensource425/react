import withAuthRedirect from "./withAuthRedirect";

const withoutAuth = (WrappedComponent, location = "/") => {
  return withAuthRedirect({
    WrappedComponent,
    expectedAuth: false,
    location,
  });
};

export default withoutAuth;
