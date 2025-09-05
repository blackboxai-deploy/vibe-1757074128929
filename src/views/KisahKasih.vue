<template>
  <div>
    <!-- Breadcrumb -->
    <div class="bg-light py-3">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-decoration-none">Home</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Kisah Kasih</li>
          </ol>
        </nav>
      </div>
    </div>
    
    <!-- Hero Section -->
    <section class="py-5 bg-primary text-white">
      <div class="container">
        <div class="text-center">
          <h1 class="display-4 fw-bold mb-4">Kisah Kasih</h1>
          <p class="lead">
            Cerita inspiratif dari dampak nyata donasi Anda kepada mereka yang membutuhkan
          </p>
        </div>
      </div>
    </section>
    
    <!-- Featured Story -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="card border-0 shadow-lg mb-5">
              <img 
                :src="featuredStory.image" 
                :alt="featuredStory.title"
                class="card-img-top"
                style="height: 400px; object-fit: cover;"
              >
              <div class="card-body p-4">
                <span class="badge bg-primary mb-2">Cerita Utama</span>
                <h2 class="card-title">{{ featuredStory.title }}</h2>
                <p class="text-muted">{{ formatDate(featuredStory.date) }}</p>
                <p class="card-text">{{ featuredStory.fullContent }}</p>
                
                <div class="mt-4 p-3 bg-light rounded">
                  <h6 class="text-primary mb-2">💝 Dampak Donasi:</h6>
                  <ul class="mb-0">
                    <li>{{ featuredStory.impact1 }}</li>
                    <li>{{ featuredStory.impact2 }}</li>
                    <li>{{ featuredStory.impact3 }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- All Stories -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center fw-bold mb-5">Semua Kisah Kasih</h2>
        
        <div class="row">
          <div 
            v-for="story in allStories" 
            :key="story.id"
            class="col-lg-4 col-md-6 mb-4"
          >
            <div class="card h-100 border-0 shadow-sm">
              <img 
                :src="story.image" 
                :alt="story.title"
                class="card-img-top"
                style="height: 250px; object-fit: cover;"
              >
              <div class="card-body d-flex flex-column">
                <span class="badge bg-secondary mb-2 align-self-start">{{ story.category }}</span>
                <h5 class="card-title">{{ story.title }}</h5>
                <p class="card-text text-muted flex-grow-1">{{ story.excerpt }}</p>
                <div class="mt-auto">
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">{{ formatDate(story.date) }}</small>
                    <button 
                      class="btn btn-outline-primary btn-sm"
                      @click="showStoryDetail(story)"
                    >
                      Baca Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Statistics -->
    <section class="py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fw-bold">Dampak Kebaikan Bersama</h2>
          <p class="text-muted lead">Pencapaian yang telah kita raih bersama</p>
        </div>
        
        <div class="row">
          <div class="col-md-3 mb-4">
            <div class="card border-0 shadow-sm text-center">
              <div class="card-body">
                <div class="mb-3">
                  <span style="font-size: 3rem;">👨‍👩‍👧‍👦</span>
                </div>
                <h3 class="text-primary fw-bold">15,000+</h3>
                <p class="text-muted">Keluarga Terbantu</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-3 mb-4">
            <div class="card border-0 shadow-sm text-center">
              <div class="card-body">
                <div class="mb-3">
                  <span style="font-size: 3rem;">🏫</span>
                </div>
                <h3 class="text-success fw-bold">250+</h3>
                <p class="text-muted">Anak Bersekolah</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-3 mb-4">
            <div class="card border-0 shadow-sm text-center">
              <div class="card-body">
                <div class="mb-3">
                  <span style="font-size: 3rem;">🏥</span>
                </div>
                <h3 class="text-info fw-bold">50+</h3>
                <p class="text-muted">Fasilitas Kesehatan</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-3 mb-4">
            <div class="card border-0 shadow-sm text-center">
              <div class="card-body">
                <div class="mb-3">
                  <span style="font-size: 3rem;">🕌</span>
                </div>
                <h3 class="text-warning fw-bold">100+</h3>
                <p class="text-muted">Tempat Ibadah</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-5 bg-primary text-white">
      <div class="container text-center">
        <h2 class="fw-bold mb-3">Jadilah Bagian dari Kisah Kasih Selanjutnya</h2>
        <p class="lead mb-4">
          Bergabunglah dengan ribuan donatur lainnya dalam menciptakan cerita kebaikan
        </p>
        <router-link to="/" class="btn btn-light btn-lg">
          Mulai Berdonasi Sekarang
        </router-link>
      </div>
    </section>
    
    <!-- Modal Detail -->
    <div 
      class="modal fade" 
      id="storyModal" 
      tabindex="-1" 
      aria-hidden="true"
      v-if="selectedStory"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ selectedStory.title }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <img 
              :src="selectedStory.image" 
              :alt="selectedStory.title"
              class="img-fluid rounded mb-3"
            >
            <p class="text-muted mb-3">{{ formatDate(selectedStory.date) }}</p>
            <p>{{ selectedStory.fullContent }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KisahKasih',
  data() {
    return {
      selectedStory: null,
      featuredStory: {
        id: 1,
        title: "Ahmad, Anak Yatim yang Meraih Prestasi Berkat Bantuan Donatur",
        image: "https://placehold.co/800x400?text=Ahmad+anak+berprestasi+memegang+piala+juara+dengan+bangga+dan+bahagia",
        date: "2024-01-15",
        fullContent: "Ahmad adalah seorang anak yatim berusia 12 tahun yang tinggal bersama neneknya di desa kecil di Garut, Jawa Barat. Kehidupan mereka sangat sederhana, namun Ahmad memiliki semangat belajar yang luar biasa. Berkat bantuan dari para donatur melalui program beasiswa anak yatim, Ahmad tidak hanya bisa melanjutkan sekolah, tapi juga mendapatkan fasilitas belajar yang memadai seperti buku, alat tulis, dan bimbingan belajar. Kerja keras dan semangat Ahmad membuahkan hasil yang membanggakan. Ia berhasil meraih juara 1 dalam olimpiade matematika tingkat provinsi dan menjadi kebanggaan sekolah serta desanya. Prestasi ini membuka jalan bagi Ahmad untuk mendapatkan beasiswa lanjutan hingga perguruan tinggi. 'Saya sangat berterima kasih kepada bapak dan ibu donatur yang telah membantu saya. Tanpa bantuan mereka, mungkin saya tidak bisa bersekolah dan meraih prestasi ini,' kata Ahmad dengan mata berbinar. Kini Ahmad bercita-cita menjadi guru matematika untuk bisa membantu anak-anak lain seperti dirinya.",
        impact1: "Ahmad berhasil meraih juara 1 olimpiade matematika tingkat provinsi",
        impact2: "Mendapat beasiswa lanjutan untuk melanjutkan pendidikan",
        impact3: "Menjadi inspirasi bagi anak-anak lain di desanya"
      },
      allStories: [
        {
          id: 1,
          title: "Ahmad Raih Juara Olimpiade Matematika",
          image: "https://placehold.co/300x200?text=Anak+berprestasi+dengan+piala+juara+matematika",
          excerpt: "Berkat bantuan pendidikan dari donatur, Ahmad berhasil meraih prestasi gemilang...",
          date: "2024-01-15",
          category: "Pendidikan",
          fullContent: "Kisah lengkap tentang perjalanan Ahmad dari anak yatim hingga meraih prestasi akademik yang membanggakan..."
        },
        {
          id: 2,
          title: "Desa Suka Maju Kini Memiliki Air Bersih",
          image: "https://placehold.co/300x200?text=Anak+anak+desa+bermain+ceria+di+dekat+sumur+air+bersih",
          excerpt: "Pembangunan sumur air bersih mengubah kehidupan 200 keluarga di desa terpencil...",
          date: "2024-01-10",
          category: "Infrastruktur",
          fullContent: "Desa Suka Maju yang terletak di daerah terpencil selama bertahun-tahun mengalami kesulitan akses air bersih. Masyarakat harus berjalan kaki sejauh 3 km untuk mendapatkan air. Dengan bantuan donasi, kini telah dibangun sumur air bersih yang melayani 200 keluarga..."
        },
        {
          id: 3,
          title: "Masjid Al-Barokah Kembali Berfungsi",
          image: "https://placehold.co/300x200?text=Masjid+indah+setelah+renovasi+penuh+jamaah+sedang+sholat",
          excerpt: "Renovasi masjid berusia 50 tahun kini menjadi pusat kegiatan masyarakat...",
          date: "2024-01-05",
          category: "Wakaf",
          fullContent: "Masjid Al-Barokah yang berusia 50 tahun mengalami kerusakan parah pada atap dan lantai. Berkat donasi wakaf dari para dermawan, masjid kini telah direnovasi total dan menjadi pusat kegiatan keagamaan masyarakat..."
        },
        {
          id: 4,
          title: "Bantuan Sembako Untuk 100 Keluarga Dhuafa",
          image: "https://placehold.co/300x200?text=Keluarga+bahagia+menerima+paket+sembako+dari+relawan",
          excerpt: "Distribusi paket sembako membantu keluarga kurang mampu menghadapi masa sulit...",
          date: "2024-01-01",
          category: "Sosial",
          fullContent: "Program bantuan sembako bulanan telah membantu 100 keluarga dhuafa di Jakarta Selatan. Setiap paket berisi beras, minyak goreng, gula, telur, dan kebutuhan pokok lainnya untuk satu bulan..."
        },
        {
          id: 5,
          title: "Puskesmas Desa Mendapat Alat Kesehatan Baru",
          image: "https://placehold.co/300x200?text=Dokter+menggunakan+alat+kesehatan+modern+untuk+periksa+pasien",
          excerpt: "Pengadaan alat kesehatan modern meningkatkan kualitas layanan kesehatan...",
          date: "2023-12-28",
          category: "Kesehatan",
          fullContent: "Puskesmas di desa terpencil Flores, NTT kini memiliki peralatan kesehatan yang lebih modern berkat donasi. Alat-alat seperti tensimeter digital, termometer infrared, dan timbangan bayi digital kini tersedia..."
        },
        {
          id: 6,
          title: "Kurban 1445H Tersalur ke Seluruh Indonesia",
          image: "https://placehold.co/300x200?text=Pembagian+daging+kurban+kepada+masyarakat+yang+membutuhkan",
          excerpt: "Program kurban kolektif berhasil menyalurkan daging kepada 5000 keluarga...",
          date: "2023-12-20",
          category: "Kurban",
          fullContent: "Program kurban kolektif 1445H telah berhasil menyembelih 50 ekor sapi dan menyalurkan dagingnya kepada 5000 keluarga kurang mampu di berbagai daerah Indonesia. Penyaluran dilakukan secara merata..."
        }
      ]
    }
  },
  methods: {
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    },
    showStoryDetail(story) {
      this.selectedStory = story
      // Show modal (requires Bootstrap JS)
      const modal = new bootstrap.Modal(document.getElementById('storyModal'))
      modal.show()
    }
  }
}
</script>

<style scoped>
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  transition: transform 0.3s ease;
}

.card:hover .card-img-top {
  transform: scale(1.05);
}

.badge {
  font-size: 0.75rem;
}

@media (max-width: 768px) {
  .display-4 {
    font-size: 2.5rem;
  }
}
</style>