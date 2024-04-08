export const Button = ({
  label,
  onClick,
  loading
}: {
  label: string,
  onClick?: () => void,
  loading?: boolean
}) => {
  return (
    <button
      className="button custom"
      type="submit"
      onClick={onClick}
    >
      {
        loading ? (
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="sr-only"></span>
          </div>
        ) : label
      }
    </button>
  )
}