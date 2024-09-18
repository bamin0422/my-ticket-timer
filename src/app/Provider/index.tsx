import { PropsWithChildren } from "react";
import { Provider as QueryClientProvider } from "../../shared/react-query";
import { Provider as RecoilRootProvider } from "../../shared/store/Provider";

export function Provider({ children }: PropsWithChildren) {
  return <QueryClientProvider>{children}</QueryClientProvider>;
}

export default Provider;
