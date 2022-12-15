import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipeDetails } from "../../reducers/middleware";
import IsLoding from "../isLoding";
import Nav from "../nav";
import style from "./recipeDetails.module.css";

export default function RecipeDetails() {
    const dispatch = useDispatch();
    const { recipeDetails, isloding } = useSelector((state) => state.recipe);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getRecipeDetails(id));
    }, [dispatch, id]);

    if (isloding) {
        return (
            <div>
                <Nav />
                <IsLoding />
            </div>
        );
    }

    return (
        <>
            <Nav />
            <div className={style.background}>
                <div className={style.conteiner}>
                    <div className={style.imgConteiner}>
                        <img
                            className={style.img}
                            src={recipeDetails.image}
                            alt="details"
                        />
                    </div>

                    <div className={style.text}>
                        <h3 className={style.title}>{recipeDetails.title}</h3>
                        <p className={style.summary}>
                            {recipeDetails.summary?.replace(/[^\w. @-]/gi, "")}
                        </p>

                        <h4 className={style.diets}>
                            Diets types:{" "}
                            {recipeDetails.updatedAt
                                ? recipeDetails.dietTypes?.join(", ")
                                : recipeDetails.diets?.join(", ")}
                        </h4>
                    </div>

                    <div className={style.instruction}>
                        <h3 className={style.h3}>instructions</h3>
                        <p>
                            {recipeDetails.instructions
                                ? recipeDetails.instructions?.replace(
                                      /[^\w. @-]/gi,
                                      ""
                                  )
                                : "has no instructions"}
                        </p>
                    </div>

                    <h5>
                    healthScore: 
                        { recipeDetails.healthScore }
                    </h5>
                </div>
            </div>
        </>
    );
}
