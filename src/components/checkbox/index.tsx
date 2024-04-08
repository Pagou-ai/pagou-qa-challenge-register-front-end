export const Checkbox = ({
  label,
  value,
  onChange,
  error
}: {
  label: string,
  value?: any,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  error?: any
}) => {
  return (
    <div className="my-3">
      <input
        type='checkbox'
        value={value}
        onChange={onChange}
      />
      <label> &nbsp;{ label }</label>
      { error && <span>{error}</span> }
    </div>
  )
}