import { Link, useRoute } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Article() {
  const [, params] = useRoute('/blog/:slug');
  const slug = params?.slug || '';

  // Convert slug to readable title
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen bg-background">
      <article className="py-16 sm:py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/blog">
            <a>
              <Button
                variant="ghost"
                className="mb-8 -ml-4 hover-elevate"
                data-testid="button-back-to-blog"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </a>
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="section-title text-foreground mb-6 tracking-tight" data-testid="text-article-title">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground" data-testid="text-article-date">
              Coming soon
            </p>
          </header>

          {/* Article Content Placeholder */}
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              This article is currently being prepared. Check back soon for the full content.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In the meantime, explore our other <Link href="/blog"><a className="text-primary font-semibold hover:underline" data-testid="link-back-to-blog-articles">blog articles</a></Link> or learn more about <Link href="/#features"><a className="text-primary font-semibold hover:underline" data-testid="link-features">Kaartx Kloud's features</a></Link>.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
