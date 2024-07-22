const { useEffect, useState } = require("react");
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedLayout = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getUser = async () => {
      try {
        const user = await getCurrentUser();
        setIsAuthenticated(true);
      } catch (error) {
        toast.error(error);
        setIsAuthenticated(false);
      }
    };

    getUser();
  }, []);
  const navigate = useNavigate();
  if (!isAuthenticated) {
    return navigate("/login");
  }
  return <>{children}</>;
};

export default ProtectedLayout;
