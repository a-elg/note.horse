import React from 'react';
import { BrowserRouter,Route,Switch} from "react-router-dom";
import IndexContainer from "../containers/indexContainer";
import Welcome from "../pages/Welcome";


const App =()=>{
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <IndexContainer/>
                </Route>
                <Route exact path="/welcome">
                    <div>
                        <Welcome/>
                    </div>
                </Route>
                <Route>
                    <div className="container mt-5 text-center">
                        <h1>404 No encontrado :c</h1>
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default App;