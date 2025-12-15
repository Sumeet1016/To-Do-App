import styles from "./InputContainer.module.css";

const InputContainer = () => {
  return (
    <div className={styles.inputContainer}>
      <input type="text" placeholder="Enter your Task" />
      <input type="date" />
      <button type="button" className={`btn btn-success ${styles.addBtn}`}>Add</button>
    </div>
  );
};

export default InputContainer;
