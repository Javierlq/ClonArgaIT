import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import IdProject from "./pages/IdProject";
import IdBudget from "./pages/IdBudget";
import IdCustomer from "./pages/IdCustomer";
import Billing from "./pages/Billing";
import Customer from "./pages/Customer";
import Report from "./pages/Report";
import CreateProject from "./pages/CreateProject";
import CreateCustomer from "./pages/CreateCustomer";
import ModifyProject from "./pages/ModifyProject";
import Start from "./pages/Start";
import LoginPage from "./pages/LoginPage";
import CreateBudget from "./pages/CreateBudget";
import { useState } from "react";
import EditCustomer from "./pages/EditCustomer"; // Importa la página de edición del cliente

function App() {
    //localStorage.clear();
    const [activeProject, setActiveProject] = useState(undefined);
    return (
        <Router>
            <div className="App">
                {/* <Sidebar activeProject={activeProject} setActiveProject={setActiveProject}/>
                <div className="main-content"> */}
                        <Routes>
                            <Route path="/" element={<LoginPage/>} />
                            <Route path="/start" element={<Start activeProject={activeProject} setActiveProject={setActiveProject}/>} />
                            <Route path="/idproject/:id" element={<IdProject activeProject={activeProject} setActiveProject={setActiveProject}/>} />
                            <Route path="/billing/:id" element={<Billing activeProject={activeProject} setActiveProject={setActiveProject}/>} />
                            <Route path="/customer/:id" element={<Customer activeProject={activeProject} setActiveProject={setActiveProject}/>} />
                            <Route path="/report/:id" element={<Report />} />
                            <Route path="/createproject" element={<CreateProject activeProject={activeProject} setActiveProject={setActiveProject}/>} />
                            <Route path="/modifyproject/:id" element={<ModifyProject activeProject={activeProject} setActiveProject={setActiveProject}/>} />
                            <Route path="/createcustomer" element={<CreateCustomer activeProject={activeProject} setActiveProject={setActiveProject}/>} />
                            <Route path="/editcustomer/:id" element={<EditCustomer activeProject={activeProject} setActiveProject={setActiveProject}/>} />
                            <Route path="/idcustomer/:id" element={<IdCustomer activeProject={activeProject} setActiveProject={setActiveProject}/>} />
                            <Route path="/createbudget" element={<CreateBudget activeProject={activeProject} setActiveProject={setActiveProject}/>} />
                            <Route path="/idbudget/:id" element={<IdBudget activeProject={activeProject} setActiveProject={setActiveProject}/>} />
                        </Routes>
                    {/* </div> */}
                </div>
        </Router>
    );
}

export default App;
