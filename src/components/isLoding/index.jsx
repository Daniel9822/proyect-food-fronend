import styles from "./isloding.module.css";


export default function IsLoding() {
    return (
        <>
            <div className={styles.conteiner}>
                <div className={styles.loader}>
                    <div className={styles.face}>
                        <div className={styles.circle}></div>
                    </div>
                    <div className={styles.face}>
                        <div className={styles.circle}></div>
                    </div>
                </div>
            </div>
        </>
    );
}
