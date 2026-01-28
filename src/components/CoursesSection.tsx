import { Button } from "@/components/ui/button";
import { Clock, Users, Star, ArrowRight } from "lucide-react";

const courses = [
  {
    title: "Analisis Struktur Dasar",
    category: "Struktur",
    duration: "24 Jam",
    students: 156,
    rating: 4.9,
    price: "Rp 75.000",
    description: "Pelajari dasar-dasar analisis struktur bangunan dari statika hingga mekanika material.",
    color: "from-green-dark to-green-medium"
  },
  {
    title: "Manajemen Proyek Konstruksi",
    category: "Manajemen",
    duration: "32 Jam",
    students: 234,
    rating: 4.8,
    price: "Rp 99.000",
    description: "Kuasai teknik perencanaan, penjadwalan, dan pengendalian proyek konstruksi.",
    color: "from-green-dark to-green-medium"
  },
  {
    title: "Desain Pondasi & Geoteknik",
    category: "Geoteknik",
    duration: "28 Jam",
    students: 189,
    rating: 4.9,
    price: "Rp 85.000",
    description: "Memahami jenis tanah, daya dukung, dan perancangan pondasi yang tepat.",
    color: "from-green-dark to-green-medium"
  },
  {
    title: "AutoCAD untuk Teknik Sipil",
    category: "Software",
    duration: "20 Jam",
    students: 312,
    rating: 4.7,
    price: "Rp 65.000",
    description: "Mahir menggunakan AutoCAD untuk membuat gambar teknik profesional.",
    color: "from-green-dark to-green-medium"
  },
  {
    title: "Estimasi Biaya & RAB",
    category: "Estimasi",
    duration: "18 Jam",
    students: 278,
    rating: 4.8,
    price: "Rp 55.000",
    description: "Belajar menyusun Rencana Anggaran Biaya proyek konstruksi secara akurat.",
    color: "from-green-dark to-green-medium"
  },
  {
    title: "Struktur Beton Bertulang",
    category: "Struktur",
    duration: "36 Jam",
    students: 167,
    rating: 4.9,
    price: "Rp 95.000",
    description: "Desain dan analisis struktur beton bertulang sesuai SNI terbaru.",
    color: "from-green-dark to-green-medium"
  }
];

const CoursesSection = () => {
  return (
    <section id="program" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Program Kursus
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pilih Program yang{" "}
            <span className="text-primary">Tepat untuk Anda</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Berbagai program kursus teknik sipil yang dirancang untuk 
            memenuhi kebutuhan profesional di berbagai tingkat keahlian.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              {/* Course Header */}
              <div className={`h-3 bg-gradient-to-r ${course.color}`} />
              
              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block bg-secondary text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {course.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {course.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-5">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students} siswa</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-gold text-gold" />
                    <span className="text-foreground font-medium">{course.rating}</span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-5 border-t border-border">
                  <div>
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                  </div>
                  <Button variant="outline" size="sm" className="group/btn">
                    Lihat Detail
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg">
            Lihat Semua Program
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
