import { useEffect, useState } from "react";
import { checkServiceStatus } from "../api";
import {
  type Validator,
  type CheckServiceStatusOptions,
  ServiceStatus
} from "../types";

export const useServiceStatus = (
  url: string,
  validator: Validator,
  options?: CheckServiceStatusOptions
): ServiceStatus => {
  const [status, setStatus] = useState(ServiceStatus.Checking);

  useEffect(() => {
    if (!url) {
      setStatus(ServiceStatus.Offline);
      return;
    }

    // Fetch and validate
    checkServiceStatus(url, validator, options)
      .then(serviceStatus => {
        setStatus(serviceStatus);
      })
      .catch(error => {
        console.error("There was an error checking the service status:", error);
        setStatus(ServiceStatus.Offline);
      });
  }, [url, validator, options]);

  return status;
};
