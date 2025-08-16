import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";

interface Product {
  name: string;
  price: number;
  img: string;
  alt: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group relative overflow-hidden bg-gradient-to-br from-card to-card/50 border-0 transition-all duration-300 hover:scale-[1.02] hover:shadow-[var(--shadow-card-hover)]"
      style={{ boxShadow: 'var(--shadow-card)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Image Container */}
        <div className="relative w-full h-48 overflow-hidden rounded-t-xl bg-gradient-to-br from-muted/20 to-muted/40">
          <img
            src={product.img}
            alt={product.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Like Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-3 right-3 h-8 w-8 rounded-full backdrop-blur-sm transition-all duration-300 ${
              isLiked 
                ? 'bg-accent text-accent-foreground shadow-[var(--shadow-elegant)]' 
                : 'bg-background/80 hover:bg-background'
            } ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
          </Button>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-bold text-lg mb-2 text-card-foreground group-hover:text-accent transition-colors duration-300">
            {product.name}
          </h3>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-black text-accent">${product.price}</span>
            
            <Button 
              variant="default"
              size="icon"
              className="h-10 w-10 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-110"
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};