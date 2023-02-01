const Input = ({ label, state, setState }) => {
  return (
    <div className='form-floating'>
      <input
        type='email'
        className='form-control'
        id='floatingInput'
        placeholder={label}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <label>{label}</label>
    </div>
  )
}

export default Input
