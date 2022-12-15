import { Link } from "react-router-dom";
import style from "./Nav.module.css";
import cooking from "../../assets/cooking.png";
import OrderAndFilter from "../orderAndFilter";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../reducers/middleware";


export default function Nav() {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setSearch(e.target.value);
        dispatch(getByName(e.target.value));
    };

    const handleSumit = (e) =>{
        e.preventDefault()
    }


    return (
        <div className={style.conteiner}>
            <div className={style.nav}>
                <img className={style.logo} src={cooking} alt="logo" />
                <Link to="/">
                    <h2 className={style.title}>Recipe room</h2>
                </Link>
            </div>
            <div>
                <form
                onSubmit={handleSumit}
                 className={style.form}>
                    <input
                        onChange={handleChange}
                        value={search}
                        name="search"
                        className={style.input}
                        type="text"
                        placeholder="Search recipe"
                    />
                </form>
            </div>
            <div>
                <Link to="/createRecipe">
                    <button className={style.btn}> Create recipe</button>
                </Link>
            </div>
            <OrderAndFilter />
        </div>
    );
}
