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
import { Loader2, Minus, Plus, ShoppingCart, Shield, RefreshCw, Zap, Home } from "lucide-react";
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
            <h1 className="text-2xl font-bold mb-4">Product not found</h1>
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
        <main className="flex-1 py-8">
          <div className="container">
            {/* Breadcrumb Navigation */}
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="flex items-center gap-1">
                      <Home className="h-4 w-4" />
                      Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/#products">Products</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{product.node.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Product Image */}
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
                {image ? (
                  <img
                    src={image.url}
                    alt={image.altText || product.node.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ShoppingCart className="h-16 w-16 text-muted-foreground" />
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="flex flex-col">
                <h1 className="text-3xl font-bold text-foreground mb-4">
                  {product.node.title}
                </h1>

                <p className="text-3xl font-bold text-primary mb-6">
                  {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                </p>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {product.node.description}
                </p>

                {/* Variant Selection */}
                {product.node.options && product.node.options.length > 0 && product.node.options[0].name !== "Title" && (
                  <div className="mb-6">
                    {product.node.options.map((option, optionIndex) => (
                      <div key={optionIndex} className="mb-4">
                        <label className="block text-sm font-medium mb-2">
                          {option.name}
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {option.values.map((value, valueIndex) => (
                            <button
                              key={valueIndex}
                              onClick={() => setSelectedVariantIndex(valueIndex)}
                              className={`px-4 py-2 rounded-lg border transition-colors ${
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
                  <label className="block text-sm font-medium mb-2">Quantity</label>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-lg font-medium w-12 text-center">
                      {quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Add to Cart */}
                <Button
                  size="lg"
                  className="w-full mb-6"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  <div className="text-center">
                    <Zap className="h-5 w-5 mx-auto mb-1 text-accent" />
                    <span className="text-xs text-muted-foreground">Instant Delivery</span>
                  </div>
                  <div className="text-center">
                    <RefreshCw className="h-5 w-5 mx-auto mb-1 text-accent" />
                    <span className="text-xs text-muted-foreground">30-Day Guarantee</span>
                  </div>
                  <div className="text-center">
                    <Shield className="h-5 w-5 mx-auto mb-1 text-accent" />
                    <span className="text-xs text-muted-foreground">Secure Checkout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Sticky Mobile Add to Cart */}
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 md:hidden z-40">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-bold text-lg text-primary">
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
