import React from "react";
import { SERVICE_STATUS } from "../constants";
import { type ServiceStatusProps } from "../types";

export const ServiceStatusIndicator: React.FC<ServiceStatusProps> = ({
  name,
  status
}) => {
  return (
    <div>
      <span>{name} is currently: </span>
      <span>{SERVICE_STATUS[status]}</span>
    </div>
  );
};
