import { backendValidator, dmobValidator } from "../api/validators";
import { useServiceStatus } from "../hooks/useServiceStatus";
import { ServiceStatusIndicator } from "../components/ServiceStatusIndicator";
import { config } from "../config";

const Status = () => {
  const backendStatus = useServiceStatus(
    config.serviceUrls.backend,
    backendValidator
  );
  const dmobStatus = useServiceStatus(
    config.serviceUrls.dmobApi,
    dmobValidator,
    { apiKey: config.dmobApiKey }
  );
  // const ldnBotStatus = useServiceStatus(
  //   config.serviceUrls.dmobApi,
  //   dmobValidator
  // );
  // const ssaBotStatus = useServiceStatus(
  //   config.serviceUrls.dmobApi,
  //   dmobValidator
  // );
  return (
    <div className="flex flex-col">
      <ServiceStatusIndicator name="Backend" status={backendStatus} />
      <ServiceStatusIndicator name="Dmob API" status={dmobStatus} />
      {/* <ServiceStatusIndicator name="Ldn Bot" status={ldnBotStatus} />
      <ServiceStatusIndicator name="SSA Bot" status={ssaBotStatus} /> */}
    </div>
  );
};

export default Status;
