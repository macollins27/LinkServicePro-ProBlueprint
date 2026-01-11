export default function AppBackdrop() {
  return (
    <div className="relative h-full" data-testid="app-backdrop">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#e5e7eb_1px,transparent_1px),linear-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px] opacity-60" />
      <div className="absolute inset-0 backdrop-blur-sm bg-white/60" />
    </div>
  );
}
