import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { fetchProductByHandle, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { getBundleContent } from "@/data/bundleContents";
import { Loader2, Minus, Plus, ShoppingCart, Shield, RefreshCw, Zap, Home, CheckCircle2, BookOpen, Users, Target } from "lucide-react";
import { toast } from "sonner";

const Product = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const addItem = useCartStore((state) => state.addItem);
  const setOpen = useCartStore((state) => state.setOpen);

  useEffect(() => {
    const loadProduct = async () => {
      if (!handle) return;
      try {
        const data = await fetchProductByHandle(handle);
        if (data) {
          setProduct({ node: data });
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [handle]);

  const handleAddToCart = () => {
    if (!product) return;
    const variant = product.node.variants.edges[selectedVariantIndex]?.node;
    if (!variant) return;

    addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity,
      selectedOptions: variant.selectedOptions || [],
    });

    toast.success("Added to cart!", {
      description: `${product.node.title} x${quantity}`,
      position: "top-center",
    });
    setOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-heading font-bold mb-4">Product not found</h1>
            <Button asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const variant = product.node.variants.edges[selectedVariantIndex]?.node;
  const price = variant?.price || product.node.priceRange.minVariantPrice;
  const image = product.node.images?.edges?.[0]?.node;
  const bundleContent = handle ? getBundleContent(handle) : null;

  // Schema markup for product
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.node.title,
    "description": product.node.description,
    "image": image?.url,
    "sku": handle,
    "offers": {
      "@type": "Offer",
      "price": parseFloat(price.amount).toFixed(2),
      "priceCurrency": price.currencyCode,
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "The Knockout Academy"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{product.node.title} | The Knockout Academy</title>
        <meta name="description" content={product.node.description?.slice(0, 160) || `Get ${product.node.title} - premium digital education resources from The Knockout Academy.`} />
        <link rel="canonical" href={`https://knockoutacademy.com/product/${handle}`} />
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-8 md:py-12 pb-24 md:pb-12">
          <div className="container">
            {/* Breadcrumb Navigation */}
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="flex items-center gap-1 font-body">
                      <Home className="h-4 w-4" />
                      Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/#products" className="font-body">Products</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-body">{product.node.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Product Image */}
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden shadow-premium">
                {image ? (
                  <img
                    src={image.url}
                    alt={image.altText || product.node.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-secondary/80">
                    <span className="text-7xl font-display font-bold text-secondary-foreground/20">K</span>
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="flex flex-col">
                <h1 className="text-hero font-display text-3xl md:text-4xl text-foreground mb-4">
                  {product.node.title}
                </h1>

                <p className="text-4xl font-heading font-bold text-primary mb-6">
                  {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                </p>

                <p className="text-muted-foreground font-body mb-8 leading-relaxed text-lg">
                  {product.node.description}
                </p>

                {/* Variant Selection */}
                {product.node.options && product.node.options.length > 0 && product.node.options[0].name !== "Title" && (
                  <div className="mb-6">
                    {product.node.options.map((option, optionIndex) => (
                      <div key={optionIndex} className="mb-4">
                        <label className="block text-sm font-heading font-medium mb-2">
                          {option.name}
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {option.values.map((value, valueIndex) => (
                            <button
                              key={valueIndex}
                              onClick={() => setSelectedVariantIndex(valueIndex)}
                              className={`px-4 py-2 rounded-xl border-2 font-heading font-medium transition-all ${
                                selectedVariantIndex === valueIndex
                                  ? "border-primary bg-primary/10 text-primary"
                                  : "border-border hover:border-primary/50"
                              }`}
                            >
                              {value}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Quantity */}
                <div className="mb-8">
                  <label className="block text-sm font-heading font-medium mb-2">Quantity</label>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="rounded-xl"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-lg font-heading font-medium w-12 text-center">
                      {quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                      className="rounded-xl"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Add to Cart */}
                <Button
                  size="xl"
                  className="w-full mb-6 group"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  <div className="text-center">
                    <Zap className="h-5 w-5 mx-auto mb-1 text-accent" />
                    <span className="text-xs text-muted-foreground font-body">Instant Delivery</span>
                  </div>
                  <div className="text-center">
                    <RefreshCw className="h-5 w-5 mx-auto mb-1 text-accent" />
                    <span className="text-xs text-muted-foreground font-body">30-Day Guarantee</span>
                  </div>
                  <div className="text-center">
                    <Shield className="h-5 w-5 mx-auto mb-1 text-accent" />
                    <span className="text-xs text-muted-foreground font-body">Secure Checkout</span>
                  </div>
                </div>
              </div>
            </div>

            {/* What's Inside Section */}
            {bundleContent && (
              <div className="mt-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* What's Inside */}
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-premium transition-all hover:-translate-y-1 hover:shadow-premium-hover">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <BookOpen className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-xl font-heading font-bold text-foreground">What's Inside</h2>
                    </div>
                    <ul className="space-y-3">
                      {bundleContent.products.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground font-body">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Who This Is For */}
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-premium transition-all hover:-translate-y-1 hover:shadow-premium-hover">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-xl font-heading font-bold text-foreground">Who This Is For</h2>
                    </div>
                    <p className="text-muted-foreground font-body mb-4 leading-relaxed">{bundleContent.whoIsItFor}</p>
                    <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                      <p className="text-sm text-accent font-heading font-medium">
                        Perfect for beginners — no prior experience needed!
                      </p>
                    </div>
                  </div>

                  {/* What You'll Learn */}
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-premium transition-all hover:-translate-y-1 hover:shadow-premium-hover">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Target className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-xl font-heading font-bold text-foreground">What You'll Learn</h2>
                    </div>
                    <ul className="space-y-3">
                      {bundleContent.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground font-body">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>

        {/* Sticky Mobile Add to Cart */}
        <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border p-4 md:hidden z-40 shadow-lg">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-heading font-bold text-xl text-primary">
                {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
              </p>
            </div>
            <Button size="lg" onClick={handleAddToCart} className="flex-1">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Product;