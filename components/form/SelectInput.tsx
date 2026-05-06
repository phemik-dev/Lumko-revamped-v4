type SelectInputProps = {
  label: string;
  name: string;
  options: string[];
};

export function SelectInput({ label, name, options }: SelectInputProps) {
  return (
    <label className="grid gap-2 text-sm font-bold text-ink" htmlFor={name}>
      {label}
      <select
        id={name}
        name={name}
        required
        className="min-h-12 rounded-lg border border-line bg-white px-4 py-3 text-base font-normal text-ink outline-none transition focus:border-lumko-blue"
        defaultValue=""
      >
        <option value="" disabled>
          Select one
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
