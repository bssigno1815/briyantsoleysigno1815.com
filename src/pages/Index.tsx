import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Store, Truck, Shield, Star } from "lucide-react";

// Product images
import mayoImg from "@/assets/mayo.jpg";
import tchatchaImg from "@/assets/tchatcha.jpg";
import brasleImg from "@/assets/brasle.jpg";
import godeImg from "@/assets/gode.jpg";
import kepiImg from "@/assets/kepi.jpg";

const products = [
  { name: "Mayo", price: 25, img: mayoImg, alt: "Mayo BSS" },
  { name: "Tchatcha", price: 15, img: tchatchaImg, alt: "Tchatcha BSS" },
  { name: "Braslè", price: 5, img: brasleImg, alt: "Braslè BSS" },
  { name: "Godé pou Chalè", price: 10, img: godeImg, alt: "Godé pou Chalè BSS" },
  { name: "Kèpi", price: 15, img: kepiImg, alt: "Kèpi BSS" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground sticky top-0 z-50" style={{ boxShadow: 'var(--shadow-header)' }}>
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center">
                <Store className="h-5 w-5" />
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-tight text-primary-foreground">BSS Store</h1>
                <p className="text-sm text-primary-foreground/80 font-medium">Pwodwi Ofisyèl</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge className="hidden sm:flex items-center space-x-1 bg-accent text-accent-foreground border-0">
                <Star className="h-3 w-3" />
                <span className="text-xs font-semibold">Premium Quality</span>
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-foreground leading-tight">
              Pwodwi Ofisyèl <span className="text-accent">BSS</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
              Dekouvri koleksyon pwodwi otantik ak kalite segondè yo pa genyen
            </p>
            
            <div className="flex flex-wrap justify-center gap-12 text-foreground">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Truck className="h-5 w-5 text-accent" />
                </div>
                <span className="font-semibold">Livrezon rapid</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <span className="font-semibold">Garanti kalite</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Star className="h-5 w-5 text-accent" />
                </div>
                <span className="font-semibold">Pwodwi otantik</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <main className="container mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nou pwodwi yo</h3>
          <p className="text-lg text-muted-foreground">Chwazi nan koleksyon otantik nou an</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="h-8 w-8 rounded-lg bg-accent text-accent-foreground flex items-center justify-center">
              <Store className="h-4 w-4" />
            </div>
            <p className="text-xl font-bold">BSS Store — Pwodwi Ofisyèl</p>
          </div>
          <p className="text-primary-foreground/70">© 2024 BSS. Tout dwa yo rezève.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
