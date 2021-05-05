import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Pages/Home'
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (


    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <AppContainer>

          <Route path="/" component={AccountBox} />
        </AppContainer>
      </Switch>

    </Router>



  );
}

export default App;
