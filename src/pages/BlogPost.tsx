
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  author: number;
  featured_media: number;
  slug: string;
  _embedded?: {
    author: Array<{
      name: string;
    }>;
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

const fetchPost = async (slug: string): Promise<WordPressPost> => {
  const response = await fetch(
    `https://aitserver.aromait.com/wp-json/wp/v2/posts?_embed&slug=${slug}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }
  const posts = await response.json();
  if (posts.length === 0) {
    throw new Error("Post not found");
  }
  return posts[0];
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: post, isLoading, error } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug!),
    enabled: !!slug,
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: stripHtml(post.title.rendered),
          url: window.location.href,
        });
      } catch (err) {
        console.log("Sharing failed:", err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="animate-pulse">
              <div className="bg-gray-200 h-8 rounded mb-4 w-3/4"></div>
              <div className="bg-gray-200 h-64 rounded mb-6"></div>
              <div className="space-y-3">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="bg-gray-200 h-4 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
            <Link to="/blog">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              {/* Added Home Breadcrumb */}





              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/blog">Blog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{stripHtml(post.title.rendered)}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Back Button */}
          <Link to="/blog" className="inline-block mb-8">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {stripHtml(post.title.rendered)}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{formatDate(post.date)}</span>
              </div>
              {post._embedded?.author?.[0] && (
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>{post._embedded.author[0].name}</span>
                </div>
              )}
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>

            {/* Featured Image */}
            {post._embedded?.["wp:featuredmedia"]?.[0] && (
              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                <img
                  src={post._embedded["wp:featuredmedia"][0].source_url}
                  alt={post._embedded["wp:featuredmedia"][0].alt_text || stripHtml(post.title.rendered)}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </header>

          {/* Article Content */}
          <article 
            className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-blue-600 prose-strong:text-gray-800"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link to="/blog">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  More Articles
                </Button>
              </Link>
              
              <div className="flex items-center gap-4">
                <span className="text-gray-600">Share this article:</span>
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </footer>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
