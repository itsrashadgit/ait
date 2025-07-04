
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
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

const fetchPosts = async (page: number = 1, search: string = ""): Promise<WordPressPost[]> => {
  const searchParam = search ? `&search=${encodeURIComponent(search)}` : "";
  const response = await fetch(
    `https://aitserver.aromait.com/wp-json/wp/v2/posts?_embed&per_page=6&page=${page}${searchParam}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

const Blog = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: posts, isLoading, error } = useQuery({
    queryKey: ["posts", page, searchQuery],
    queryFn: () => fetchPosts(page, searchQuery),
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchTerm);
    setPage(1);
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Blog Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AiT Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay updated with the latest insights, trends, and innovations in information technology and digital transformation.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-md mx-auto flex gap-2">
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 rounded-lg h-48 mb-4"></div>
                  <div className="bg-gray-200 h-4 rounded mb-2"></div>
                  <div className="bg-gray-200 h-4 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-16">
              <p className="text-red-600 text-lg mb-4">Failed to load blog posts</p>
              <p className="text-gray-600">Please check your connection and try again.</p>
            </div>
          )}

          {/* Blog Posts Grid */}
          {posts && posts.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    {/* Featured Image */}
                    {post._embedded?.["wp:featuredmedia"]?.[0] && (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post._embedded["wp:featuredmedia"][0].source_url}
                          alt={post._embedded["wp:featuredmedia"][0].alt_text || post.title.rendered}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    
                    <CardHeader>
                      <CardTitle className="group-hover:text-blue-600 transition-colors">
                        {stripHtml(post.title.rendered)}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(post.date)}
                        </div>
                        {post._embedded?.author?.[0] && (
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {post._embedded.author[0].name}
                          </div>
                        )}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {stripHtml(post.excerpt.rendered)}
                      </p>
                      <Link to={`/blog/${post.slug}`}>
                        <Button variant="outline" className="w-full group">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center gap-4 mt-12">
                <Button
                  variant="outline"
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                >
                  Previous
                </Button>
                <span className="flex items-center px-4 py-2 text-gray-600">
                  Page {page}
                </span>
                <Button
                  variant="outline"
                  onClick={() => setPage(p => p + 1)}
                  disabled={!posts || posts.length < 6}
                >
                  Next
                </Button>
              </div>
            </>
          )}

          {/* No Results */}
          {posts && posts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No blog posts found.</p>
              {searchQuery && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setSearchTerm("");
                    setPage(1);
                  }}
                  className="mt-4"
                >
                  Clear Search
                </Button>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
