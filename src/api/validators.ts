export const dmobValidator = async (response: Response): Promise<boolean> => {
  const { allowance } = await response.json();
  return allowance >= 0;
};

export const backendValidator = async (
  response: Response
): Promise<boolean> => {
  const ret = await response.text();
  return ret === "OK";
};

export const ldnBotValidator = async (response: Response): Promise<boolean> => {
  const ret = await response.json();
  return ret.healthCheckStatus === "running";
};

export const ssaBotValidator = async (response: Response): Promise<boolean> => {
  const ret = await response.json();
  return ret?.execResult === 0;
};
