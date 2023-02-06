//type=" degani default xolatdagi type degani "
const Input = ({ label, state, setState, type = "text" }) => {
  return (
    <div className='form-floating'>
      <input
        type={type}
        className='form-control'
        id='floatingInput' // id bilan htmlFor dagi kodlar auto suggestion beradi
        placeholder={label}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <label htmlFor='floatingInput'>{label}</label>
    </div>
  )
}

export default Input
