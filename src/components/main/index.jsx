import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../../reducers/middleware";
import CartRecipes from "../cartRecipes";
import IsLoding from "../isLoding";
import NotResults from "../NotResults";
import Paginated from "../paginated";
import style from "./Main.module.css";

export default function Main() {
    const dispatch = useDispatch();
    const { totalRecipes, isloding } = useSelector((state) => state.recipe);
    const [page, setPage] = useState(1);
    const [recipesPage] = useState(9);
    
    const quantityRecipesPage = page * recipesPage;
    const firstRecipePage = quantityRecipesPage - recipesPage;
    const showRecipesPage = totalRecipes.slice(firstRecipePage, quantityRecipesPage);
    
    const paged = function(pageNumber) {
        setPage(pageNumber)
    };


    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);

    if(!totalRecipes.length && !isloding) return <NotResults/>
    if(isloding) return <IsLoding/>

    return (
        <div className={style.conteiner}>
            <Paginated recipesPage={recipesPage} allRecipes={totalRecipes.length} paged={paged}/>
            <main className={style.main}>
                {showRecipesPage &&
                    showRecipesPage.map((rec) => {
                        return (
                            <CartRecipes
                                key={rec.id}
                                name={rec.name}
                                image={rec.image}
                                dietTypes={rec.dietTypes.slice(0, 1).join(" ")}
                                healthScore={rec.healthScore}
                                id={rec.id}
                            />
                        );
                    })}
            </main>
        </div>
    );
}
