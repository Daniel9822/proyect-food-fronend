import "./App.css";
import Preview from "./components/preview";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import Main from "./components/main";
import "./App.css";
import RecipeDetails from "./components/recipeDetails";
import CreateRecipe from "./components/createRecipe";

function App() {
    // const { isloding } = useSelector((state) => state.recipe);

    // if (isloding) return <IsLoding />;
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Preview />} />
                <Route path="/home" element={<Nav />} />
            </Routes>

            <Routes>
                <Route path="/home" element={<Main />}/>
                {/* <Route path="/recipe/:id" element={<Nav />} /> */}
                <Route path="/createRecipe" element={<CreateRecipe/>}></Route>
                <Route path="/recipe/:id" element={<RecipeDetails/>}></Route>

            </Routes>
        </div>
    );
}

export default App;
