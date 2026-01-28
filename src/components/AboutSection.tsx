import { BookOpen, Users, Award, Building2 } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Kurikulum Berbasis Industri",
    description: "Materi pembelajaran dirancang berdasarkan kebutuhan industri konstruksi terkini."
  },
  {
    icon: Users,
    title: "Mentor Berpengalaman",
    description: "Dipandu oleh praktisi teknik sipil dengan pengalaman lebih dari 15 tahun."
  },
  {
    icon: Award,
    title: "Sertifikasi Resmi",
    description: "Dapatkan sertifikat yang diakui industri untuk meningkatkan kredibilitas Anda."
  },
  {
    icon: Building2,
    title: "Proyek Nyata",
    description: "Praktik langsung dengan studi kasus dari proyek konstruksi sesungguhnya."
  }
];

const AboutSection = () => {
  return (
    <section id="tentang" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Tentang Project Borneo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Membangun Generasi Insinyur Sipil{" "}
            <span className="text-primary">Masa Depan</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Project Borneo adalah platform edukasi yang didedikasikan untuk 
            mengembangkan kompetensi profesional di bidang teknik sipil. 
            Kami menghubungkan teori akademis dengan praktik industri nyata.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-gold mb-2">5+</h3>
              <p className="text-primary-foreground/80">Tahun Pengalaman</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-gold mb-2">25+</h3>
              <p className="text-primary-foreground/80">Instruktur Ahli</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-gold mb-2">50+</h3>
              <p className="text-primary-foreground/80">Partner Industri</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
