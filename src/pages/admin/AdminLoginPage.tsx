
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const AdminLoginPage = () => {
  const [email, setEmail] = useState("antlia@admin.com");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        navigate("/admin/dashboard");
      }
    };
    
    checkAuth();
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast({
          title: "Login gagal",
          description: error.message,
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      if (data.session) {
        toast({
          title: "Login berhasil",
          description: "Anda telah berhasil masuk ke panel admin.",
          variant: "default",
        });
        navigate("/admin/dashboard");
      }
    } catch (error) {
      toast({
        title: "Login gagal",
        description: "Terjadi kesalahan saat mencoba login.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-antlia-light">
      <Card className="w-[350px] shadow-lg">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <h2 className="text-xl font-bold bg-gradient-to-r from-antlia-blue to-antlia-cyan bg-clip-text text-transparent">
              ANTLIA
            </h2>
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            Admin Login
          </CardTitle>
          <CardDescription className="text-center">
            Masukkan kredensial Anda untuk mengakses panel admin
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleLogin}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="pl-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-antlia-blue hover:bg-blue-600"
                disabled={isLoading}
              >
                {isLoading ? "Memeriksa..." : "Login"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="link" onClick={() => navigate("/")}>
            Kembali ke Situs Utama
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AdminLoginPage;
