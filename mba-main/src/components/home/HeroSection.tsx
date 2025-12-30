
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto pt-14 pb-20 md:py-20 lg:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Giải pháp kho vận <span className="text-mba-secondary">toàn diện</span> cho doanh nghiệp
            </h1>
            
            <p className="text-lg md:text-xl text-gray-100">
              MBA Fulfillment cung cấp dịch vụ tư vấn setup kho, nguyên vật liệu đóng gói và vận chuyển hàng hóa tối ưu chi phí.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button 
                className="bg-mba-secondary hover:bg-mba-secondary/90 text-white rounded-md px-6 py-6 h-auto text-lg"
                asChild
              >
                <Link to="/lien-he">
                  Tư vấn miễn phí
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                className="bg-white/10 hover:bg-white/20 text-white border-white rounded-md px-6 py-6 h-auto text-lg"
                asChild
              >
                <Link to="/dich-vu">
                  Dịch vụ của chúng tôi
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-mba-secondary/20 rounded-2xl transform rotate-3"></div>
            <img 
              src="/warehouse-logistics.jpg"
              alt="Kho vận chuyên nghiệp" 
              className="relative z-10 rounded-2xl shadow-lg object-cover w-full h-96 object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
