import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Civil Engineering Construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Platform Edukasi Teknik Sipil #1 di Indonesia
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Bangun Karir Anda di{" "}
            <span className="text-gradient">Teknik Sipil</span>{" "}
            Bersama Para Ahli
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Pelajari ilmu teknik sipil dari praktisi berpengalaman. 
            Dari perencanaan struktur hingga manajemen konstruksi, 
            tingkatkan keahlian Anda dengan kurikulum berbasis industri.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" className="group">
              Daftar Sekarang
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              <PlayCircle className="w-5 h-5" />
              Lihat Demo Kursus
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold">500+</div>
              <div className="text-primary-foreground/70 text-sm mt-1">Alumni Sukses</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold">15+</div>
              <div className="text-primary-foreground/70 text-sm mt-1">Program Kursus</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold">98%</div>
              <div className="text-primary-foreground/70 text-sm mt-1">Tingkat Kepuasan</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
