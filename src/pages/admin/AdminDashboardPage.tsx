
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Calendar } from "lucide-react";
import { sampleArticles } from "@/data/articles";

const AdminDashboardPage = () => {
  // Get data statistics
  const totalArticles = sampleArticles.length;
  const publishedArticles = sampleArticles.filter(article => article.status === "published").length;
  const draftArticles = sampleArticles.filter(article => article.status === "draft").length;

  // Get recent articles
  const recentArticles = [...sampleArticles]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 5);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard Admin</h1>
        <p className="text-gray-600">Selamat datang di panel admin ANTLIA.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Total Artikel
            </CardTitle>
            <FileText className="h-5 w-5 text-antlia-blue" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalArticles}</div>
            <p className="text-sm text-gray-600 mt-1">
              {publishedArticles} dipublikasikan, {draftArticles} draft
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Penulis
            </CardTitle>
            <Users className="h-5 w-5 text-antlia-purple" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {new Set(sampleArticles.map(article => article.author)).size}
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Total penulis aktif
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Bulan Ini
            </CardTitle>
            <Calendar className="h-5 w-5 text-antlia-cyan" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {sampleArticles.filter(article => {
                const date = new Date(article.publishedAt);
                const now = new Date();
                return date.getMonth() === now.getMonth() && 
                       date.getFullYear() === now.getFullYear();
              }).length}
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Artikel dipublikasikan bulan ini
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Artikel Terbaru</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative overflow-x-auto">
            <table className="w-full text-left">
              <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">Judul</th>
                  <th scope="col" className="px-6 py-3">Penulis</th>
                  <th scope="col" className="px-6 py-3">Status</th>
                  <th scope="col" className="px-6 py-3">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                {recentArticles.map((article) => (
                  <tr key={article.id} className="bg-white border-b">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {article.title}
                    </td>
                    <td className="px-6 py-4">{article.author}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        article.status === "published" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {article.status === "published" ? "Dipublikasikan" : "Draft"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {new Date(article.updatedAt).toLocaleDateString('id-ID')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboardPage;
