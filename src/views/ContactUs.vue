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
            <li class="breadcrumb-item active" aria-current="page">Hubungi Kami</li>
          </ol>
        </nav>
      </div>
    </div>
    
    <!-- Contact Section -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <!-- Contact Form -->
          <div class="col-lg-8 mb-4">
            <div class="card border-0 shadow-lg">
              <div class="card-header bg-primary text-white">
                <h2 class="mb-0">📧 Hubungi Kami</h2>
              </div>
              <div class="card-body p-4">
                <form @submit.prevent="submitForm">
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label for="name" class="form-label">Nama Lengkap *</label>
                      <input 
                        type="text" 
                        class="form-control" 
                        id="name"
                        v-model="form.name"
                        required
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
                      >
                    </div>
                    <div class="col-md-6 mb-3">
                      <label for="subject" class="form-label">Subjek *</label>
                      <select 
                        class="form-select" 
                        id="subject"
                        v-model="form.subject"
                        required
                      >
                        <option value="">Pilih Subjek</option>
                        <option value="donation">Pertanyaan Donasi</option>
                        <option value="program">Program Bantuan</option>
                        <option value="technical">Kendala Teknis</option>
                        <option value="partnership">Kemitraan</option>
                        <option value="other">Lainnya</option>
                      </select>
                    </div>
                  </div>
                  
                  <div class="mb-3">
                    <label for="message" class="form-label">Pesan *</label>
                    <textarea 
                      class="form-control" 
                      id="message" 
                      rows="5"
                      v-model="form.message"
                      required
                      placeholder="Tuliskan pesan Anda..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    class="btn btn-primary"
                    :disabled="isSubmitting"
                  >
                    <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2"></span>
                    {{ isSubmitting ? 'Mengirim...' : 'Kirim Pesan' }}
                  </button>
                </form>
                
                <!-- Success Message -->
                <div v-if="showSuccess" class="alert alert-success mt-3">
                  <strong>Terima kasih!</strong> Pesan Anda telah dikirim. 
                  Tim kami akan segera merespons dalam 1-2 hari kerja.
                </div>
              </div>
            </div>
          </div>
          
          <!-- Contact Info -->
          <div class="col-lg-4">
            <div class="card border-0 shadow-lg h-100">
              <div class="card-body p-4">
                <h3 class="mb-4">Informasi Kontak</h3>
                
                <div class="mb-4">
                  <h6 class="fw-bold mb-2">📍 Alamat Kantor</h6>
                  <p class="text-muted">
                    Jl. Kebaikan No. 123<br>
                    Jakarta Pusat 10430<br>
                    Indonesia
                  </p>
                </div>
                
                <div class="mb-4">
                  <h6 class="fw-bold mb-2">📞 Telepon</h6>
                  <p class="text-muted">
                    <a href="tel:+62800-1234-5678" class="text-decoration-none">
                      0800-1234-5678
                    </a><br>
                    <small>(Gratis, Senin-Jumat 08:00-17:00)</small>
                  </p>
                </div>
                
                <div class="mb-4">
                  <h6 class="fw-bold mb-2">📧 Email</h6>
                  <p class="text-muted">
                    <a href="mailto:info@donasibaik.id" class="text-decoration-none">
                      info@donasibaik.id
                    </a><br>
                    <a href="mailto:support@donasibaik.id" class="text-decoration-none">
                      support@donasibaik.id
                    </a>
                  </p>
                </div>
                
                <div class="mb-4">
                  <h6 class="fw-bold mb-2">🕐 Jam Operasional</h6>
                  <p class="text-muted">
                    Senin - Jumat: 08:00 - 17:00 WIB<br>
                    Sabtu: 09:00 - 15:00 WIB<br>
                    Minggu: Libur
                  </p>
                </div>
                
                <div>
                  <h6 class="fw-bold mb-2">🌐 Media Sosial</h6>
                  <div class="d-flex gap-3">
                    <a href="#" class="text-decoration-none">Facebook</a>
                    <a href="#" class="text-decoration-none">Twitter</a>
                    <a href="#" class="text-decoration-none">Instagram</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- FAQ Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center fw-bold mb-5">Pertanyaan Umum</h2>
        
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="accordion" id="faqAccordion">
              <div class="accordion-item mb-3">
                <h2 class="accordion-header">
                  <button 
                    class="accordion-button" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#faq1"
                  >
                    Bagaimana cara berdonasi?
                  </button>
                </h2>
                <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Anda dapat berdonasi dengan memilih program yang ingin didukung, 
                    mengisi formulir donasi, dan memilih metode pembayaran yang tersedia. 
                    Proses donasi sangat mudah dan aman.
                  </div>
                </div>
              </div>
              
              <div class="accordion-item mb-3">
                <h2 class="accordion-header">
                  <button 
                    class="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#faq2"
                  >
                    Apakah donasi saya aman?
                  </button>
                </h2>
                <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Ya, sangat aman. Kami menggunakan sistem keamanan berlapis dan 
                    bekerja sama dengan payment gateway terpercaya untuk melindungi 
                    setiap transaksi donasi Anda.
                  </div>
                </div>
              </div>
              
              <div class="accordion-item mb-3">
                <h2 class="accordion-header">
                  <button 
                    class="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#faq3"
                  >
                    Bagaimana saya mendapat laporan penggunaan dana?
                  </button>
                </h2>
                <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Kami akan mengirimkan laporan penyaluran dana melalui email dan 
                    juga dapat diakses melalui akun Anda di website. Laporan ini 
                    berisi detail penggunaan dana dan dokumentasi penyaluran.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      },
      isSubmitting: false,
      showSuccess: false
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      this.showSuccess = true
      this.isSubmitting = false
      
      // Reset form
      this.form = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        this.showSuccess = false
      }, 5000)
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 15px;
}

.form-control, .form-select {
  border-radius: 8px;
  border: 2px solid #e9ecef;
  transition: border-color 0.3s ease;
}

.form-control:focus, .form-select:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 0.2rem rgba(46, 125, 50, 0.25);
}

.accordion-button {
  background-color: #f8f9fa;
  border-color: #dee2e6;
}

.accordion-button:not(.collapsed) {
  background-color: var(--primary-color);
  color: white;
}

.accordion-item {
  border-radius: 10px;
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

a {
  color: var(--primary-color);
}

a:hover {
  color: var(--primary-dark);
}
</style>