export const config = {
  apiUri: import.meta.env.VITE_API_URI || "http://localhost:4000",
  serviceUrls: {
    backend:
      import.meta.env.VITE_BACKEND_SERVICE_URI ||
      "https://fp-core.6omfj573u6naa.us-east-2.cs.amazonlightsail.com/health",
    ldnBot: import.meta.env.VITE_LDN_BOT_SERVICE_URI || "http://localhost:4002",
    ssaBot: import.meta.env.VITE_SSA_BOT_SERVICE_URI || "http://localhost",
    dmobApi:
      import.meta.env.VITE_DMOB_API_URI ||
      "https://api.filplus.d.interplanetary.one/public/api/getAllowanceAssignedToLdnV3InLast2Weeks"
  },
  dmobApiKey: import.meta.env.VITE_DMOB_API_KEY || ""
};
