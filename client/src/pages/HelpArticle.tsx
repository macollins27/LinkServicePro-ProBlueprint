import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { helpCategories } from "@/data/help";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import "highlight.js/styles/github-dark.css";

export default function HelpArticle() {
  const { categoryId, articleSlug } = useParams<{ categoryId: string; articleSlug: string }>();
  const [feedback, setFeedback] = useState<'helpful' | 'not-helpful' | null>(null);

  const category = helpCategories.find((c) => c.id === categoryId);
  const article = category?.articles.find((a) => a.slug === articleSlug);

  if (!category || !article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Article not found</h1>
          <Link to="/resources/help" className="text-primary hover:underline" data-testid="link-back-to-help">
            Back to Help Center
          </Link>
        </div>
      </div>
    );
  }

  const handleFeedback = (type: 'helpful' | 'not-helpful') => {
    setFeedback(type);
    console.log(`Article ${article.slug} marked as ${type}`);
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Breadcrumbs
          items={[
            { label: "Resources", href: "/resources" },
            { label: "Help Center", href: "/resources/help" },
            { label: category.name, href: `/resources/help/${categoryId}` },
            { label: article.title },
          ]}
        />
      </div>

      <Section>
        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg mb-4">{category.name}</CardTitle>
                <nav className="space-y-2">
                  {category.articles.map((a) => (
                    <Link
                      key={a.slug}
                      to={`/resources/help/${categoryId}/${a.slug}`}
                      className={`block text-sm py-2 px-3 rounded hover-elevate ${
                        a.slug === articleSlug ? 'bg-muted font-medium' : 'text-foreground/70'
                      }`}
                      data-testid={`link-article-${a.slug}`}
                    >
                      {a.title}
                    </Link>
                  ))}
                </nav>
              </CardHeader>
            </Card>
          </aside>

          <div className="lg:col-span-3">
            <article className="prose prose-lg dark:prose-invert max-w-none mb-12" data-testid="article-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.content}</ReactMarkdown>
            </article>

            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-semibold mb-4">Was this helpful?</h3>
              <div className="flex gap-3">
                <Button
                  variant={feedback === 'helpful' ? 'default' : 'outline'}
                  onClick={() => handleFeedback('helpful')}
                  data-testid="button-feedback-helpful"
                >
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  Yes
                </Button>
                <Button
                  variant={feedback === 'not-helpful' ? 'default' : 'outline'}
                  onClick={() => handleFeedback('not-helpful')}
                  data-testid="button-feedback-not-helpful"
                >
                  <ThumbsDown className="w-4 h-4 mr-2" />
                  No
                </Button>
              </div>
              {feedback && (
                <p className="mt-4 text-sm text-foreground/70">
                  Thank you for your feedback!
                </p>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
