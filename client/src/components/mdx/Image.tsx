import { cn } from '@/lib/utils';

interface ImageProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
}

export function Image({ src, alt, caption, priority, className }: ImageProps) {
  return (
    <figure className="my-8">
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        className={cn('rounded-lg w-full h-auto', className)}
      />
      {caption && (
        <figcaption className="mt-2 text-sm text-slate-600 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
