import {
  backendValidator,
  dmobValidator,
  ldnBotValidator,
  ssaBotValidator
} from "../api/validators";
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
  const ldnBotStatus = useServiceStatus(
    config.serviceUrls.ldnBot,
    ldnBotValidator
  );
  const ssaBotStatus = useServiceStatus(
    config.serviceUrls.ssaBot,
    ssaBotValidator
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl mb-6">Services Status</h1>
      <div className="w-2/3 bg-white rounded-lg shadow-lg">
        <ServiceStatusIndicator name="Backend" status={backendStatus} />
        <ServiceStatusIndicator name="Dmob API" status={dmobStatus} />
        <ServiceStatusIndicator name="Ldn Bot" status={ldnBotStatus} />
        <ServiceStatusIndicator name="SSA Bot" status={ssaBotStatus} />
      </div>
    </div>
  );
};

export default Status;
