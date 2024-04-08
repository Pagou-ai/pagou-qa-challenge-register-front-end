export const Select = ({
  label,
  value,
  onChange,
  options,
  error
}: {
  label: string,
  value?: string,
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  options: any[],
  error?: any
}) => {
  return (
    <div className="mt-3">
      <label>{ label }</label>
      <select
        className="form-select"
        value={value}
        onChange={onChange}
      >
        <option value="">Selecione</option>
        {
          options.map((option, index) => (
            <option 
              key={index} 
              value={option.value}
            >
              {option.label}
            </option>
          ))
        }
      </select>
      { error && <span className="error-message">{error}</span> }
    </div>
  )
}