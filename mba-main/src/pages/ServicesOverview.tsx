import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import PageHeader from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/button';
import { Warehouse, Package, Truck } from 'lucide-react';

const services = [
  {
    id: 'tu-van-setup-kho',
    title: 'Tư vấn setup kho vận',
    description: 'Giải pháp setup kho vận chuyên nghiệp, tối ưu không gian và quy trình vận hành cho doanh nghiệp và shop online.',
    icon: Warehouse,
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'vat-tu-dong-goi',
    title: 'Vật tư đóng gói',
    description: 'Cung cấp đa dạng nguyên vật liệu đóng gói chất lượng cao với giá thành cạnh tranh, đáp ứng mọi nhu cầu của doanh nghiệp.',
    icon: Package,
    image: '/lovable-uploads/ecf864da-9767-4feb-8344-70ed214f30b6.png',
  },
  {
    id: 'van-chuyen-bac-nam',
    title: 'Vận chuyển Bắc - Nam',
    description: 'Dịch vụ vận chuyển hàng hóa Bắc - Nam an toàn, nhanh chóng với chi phí tối ưu cho doanh nghiệp.',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop',
  },
];

const ServicesOverview = () => {
  return (
    <PageLayout
      title="Dịch vụ - MBA Fulfillment Việt Nam"
      description="Các dịch vụ chuyên nghiệp của MBA Fulfillment Việt Nam: tư vấn setup kho vận, cung cấp vật tư đóng gói và vận chuyển hàng hóa Bắc - Nam."
    >
      <PageHeader 
        title="Dịch vụ của chúng tôi"
        breadcrumbs={[{ label: 'Dịch vụ', path: '/dich-vu' }]}
      />
      
      <div className="container mx-auto py-12">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="heading-lg mb-4">Giải pháp logistics toàn diện cho doanh nghiệp</h2>
          <p className="text-gray-600">
            MBA Fulfillment cung cấp các giải pháp chuyên nghiệp trong lĩnh vực kho vận và logistics, 
            giúp doanh nghiệp tối ưu chi phí vận hành và nâng cao hiệu quả kinh doanh.
          </p>
        </div>
        
        <div className="space-y-16">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-mba-primary/10 rounded-full flex items-center justify-center mr-3">
                    <service.icon className="w-6 h-6 text-mba-primary" />
                  </div>
                  <h2 className="heading-md">{service.title}</h2>
                </div>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <Button className="btn-primary" asChild>
                  <Link to={`/dich-vu/${service.id}`}>
                    Xem chi tiết
                  </Link>
                </Button>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative">
                  <div className="absolute inset-0 bg-mba-secondary/20 rounded-xl transform rotate-2"></div>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="relative z-10 rounded-xl shadow-lg w-full h-80 object-cover object-center"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-mba-primary/5 p-8 rounded-xl text-center">
          <h2 className="heading-md mb-4">Bạn cần tư vấn về dịch vụ phù hợp?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Đội ngũ chuyên gia của MBA Fulfillment sẵn sàng tư vấn giải pháp phù hợp nhất với nhu cầu của doanh nghiệp bạn.
          </p>
          <Button className="btn-primary mx-2" asChild>
            <Link to="/lien-he">Liên hệ ngay</Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default ServicesOverview;
