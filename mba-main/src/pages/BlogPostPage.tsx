
import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    return (
      <PageLayout>
        <div className="container mx-auto py-16 text-center">
          <h1 className="text-2xl mb-4">Bài viết không tồn tại</h1>
          <Link to="/blog" className="text-mba-secondary hover:underline">
            Quay lại trang blog
          </Link>
        </div>
      </PageLayout>
    );
  }
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('vi-VN', options);
  };
  
  // Find related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);
  
  return (
    <PageLayout
      title={`${post.title} - MBA Fulfillment Việt Nam`}
      description={post.excerpt}
    >
      <div className="bg-mba-primary/5 py-10 md:py-16">
        <div className="container mx-auto">
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center text-mba-primary hover:text-mba-secondary mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại trang blog
          </button>
          
          <h1 className="heading-xl mb-4">{post.title}</h1>
          
          <div className="flex flex-wrap items-center text-sm text-gray-600 gap-4 md:gap-6">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{formatDate(post.date)}</span>
            </div>
            
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{post.author}</span>
            </div>
            
            <div className="flex items-center">
              <Tag className="w-4 h-4 mr-2" />
              <Badge variant="outline">{post.category}</Badge>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-80 object-cover"
              />
              
              <div className="p-8">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }} 
                />
                
                <div className="mt-8 pt-6 border-t">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">#{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Bài viết liên quan</h3>
              
              {relatedPosts.length > 0 ? (
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link 
                      key={relatedPost.id} 
                      to={`/blog/${relatedPost.slug}`}
                      className="flex items-start hover:bg-gray-50 p-2 rounded-md"
                    >
                      <img 
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-20 h-16 object-cover rounded mr-3"
                      />
                      <div>
                        <h4 className="font-medium text-sm line-clamp-2">{relatedPost.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{formatDate(relatedPost.date)}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">Không có bài viết liên quan.</p>
              )}
              
              <div className="mt-6">
                <Button className="w-full" asChild>
                  <Link to="/blog">Xem tất cả bài viết</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-mba-primary text-white rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Cần tư vấn thêm?</h3>
                <p className="text-gray-200 mb-4">
                  Liên hệ ngay với chúng tôi để được tư vấn về giải pháp kho vận phù hợp với doanh nghiệp của bạn.
                </p>
                <Button className="bg-white text-mba-primary hover:bg-gray-100 w-full" asChild>
                  <Link to="/lien-he">Liên hệ ngay</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogPostPage;
