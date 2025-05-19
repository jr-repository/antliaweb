
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Save } from "lucide-react";
import { Article } from "@/types/article";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ArticleFormPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isEditMode = id !== undefined && id !== "new";
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const emptyArticle: Article = {
    id: "",
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    author: "",
    keywords: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    status: "draft",
  };

  const [article, setArticle] = useState<Article>(emptyArticle);
  const [keywordsInput, setKeywordsInput] = useState("");

  // Fetch article data if in edit mode
  useEffect(() => {
    const fetchArticle = async () => {
      if (!isEditMode) return;
      
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from("articles")
          .select()
          .eq("id", id)
          .single();

        if (error) {
          throw error;
        }

        if (data) {
          // Transform database article to our Article type
          const fetchedArticle: Article = {
            id: data.id,
            title: data.title,
            slug: data.slug,
            content: data.content,
            excerpt: data.excerpt,
            author: data.author,
            authorEmail: data.author_email,
            category: data.category,
            keywords: data.keywords || [],
            createdAt: data.created_at,
            updatedAt: data.updated_at,
            publishedAt: data.published_at,
            status: data.status,
            coverImage: data.cover_image,
            readingTime: data.reading_time
          };

          setArticle(fetchedArticle);
          setKeywordsInput(fetchedArticle.keywords.join(", "));
        }
      } catch (error: any) {
        toast({
          title: "Error",
          description: `Gagal mengambil data artikel: ${error.message}`,
          variant: "destructive",
        });
        navigate("/admin/articles");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [id, isEditMode, navigate, toast]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setArticle({
      ...article,
      [name]: value,
    });

    // Auto-generate slug from title
    if (name === "title") {
      setArticle({
        ...article,
        title: value,
        slug: value
          .toLowerCase()
          .replace(/[^\w\s]/gi, "")
          .replace(/\s+/g, "-"),
      });
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setArticle({
      ...article,
      [name]: value,
    });
  };

  const handleKeywordsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeywordsInput(e.target.value);
    // Split by comma and trim whitespace
    const keywordsArray = e.target.value
      .split(",")
      .map((keyword) => keyword.trim())
      .filter((keyword) => keyword.length > 0);

    setArticle({
      ...article,
      keywords: keywordsArray,
    });
  };

  // Handle reading time change separately as it's a number
  const handleReadingTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? parseInt(e.target.value) : undefined;
    setArticle({
      ...article,
      readingTime: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    try {
      // Prepare data for Supabase - convert our Article type to database format
      const articleData = {
        title: article.title,
        slug: article.slug,
        content: article.content,
        excerpt: article.excerpt,
        author: article.author,
        author_email: article.authorEmail,
        keywords: article.keywords,
        category: article.category,
        reading_time: article.readingTime,
        cover_image: article.coverImage,
        status: article.status,
        published_at: new Date(article.publishedAt).toISOString()
      };

      let result;
      
      if (isEditMode) {
        // Update existing article
        result = await supabase
          .from("articles")
          .update(articleData)
          .eq("id", article.id);
      } else {
        // Insert new article
        result = await supabase
          .from("articles")
          .insert([articleData]);
      }

      if (result.error) {
        throw result.error;
      }

      toast({
        title: `Artikel berhasil ${isEditMode ? "diperbarui" : "dibuat"}`,
        description: `Artikel "${article.title}" telah ${isEditMode ? "diperbarui" : "dibuat"}.`,
        variant: "default",
      });
      
      navigate("/admin/articles");
    } catch (error: any) {
      toast({
        title: `Gagal ${isEditMode ? "memperbarui" : "membuat"} artikel`,
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-antlia-blue"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/admin/articles")}
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Kembali
        </Button>
        <h1 className="text-3xl font-bold">
          {isEditMode ? "Edit Artikel" : "Artikel Baru"}
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <Tabs defaultValue="content" className="space-y-6">
          <TabsList>
            <TabsTrigger value="content">Konten</TabsTrigger>
            <TabsTrigger value="meta">Meta & SEO</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informasi Artikel</CardTitle>
                <CardDescription>
                  Masukkan informasi dasar artikel.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Judul</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Judul artikel"
                    value={article.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="slug">Slug URL</Label>
                  <Input
                    id="slug"
                    name="slug"
                    placeholder="slug-url-artikel"
                    value={article.slug}
                    onChange={handleInputChange}
                    required
                  />
                  <p className="text-sm text-gray-500">
                    URL: /artikel/{article.slug}
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="excerpt">Ringkasan</Label>
                  <Textarea
                    id="excerpt"
                    name="excerpt"
                    placeholder="Ringkasan singkat artikel (akan ditampilkan di daftar artikel)"
                    value={article.excerpt}
                    onChange={handleInputChange}
                    required
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">Konten Artikel</Label>
                  <Textarea
                    id="content"
                    name="content"
                    placeholder="Tulis konten artikel dalam format HTML"
                    value={article.content}
                    onChange={handleInputChange}
                    required
                    className="min-h-[300px]"
                  />
                  <p className="text-sm text-gray-500">
                    Gunakan format HTML untuk konten artikel.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Status dan Kategori</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="status">Status Publikasi</Label>
                    <Select
                      value={article.status}
                      onValueChange={(value) =>
                        handleSelectChange("status", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Dipublikasikan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category">Kategori</Label>
                    <Select
                      value={article.category || ""}
                      onValueChange={(value) =>
                        handleSelectChange("category", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih kategori" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Teknologi">Teknologi</SelectItem>
                        <SelectItem value="Bisnis">Bisnis</SelectItem>
                        <SelectItem value="Keamanan">Keamanan</SelectItem>
                        <SelectItem value="Inovasi">Inovasi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="meta" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informasi Penulis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="author">Nama Penulis</Label>
                    <Input
                      id="author"
                      name="author"
                      placeholder="Nama penulis"
                      value={article.author}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="authorEmail">Email Penulis</Label>
                    <Input
                      id="authorEmail"
                      name="authorEmail"
                      type="email"
                      placeholder="Email penulis"
                      value={article.authorEmail || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SEO & Metadata</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="keywords">Keywords</Label>
                  <Input
                    id="keywords"
                    placeholder="Kata kunci dipisahkan dengan koma"
                    value={keywordsInput}
                    onChange={handleKeywordsChange}
                  />
                  <div className="flex flex-wrap gap-2 mt-2">
                    {article.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="bg-antlia-light text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        #{keyword}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="readingTime">Waktu Baca (menit)</Label>
                  <Input
                    id="readingTime"
                    name="readingTime"
                    type="number"
                    placeholder="Waktu baca dalam menit"
                    value={article.readingTime || ""}
                    onChange={handleReadingTimeChange}
                    min="1"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="publishedAt">Tanggal Publikasi</Label>
                  <Input
                    id="publishedAt"
                    name="publishedAt"
                    type="datetime-local"
                    value={new Date(article.publishedAt).toISOString().slice(0, 16)}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverImage">URL Gambar Cover</Label>
                  <Input
                    id="coverImage"
                    name="coverImage"
                    placeholder="https://example.com/image.jpg"
                    value={article.coverImage || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preview">
            <Card>
              <CardHeader>
                <CardTitle>Preview Artikel</CardTitle>
                <CardDescription>
                  Pratinjau bagaimana artikel akan ditampilkan.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-b pb-4">
                  <h2 className="text-2xl font-bold mb-2">{article.title || "Judul Artikel"}</h2>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    {article.category && (
                      <>
                        <span className="bg-antlia-blue/10 text-antlia-blue px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span>•</span>
                      </>
                    )}
                    <time dateTime={article.publishedAt}>
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </time>
                    {article.readingTime && (
                      <>
                        <span>•</span>
                        <span>{article.readingTime} min read</span>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-antlia-purple rounded-full flex items-center justify-center text-white">
                    {article.author ? article.author.charAt(0) : "A"}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">{article.author || "Nama Penulis"}</p>
                    {article.authorEmail && (
                      <p className="text-sm text-gray-600">{article.authorEmail}</p>
                    )}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">{article.excerpt || "Ringkasan artikel akan ditampilkan di sini."}</p>
                </div>
                
                <div className="prose max-w-none">
                  {article.content ? (
                    <div dangerouslySetInnerHTML={{ __html: article.content }} />
                  ) : (
                    <p className="text-gray-500 italic">Konten artikel akan ditampilkan di sini.</p>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {article.keywords.length > 0 ? (
                    article.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="bg-antlia-light text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        #{keyword}
                      </span>
                    ))
                  ) : (
                    <p className="text-gray-500 italic">Keywords akan ditampilkan di sini.</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6 flex justify-end space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/admin/articles")}
          >
            Batal
          </Button>
          <Button 
            type="submit" 
            className="bg-antlia-blue hover:bg-blue-600"
            disabled={isSaving}
          >
            <Save className="mr-2 h-4 w-4" />
            {isSaving ? "Menyimpan..." : "Simpan Artikel"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ArticleFormPage;
