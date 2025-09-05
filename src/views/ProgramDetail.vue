<template>
  <div v-if="program">
    <!-- Breadcrumb -->
    <div class="bg-light py-3">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-decoration-none">Home</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">{{ program.title }}</li>
          </ol>
        </nav>
      </div>
    </div>
    
    <!-- Program Detail Content -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <!-- Program Image and Details -->
          <div class="col-lg-8 mb-4">
            <div class="card border-0 shadow-lg">
              <img :src="program.image" :alt="program.title" class="card-img-top" style="height: 400px; object-fit: cover;">
              <div class="card-body p-4">
                <div class="mb-3">
                  <span class="badge bg-secondary me-2">{{ program.category }}</span>
                  <span class="badge bg-info text-dark">📍 {{ program.location }}</span>
                </div>
                
                <h1 class="card-title h2 mb-4">{{ program.title }}</h1>
                
                <p class="card-text lead text-muted">{{ program.description }}</p>
                
                <!-- Extended Description -->
                <div class="mt-4">
                  <h4>Detail Program</h4>
                  <p class="text-muted">
                    Program ini telah diverifikasi dan dipantau secara berkelanjutan untuk memastikan 
                    transparansi dan akuntabilitas penggunaan dana. Tim kami bekerja sama dengan 
                    mitra terpercaya di lokasi untuk memastikan bantuan sampai tepat sasaran.
                  </p>
                  
                  <h5 class="mt-4 mb-3">Manfaat Program:</h5>
                  <ul class="text-muted">
                    <li>Bantuan langsung kepada penerima manfaat yang membutuhkan</li>
                    <li>Monitoring dan evaluasi berkelanjutan</li>
                    <li>Laporan transparansi penggunaan dana</li>
                    <li>Dampak jangka panjang untuk komunitas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Donation Info Sidebar -->
          <div class="col-lg-4">
            <div class="card border-0 shadow-lg sticky-top" style="top: 2rem;">
              <div class="card-body p-4">
                <!-- Progress Information -->
                <div class="mb-4">
                  <h5 class="card-title">Progress Donasi</h5>
                  
                  <div class="mb-3">
                    <div class="d-flex justify-content-between mb-2">
                      <span class="text-muted">Terkumpul</span>
                      <span class="fw-bold h5 text-success mb-0">{{ formatCurrency(program.collected) }}</span>
                    </div>
                    
                    <div class="progress mb-3" style="height: 15px;">
                      <div 
                        class="progress-bar progress-bar-striped progress-bar-animated" 
                        role="progressbar" 
                        :style="{ width: progressPercentage + '%' }"
                        :aria-valuenow="progressPercentage" 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                      ></div>
                    </div>
                    
                    <div class="d-flex justify-content-between">
                      <span class="text-muted">Target: {{ formatCurrency(program.target) }}</span>
                      <span class="fw-bold text-primary">{{ progressPercentage }}%</span>
                    </div>
                  </div>
                  
                  <div class="row text-center mb-4">
                    <div class="col-6">
                      <div class="border-end">
                        <h4 class="text-warning mb-1">{{ program.daysLeft }}</h4>
                        <small class="text-muted">Hari Tersisa</small>
                      </div>
                    </div>
                    <div class="col-6">
                      <h4 class="text-info mb-1">{{ Math.floor(Math.random() * 200) + 50 }}+</h4>
                      <small class="text-muted">Donatur</small>
                    </div>
                  </div>
                </div>
                
                <!-- Donation Amounts -->
                <div class="mb-4">
                  <h6 class="mb-3">Nominal Donasi Populer:</h6>
                  <div class="d-grid gap-2">
                    <button 
                      v-for="amount in popularAmounts" 
                      :key="amount"
                      class="btn btn-outline-primary btn-sm text-start"
                      @click="donateWithAmount(amount)"
                    >
                      {{ formatCurrency(amount) }}
                    </button>
                  </div>
                </div>
                
                <!-- CTA Button -->
                <div class="d-grid gap-2">
                  <router-link 
                    :to="'/donasi/' + program.id" 
                    class="btn btn-primary btn-lg"
                  >
                    💝 Donasi Sekarang
                  </router-link>
                  <button class="btn btn-outline-secondary" @click="shareProgram">
                    📤 Bagikan Program
                  </button>
                </div>
                
                <!-- Trust Indicators -->
                <div class="mt-4 pt-4 border-top">
                  <div class="row text-center">
                    <div class="col-4">
                      <div class="mb-2">🔒</div>
                      <small class="text-muted">Aman & Terpercaya</small>
                    </div>
                    <div class="col-4">
                      <div class="mb-2">📊</div>
                      <small class="text-muted">Transparan</small>
                    </div>
                    <div class="col-4">
                      <div class="mb-2">⚡</div>
                      <small class="text-muted">Cepat Tersalur</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Related Programs -->
    <section class="py-5 bg-light">
      <div class="container">
        <h3 class="text-center mb-5">Program Serupa Lainnya</h3>
        <div class="row">
          <DonationCard 
            v-for="relatedProgram in relatedPrograms" 
            :key="relatedProgram.id" 
            :program="relatedProgram" 
          />
        </div>
      </div>
    </section>
  </div>
  
  <!-- Loading State -->
  <div v-else class="container py-5">
    <div class="text-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="mt-3 text-muted">Memuat detail program...</p>
    </div>
  </div>
</template>

<script>
import DonationCard from '../components/DonationCard.vue'
import programsData from '../data/programs.json'

export default {
  name: 'ProgramDetail',
  components: {
    DonationCard
  },
  props: ['id'],
  data() {
    return {
      program: null,
      allPrograms: programsData.programs,
      popularAmounts: [50000, 100000, 250000, 500000, 1000000]
    }
  },
  computed: {
    progressPercentage() {
      if (!this.program) return 0
      return Math.round((this.program.collected / this.program.target) * 100)
    },
    relatedPrograms() {
      if (!this.program) return []
      return this.allPrograms
        .filter(p => p.id !== this.program.id && p.category === this.program.category)
        .slice(0, 3)
    }
  },
  methods: {
    formatCurrency(amount) {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
      }).format(amount)
    },
    donateWithAmount(amount) {
      this.$router.push({
        path: `/donasi/${this.program.id}`,
        query: { amount: amount }
      })
    },
    shareProgram() {
      if (navigator.share) {
        navigator.share({
          title: this.program.title,
          text: this.program.description,
          url: window.location.href
        })
      } else {
        // Fallback - copy to clipboard
        navigator.clipboard.writeText(window.location.href)
        alert('Link program telah disalin ke clipboard!')
      }
    },
    loadProgram() {
      const programId = parseInt(this.id)
      this.program = this.allPrograms.find(p => p.id === programId)
      
      if (!this.program) {
        this.$router.push('/')
      }
    }
  },
  mounted() {
    this.loadProgram()
  },
  watch: {
    id() {
      this.loadProgram()
    }
  }
}
</script>

<style scoped>
.sticky-top {
  position: sticky;
  top: 2rem;
  z-index: 1020;
}

.progress {
  border-radius: 10px;
  overflow: hidden;
}

.progress-bar {
  background: linear-gradient(90deg, var(--success-color) 0%, var(--primary-color) 100%);
}

.card {
  border-radius: 15px;
}

.btn-outline-primary {
  transition: all 0.3s ease;
}

.btn-outline-primary:hover {
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .sticky-top {
    position: relative;
    top: 0;
  }
}
</style>