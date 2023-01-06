import styles from "./FormElements.module.css";

type inputProps = {
  label: string;
  error:string|undefined;
  input: { id: string; type: string; name: string,value:string };
  events:{onChange:Function|null,onClick:Function|null}
};
export default function Input(props: inputProps) {
  return (
    <div className={styles.formGroup}>
      <label className={styles.formLabel} htmlFor={props.input.id}>
        {props.label}
      </label>
      <input className={`${styles.formControl} ${props.error && styles.invalid}`} {...props.input} onChange={(e)=>{props.events.onChange?.(e)}} onClick={(e)=>{props.events.onClick?.(e)}} />
      {props.error ? <p className={styles.formValidationError}>{props.error}</p> : null}
    </div>
  );
}
