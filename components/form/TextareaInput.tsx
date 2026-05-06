type TextareaInputProps = {
  label: string;
  name: string;
  placeholder?: string;
};

export function TextareaInput({ label, name, placeholder }: TextareaInputProps) {
  return (
    <label className="grid gap-2 text-sm font-bold text-ink" htmlFor={name}>
      {label}
      <textarea
        id={name}
        name={name}
        required
        rows={5}
        placeholder={placeholder}
        className="rounded-lg border border-line bg-white px-4 py-3 text-base font-normal leading-7 text-ink outline-none transition placeholder:text-ink-soft/60 focus:border-lumko-blue"
      />
    </label>
  );
}
