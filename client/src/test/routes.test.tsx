import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { TooltipProvider } from '@/components/ui/tooltip';
import AppRoutes from '@/Router';

// Helper to render the actual routing configuration with a specific route
// Creates fresh QueryClient per test to avoid cross-test cache bleed
function renderAppAtRoute(initialRoute: string) {
  const testQueryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });

  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <HelmetProvider>
        <QueryClientProvider client={testQueryClient}>
          <TooltipProvider>
            <AppRoutes />
          </TooltipProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </MemoryRouter>
  );
}

// Helper to check if a 404 page is NOT rendered
function assertNotFoundPageNotRendered() {
  // 404 page has specific heading text
  const headings = screen.queryAllByRole('heading', { level: 1 });
  const has404 = headings.some(h => h.textContent?.includes('404') || h.textContent?.includes('Page Not Found'));
  expect(has404).toBe(false);
}

describe('Route Tests - Testing Actual App Routing Configuration', () => {
  describe('Core Routes', () => {
    it('should render homepage at /', () => {
      renderAppAtRoute('/');
      assertNotFoundPageNotRendered();
      expect(screen.getAllByRole('main').length).toBeGreaterThan(0);
    });

    it('should render features index at /features', () => {
      renderAppAtRoute('/features');
      assertNotFoundPageNotRendered();
      expect(screen.getAllByRole('main').length).toBeGreaterThan(0);
    });

    it('should render pricing page at /pricing', () => {
      renderAppAtRoute('/pricing');
      assertNotFoundPageNotRendered();
      expect(screen.getAllByRole('main').length).toBeGreaterThan(0);
    });

    it('should render about page at /about', () => {
      renderAppAtRoute('/about');
      assertNotFoundPageNotRendered();
      expect(screen.getAllByRole('main').length).toBeGreaterThan(0);
    });

    it('should render contact page at /contact', () => {
      renderAppAtRoute('/contact');
      assertNotFoundPageNotRendered();
      expect(screen.getAllByRole('main').length).toBeGreaterThan(0);
    });
  });

  describe('Feature Detail Routes', () => {
    it('should render scheduling-dispatch feature at /features/scheduling-dispatch', () => {
      renderAppAtRoute('/features/scheduling-dispatch');
      assertNotFoundPageNotRendered();
      expect(screen.getAllByRole('main').length).toBeGreaterThan(0);
    });

    it('should render invoicing-payments feature at /features/invoicing-payments', () => {
      renderAppAtRoute('/features/invoicing-payments');
      assertNotFoundPageNotRendered();
      expect(screen.getAllByRole('main').length).toBeGreaterThan(0);
    });
  });

  describe('Industry Routes', () => {
    it('should render industries index at /industries', () => {
      renderAppAtRoute('/industries');
      assertNotFoundPageNotRendered();
      expect(screen.getAllByRole('main').length).toBeGreaterThan(0);
    });

    it('should render industry detail at /industries/hvac', () => {
      renderAppAtRoute('/industries/hvac');
      assertNotFoundPageNotRendered();
      expect(screen.getAllByRole('main').length).toBeGreaterThan(0);
    });
  });

  describe('Resource Routes', () => {
    it('should render resources hub at /resources', () => {
      renderAppAtRoute('/resources');
      assertNotFoundPageNotRendered();
      expect(screen.getAllByRole('main').length).toBeGreaterThan(0);
    });

    it('should render blog index at /resources/blog', () => {
      renderAppAtRoute('/resources/blog');
      assertNotFoundPageNotRendered();
      expect(screen.getAllByRole('main').length).toBeGreaterThan(0);
    });

    it('should render guides page at /resources/guides', () => {
      renderAppAtRoute('/resources/guides');
      assertNotFoundPageNotRendered();
      expect(screen.getAllByRole('main').length).toBeGreaterThan(0);
    });

    it('should render webinars page at /resources/webinars', () => {
      renderAppAtRoute('/resources/webinars');
      assertNotFoundPageNotRendered();
      expect(screen.getAllByRole('main').length).toBeGreaterThan(0);
    });
  });

  describe('Help Center Routes', () => {
    it('should render help center at /help', () => {
      renderAppAtRoute('/help');
      assertNotFoundPageNotRendered();
      expect(screen.getAllByRole('main').length).toBeGreaterThan(0);
    });

    it('should render help article at /help/article/getting-started', () => {
      renderAppAtRoute('/help/article/getting-started');
      assertNotFoundPageNotRendered();
      expect(screen.getAllByRole('main').length).toBeGreaterThan(0);
    });
  });

  describe('Comparison Routes', () => {
    it('should render compare page at /compare', () => {
      renderAppAtRoute('/compare');
      assertNotFoundPageNotRendered();
      expect(screen.getAllByRole('main').length).toBeGreaterThan(0);
    });

    it('should render legacy comparison at /compare/legacy-tools', () => {
      renderAppAtRoute('/compare/legacy-tools');
      assertNotFoundPageNotRendered();
      expect(screen.getAllByRole('main').length).toBeGreaterThan(0);
    });
  });

  describe('Legal Routes', () => {
    it('should render privacy policy at /legal/privacy', () => {
      renderAppAtRoute('/legal/privacy');
      assertNotFoundPageNotRendered();
      expect(screen.getAllByRole('main').length).toBeGreaterThan(0);
    });

    it('should render terms of service at /legal/terms', () => {
      renderAppAtRoute('/legal/terms');
      assertNotFoundPageNotRendered();
      expect(screen.getAllByRole('main').length).toBeGreaterThan(0);
    });

    it('should render SLA at /legal/sla', () => {
      renderAppAtRoute('/legal/sla');
      assertNotFoundPageNotRendered();
      expect(screen.getAllByRole('main').length).toBeGreaterThan(0);
    });

    it('should render refund policy at /legal/refund', () => {
      renderAppAtRoute('/legal/refund');
      assertNotFoundPageNotRendered();
      expect(screen.getAllByRole('main').length).toBeGreaterThan(0);
    });
  });

  describe('Signup Routes (Outside Layout)', () => {
    it('should render signup page at /signup', () => {
      renderAppAtRoute('/signup');
      assertNotFoundPageNotRendered();
      // Verify actual signup page content exists
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);
    });

    it('should render signup success at /signup/success', () => {
      renderAppAtRoute('/signup/success');
      assertNotFoundPageNotRendered();
      // Verify success page has expected content
      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThan(0);
    });
  });

  describe('404 Route', () => {
    it('should render 404 page for unknown routes', () => {
      renderAppAtRoute('/this-route-does-not-exist');
      // 404 page should have specific heading
      const headings = screen.getAllByRole('heading', { level: 1 });
      const has404 = headings.some(h => 
        h.textContent?.includes('404') || h.textContent?.includes('Page Not Found')
      );
      expect(has404).toBe(true);
    });
  });
});
