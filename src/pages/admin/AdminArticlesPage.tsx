
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Edit, Eye, MoreVertical, Plus, Search, Trash } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Article } from "@/types/article";

const AdminArticlesPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  // Fetch articles from Supabase
  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from("articles")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          throw error;
        }

        if (data) {
          const mappedArticles: Article[] = data.map(article => ({
            id: article.id,
            title: article.title,
            slug: article.slug,
            content: article.content,
            excerpt: article.excerpt,
            author: article.author,
            authorEmail: article.author_email,
            category: article.category,
            keywords: article.keywords || [],
            createdAt: article.created_at,
            updatedAt: article.updated_at,
            publishedAt: article.published_at,
            coverImage: article.cover_image,
            status: article.status,
            readingTime: article.reading_time
          }));
          
          setArticles(mappedArticles);
        }
      } catch (error: any) {
        toast({
          title: "Error",
          description: `Gagal mengambil data artikel: ${error.message}`,
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, [toast]);

  // Filter articles based on search term
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (article.keywords && article.keywords.some(keyword => 
      keyword.toLowerCase().includes(searchTerm.toLowerCase())
    ))
  );

  const handleDeleteArticle = async (id: string) => {
    if (confirm("Yakin ingin menghapus artikel ini?")) {
      try {
        const { error } = await supabase
          .from("articles")
          .delete()
          .eq("id", id);

        if (error) {
          throw error;
        }

        setArticles(articles.filter(article => article.id !== id));
        
        toast({
          title: "Artikel berhasil dihapus",
          description: "Artikel telah dihapus dari sistem.",
          variant: "default",
        });
      } catch (error: any) {
        toast({
          title: "Gagal menghapus artikel",
          description: error.message,
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Kelola Artikel</h1>
          <p className="text-gray-600">Tambah, edit, dan hapus artikel.</p>
        </div>
        <Button 
          className="bg-antlia-blue hover:bg-blue-600"
          onClick={() => navigate("/admin/articles/new")}
        >
          <Plus className="mr-2 h-4 w-4" /> Artikel Baru
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Daftar Artikel</CardTitle>
          <CardDescription>
            Total {filteredArticles.length} artikel tersedia.
          </CardDescription>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Cari artikel..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Judul</TableHead>
                  <TableHead>Penulis</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Tanggal Publikasi</TableHead>
                  <TableHead className="w-[100px]">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8">
                      <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-antlia-blue"></div>
                      </div>
                      <p className="mt-2 text-gray-500">Mengambil data...</p>
                    </TableCell>
                  </TableRow>
                ) : filteredArticles.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                      Tidak ada artikel yang ditemukan
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredArticles.map((article) => (
                    <TableRow key={article.id}>
                      <TableCell className="font-medium">{article.title}</TableCell>
                      <TableCell>{article.author}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            article.status === "published"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {article.status === "published" ? "Dipublikasikan" : "Draft"}
                        </span>
                      </TableCell>
                      <TableCell>
                        {new Date(article.publishedAt).toLocaleDateString("id-ID")}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Buka menu</span>
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              className="flex items-center cursor-pointer"
                              onClick={() => navigate(`/artikel/${article.slug}`)}
                            >
                              <Eye className="mr-2 h-4 w-4" />
                              <span>Lihat</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="flex items-center cursor-pointer"
                              onClick={() => navigate(`/admin/articles/edit/${article.id}`)}
                            >
                              <Edit className="mr-2 h-4 w-4" />
                              <span>Edit</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="flex items-center cursor-pointer text-red-600 focus:text-red-600"
                              onClick={() => handleDeleteArticle(article.id)}
                            >
                              <Trash className="mr-2 h-4 w-4" />
                              <span>Hapus</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminArticlesPage;
