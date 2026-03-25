import styles from  "./ButtonsContainer.module.css";
const ButtonsContainer = ({onButtonClick}) =>{

    const ButtonsNames=["C","1","2","3" ,"+","4","5","6","7", "-", "8","9","0","/","*",".","="];
    return <div className={styles.buttonsContainer} >
        {ButtonsNames.map((name) => (
            <button className={styles.button} key={name} onClick={()=>{
                return onButtonClick(name);
            }}>
                {name}
            </button>
        ))}
        </div>
};
export default ButtonsContainer;
