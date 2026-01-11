import { cn } from '@/lib/utils';

interface VideoProps {
  src: string;
  title?: string;
  caption?: string;
  className?: string;
}

export function Video({ src, title, caption, className }: VideoProps) {
  // Check if it's a YouTube or Vimeo URL
  const isYouTube = src.includes('youtube.com') || src.includes('youtu.be');
  const isVimeo = src.includes('vimeo.com');

  let embedSrc = src;
  
  if (isYouTube) {
    const videoId = src.includes('youtu.be') 
      ? src.split('youtu.be/')[1]?.split('?')[0]
      : src.split('v=')[1]?.split('&')[0];
    embedSrc = `https://www.youtube.com/embed/${videoId}`;
  } else if (isVimeo) {
    const videoId = src.split('vimeo.com/')[1]?.split('?')[0];
    embedSrc = `https://player.vimeo.com/video/${videoId}`;
  }

  return (
    <figure className="my-8">
      <div className={cn('relative overflow-hidden rounded-lg', 'aspect-video', className)}>
        <iframe
          src={embedSrc}
          title={title || 'Video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-slate-600 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
