import { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./CreateRecipe.module.css";
import { validate } from "./validate";
import { createRecipe, fetchRecipes } from "../../reducers/middleware";
import { useNavigate } from "react-router-dom";

export default function CreateRecipe() {
    const history = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const [input, setInput] = useState({
        image: "",
        name: "",
        summary: "",
        healthScore: "",
        instructions: "",
        dietTypes: [],
    });

    let handleSubmit = (e) => {
        e.preventDefault();
        setInput({
            image: "",
            name: "",
            summary: "",
            healthScore: "",
            instructions: "",
            dietTypes: [],
        });
        dispatch(createRecipe(input));
        dispatch(fetchRecipes());
        history("/home");
    };

    let handlerChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });

        setError(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
    };

    let handleDiets = (e) => {
        if(!input.dietTypes.includes(e.target.value)){
            setInput({ ...input, dietTypes: [...input.dietTypes, e.target.value] });
        }

    };

    console.log(input.dietTypes)
    return (
        <>
            <div className={style.background}>
                <div className={style.conteiner}>
                    <form
                        onSubmit={handleSubmit}
                        action=""
                        className={style.form}
                    >
                        <label name="name">Recipe: {error.name} </label>
                        <input
                            className={error.name && style.danger}
                            required
                            name="name"
                            type="text"
                            placeholder="name"
                            value={input.name}
                            onChange={(e) => handlerChange(e)}
                        />
                        <label name="url">Url: </label>
                        <input
                            type="text"
                            name="image"
                            required
                            placeholder="https://pinteres.com"
                            value={input.image}
                            onChange={(e) => handlerChange(e)}
                        />
                        <label name="summary">Summary: {error.summary} </label>
                        <textarea
                            required
                            className={error.summary && style.danger}
                            type="text"
                            name="summary"
                            placeholder="Describe your recipe"
                            value={input.summary}
                            onChange={(e) => handlerChange(e)}
                        />
                        <label name="healthScore">Health Score</label>
                        <input
                            required
                            className={error.healthScore && style.danger}
                            type="number"
                            name="healthScore"
                            value={input.healthScore}
                            onChange={(e) => handlerChange(e)}
                        />
                        <label name="step">Step by Step</label>
                        <input
                            type="text"
                            name="instructions"
                            id=""
                            placeholder="opcional"
                            value={input.instructions}
                            onChange={(e) => handlerChange(e)}
                        />
                        <label name="diets">Diet types</label>
                        <select
                            className={style.select}
                            defaultValue={"gluten free"}
                            name="dietTypes"
                            multiple
                            required
                            onChange={(e) => handleDiets(e)}
                        >
                            <option value="gluten free">Gluten Free</option>
                            <option value="ketogenic">Keto</option>
                            <option value="vegetarian">Vegetarian</option>
                            <option value="lacto vegetarian">
                                Lacto-Vegetarian
                            </option>
                            <option value="ovo vegetarian">
                                Ovo-Vegetarian
                            </option>
                            <option value="lacto ovo vegetarian">
                                Lacto-Ovo-Vegetarian
                            </option>
                            <option value="vegan">Vegan</option>
                            <option value="pescetarian">Pescetarian</option>
                            <option value="paleolithic">Paleo</option>
                            <option value="primal">Primal</option>
                            <option value="low fodmap">Low FODMAP</option>
                            <option value="whole 30">Whole30</option>
                            <option value="dairy free">Dairy Free</option>
                        </select>
                        <button type="submit" className={style.btn}>
                            Create
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
