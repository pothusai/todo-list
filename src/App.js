import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./Task/home";
import Jokes from "./Task/jokes";
import Login from "./Task/login";
import ToDo from "./Task/To-Do-List";
// import Focus from "./focus/focus";
// import Increment from "./Practice/increment";
// import NewFile from "./React/NewFile";
// import ToDoLists from "./Deleted-To-Do/To-Do-List";
// import Songs from "./songs/Songs";
// import ToDoList from "./To-Do/To-Do-List";



// const App = () => {
//   return (
//     <div>
//       {/* <Songs /> */}
//       <ToDoLists />
//       {/* <NewFile /> */}
//       {/* <Increment /> */}
//       {/* <Focus /> */}
//     </div>
//   )
// }

// const isAuthorised = false

function App(){
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            {/* <Link to='/todo'>ToDo</Link> */}
          </ul>
        </nav>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/todo'>
            <ToDo />
          </Route>
          {/* <Route path='/jokes'>
            <Jokes />
          </Route> */}
        </Switch>
      </div>
    </Router>
  )
}

export default App;
