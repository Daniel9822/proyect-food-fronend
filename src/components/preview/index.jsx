import style from "./preview.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeDiets } from "../../reducers/middleware";


export default function Preview() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeDiets())
    },[dispatch])
    return (
        <div className={style.container}>
            <h2 className={style.tilte}>Henry Food</h2>
            <Link to='/home' className={style.a}>
                {" "}
                <button className={style.button}><span>Get start</span></button>
            </Link>
        </div>
    );
}
