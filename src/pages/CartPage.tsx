
import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PageHeader from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import { Trash, Plus, Minus, ArrowRight } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormField, FormItem, FormLabel, FormMessage, FormControl } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

// Define the form's data structure
interface CustomerFormData {
  name: string;
  phone: string;
  address: string;
}

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Setup form with default values
  const form = useForm<CustomerFormData>({
    defaultValues: {
      name: '',
      phone: '',
      address: ''
    }
  });

  const handleSubmitOrder = async (data: CustomerFormData) => {
    if (cart.items.length === 0) {
      toast.error('Giỏ hàng trống. Vui lòng thêm sản phẩm vào giỏ hàng.');
      return;
    }

    setIsSubmitting(true);
    
    // Format order items for email
    const orderItems = cart.items.map(item => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      total: item.price * item.quantity
    }));
    
    // Prepare form data to send
    const formData = {
      customerName: data.name,
      customerPhone: data.phone,
      customerAddress: data.address,
      orderItems: orderItems,
      totalAmount: cart.totalPrice,
      orderDate: new Date().toLocaleString('vi-VN')
    };
    
    try {
      // Send data to Formspree
      const response = await fetch('https://formspree.io/f/xldbjwyb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        toast.success('Cảm ơn bạn đã đặt hàng! Đơn hàng của bạn đã được ghi nhận.');
        clearCart();
        form.reset();
      } else {
        toast.error('Có lỗi xảy ra khi gửi đơn hàng. Vui lòng thử lại sau.');
      }
    } catch (error) {
      toast.error('Có lỗi xảy ra. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout
      title="Giỏ hàng - MBA Fulfillment Việt Nam"
      description="Giỏ hàng của bạn tại MBA Fulfillment Việt Nam. Kiểm tra và quản lý sản phẩm trước khi đặt hàng."
    >
      <PageHeader
        title="Giỏ hàng"
        breadcrumbs={[{ label: 'Giỏ hàng', path: '/gio-hang' }]}
      />
      
      <div className="container mx-auto py-12">
        {cart.items.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">Giỏ hàng của bạn đang trống</h2>
            <p className="text-gray-600 mb-8">Hãy thêm sản phẩm vào giỏ hàng để tiếp tục.</p>
            <Button className="btn-primary" asChild>
              <Link to="/san-pham">Tiếp tục mua sắm</Link>
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-semibold">Chi tiết giỏ hàng</h2>
                  <p className="text-gray-500">{cart.totalItems} sản phẩm trong giỏ hàng</p>
                </div>
                
                <div className="divide-y">
                  {cart.items.map((item) => (
                    <div key={item.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center">
                      <div className="w-16 h-16 mr-4 mb-4 sm:mb-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-500">Đơn giá: {formatCurrency(item.price)} / {item.unit}</p>
                      </div>
                      
                      <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                        <div className="flex items-center border rounded-md">
                          <button
                            className="px-2 py-1 border-r"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 py-1">{item.quantity}</span>
                          <button
                            className="px-2 py-1 border-l"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash size={18} />
                        </button>
                        
                        <div className="text-right">
                          <span className="font-medium">{formatCurrency(item.price * item.quantity)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-6 border-t flex justify-between">
                  <Button variant="outline" onClick={clearCart}>
                    Xóa giỏ hàng
                  </Button>
                  
                  <Button asChild>
                    <Link to="/san-pham">Tiếp tục mua sắm</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Thông tin đặt hàng</h2>
                
                <form onSubmit={form.handleSubmit(handleSubmitOrder)} className="space-y-4 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Họ tên</Label>
                    <Input
                      id="name"
                      placeholder="Nhập họ tên"
                      {...form.register('name', { required: 'Vui lòng nhập họ tên' })}
                    />
                    {form.formState.errors.name && (
                      <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Số điện thoại</Label>
                    <Input
                      id="phone"
                      placeholder="Nhập số điện thoại"
                      {...form.register('phone', { required: 'Vui lòng nhập số điện thoại' })}
                    />
                    {form.formState.errors.phone && (
                      <p className="text-sm text-red-500">{form.formState.errors.phone.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Địa chỉ</Label>
                    <Input
                      id="address"
                      placeholder="Nhập địa chỉ giao hàng"
                      {...form.register('address', { required: 'Vui lòng nhập địa chỉ' })}
                    />
                    {form.formState.errors.address && (
                      <p className="text-sm text-red-500">{form.formState.errors.address.message}</p>
                    )}
                  </div>
                
                  <div className="space-y-3 pt-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tổng tiền hàng</span>
                      <span>{formatCurrency(cart.totalPrice)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phí vận chuyển</span>
                      <span>Liên hệ</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Tổng cộng</span>
                      <span>{formatCurrency(cart.totalPrice)}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">(Chưa bao gồm VAT và phí vận chuyển)</p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full btn-primary" 
                    disabled={isSubmitting || cart.items.length === 0}
                  >
                    <span>{isSubmitting ? 'Đang xử lý...' : 'Đặt hàng'}</span>
                    {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
                
                <div className="text-sm text-gray-500 text-center">
                  Chúng tôi sẽ liên hệ để xác nhận đơn hàng
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default CartPage;
