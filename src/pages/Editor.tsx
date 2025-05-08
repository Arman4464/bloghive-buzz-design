
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export default function Editor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [isPreview, setIsPreview] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Supabase Connection Required",
      description: "Please connect your Supabase instance to save blog posts.",
    });
    
    // Note: This is a placeholder. Actual blog post saving will be implemented
    // once Supabase is connected and configured
    
    // For demonstration purposes only
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-3xl font-bold">Create New Post</h1>
          <div className="flex gap-2">
            <Button
              variant={!isPreview ? "default" : "outline"}
              onClick={() => setIsPreview(false)}
              className={!isPreview ? "bg-honey-500 hover:bg-honey-600 text-foreground honey-glow-hover" : ""}
            >
              Edit
            </Button>
            <Button
              variant={isPreview ? "default" : "outline"}
              onClick={() => setIsPreview(true)}
              className={isPreview ? "bg-honey-500 hover:bg-honey-600 text-foreground honey-glow-hover" : ""}
            >
              Preview
            </Button>
          </div>
        </div>

        {!isPreview ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="text-lg font-medium">
                Title
              </label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your post title"
                className="text-xl input-honey-glow py-6"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="category" className="text-lg font-medium">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-base input-honey-glow"
                required
              >
                <option value="" disabled>Select a category</option>
                <option value="Technology">Technology</option>
                <option value="Nature">Nature</option>
                <option value="Productivity">Productivity</option>
                <option value="Environment">Environment</option>
                <option value="Wellness">Wellness</option>
                <option value="Health">Health</option>
                <option value="Finance">Finance</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="content" className="text-lg font-medium">
                Content
              </label>
              <div className="border border-input rounded-md overflow-hidden">
                <div className="bg-muted/50 p-2 border-b border-input flex flex-wrap gap-2">
                  <Button
                    type="button"
                    variant="ghost"
                    className="h-8 px-2 text-xs buzz-on-hover"
                    onClick={() => setContent(content + "# Heading")}
                  >
                    H1
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className="h-8 px-2 text-xs buzz-on-hover"
                    onClick={() => setContent(content + "## Subheading")}
                  >
                    H2
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className="h-8 px-2 text-xs buzz-on-hover"
                    onClick={() => setContent(content + "**Bold text**")}
                  >
                    Bold
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className="h-8 px-2 text-xs buzz-on-hover"
                    onClick={() => setContent(content + "*Italic text*")}
                  >
                    Italic
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className="h-8 px-2 text-xs buzz-on-hover"
                    onClick={() => setContent(content + "- List item\n- Another item")}
                  >
                    List
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className="h-8 px-2 text-xs buzz-on-hover"
                    onClick={() => setContent(content + "[Link text](https://example.com)")}
                  >
                    Link
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className="h-8 px-2 text-xs buzz-on-hover"
                    onClick={() => setContent(content + "![Image alt](https://example.com/image.jpg)")}
                  >
                    Image
                  </Button>
                </div>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your post content here..."
                  className="min-h-[400px] rounded-none border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => navigate("/")}>
                Cancel
              </Button>
              <Button type="submit" className="bg-honey-500 hover:bg-honey-600 text-foreground honey-glow-hover">
                Publish Post
              </Button>
            </div>
          </form>
        ) : (
          <div className="border border-border rounded-lg p-6 space-y-6 bg-card">
            <h2 className="text-3xl font-bold">{title || "Post Title"}</h2>
            {category && (
              <div>
                <span className="bg-honey-500 px-3 py-1 rounded-full text-sm font-medium honey-glow-effect">
                  {category}
                </span>
              </div>
            )}
            <div className="prose dark:prose-invert max-w-none">
              {content ? (
                <div className="whitespace-pre-wrap">
                  {content}
                </div>
              ) : (
                <p className="text-muted-foreground">Post preview will appear here...</p>
              )}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
