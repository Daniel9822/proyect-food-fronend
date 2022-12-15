import styles from "./paginated.module.css";

export default function Paginated({ recipesPage, allRecipes, paged }) {
    const pages = [];

    for (let i = 1; i <= Math.ceil(allRecipes / recipesPage); i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.length <= 1 ? (
                <></>
            ) : (
                <div className={styles.conteiner}>
                    <ul className={styles.pages}>
                        {pages?.map((p) => (
                            <li className={styles.page} key={p}>
                                <button
                                    className={styles.pagBtn}
                                    onClick={() => paged(p)}
                                >
                                    {p}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
