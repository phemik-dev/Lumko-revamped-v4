import { SelectInput } from "@/components/form/SelectInput";
import { TextareaInput } from "@/components/form/TextareaInput";
import { TextInput } from "@/components/form/TextInput";

const roles = [
  "Clinical leader",
  "Data or technology leader",
  "Research team",
  "Executive buyer",
  "Public health team",
  "Compliance and governance"
];

const countries = ["South Africa", "Kenya", "Nigeria", "Ghana", "United Kingdom", "United States", "Other"];

const interests = [
  "Federated data collaboration",
  "Clinical research access",
  "Compliance and governance",
  "Developer integration",
  "Public health intelligence",
  "Insurer and payer intelligence"
];

export function FormSection() {
  return (
    <form className="h-full rounded-xl border border-line bg-white p-6 shadow-calm sm:p-8">
      <div>
        <h2 className="text-3xl font-bold text-ink">Request a demo</h2>
        <p className="mt-3 text-base leading-7 text-ink-soft">
          Fill in your details and we will be in touch within one business day.
        </p>
      </div>

      <div className="mt-7 grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <TextInput label="Full name" name="fullName" placeholder="e.g. Dr. Jane Sithole" />
          <TextInput label="Work email" name="email" type="email" placeholder="jane.sithole@institution.ac.za" />
        </div>
        <TextInput
          label="Organisation"
          name="organisation"
          placeholder="e.g. Chris Hani Baragwanath Academic Hospital"
        />
        <div className="grid gap-5 sm:grid-cols-2">
          <SelectInput label="Role" name="role" options={roles} />
          <SelectInput label="Country" name="country" options={countries} />
        </div>
        <SelectInput label="Area of interest" name="interest" options={interests} />
        <TextareaInput
          label="Message"
          name="message"
          placeholder="Tell us about the governance challenge or outcome you are working on."
        />
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-action px-6 py-3 text-base font-semibold text-ink shadow-calm transition hover:bg-action-dark sm:w-auto"
      >
        Request demo
      </button>
      <p className="mt-4 text-sm leading-6 text-ink-soft">
        Your information is used only to respond to your request. Nothing else.
      </p>
    </form>
  );
}
