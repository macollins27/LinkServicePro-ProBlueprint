import { Link, useParams } from "react-router-dom";
import { Search, Rocket, Calendar, FileText, CreditCard, Plug } from "lucide-react";
import { helpCategories } from "@/data/help";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Rocket,
  Calendar,
  FileText,
  CreditCard,
  Plug,
};

export default function HelpCenter() {
  const { categoryId } = useParams<{ categoryId?: string }>();
  const category = categoryId ? helpCategories.find(c => c.id === categoryId) : null;

  if (category) {
    const Icon = iconMap[category.icon] || Rocket;
    return (
      <div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Breadcrumbs items={[
            { label: "Resources", href: "/resources" },
            { label: "Help Center", href: "/resources/help" },
            { label: category.name }
          ]} />
        </div>

        <PageHeader title={category.name} subtitle={`${category.articles.length} helpful articles`}>
          <div className="flex items-center gap-2 mt-4">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </PageHeader>

        <Section>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {category.articles.map((article) => (
                <Link
                  key={article.slug}
                  to={`/resources/help/${category.id}/${article.slug}`}
                  data-testid={`link-help-article-${article.slug}`}
                >
                  <Card className="hover-elevate active-elevate-2">
                    <CardHeader>
                      <CardTitle className="text-lg">{article.title}</CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <Link
                to="/resources/help"
                className="text-primary font-medium link-underline focus-outline"
                data-testid="link-back-to-help"
              >
                ← Back to all categories
              </Link>
            </div>
          </div>
        </Section>
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Help Center" }]} />
      </div>

      <PageHeader title="Help Center" subtitle="Get answers fast">
        <div className="max-w-2xl mx-auto mt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/40" />
            <Input
              type="search"
              placeholder="Search help articles..."
              className="pl-10"
              data-testid="input-search-help"
            />
          </div>
        </div>
      </PageHeader>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Rocket;
            return (
              <Link
                key={cat.id}
                to={`/resources/help/${cat.id}`}
                data-testid={`link-category-${cat.id}`}
              >
                <Card className="h-full hover-elevate active-elevate-2">
                  <CardHeader>
                    <div className="mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{cat.name}</CardTitle>
                    <CardDescription>
                      {cat.articles.length} {cat.articles.length === 1 ? 'article' : 'articles'}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
