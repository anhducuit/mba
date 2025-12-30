import React from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import PageHeader from '@/components/ui/PageHeader';
import { Warehouse, Package, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FAQ from '@/components/ui/FAQ';

interface ServiceContent {
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: React.ElementType;
  benefits: Array<{ title: string; description: string }>;
  metaDescription: string;
}

const serviceContents: Record<string, ServiceContent> = {
  'tu-van-setup-kho': {
    title: 'Tư vấn setup kho vận chuyên nghiệp',
    description: 'MBA Fulfillment cung cấp dịch vụ tư vấn setup kho vận chuyên nghiệp, tối ưu không gian và quy trình vận hành cho doanh nghiệp và shop online.',
    features: [
      'Phân tích nhu cầu và đặc thù kinh doanh',
      'Thiết kế layout kho hợp lý',
      'Tư vấn quy trình nhập/xuất kho',
      'Đề xuất giải pháp công nghệ quản lý kho',
      'Tối ưu hệ thống lưu trữ và phân loại hàng hóa',
      'Tư vấn hệ thống an ninh, phòng cháy chữa cháy'
    ],
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop',
    icon: Warehouse,
    benefits: [
      {
        title: 'Tối ưu chi phí',
        description: 'Tiết kiệm đến 30% chi phí vận hành kho bãi nhờ thiết kế và quy trình hợp lý.'
      },
      {
        title: 'Nâng cao hiệu suất',
        description: 'Tăng tốc độ xử lý đơn hàng, giảm thời gian tìm kiếm sản phẩm.'
      },
      {
        title: 'Giảm thiểu rủi ro',
        description: 'Hạn chế tình trạng mất mát, hư hỏng hàng hóa trong kho.'
      },
      {
        title: 'Dễ dàng mở rộng',
        description: 'Thiết kế linh hoạt, dễ dàng mở rộng khi nhu cầu kinh doanh tăng.'
      }
    ],
    metaDescription: 'Dịch vụ tư vấn setup kho vận chuyên nghiệp, tối ưu không gian và quy trình vận hành cho doanh nghiệp. Tiết kiệm chi phí vận hành, nâng cao hiệu suất xử lý đơn hàng.'
  },
  'vat-tu-dong-goi': {
    title: 'Cung cấp nguyên vật liệu đóng gói',
    description: 'MBA Fulfillment cung cấp đa dạng nguyên vật liệu đóng gói chất lượng cao với giá thành cạnh tranh, đáp ứng mọi nhu cầu của doanh nghiệp.',
    features: [
      'Thùng carton đa kích thước và độ dày',
      'Túi niêm phong, túi bóng đóng hàng',
      'Băng keo các loại (trong, đục, in logo)',
      'Xốp hơi, giấy đệm chống sốc',
      'Tem nhãn, nhãn cảnh báo',
      'Dây đai, dây rút các loại'
    ],
    image: '/lovable-uploads/ecf864da-9767-4feb-8344-70ed214f30b6.png',
    icon: Package,
    benefits: [
      {
        title: 'Giá cả cạnh tranh',
        description: 'Nguồn hàng trực tiếp từ nhà sản xuất, giảm chi phí trung gian.'
      },
      {
        title: 'Đa dạng sản phẩm',
        description: 'Đáp ứng mọi nhu cầu đóng gói từ hàng nhỏ gọn đến cồng kềnh.'
      },
      {
        title: 'Giao hàng nhanh chóng',
        description: 'Dịch vụ giao hàng trong ngày tại khu vực TP.HCM và các tỉnh lân cận.'
      },
      {
        title: 'Tư vấn chuyên nghiệp',
        description: 'Đội ngũ tư vấn giúp bạn lựa chọn vật tư đóng gói phù hợp nhất.'
      }
    ],
    metaDescription: 'Cung cấp đa dạng nguyên vật liệu đóng gói chất lượng cao: thùng carton, túi niêm phong, băng keo, xốp hơi. Giá cả cạnh tranh, giao hàng nhanh chóng.'
  },
  'van-chuyen-bac-nam': {
    title: 'Vận chuyển hàng hóa Bắc - Nam',
    description: 'MBA Fulfillment cung cấp dịch vụ vận chuyển hàng hóa Bắc - Nam an toàn, nhanh chóng với chi phí tối ưu cho doanh nghiệp.',
    features: [
      'Vận chuyển đường bộ, đường sắt, đường biển',
      'Dịch vụ vận chuyển nhanh 24-48h',
      'Vận chuyển hàng cồng kềnh, hàng dễ vỡ',
      'Bảo hiểm hàng hóa trong quá trình vận chuyển',
      'Theo dõi hành trình vận chuyển trực tuyến',
      'Dịch vụ giao hàng đến tận kho khách hàng'
    ],
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop',
    icon: Truck,
    benefits: [
      {
        title: 'Chi phí tối ưu',
        description: 'Tiết kiệm đến 20% chi phí vận chuyển so với thị trường.'
      },
      {
        title: 'Đảm bảo thời gian',
        description: 'Cam kết thời gian giao hàng chính xác, không chậm trễ.'
      },
      {
        title: 'An toàn hàng hóa',
        description: 'Đóng gói, bốc xếp chuyên nghiệp, hạn chế hư hỏng.'
      },
      {
        title: 'Hỗ trợ 24/7',
        description: 'Đội ngũ chăm sóc khách hàng sẵn sàng hỗ trợ mọi lúc.'
      }
    ],
    metaDescription: 'Dịch vụ vận chuyển hàng hóa Bắc - Nam an toàn, nhanh chóng với chi phí tối ưu. Vận chuyển đa phương thức: đường bộ, đường sắt, đường biển.'
  }
};

const ServicePage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  if (!serviceId || !serviceContents[serviceId]) {
    return (
      <PageLayout>
        <div className="container mx-auto py-16 text-center">
          <h1 className="text-2xl mb-4">Dịch vụ không tồn tại</h1>
          <Link to="/dich-vu" className="text-mba-secondary hover:underline">
            Quay lại trang dịch vụ
          </Link>
        </div>
      </PageLayout>
    );
  }

  const serviceContent = serviceContents[serviceId];
  const Icon = serviceContent.icon;

  return (
    <PageLayout
      title={`${serviceContent.title} | MBA Fulfillment Hub`}
      description={serviceContent.metaDescription}
    >
      <PageHeader
        title={serviceContent.title}
        breadcrumbs={[
          { label: 'Dịch vụ', path: '/dich-vu' },
          { label: serviceContent.title, path: `/dich-vu/${serviceId}` },
        ]}
      />

      <div className="container mx-auto py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center mr-4">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text text-transparent">Giới thiệu dịch vụ</h2>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              {serviceContent.description}
            </p>

            <ul className="space-y-2 mb-8">
              {serviceContent.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-mba-secondary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="btn-primary" asChild>
              <Link to="/lien-he">Yêu cầu tư vấn</Link>
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-mba-primary/10 rounded-2xl transform rotate-3"></div>
            <img
              src={serviceContent.image}
              alt={serviceContent.title}
              className="relative rounded-2xl shadow-lg object-cover w-full h-96 object-center z-10"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text text-transparent">Lợi ích khi sử dụng dịch vụ</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceContent.benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-3 bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text text-transparent">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <FAQ
          items={[
            {
              question: "MBA Fulfillment có hỗ trợ lưu kho ngắn hạn không?",
              answer: "Có, chúng tôi cung cấp giải pháp lưu kho linh hoạt cả ngắn hạn và dài hạn tùy theo nhu cầu của doanh nghiệp."
            },
            {
              question: "Thời gian setup kho thông thường mất bao lâu?",
              answer: "Tùy thuộc vào diện tích và mức độ phức tạp, thời gian setup thường dao động từ 1-3 tuần."
            },
            {
              question: "Tôi có thể theo dõi đơn hàng vận chuyển linh hoạt không?",
              answer: "Tất cả các dịch vụ vận chuyển của chúng tôi đều hỗ trợ theo dõi hành trình trực tuyến 24/7."
            },
            {
              question: "Chi phí dịch vụ được tính như thế nào?",
              answer: "Chi phí sẽ phụ thuộc vào quy mô, loại hàng hóa và gói dịch vụ bạn lựa chọn. Vui lòng liên hệ để nhận báo giá chi tiết nhất."
            }
          ]}
        />

        <div className="bg-mba-primary/5 p-8 rounded-xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text text-transparent">Bạn cần tư vấn thêm?</h2>
            <p className="text-gray-600">Để lại thông tin, chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất</p>
          </div>

          <div className="flex justify-center">
            <Button className="btn-primary mx-2" asChild>
              <Link to="/lien-he">Liên hệ ngay</Link>
            </Button>

            <Button variant="outline" className="btn-outline mx-2" asChild>
              <a href="tel:0948078599">0948 078 599</a>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ServicePage;
