import { Link } from "react-router-dom";
import style from "./cartRecipes.module.css";

export default function CartRecipes({
    id,
    name,
    image,
    dietTypes,
    healthScore,
}) {
    return (
        <>
            <div className={style.conteiner}>
                <div className={style.flex}>
                    <Link className={style.a} to={`/recipe/${id}`}>
                        <img className={style.img} src={image} alt="recipe" />
                    </Link>
                    
                    <h3 className={style.name}>{name}</h3>
                    <div className={style.footer}>
                        <h4 className={style.diets}>{dietTypes}...</h4>
                        <span className={style.healthscore}>{healthScore}</span>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
