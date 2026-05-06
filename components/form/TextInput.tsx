type TextInputProps = {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
};

export function TextInput({
  label,
  name,
  placeholder,
  type = "text",
  required = true
}: TextInputProps) {
  return (
    <label className="grid gap-2 text-sm font-bold text-ink" htmlFor={name}>
      {label}
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="min-h-12 rounded-lg border border-line bg-white px-4 py-3 text-base font-normal text-ink outline-none transition placeholder:text-ink-soft/60 focus:border-lumko-blue"
      />
    </label>
  );
}
