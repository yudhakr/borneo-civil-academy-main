import { Linkedin, Mail, Quote } from "lucide-react";
import ceoImage from "@/assets/ceo-portrait.jpg";

const FounderSection = () => {
  return (
    <section id="founder" className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Column */}
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10">
                <img
                  src={ceoImage}
                  alt="Founder & CEO Project Borneo"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
                {/* Decorative frame */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-gold rounded-2xl -z-10" />
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-lg z-20 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">15+</span>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Tahun Pengalaman</div>
                    <div className="font-semibold text-foreground">Industri Konstruksi</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="order-1 lg:order-2">
              <span className="inline-block text-sm font-semibold text-gold uppercase tracking-wider mb-4">
                CEO & Founder
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Memimpin dengan{" "}
                <span className="text-gold">Visi & Integritas</span>
              </h2>

              <div className="relative mb-8">
                <Quote className="w-10 h-10 text-gold/30 absolute -top-2 -left-2" />
                <p className="text-lg text-primary-foreground/80 leading-relaxed pl-8">
                  "Saya mendirikan Project Borneo dengan satu tujuan: 
                  menjembatani kesenjangan antara pendidikan teknik sipil 
                  dan kebutuhan industri. Setiap insinyur yang kami latih 
                  adalah investasi untuk masa depan infrastruktur Indonesia."
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                  Ayudha Kusuma Rahmadhani, S.Kom., S.T
                </h3>
                <p className="text-gold font-medium mb-4">
                  Founder & CEO Project Borneo
                </p>
                <p className="text-primary-foreground/70 leading-relaxed">
                  Profesional dengan latar belakang ganda di bidang Informatika dan 
                  Teknik Sipil. Berkomitmen menjembatani teknologi digital dengan 
                  industri konstruksi untuk meningkatkan kualitas SDM di bidang 
                  teknik sipil Indonesia.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-primary-foreground group-hover:text-primary" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold transition-colors group"
                >
                  <Mail className="w-5 h-5 text-primary-foreground group-hover:text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
