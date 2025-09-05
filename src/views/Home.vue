<template>
  <div>
    <!-- Hero Section -->
    <Hero />
    
    <!-- Featured Programs Section -->
    <section class="py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fw-bold mb-3">Program Donasi Terbaru</h2>
          <p class="text-muted lead">
            Pilih program yang ingin Anda dukung dan rasakan dampak nyata dari kebaikan Anda
          </p>
        </div>
        
        <!-- Filter Buttons -->
        <div class="row justify-content-center mb-4">
          <div class="col-md-8">
            <div class="d-flex flex-wrap justify-content-center gap-2">
              <button 
                @click="selectedCategory = 'Semua'"
                :class="['btn', selectedCategory === 'Semua' ? 'btn-primary' : 'btn-outline-primary']"
              >
                Semua Program
              </button>
              <button 
                v-for="category in categories"
                :key="category"
                @click="selectedCategory = category"
                :class="['btn', selectedCategory === category ? 'btn-primary' : 'btn-outline-primary']"
              >
                {{ category }}
              </button>
            </div>
          </div>
        </div>
        
        <!-- Programs Grid -->
        <div class="row" v-if="filteredPrograms.length > 0">
          <DonationCard 
            v-for="program in filteredPrograms" 
            :key="program.id" 
            :program="program" 
          />
        </div>
        
        <!-- No Programs Message -->
        <div v-else class="text-center py-5">
          <h4 class="text-muted">Tidak ada program dalam kategori ini</h4>
        </div>
      </div>
    </section>
    
    <!-- Stats Section -->
    <section class="stats-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mb-4">
            <div class="stat-card">
              <div class="stat-number">{{ formatCurrency(totalDonation) }}</div>
              <div class="stat-label">Total Donasi Terkumpul</div>
            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="stat-card">
              <div class="stat-number">{{ totalTransactions.toLocaleString('id-ID') }}+</div>
              <div class="stat-label">Total Transaksi Donasi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Kisah Kasih Section -->
    <section class="py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fw-bold mb-3">Kisah Kasih</h2>
          <p class="text-muted lead">
            Cerita inspiratif dari dampak donasi Anda
          </p>
        </div>
        
        <div class="row">
          <div 
            v-for="story in stories" 
            :key="story.id"
            class="col-lg-4 col-md-6 mb-4"
          >
            <div class="card h-100 shadow-sm">
              <img :src="story.image" :alt="story.title" class="card-img-top" style="height: 200px; object-fit: cover;">
              <div class="card-body d-flex flex-direction-column">
                <h5 class="card-title">{{ story.title }}</h5>
                <p class="card-text text-muted">{{ story.excerpt }}</p>
                <div class="mt-auto">
                  <small class="text-muted">{{ formatDate(story.date) }}</small>
                  <div class="mt-2">
                    <router-link to="/kisah-kasih" class="btn btn-outline-primary btn-sm">
                      Baca Selengkapnya
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-4">
          <router-link to="/kisah-kasih" class="btn btn-primary btn-lg">
            Lihat Semua Kisah Kasih
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import DonationCard from '../components/DonationCard.vue'
import programsData from '../data/programs.json'

export default {
  name: 'Home',
  components: {
    Hero,
    DonationCard
  },
  data() {
    return {
      programs: programsData.programs,
      totalDonation: programsData.totalDonation,
      totalTransactions: programsData.totalTransactions,
      stories: programsData.stories,
      selectedCategory: 'Semua'
    }
  },
  computed: {
    categories() {
      const categorySet = new Set(this.programs.map(p => p.category))
      return Array.from(categorySet)
    },
    filteredPrograms() {
      if (this.selectedCategory === 'Semua') {
        return this.programs
      }
      return this.programs.filter(p => p.category === this.selectedCategory)
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
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  },
  mounted() {
    // Check for category filter from query params
    if (this.$route.query.category) {
      this.selectedCategory = this.$route.query.category
    }
  }
}
</script>

<style scoped>
.stats-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.stat-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.1rem;
  color: var(--dark-color);
  opacity: 0.8;
}

.btn-outline-primary {
  transition: all 0.3s ease;
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
  border-radius: 15px;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .stat-number {
    font-size: 2rem;
  }
}
</style>