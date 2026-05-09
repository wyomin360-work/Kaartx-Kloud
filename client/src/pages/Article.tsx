import { Link, useRoute } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Article() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug || "";

  // Convert slug to readable title
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="min-h-screen bg-background">
      <article className="article-section py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/blog">
            <a>
              <Button
                variant="ghost"
                className="hover-elevate -ml-4 mb-8"
                data-testid="button-back-to-blog"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </a>
          </Link>

          {/* Article Header */}
          <header className="article-header mb-12">
            <h1
              className="section-title mb-6 tracking-tight text-foreground"
              data-testid="text-article-title"
            >
              {title}
            </h1>
            <p
              className="text-lg text-muted-foreground"
              data-testid="text-article-date"
            >
              Coming soon
            </p>
          </header>

          {/* Article Content Placeholder */}
          <div className="article-content prose prose-lg max-w-none">
            <p className="mb-6 leading-relaxed text-muted-foreground">
              This article is currently being prepared. Check back soon for the
              full content.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              In the meantime, explore our other{" "}
              <Link href="/blog">
                <a
                  className="font-semibold text-primary hover:underline"
                  data-testid="link-back-to-blog-articles"
                >
                  blog articles
                </a>
              </Link>{" "}
              or learn more about{" "}
              <Link href="/#features">
                <a
                  className="font-semibold text-primary hover:underline"
                  data-testid="link-features"
                >
                  Kaartx Kloud's features
                </a>
              </Link>
              .
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
