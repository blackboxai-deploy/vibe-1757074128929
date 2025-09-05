<template>
  <footer class="footer bg-dark text-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4">
          <h5 class="text-white mb-3">🤝 DonasiBaik</h5>
          <p class="text-muted">
            Platform donasi online terpercaya untuk berbagai program kemanusiaan. 
            Bersama kita berbagi kebaikan untuk sesama.
          </p>
          <div class="social-links">
            <a href="#" class="text-muted me-3">Facebook</a>
            <a href="#" class="text-muted me-3">Twitter</a>
            <a href="#" class="text-muted me-3">Instagram</a>
            <a href="#" class="text-muted">YouTube</a>
          </div>
        </div>
        
        <div class="col-lg-2 col-md-6 mb-4">
          <h6 class="text-white mb-3">Kategori</h6>
          <ul class="list-unstyled">
            <li><a href="#" class="text-muted">Zakat</a></li>
            <li><a href="#" class="text-muted">Sedekah</a></li>
            <li><a href="#" class="text-muted">Wakaf</a></li>
            <li><a href="#" class="text-muted">Kurban</a></li>
          </ul>
        </div>
        
        <div class="col-lg-2 col-md-6 mb-4">
          <h6 class="text-white mb-3">Tentang</h6>
          <ul class="list-unstyled">
            <li><router-link to="/tentang-kami" class="text-muted">Tentang Kami</router-link></li>
            <li><router-link to="/hubungi-kami" class="text-muted">Hubungi Kami</router-link></li>
            <li><router-link to="/kisah-kasih" class="text-muted">Kisah Kasih</router-link></li>
          </ul>
        </div>
        
        <div class="col-lg-2 col-md-6 mb-4">
          <h6 class="text-white mb-3">Legal</h6>
          <ul class="list-unstyled">
            <li><router-link to="/privacy" class="text-muted">Privacy Policy</router-link></li>
            <li><router-link to="/terms" class="text-muted">Syarat & Ketentuan</router-link></li>
          </ul>
        </div>
        
        <div class="col-lg-2 col-md-6 mb-4">
          <h6 class="text-white mb-3">Kontak</h6>
          <ul class="list-unstyled text-muted">
            <li class="mb-2">📧 info@donasibaik.id</li>
            <li class="mb-2">📞 0800-1234-5678</li>
            <li>📍 Jakarta, Indonesia</li>
          </ul>
        </div>
      </div>
      
      <hr class="my-4 border-secondary">
      
      <div class="row align-items-center">
        <div class="col-md-6">
          <p class="text-muted mb-0">
            © 2024 DonasiBaik. Semua hak dilindungi.
          </p>
        </div>
        <div class="col-md-6 text-md-end">
          <p class="text-muted mb-0">
            Dibangun dengan ❤️ untuk kebaikan bersama
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  margin-top: auto;
}

.social-links a {
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: var(--primary-color) !important;
}

.footer ul li {
  margin-bottom: 0.5rem;
}

.footer a {
  transition: color 0.3s ease;
}

.footer a:hover {
  color: var(--primary-color) !important;
}
</style>