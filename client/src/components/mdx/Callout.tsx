import { AlertCircle, Info, CheckCircle, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CalloutProps {
  type?: 'info' | 'warning' | 'success' | 'danger';
  title?: string;
  children: React.ReactNode;
}

const calloutConfig = {
  info: {
    icon: Info,
    className: 'bg-blue-50 border-blue-200 text-blue-900',
  },
  warning: {
    icon: AlertTriangle,
    className: 'bg-amber-50 border-amber-200 text-amber-900',
  },
  success: {
    icon: CheckCircle,
    className: 'bg-green-50 border-green-200 text-green-900',
  },
  danger: {
    icon: AlertCircle,
    className: 'bg-red-50 border-red-200 text-red-900',
  },
};

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const { icon: Icon, className } = calloutConfig[type];

  return (
    <div
      className={cn(
        'my-6 rounded-md border p-4',
        className
      )}
      role="note"
      aria-label={title || type}
    >
      <div className="flex gap-3">
        <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
        <div className="flex-1">
          {title && <p className="font-semibold mb-1">{title}</p>}
          <div className="text-sm [&>p]:my-2">{children}</div>
        </div>
      </div>
    </div>
  );
}
