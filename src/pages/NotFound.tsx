import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout 
      title="404 - Không tìm thấy trang | MBA Fulfillment Hub"
      description="Rất tiếc, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển."
    >
      <div className="min-h-[70vh] flex items-center justify-center bg-white px-4">
        <div className="max-w-md w-full text-center">
          <div className="relative mb-8">
            <h1 className="text-9xl font-extrabold text-blue-600/10">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-mba-primary">Rất tiếc!</h2>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Trang này không tồn tại</h3>
          <p className="text-gray-600 mb-8">
            Có vẻ như đường dẫn bạn truy cập không chính xác hoặc nội dung đã được thay đổi.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-mba-primary text-mba-primary hover:bg-blue-50" asChild>
              <Link to="..">
                <ArrowLeft className="mr-2 h-4 w-4" /> Quay lại
              </Link>
            </Button>
            
            <Button className="bg-gradient-to-br from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white" asChild>
              <Link to="/">
                <Home className="mr-2 h-4 w-4" /> Về trang chủ
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
