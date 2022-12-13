export const currentContentDecider = (currentContentType: string) => {
  const isInternal = currentContentType === "Internal Structure";
  const isGeology = currentContentType === "Surface Geology";
  return { isInternal, isGeology };
};
