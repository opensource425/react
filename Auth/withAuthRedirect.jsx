import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { _getToken } from "Helper/helper";

const isBrowser = () => typeof window !== "undefined";

const withAuthRedirect = ({ WrappedComponent, expectedAuth, location }) => {
  const WrappedComponentRedirect = (props) => {
    const token = _getToken();
    const navigate = useNavigate();
    const params = useParams();
    useEffect(() => {
      if (isBrowser() && expectedAuth !== token?.status) {
        navigate(location);
      }
      if (!token.status) {
        localStorage.clear();
      }
      //eslint-disable-next-line
    }, [token?.token]);
    return (
      <WrappedComponent
        {...{ token: token?.token, params, navigate, ...props }}
      />
    );
  };
  return WrappedComponentRedirect;
};

export default withAuthRedirect;
