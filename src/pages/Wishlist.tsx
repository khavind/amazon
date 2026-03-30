import { Link } from "react-router-dom";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import AmazonHeader from "@/components/AmazonHeader";
import AmazonFooter from "@/components/AmazonFooter";
import { Heart, Trash2, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

const Wishlist = () => {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (productId: string) => {
    const product = items.find((p) => p.id === productId);

    if (product) {
      addToCart(product);
      removeFromWishlist(productId);
      toast.success("Moved to cart!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AmazonHeader />

      <div className="max-w-6xl mx-auto w-full px-4 py-6 flex-1">
        <h1 className="text-2xl font-bold mb-6">Your Wishlist</h1>

        {items.length === 0 ? (
          <div className="text-center py-16 bg-card rounded p-8">
            <Heart size={48} className="text-muted-foreground mx-auto mb-3" />
            <p className="text-lg text-muted-foreground mb-2">
              Your wishlist is empty
            </p>
            <Link to="/" className="amazon-btn-primary inline-block">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((product) => (
              <div
                key={product.id}
                className="flex flex-col md:flex-row items-center justify-between bg-card p-4 rounded shadow-sm"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-24 h-24 object-contain"
                  />

                  <div>
                    <h2 className="font-semibold text-lg">
                      {product.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      ₹{product.price}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-4 md:mt-0">
                  <button
                    onClick={() => handleMoveToCart(product.id)}
                    className="amazon-btn-primary flex items-center gap-2"
                  >
                    <ShoppingCart size={16} />
                    Move to Cart
                  </button>

                  <button
                    onClick={() => {
                      removeFromWishlist(product.id);
                      toast.success("Removed from wishlist");
                    }}
                    className="bg-red-500 text-white px-3 py-2 rounded flex items-center gap-2"
                  >
                    <Trash2 size={16} />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <AmazonFooter />
    </div>
  );
};

export default Wishlist;
