
function FilterChip({ label, active = false, onClick }) {
  return (
    <button
      type="button"
      className={`universe-chip ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default FilterChip
