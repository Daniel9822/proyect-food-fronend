import styles from "./OrderAndFilter.module.css";
import {
    handleAlphabeticalSort,
    handleScoreSort,
    handleDietTypeFilter,
} from "./orderAndfilter";
import { useDispatch } from "react-redux";

export default function OrderAndFilter() {
    const dispatch = useDispatch();

    return (
        <>
            <div className={styles.conteiner}>
                <label className={styles.filters}>Sort and filter: </label>
                <select
                    defaultValue={"Alphabetical"}
                    className={styles.select}
                    name="alphabetical"
                    onChange={(e) => handleAlphabeticalSort(e, dispatch)}
                >
                    <option value="asc">A to Z</option>
                    <option value="desc">Z to A</option>
                </select>
                <select
                    defaultValue={"Score"}
                    className={styles.select}
                    name="numerical"
                    onChange={(e) => handleScoreSort(e, dispatch)}
                >
                    <option value="asc">From Min to Max</option>
                    <option value="desc">From Max to Min</option>
                </select>

                <select
                    defaultValue={"Diets"}
                    className={styles.select}
                    name="diets"
                    onChange={(e) => handleDietTypeFilter(e, dispatch)}
                >
                    <option value="gluten free">Gluten Free</option>
                    <option value="ketogenic">Keto</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="lacto vegetarian">Lacto-Vegetarian</option>
                    <option value="ovo vegetarian">Ovo-Vegetarian</option>
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
            </div>
        </>
    );
}
