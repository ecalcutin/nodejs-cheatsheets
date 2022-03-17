type TEnvironment = "node" | "browser";

export default (): TEnvironment => {
  if (typeof window === "undefined") {
    return "node";
  } else return "browser";
};
