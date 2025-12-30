
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'thung-carton' | 'tui-niem-phong' | 'bang-keo' | 'khac';
  inStock: boolean;
  unit: string;
  minOrder: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Thùng carton 3 lớp 20x15x10cm',
    price: 5000,
    description: 'Thùng carton 3 lớp cao cấp, kích thước 20x15x10cm, chịu lực tốt, phù hợp cho các sản phẩm nhỏ gọn.',
    image: '/carton-box.jpg',
    category: 'thung-carton',
    inStock: true,
    unit: 'Thùng',
    minOrder: 50,
  },
  {
    id: '2',
    name: 'Thùng carton 5 lớp 40x30x25cm',
    price: 14000,
    description: 'Thùng carton 5 lớp cao cấp, kích thước 40x30x25cm, chịu lực tốt, phù hợp cho các sản phẩm nặng.',
    image: '/carton-box.jpg',
    category: 'thung-carton',
    inStock: true,
    unit: 'Thùng',
    minOrder: 30,
  },
  {
    id: '3',
    name: 'Túi niêm phong bảo mật trắng 25x35cm',
    price: 2500,
    description: 'Túi niêm phong bảo mật màu trắng, kích thước 25x35cm, chống tái sử dụng, bảo vệ hàng hóa.',
    image: '/carton-box.jpg',
    category: 'tui-niem-phong',
    inStock: true,
    unit: 'Túi',
    minOrder: 100,
  },
  {
    id: '4',
    name: 'Túi niêm phong bảo mật đen 20x30cm',
    price: 2000,
    description: 'Túi niêm phong bảo mật màu đen, kích thước 20x30cm, chống tái sử dụng, bảo vệ hàng hóa.',
    image: '/carton-box.jpg',
    category: 'tui-niem-phong',
    inStock: true,
    unit: 'Túi',
    minOrder: 100,
  },
  {
    id: '5',
    name: 'Băng keo trong 48mm x 100m',
    price: 18000,
    description: 'Băng keo trong suốt, độ dính cao, kích thước 48mm x 100m, phù hợp đóng gói hàng hóa.',
    image: '/carton-box.jpg',
    category: 'bang-keo',
    inStock: true,
    unit: 'Cuộn',
    minOrder: 12,
  },
  {
    id: '6',
    name: 'Băng keo có chữ "Dễ Vỡ" 48mm x 80m',
    price: 25000,
    description: 'Băng keo in chữ "Dễ Vỡ" màu đỏ, độ dính cao, kích thước 48mm x 80m, cảnh báo hàng dễ vỡ.',
    image: '/carton-box.jpg',
    category: 'bang-keo',
    inStock: true,
    unit: 'Cuộn',
    minOrder: 12,
  },
  {
    id: '7',
    name: 'Xốp hơi bọc hàng 1m x 100m',
    price: 450000,
    description: 'Xốp hơi bọc hàng chất lượng cao, kích thước 1m x 100m, bảo vệ hàng hóa khỏi va đập.',
    image: '/carton-box.jpg',
    category: 'khac',
    inStock: true,
    unit: 'Cuộn',
    minOrder: 1,
  },
  {
    id: '8',
    name: 'Giấy đệm chống sốc',
    price: 120000,
    description: 'Giấy đệm chống sốc cao cấp, bảo vệ hàng hóa khỏi va đập và trầy xước.',
    image: '/carton-box.jpg',
    category: 'khac',
    inStock: true,
    unit: 'Kg',
    minOrder: 5,
  },
];

export const categories = [
  {
    id: 'thung-carton',
    name: 'Thùng carton',
  },
  {
    id: 'tui-niem-phong',
    name: 'Túi niêm phong',
  },
  {
    id: 'bang-keo',
    name: 'Băng keo',
  },
  {
    id: 'khac',
    name: 'Vật liệu khác',
  },
];
