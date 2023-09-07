import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { hot } from "react-hot-loader";
import "./../assets/scss/App.scss";
import { QueryClient, QueryClientProvider } from "react-query";
// import Main from "./Main";
import { EmailEditor } from "./EasyEmail";

const queryClient = new QueryClient();

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          {/* <Main /> */}
          <EmailEditor />
        </QueryClientProvider>
      </BrowserRouter>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
