import * as runtime from 'react/jsx-runtime';
import { MDXComponents } from './MDXComponents';

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MDXContentProps {
  code: string;
  components?: Record<string, React.ComponentType<any>>;
}

export function MDXContent({ code, components }: MDXContentProps) {
  const Component = useMDXComponent(code);
  return <Component components={{ ...MDXComponents, ...components }} />;
}
