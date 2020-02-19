import React from 'react';
import Creator from "./components/Creator/Creator";
import Reader from "./components/Reader";
import ReportingArea from "./components/ReportingArea";


class App extends React.Component{
  render() {
  return (
    
  <div>
    <Reader />
    <Creator />
    <h2>Reporting</h2>
    <ReportingArea />
  </div>

  );
}
}
export default App;
