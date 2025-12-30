
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import { CartProvider } from "./context/CartContext";

// Pages
import Index from "./pages/Index";
import ServicesOverview from "./pages/ServicesOverview";
import ServicePage from "./pages/ServicePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dich-vu" element={<ServicesOverview />} />
          <Route path="/dich-vu/:serviceId" element={<ServicePage />} />
          <Route path="/san-pham" element={<ProductsPage />} />
          <Route path="/gio-hang" element={<CartPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/lien-he" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
