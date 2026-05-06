type RoleCardProps = {
  role: string;
  body: string;
};

export function RoleCard({ role, body }: RoleCardProps) {
  return (
    <article className="border-t border-line pt-6">
      <h3 className="text-2xl font-bold text-ink">{role}</h3>
      <p className="mt-3 text-base leading-7 text-ink-soft">{body}</p>
    </article>
  );
}
