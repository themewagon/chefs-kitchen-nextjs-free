const getImagePrefix = () => {
  return process.env.NODE_ENV === "production"
    ? "/chefs-kitchen-nextjs-free/"
    : "";
};

export { getImagePrefix };
