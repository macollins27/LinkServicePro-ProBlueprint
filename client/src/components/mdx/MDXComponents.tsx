import { Callout } from './Callout';
import { KPIChip } from './KPIChip';
import { Image } from './Image';
import { Video } from './Video';

export const MDXComponents = {
  Callout,
  KPIChip,
  Image,
  Video,
  // Enhance default HTML elements
  h1: (props: any) => (
    <h1 className="text-4xl font-bold mt-8 mb-4 text-slate-900" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-3xl font-bold mt-6 mb-3 text-slate-900" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-2xl font-semibold mt-5 mb-2 text-slate-900" {...props} />
  ),
  p: (props: any) => <p className="my-4 text-slate-700 leading-relaxed" {...props} />,
  ul: (props: any) => <ul className="my-4 ml-6 list-disc space-y-2" {...props} />,
  ol: (props: any) => <ol className="my-4 ml-6 list-decimal space-y-2" {...props} />,
  li: (props: any) => <li className="text-slate-700" {...props} />,
  a: (props: any) => (
    <a
      className="text-blue-600 hover:text-blue-800 underline font-medium"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="my-6 border-l-4 border-blue-500 pl-4 italic text-slate-600"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="bg-slate-100 text-slate-900 px-1.5 py-0.5 rounded text-sm font-mono"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg bg-slate-900 p-4"
      {...props}
    />
  ),
  hr: (props: any) => <hr className="my-8 border-slate-200" {...props} />,
  table: (props: any) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th
      className="border border-slate-200 bg-slate-50 px-4 py-2 text-left font-semibold"
      {...props}
    />
  ),
  td: (props: any) => (
    <td className="border border-slate-200 px-4 py-2" {...props} />
  ),
};
