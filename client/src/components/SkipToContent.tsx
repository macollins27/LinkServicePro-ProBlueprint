export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:font-medium focus:shadow-lg"
      data-testid="skip-to-content"
    >
      Skip to main content
    </a>
  );
}
