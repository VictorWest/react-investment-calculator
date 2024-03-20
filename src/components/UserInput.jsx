export default function UserInput({label, classTitle, handleChange}) {
  
  return (
    <div>
      <label htmlFor="input">{label}</label>
      <input onChange={handleChange} className={classTitle} type="number" name='input' required/>
    </div>
  )
}