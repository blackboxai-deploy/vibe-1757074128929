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
            <li class="breadcrumb-item">
              <router-link :to="'/program/' + program.id" class="text-decoration-none">
                {{ program.title }}
              </router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Donasi</li>
          </ol>
        </nav>
      </div>
    </div>
    
    <!-- Transaction Form -->
    <section class="py-5" v-if="!showSuccess">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card border-0 shadow-lg">
              <div class="card-header bg-primary text-white text-center py-4">
                <h2 class="mb-0">💝 Form Donasi</h2>
                <p class="mb-0 opacity-75">Bergabunglah dalam kebaikan untuk: {{ program.title }}</p>
              </div>
              
              <div class="card-body p-5">
                <!-- Program Summary -->
                <div class="row mb-4">
                  <div class="col-md-4">
                    <img :src="program.image" :alt="program.title" class="img-fluid rounded">
                  </div>
                  <div class="col-md-8">
                    <h5 class="fw-bold">{{ program.title }}</h5>
                    <p class="text-muted mb-2">{{ program.description.substring(0, 150) }}...</p>
                    <div class="small">
                      <span class="badge bg-secondary me-2">{{ program.category }}</span>
                      <span class="text-muted">📍 {{ program.location }}</span>
                    </div>
                    <div class="progress mt-3" style="height: 8px;">
                      <div 
                        class="progress-bar" 
                        :style="{ width: progressPercentage + '%' }"
                      ></div>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                      <small class="text-muted">{{ formatCurrency(program.collected) }} terkumpul</small>
                      <small class="text-primary fw-bold">{{ progressPercentage }}%</small>
                    </div>
                  </div>
                </div>
                
                <hr class="my-4">
                
                <!-- Donation Form -->
                <form @submit.prevent="submitDonation">
                  <!-- Personal Information -->
                  <div class="mb-4">
                    <h5 class="mb-3">Informasi Donatur</h5>
                    
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label for="fullName" class="form-label">Nama Lengkap *</label>
                        <input 
                          type="text" 
                          class="form-control" 
                          id="fullName"
                          v-model="form.fullName"
                          required
                          placeholder="Masukkan nama lengkap"
                        >
                      </div>
                      <div class="col-md-6 mb-3">
                        <label for="email" class="form-label">Email *</label>
                        <input 
                          type="email" 
                          class="form-control" 
                          id="email"
                          v-model="form.email"
                          required
                          placeholder="contoh@email.com"
                        >
                      </div>
                    </div>
                    
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label for="phone" class="form-label">Nomor Telepon</label>
                        <input 
                          type="tel" 
                          class="form-control" 
                          id="phone"
                          v-model="form.phone"
                          placeholder="08xxxxxxxxxx"
                        >
                      </div>
                      <div class="col-md-6 mb-3">
                        <div class="form-check mt-4">
                          <input 
                            class="form-check-input" 
                            type="checkbox" 
                            id="anonymous"
                            v-model="form.anonymous"
                          >
                          <label class="form-check-label" for="anonymous">
                            Donasi sebagai anonim
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Donation Amount -->
                  <div class="mb-4">
                    <h5 class="mb-3">Nominal Donasi</h5>
                    
                    <!-- Quick Amount Buttons -->
                    <div class="mb-3">
                      <div class="row">
                        <div 
                          v-for="amount in quickAmounts" 
                          :key="amount"
                          class="col-6 col-md-3 mb-2"
                        >
                          <button 
                            type="button"
                            class="btn w-100"
                            :class="form.amount === amount ? 'btn-primary' : 'btn-outline-primary'"
                            @click="selectAmount(amount)"
                          >
                            {{ formatCurrency(amount) }}
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Custom Amount Input -->
                    <div class="mb-3">
                      <label for="customAmount" class="form-label">Atau masukkan nominal lain:</label>
                      <div class="input-group">
                        <span class="input-group-text">Rp</span>
                        <input 
                          type="number" 
                          class="form-control" 
                          id="customAmount"
                          v-model.number="form.amount"
                          min="10000"
                          required
                          placeholder="Minimal Rp 10,000"
                        >
                      </div>
                      <div class="form-text">
                        Minimal donasi Rp 10,000
                      </div>
                    </div>
                  </div>
                  
                  <!-- Payment Method -->
                  <div class="mb-4">
                    <h5 class="mb-3">Metode Pembayaran</h5>
                    
                    <div class="row">
                      <div class="col-md-4 mb-3">
                        <div class="form-check">
                          <input 
                            class="form-check-input" 
                            type="radio" 
                            name="paymentMethod" 
                            id="bankTransfer"
                            value="bank_transfer"
                            v-model="form.paymentMethod"
                          >
                          <label class="form-check-label" for="bankTransfer">
                            🏦 Transfer Bank
                          </label>
                        </div>
                      </div>
                      <div class="col-md-4 mb-3">
                        <div class="form-check">
                          <input 
                            class="form-check-input" 
                            type="radio" 
                            name="paymentMethod" 
                            id="ewallet"
                            value="ewallet"
                            v-model="form.paymentMethod"
                          >
                          <label class="form-check-label" for="ewallet">
                            📱 E-Wallet
                          </label>
                        </div>
                      </div>
                      <div class="col-md-4 mb-3">
                        <div class="form-check">
                          <input 
                            class="form-check-input" 
                            type="radio" 
                            name="paymentMethod" 
                            id="creditCard"
                            value="credit_card"
                            v-model="form.paymentMethod"
                          >
                          <label class="form-check-label" for="creditCard">
                            💳 Kartu Kredit
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Message -->
                  <div class="mb-4">
                    <label for="message" class="form-label">Pesan Dukungan (Opsional)</label>
                    <textarea 
                      class="form-control" 
                      id="message" 
                      rows="3"
                      v-model="form.message"
                      placeholder="Tulis pesan dukungan untuk program ini..."
                      maxlength="200"
                    ></textarea>
                    <div class="form-text">
                      {{ form.message ? form.message.length : 0 }}/200 karakter
                    </div>
                  </div>
                  
                  <!-- Terms -->
                  <div class="mb-4">
                    <div class="form-check">
                      <input 
                        class="form-check-input" 
                        type="checkbox" 
                        id="agreeTerms"
                        v-model="form.agreeTerms"
                        required
                      >
                      <label class="form-check-label" for="agreeTerms">
                        Saya setuju dengan 
                        <router-link to="/terms" class="text-decoration-none" target="_blank">
                          syarat dan ketentuan
                        </router-link> 
                        serta 
                        <router-link to="/privacy" class="text-decoration-none" target="_blank">
                          kebijakan privasi
                        </router-link>
                      </label>
                    </div>
                  </div>
                  
                  <!-- Submit Button -->
                  <div class="d-grid">
                    <button 
                      type="submit" 
                      class="btn btn-primary btn-lg"
                      :disabled="isSubmitting"
                    >
                      <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2"></span>
                      {{ isSubmitting ? 'Memproses...' : `Donasi ${formatCurrency(form.amount || 0)}` }}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Success Message -->
    <section v-if="showSuccess" class="py-5 bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="card border-0 shadow-lg text-center">
              <div class="card-body p-5">
                <div class="mb-4">
                  <div class="text-success mb-3" style="font-size: 4rem;">✅</div>
                  <h2 class="text-success mb-3">Terima Kasih!</h2>
                  <p class="lead">Donasi Anda berhasil diproses</p>
                </div>
                
                <div class="bg-light rounded p-4 mb-4">
                  <h5 class="mb-3">Ringkasan Donasi</h5>
                  <div class="row">
                    <div class="col-6 text-start">
                      <strong>Nama:</strong><br>
                      <strong>Email:</strong><br>
                      <strong>Program:</strong><br>
                      <strong>Nominal:</strong><br>
                      <strong>Metode:</strong>
                    </div>
                    <div class="col-6 text-end">
                      {{ donationData.fullName }}<br>
                      {{ donationData.email }}<br>
                      {{ program.title.substring(0, 30) }}...<br>
                      {{ formatCurrency(donationData.amount) }}<br>
                      {{ getPaymentMethodText(donationData.paymentMethod) }}
                    </div>
                  </div>
                </div>
                
                <p class="text-muted mb-4">
                  Donasi Anda akan segera diproses dan disalurkan kepada penerima manfaat. 
                  Kami akan mengirimkan email konfirmasi dan laporan penyaluran dana.
                </p>
                
                <div class="d-grid gap-2 d-md-block">
                  <router-link to="/" class="btn btn-primary">
                    Lihat Program Lain
                  </router-link>
                  <button class="btn btn-outline-primary" @click="shareSuccess">
                    Bagikan Kebaikan
                  </button>
                </div>
              </div>
            </div>
          </div>
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
      <p class="mt-3 text-muted">Memuat form donasi...</p>
    </div>
  </div>
</template>

<script>
import programsData from '../data/programs.json'

export default {
  name: 'Transaction',
  props: ['id'],
  data() {
    return {
      program: null,
      allPrograms: programsData.programs,
      showSuccess: false,
      isSubmitting: false,
      quickAmounts: [50000, 100000, 250000, 500000],
      form: {
        fullName: '',
        email: '',
        phone: '',
        anonymous: false,
        amount: null,
        paymentMethod: 'bank_transfer',
        message: '',
        agreeTerms: false
      },
      donationData: {}
    }
  },
  computed: {
    progressPercentage() {
      if (!this.program) return 0
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
    },
    selectAmount(amount) {
      this.form.amount = amount
    },
    getPaymentMethodText(method) {
      const methods = {
        'bank_transfer': 'Transfer Bank',
        'ewallet': 'E-Wallet',
        'credit_card': 'Kartu Kredit'
      }
      return methods[method] || method
    },
    async submitDonation() {
      this.isSubmitting = true
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Store donation data
      this.donationData = { ...this.form }
      
      // Show success message
      this.showSuccess = true
      this.isSubmitting = false
      
      // Scroll to top
      window.scrollTo(0, 0)
    },
    shareSuccess() {
      const message = `Saya baru saja berdonasi untuk "${this.program.title}". Mari bergabung berbagi kebaikan! ${window.location.origin}/program/${this.program.id}`
      
      if (navigator.share) {
        navigator.share({
          title: 'Berbagi Kebaikan',
          text: message,
          url: window.location.origin
        })
      } else {
        navigator.clipboard.writeText(message)
        alert('Pesan telah disalin ke clipboard!')
      }
    },
    loadProgram() {
      const programId = parseInt(this.id)
      this.program = this.allPrograms.find(p => p.id === programId)
      
      if (!this.program) {
        this.$router.push('/')
        return
      }
      
      // Set amount from query params if provided
      if (this.$route.query.amount) {
        this.form.amount = parseInt(this.$route.query.amount)
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
.card {
  border-radius: 15px;
}

.form-control {
  border-radius: 8px;
  border: 2px solid #e9ecef;
  transition: border-color 0.3s ease;
}

.form-control:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 0.2rem rgba(46, 125, 50, 0.25);
}

.btn {
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.progress {
  border-radius: 10px;
}

.form-check-input:checked {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

@media (max-width: 768px) {
  .card-body {
    padding: 2rem 1.5rem !important;
  }
}
</style>