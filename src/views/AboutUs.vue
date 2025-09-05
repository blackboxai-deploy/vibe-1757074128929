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
            <li class="breadcrumb-item active" aria-current="page">Tentang Kami</li>
          </ol>
        </nav>
      </div>
    </div>
    
    <!-- Hero Section -->
    <section class="py-5 bg-primary text-white">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 class="display-4 fw-bold mb-4">Tentang DonasiBaik</h1>
            <p class="lead">
              Platform donasi online terpercaya yang menghubungkan kebaikan hati donatur 
              dengan mereka yang membutuhkan bantuan.
            </p>
          </div>
          <div class="col-lg-6 text-center">
            <img 
              src="https://placehold.co/500x400?text=Tim+DonasiBaik+bersama+penerima+manfaat+tersenyum+bahagia" 
              alt="Tim DonasiBaik"
              class="img-fluid rounded shadow"
            >
          </div>
        </div>
      </div>
    </section>
    
    <!-- Mission & Vision -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mb-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-4">
                <div class="text-center mb-3">
                  <span style="font-size: 3rem;">🎯</span>
                </div>
                <h3 class="text-center text-primary mb-3">Misi Kami</h3>
                <p class="text-muted">
                  Memfasilitasi penyaluran bantuan kemanusiaan dengan transparan, 
                  akuntabel, dan tepat sasaran untuk menciptakan dampak positif 
                  bagi masyarakat yang membutuhkan.
                </p>
                <ul class="text-muted">
                  <li>Menyediakan platform donasi yang aman dan terpercaya</li>
                  <li>Memastikan transparansi setiap transaksi donasi</li>
                  <li>Menghubungkan donatur dengan penerima manfaat</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6 mb-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-4">
                <div class="text-center mb-3">
                  <span style="font-size: 3rem;">👁️</span>
                </div>
                <h3 class="text-center text-primary mb-3">Visi Kami</h3>
                <p class="text-muted">
                  Menjadi platform donasi terdepan di Indonesia yang memberikan 
                  kemudahan bagi masyarakat untuk berbagi kebaikan dan menciptakan 
                  perubahan positif yang berkelanjutan.
                </p>
                <ul class="text-muted">
                  <li>Indonesia yang lebih peduli dan gotong royong</li>
                  <li>Kemudahan akses bantuan untuk yang membutuhkan</li>
                  <li>Budaya berbagi yang semakin mengakar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Values -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center fw-bold mb-5">Nilai-Nilai Kami</h2>
        
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="text-center">
              <div class="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                   style="width: 80px; height: 80px;">
                <span class="text-white" style="font-size: 2rem;">🔒</span>
              </div>
              <h4>Terpercaya</h4>
              <p class="text-muted">
                Keamanan dan kepercayaan adalah prioritas utama dalam setiap transaksi donasi.
              </p>
            </div>
          </div>
          
          <div class="col-md-4 mb-4">
            <div class="text-center">
              <div class="bg-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                   style="width: 80px; height: 80px;">
                <span class="text-white" style="font-size: 2rem;">📊</span>
              </div>
              <h4>Transparan</h4>
              <p class="text-muted">
                Laporan keuangan yang jelas dan akuntabel untuk setiap program donasi.
              </p>
            </div>
          </div>
          
          <div class="col-md-4 mb-4">
            <div class="text-center">
              <div class="bg-warning rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                   style="width: 80px; height: 80px;">
                <span class="text-white" style="font-size: 2rem;">⚡</span>
              </div>
              <h4>Cepat</h4>
              <p class="text-muted">
                Penyaluran bantuan yang cepat dan efisien kepada yang membutuhkan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Stats -->
    <section class="py-5">
      <div class="container">
        <h2 class="text-center fw-bold mb-5">Pencapaian Kami</h2>
        
        <div class="row text-center">
          <div class="col-md-3 mb-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body">
                <h2 class="text-primary fw-bold">{{ formatCurrency(162850000) }}</h2>
                <p class="text-muted">Total Donasi</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-3 mb-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body">
                <h2 class="text-success fw-bold">1,245+</h2>
                <p class="text-muted">Donatur</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-3 mb-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body">
                <h2 class="text-info fw-bold">50+</h2>
                <p class="text-muted">Program</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-3 mb-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body">
                <h2 class="text-warning fw-bold">10,000+</h2>
                <p class="text-muted">Penerima Manfaat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Team (Optional) -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center fw-bold mb-5">Tim Kami</h2>
        
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card border-0 shadow-sm">
              <div class="card-body text-center p-4">
                <img 
                  src="https://placehold.co/150x150?text=Founder+DonasiBaik+CEO+bersetelan+rapi" 
                  alt="Founder"
                  class="rounded-circle mb-3"
                  style="width: 120px; height: 120px; object-fit: cover;"
                >
                <h5>Ahmad Baik</h5>
                <p class="text-primary">Founder & CEO</p>
                <p class="text-muted small">
                  Memiliki visi untuk menciptakan platform donasi yang dapat 
                  memberikan dampak nyata bagi masyarakat.
                </p>
              </div>
            </div>
          </div>
          
          <div class="col-md-4 mb-4">
            <div class="card border-0 shadow-sm">
              <div class="card-body text-center p-4">
                <img 
                  src="https://placehold.co/150x150?text=Program+Manager+wanita+profesional+tersenyum" 
                  alt="Program Manager"
                  class="rounded-circle mb-3"
                  style="width: 120px; height: 120px; object-fit: cover;"
                >
                <h5>Siti Peduli</h5>
                <p class="text-primary">Program Manager</p>
                <p class="text-muted small">
                  Bertanggung jawab memastikan setiap program donasi berjalan 
                  dengan baik dan tepat sasaran.
                </p>
              </div>
            </div>
          </div>
          
          <div class="col-md-4 mb-4">
            <div class="card border-0 shadow-sm">
              <div class="card-body text-center p-4">
                <img 
                  src="https://placehold.co/150x150?text=Tech+Lead+pria+muda+dengan+kacamata" 
                  alt="Tech Lead"
                  class="rounded-circle mb-3"
                  style="width: 120px; height: 120px; object-fit: cover;"
                >
                <h5>Budi Teknologi</h5>
                <p class="text-primary">Tech Lead</p>
                <p class="text-muted small">
                  Memastikan platform berjalan dengan aman, cepat, dan 
                  memberikan experience terbaik untuk pengguna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-5 bg-primary text-white">
      <div class="container text-center">
        <h2 class="fw-bold mb-3">Bergabunglah Dengan Kami</h2>
        <p class="lead mb-4">
          Mari bersama-sama menciptakan perubahan positif untuk Indonesia yang lebih baik
        </p>
        <div class="d-flex justify-content-center gap-3">
          <router-link to="/" class="btn btn-light btn-lg">
            Mulai Berdonasi
          </router-link>
          <router-link to="/hubungi-kami" class="btn btn-outline-light btn-lg">
            Hubungi Kami
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  methods: {
    formatCurrency(amount) {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
      }).format(amount)
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
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.rounded-circle {
  border: 3px solid #dee2e6;
}

@media (max-width: 768px) {
  .display-4 {
    font-size: 2.5rem;
  }
}
</style>