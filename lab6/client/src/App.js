import React from 'react';
import IdGetter from "./components/idSearch";
import NameGetter from "./components/nameSearch";
import ReportingArea from "./components/ReportingArea";


class App extends React.Component{
  render() {
  return (
    
  <div>
    <NameGetter />
    <IdGetter />
    <h2>Reporting</h2>
    <ReportingArea />
  </div>

  );
}
}
export default App;
