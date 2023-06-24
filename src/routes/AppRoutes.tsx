import { Routes, Route } from "react-router-dom";
import Home from "../components/Home.page";
import SuperHeros from "../components/SuperHeros.page";
import TodoList from "../components/TodoList.page";

const AppRoutes = () => {
    return (  
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/superheros" element={<SuperHeros />} />
            <Route path="/todos" element={<TodoList />} />
        </Routes>
    );
}
 
export default AppRoutes;