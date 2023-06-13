import { useQuery } from "@tanstack/react-query";
import { fetchSentryEvents } from "../api";

const useSentryData = () => {
  return useQuery({
    queryKey: ["chart"],
    queryFn: fetchSentryEvents
  });
};

export default useSentryData;
