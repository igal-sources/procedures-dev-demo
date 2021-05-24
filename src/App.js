import React from "react";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import ProceduresMain from "./components/procedures-container/ProceduresMain";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.darkviolet.css";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App-main">
        <Grid>
          <Grid.Column className="App-content">
            <ProceduresMain />
          </Grid.Column>
        </Grid>
      </div>
    </BrowserRouter>
  );
}

export default App;
