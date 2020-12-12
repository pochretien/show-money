import React, { Dispatch, FunctionComponent, useEffect } from "react";
import { Service } from "./services/Service";
import { Environment, Region } from "./services/Configuration";
import { connect } from "react-redux";
import { UserRequest } from "./redux/request/UserRequest";
import { Header } from "./component/header/Header";
import { Search } from "./component/search/Search";
import { Content } from "./component/content/Content";

export class AppAPI {
  static Service: Service;
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchUser: () => dispatch(UserRequest.getUser()),
});

const AppDisconnected: FunctionComponent<
  ReturnType<typeof mapDispatchToProps>
> = ({ fetchUser }) => {
  useEffect(() => {
    AppAPI.Service = new Service({
      accessToken: "accessToken",
      environment: Environment.dev,
      region: Region.US,
      host: "wonderLand.cc",
    });
    fetchUser();
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="sidebar"></div>
      <Search />
      <Content />
      <div className="footer"></div>
    </div>
  );
};
export const App = connect(undefined, mapDispatchToProps)(AppDisconnected);
export default App;
