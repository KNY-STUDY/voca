import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className='App'>
        <Header />
        
       <Routes>
            <Route path="/" element={<DayList />} />
            <Route path="/day/:day" element={<Day />} />
            <Route path="/create_word" element={<CreateWord />} />
            <Route path="/create_day" element={<CreateDay />} />
            <Route path="*" element={<EmptyPage />} />
        </Routes>

        {/** 
         * react-router-dom v5 switch 작성 
         * <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route>
          <Route path="/create_word">
            <CreateWord />
          </Route>
          <Route path="/create_day"> R
            <CreateDay />
          </Route>
          <Route>
            <EmptyPage />
          </Route>
       </Switch> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
    