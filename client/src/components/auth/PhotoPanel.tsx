export default function PhotoPanel() {
  return (
    <div className="relative bg-slate-800" data-testid="photo-panel">
      <div className="h-[40vh] lg:min-h-screen bg-slate-700 bg-center bg-cover" />

      <div className="absolute left-4 bottom-4 rounded-md bg-white/95 px-3 py-2 text-[11px] leading-tight text-slate-900 shadow-lg ring-1 ring-black/5">
        <div className="font-semibold text-[12px]">Used daily by Pros</div>
        <div className="text-slate-600">Placeholder Company • Tampa, FL</div>
      </div>
    </div>
  );
}
