
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import PageHeader from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Calendar, ArrowRight } from 'lucide-react';
import { blogPosts, blogCategories } from '@/data/blog-posts';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;
    
    if (selectedCategory) {
      filtered = filtered.filter(post => {
        // Check if the post's category matches the selected category
        const categoryMatch = post.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
        
        // Check if any of the post's tags match the selected category
        const tagMatch = post.tags.some(tag => {
          const normalizedTag = tag.toLowerCase().replace(/\s+/g, '-');
          return normalizedTag === selectedCategory;
        });
        
        // Return true if either the category or any tag matches
        return categoryMatch || tagMatch;
      });
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(term) || 
        post.excerpt.toLowerCase().includes(term)
      );
    }
    
    return filtered;
  }, [searchTerm, selectedCategory]);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('vi-VN', options);
  };

  return (
    <PageLayout
      title="Blog | MBA Fulfillment Hub"
      description="Bài viết về kiến thức vận hành kho, lựa chọn vật tư đóng gói, và tối ưu chi phí logistics cho doanh nghiệp."
    >
      <PageHeader
        title="Blog"
        breadcrumbs={[{ label: 'Blog', path: '/blog' }]}
      />
      
      <div className="container mx-auto py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-3/4">
            <div className="mb-8">
              <div className="relative w-full mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  placeholder="Tìm kiếm bài viết..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                  <p className="text-gray-500">Không tìm thấy bài viết phù hợp.</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        
                        <div className="md:w-2/3">
                          <CardContent className="p-6">
                            <div className="flex items-center text-sm text-gray-500 mb-3">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span>{formatDate(post.date)}</span>
                              <span className="mx-2">•</span>
                              <Badge variant="outline">{post.category}</Badge>
                            </div>
                            
                            <Link to={`/blog/${post.slug}`}>
                              <h2 className="text-xl font-semibold mb-3 bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text text-transparent hover:opacity-80 transition-all duration-200">
                                {post.title}
                              </h2>
                            </Link>
                            
                            <p className="text-gray-600 mb-4 line-clamp-2">
                              {post.excerpt}
                            </p>
                            
                            <div className="flex items-center">
                              <img
                                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&background=random`}
                                alt={post.author}
                                className="w-10 h-10 rounded-full mr-3"
                              />
                              <span className="text-sm font-medium">{post.author}</span>
                            </div>
                            
                            <div className="mt-4">
                              <Link to={`/blog/${post.slug}`} className="text-mba-secondary font-medium flex items-center hover:underline">
                                Đọc tiếp <ArrowRight className="ml-1 w-4 h-4" />
                              </Link>
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text text-transparent">Danh mục</h3>
              
              <div className="space-y-2">
                <div
                  className={`px-3 py-2 rounded-md cursor-pointer ${selectedCategory === null ? 'bg-blue-600/10 text-transparent bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text font-medium' : 'hover:bg-gray-100'}`}
                  onClick={() => setSelectedCategory(null)}
                >
                  Tất cả bài viết
                </div>
                
                {blogCategories.map((category) => (
                  <div
                    key={category.id}
                    className={`px-3 py-2 rounded-md cursor-pointer ${selectedCategory === category.id ? 'bg-blue-600/10 text-transparent bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text font-medium' : 'hover:bg-gray-100'}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-white">Cần tư vấn thêm?</h3>
                <p className="text-white mb-4">
                  Liên hệ ngay với chúng tôi để được tư vấn về giải pháp kho vận phù hợp với doanh nghiệp của bạn.
                </p>
                <Button className="bg-gradient-to-br from-white to-blue-50 text-transparent bg-clip-text hover:from-white hover:to-blue-100 w-full transition-all duration-200" asChild>
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text text-transparent font-medium">
                  <Link to="/lien-he">Liên hệ ngay</Link>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogPage;
