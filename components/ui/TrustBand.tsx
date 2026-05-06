type TrustBandProps = {
  statement: string;
  items: Array<{ strong: string; body: string }>;
};

export function TrustBand({ statement, items }: TrustBandProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:items-start">
      <h2 className="text-balance text-4xl font-bold tracking-normal sm:text-5xl">{statement}</h2>
      <div className="grid gap-6">
        {items.map((item) => (
          <div key={item.strong} className="border-t border-white/15 pt-5 first:border-t-0 first:pt-0">
            <h3 className="text-xl font-bold text-white">{item.strong}</h3>
            <p className="mt-2 text-base leading-7 text-blue-100">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
