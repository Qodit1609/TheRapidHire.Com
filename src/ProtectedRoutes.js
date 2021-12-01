import React from "react";
import { Redirect, Route } from "react-router-dom";
import Dashboard from "./Admin/dashboard";
import HR_Dashboard from "./Admin/hr/HR_Dashboard";
import SalesDashboard from "./Admin/sales/SalesDashboard";

class ProtectedRoute extends React.Component {
  render() {
    const Component = this.props.component;
    const isAuthenticated = localStorage.getItem("myData");
    if (isAuthenticated === "admin") {
      return <Route exact path="/admin/dashboard" component={Dashboard}></Route>;
    } else if (isAuthenticated === "hr") {
      return <Route exact path="/hr" component={HR_Dashboard}></Route>;
    }else if(isAuthenticated === 'sales'){
        return <Route exact path="/sales" component={SalesDashboard}></Route>;
    }else{
      return  <Redirect pathName to="/login" />
    }
  }
}

export default ProtectedRoute;
