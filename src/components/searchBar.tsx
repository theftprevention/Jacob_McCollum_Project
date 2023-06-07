export default function SearchBar(
  { onChange, placeholder, value }: {
    onChange: (value: string) => void;
    placeholder?: string;
    value: string;
  }
) {
  function setValue(value: string) {
    if (typeof onChange === 'function') {
      onChange(value);
    }
  }
  return (
    <div className="search-bar">
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder || ''} />
      <button onClick={() => setValue('')}>X</button>
    </div>
  );
}
