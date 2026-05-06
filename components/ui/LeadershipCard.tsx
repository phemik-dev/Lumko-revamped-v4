type LeadershipCardProps = {
  name: string;
  role: string;
  body: string;
};

export function LeadershipCard({ name, role, body }: LeadershipCardProps) {
  return (
    <article className="border-t border-line pt-6">
      <h3 className="text-2xl font-bold text-ink">{name}</h3>
      <p className="mt-1 font-semibold text-lumko-blue">{role}</p>
      <p className="mt-4 text-base leading-7 text-ink-soft">{body}</p>
    </article>
  );
}
