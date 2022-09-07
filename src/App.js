import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <BrowserRouter basename="voca">
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route>
       </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
    