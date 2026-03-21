import styles from  "./ButtonsContainer.module.css";
const ButtonsContainer = () =>{

    const ButtonsNames=["C","1","2","+" ,"3","4","-","5","6","*","7","8","/","0",".","="];
    return <div className={styles.buttonsContainer} >
        {ButtonsNames.map((name) => (
            <button className={styles.button} key={name}>
                {name}
            </button>
        ))}
        </div>
};
export default ButtonsContainer;
