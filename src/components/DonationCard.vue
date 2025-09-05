<template>
  <div class="col-lg-4 col-md-6 mb-4">
    <div class="card donation-card h-100">
      <img :src="program.image" :alt="program.title" class="card-img-top">
      <div class="card-body d-flex flex-column">
        <span class="badge bg-secondary mb-2 align-self-start">{{ program.category }}</span>
        <h5 class="card-title">{{ program.title }}</h5>
        <p class="card-text text-muted small mb-3">📍 {{ program.location }}</p>
        
        <!-- Progress Information -->
        <div class="mb-3">
          <div class="d-flex justify-content-between mb-2">
            <span class="text-muted small">Terkumpul</span>
            <span class="fw-bold">{{ formatCurrency(program.collected) }}</span>
          </div>
          <div class="progress mb-2">
            <div 
              class="progress-bar" 
              role="progressbar" 
              :style="{ width: progressPercentage + '%' }"
              :aria-valuenow="progressPercentage" 
              aria-valuemin="0" 
              aria-valuemax="100"
            ></div>
          </div>
          <div class="d-flex justify-content-between">
            <span class="text-muted small">Target: {{ formatCurrency(program.target) }}</span>
            <span class="text-primary small fw-bold">{{ progressPercentage }}%</span>
          </div>
        </div>
        
        <!-- Days Left -->
        <div class="mb-3">
          <span class="badge bg-warning text-dark">
            ⏰ {{ program.daysLeft }} hari lagi
          </span>
        </div>
        
        <!-- Action Buttons -->
        <div class="mt-auto d-flex gap-2">
          <router-link 
            :to="'/program/' + program.id" 
            class="btn btn-outline-primary btn-sm flex-fill"
          >
            Detail
          </router-link>
          <router-link 
            :to="'/donasi/' + program.id" 
            class="btn btn-primary btn-sm flex-fill"
          >
            Donasi Sekarang
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DonationCard',
  props: {
    program: {
      type: Object,
      required: true
    }
  },
  computed: {
    progressPercentage() {
      return Math.round((this.program.collected / this.program.target) * 100)
    }
  },
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
.donation-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.donation-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.donation-card:hover .card-img-top {
  transform: scale(1.05);
}

.progress {
  height: 8px;
}

.btn-sm {
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
}
</style>