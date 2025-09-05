<template>
  <section class="hero-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <h1 class="hero-title fade-in">
            Berbagi Kebaikan, <br>
            <span class="text-warning">Bersama Membangun</span> 
          </h1>
          <p class="hero-subtitle fade-in">
            Bergabunglah dengan jutaan donatur dalam menyebarkan kebaikan 
            melalui program-program kemanusiaan yang berdampak nyata.
          </p>
          <div class="fade-in">
            <router-link to="/program/1" class="btn btn-secondary btn-lg me-3">
              Donasi Sekarang
            </router-link>
            <router-link to="/kisah-kasih" class="btn btn-outline-light btn-lg">
              Lihat Kisah Kasih
            </router-link>
          </div>
        </div>
        <div class="col-lg-6 text-center">
          <img 
            src="https://placehold.co/500x400?text=Keluarga+bahagia+berbagi+kebaikan+bersama" 
            alt="Keluarga bahagia berbagi kebaikan"
            class="img-fluid rounded-3 shadow-lg fade-in"
            style="max-width: 90%; height: auto;"
          >
        </div>
      </div>
      
      <!-- Quick Stats -->
      <div class="row mt-5 text-center">
        <div class="col-md-4 mb-3">
          <div class="d-flex align-items-center justify-content-center">
            <div class="me-3">
              <span style="font-size: 2.5rem;">💰</span>
            </div>
            <div>
              <h3 class="mb-0 text-warning">{{ formatCurrency(162850000) }}</h3>
              <small class="text-light opacity-75">Total Donasi</small>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="d-flex align-items-center justify-content-center">
            <div class="me-3">
              <span style="font-size: 2.5rem;">🤝</span>
            </div>
            <div>
              <h3 class="mb-0 text-warning">1,245+</h3>
              <small class="text-light opacity-75">Transaksi</small>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="d-flex align-items-center justify-content-center">
            <div class="me-3">
              <span style="font-size: 2.5rem;">❤️</span>
            </div>
            <div>
              <h3 class="mb-0 text-warning">50+</h3>
              <small class="text-light opacity-75">Program Aktif</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
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
.hero-section {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  padding: 100px 0 80px;
  min-height: 70vh;
  display: flex;
  align-items: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-section {
    padding: 80px 0 60px;
    text-align: center;
  }
  
  .btn-lg {
    margin-bottom: 1rem;
    width: 100%;
  }
}

.fade-in {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>