const Form = ({ handleSubmit, handleChange, value, placeholder, weight }) => {
	return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='icon'>
        <GoSearch />
      </div>
      <input
        className='input'
        type='text'
        name='slots'
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <button className='button' type=''>
        +
      </button>
      <button className='button' type=''>
        -
      </button>
    </form>

      )
    }

    export default Form;