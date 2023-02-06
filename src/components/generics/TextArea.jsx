const TextArea = ({ label, state, setState, height = "100px" }) => {
  return (
    <div className='form-floating'>
      <textarea
        className='form-control'
        placeholder={label}
        value={state}
        onChange={(e) => setState(e.target.value)}
        style={{ height: height }}
      ></textarea>
      <label>{label}</label>
    </div>
  )
}

export default TextArea
