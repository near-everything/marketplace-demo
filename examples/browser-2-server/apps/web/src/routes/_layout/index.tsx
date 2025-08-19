import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Github, Clipboard } from "lucide-react";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

export const Route = createFileRoute("/_layout/")({
  component: HomeComponent,
});

function HomeComponent() {
  const [copied, setCopied] = useState(false);
  const [readme, setReadme] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const copyLLMContent = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/elliotBraem/better-near-auth/main/LLM.txt"
      );
      const content = await response.text();
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast.success("LLM.txt copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy content:", error);
      toast.error("Failed to copy content. Please try again.");
    }
  };

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/elliotBraem/better-near-auth/main/README.md"
        );
        let content = await response.text();
        
        // Remove markdown lint comments and HTML center div
        content = content
          .replace(/<!-- markdownlint-disable[^>]*-->/g, '')
          .replace(/<div align="center">[\s\S]*?<\/div>/g, '')
          .trim();
        
        setReadme(content);
      } catch (error) {
        console.error("Failed to fetch README:", error);
        toast.error("Failed to load documentation");
      } finally {
        setLoading(false);
      }
    };

    fetchReadme();
  }, []);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="space-y-8">
        <div className="text-left">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-semibold">better-near-auth</h1>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={copyLLMContent}
                className="flex items-center gap-2"
              >
                <Clipboard className="h-4 w-4" />
                {copied ? "Copied!" : "Copy LLM.txt"}
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="flex items-center gap-2"
              >
                <a
                  href="https://github.com/elliotBraem/better-near-auth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-muted-foreground">Loading documentation...</div>
            </div>
          ) : (
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-bold mt-8 mb-4 first:mt-0">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-semibold mt-8 mb-4">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-medium mt-6 mb-3">{children}</h3>
                  ),
                  p: ({ children }) => (
                    <p className="mb-4 leading-7">{children}</p>
                  ),
                  code: ({ className, children, ...props }: any) => {
                    const isInline = !className?.includes('language-');
                    if (isInline) {
                      return (
                        <code
                          className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono"
                          {...props}
                        >
                          {children}
                        </code>
                      );
                    }
                    return (
                      <code
                        className={`${className} block bg-muted p-4 rounded-lg text-sm font-mono overflow-x-auto`}
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  },
                  pre: ({ children }) => (
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
                      {children}
                    </pre>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-600 font-medium"
                    >
                      {children}
                    </a>
                  ),
                  table: ({ children }) => (
                    <div className="overflow-x-auto mb-4">
                      <table className="min-w-full border-collapse border border-border">
                        {children}
                      </table>
                    </div>
                  ),
                  th: ({ children }) => (
                    <th className="border border-border bg-muted px-4 py-2 text-left font-medium">
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className="border border-border px-4 py-2">{children}</td>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-border pl-4 italic mb-4">
                      {children}
                    </blockquote>
                  ),
                }}
              >
                {readme}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
