import { cn } from '@/lib/utils';

interface KPIChipProps {
  label: string;
  value: string;
  trend?: 'up' | 'down' | 'neutral';
  variant?: 'success' | 'primary' | 'default';
}

export function KPIChip({ label, value, trend, variant = 'default' }: KPIChipProps) {
  const variantStyles = {
    success: 'bg-green-100 text-green-900 border-green-300',
    primary: 'bg-blue-100 text-blue-900 border-blue-300',
    default: 'bg-slate-100 text-slate-900 border-slate-300',
  };

  const trendIndicator = trend === 'up' ? '↑' : trend === 'down' ? '↓' : '';

  return (
    <div
      className={cn(
        'inline-flex flex-col items-center rounded-lg border-2 px-4 py-3 min-w-[140px]',
        variantStyles[variant]
      )}
      data-testid={`kpi-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <span className="text-3xl font-bold">
        {value}
        {trendIndicator && <span className="ml-1 text-xl">{trendIndicator}</span>}
      </span>
      <span className="text-xs font-medium uppercase tracking-wide mt-1">{label}</span>
    </div>
  );
}
