const { useEffect, useState } = require("react");
import { toast } from "react-toastify";

const ProtectedLayout = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getUser = async () => {
      try {
        const user = await getCurrentUser();
        setIsAuthenticated(true);
      } catch (error) {
        toast.error(error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    getUser();
  }, []);
  return <>{children}</>;
};

export default ProtectedLayout;
