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
            <li class="breadcrumb-item active" aria-current="page">Syarat & Ketentuan</li>
          </ol>
        </nav>
      </div>
    </div>
    
    <!-- Terms Content -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="card border-0 shadow-sm">
              <div class="card-body p-5">
                <h1 class="mb-4">Syarat & Ketentuan</h1>
                <p class="text-muted mb-4">
                  <strong>Terakhir diperbarui:</strong> {{ lastUpdated }}
                </p>
                
                <div class="mb-5">
                  <p class="lead">
                    Selamat datang di DonasiBaik. Syarat dan ketentuan ini mengatur 
                    penggunaan layanan platform donasi online kami. Dengan menggunakan 
                    layanan ini, Anda menyetujui semua ketentuan yang berlaku.
                  </p>
                </div>
                
                <div class="mb-4">
                  <h3 class="text-primary">1. Definisi</h3>
                  <ul>
                    <li><strong>Platform:</strong> Website dan aplikasi DonasiBaik</li>
                    <li><strong>Pengguna:</strong> Individu atau entitas yang menggunakan layanan kami</li>
                    <li><strong>Donatur:</strong> Pengguna yang memberikan donasi</li>
                    <li><strong>Penerima Manfaat:</strong> Individu atau kelompok yang menerima bantuan</li>
                    <li><strong>Program:</strong> Kegiatan pengumpulan dana yang tersedia di platform</li>
                  </ul>
                </div>
                
                <div class="mb-4">
                  <h3 class="text-primary">2. Ketentuan Umum</h3>
                  <ul>
                    <li>Pengguna harus berusia minimal 17 tahun atau memiliki persetujuan wali</li>
                    <li>Informasi yang diberikan harus akurat dan benar</li>
                    <li>Setiap akun hanya boleh digunakan oleh satu orang</li>
                    <li>Pengguna bertanggung jawab menjaga kerahasiaan akun</li>
                    <li>Dilarang menggunakan platform untuk kegiatan ilegal</li>
                  </ul>
                </div>
                
                <div class="mb-4">
                  <h3 class="text-primary">3. Ketentuan Donasi</h3>
                  
                  <h5>a. Proses Donasi</h5>
                  <ul>
                    <li>Donasi minimal Rp 10,000 per transaksi</li>
                    <li>Donasi bersifat sukarela dan tidak dapat dikembalikan</li>
                    <li>Konfirmasi donasi akan dikirim melalui email</li>
                    <li>Bukti donasi dapat digunakan untuk keperluan pajak</li>
                  </ul>
                  
                  <h5>b. Metode Pembayaran</h5>
                  <ul>
                    <li>Transfer bank, e-wallet, dan kartu kredit</li>
                    <li>Pemrosesan pembayaran melalui pihak ketiga terpercaya</li>
                    <li>Biaya transaksi dapat dikenakan sesuai kebijakan payment gateway</li>
                    <li>Donasi dianggap final setelah pembayaran berhasil diproses</li>
                  </ul>
                  
                  <h5>c. Penggunaan Dana</h5>
                  <ul>
                    <li>Dana akan disalurkan sesuai program yang dipilih</li>
                    <li>Maksimal 10% dapat digunakan untuk biaya operasional</li>
                    <li>Laporan penggunaan dana akan dipublikasikan secara berkala</li>
                    <li>Transparansi keuangan dapat diakses oleh donatur</li>
                  </ul>
                </div>
                
                <div class="mb-4">
                  <h3 class="text-primary">4. Hak dan Kewajiban Pengguna</h3>
                  
                  <h5>a. Hak Pengguna</h5>
                  <ul>
                    <li>Mendapat informasi yang akurat tentang program donasi</li>
                    <li>Menerima konfirmasi dan laporan penggunaan dana</li>
                    <li>Mengakses riwayat transaksi donasi</li>
                    <li>Mendapat layanan customer support</li>
                    <li>Privasi dan keamanan data terjamin</li>
                  </ul>
                  
                  <h5>b. Kewajiban Pengguna</h5>
                  <ul>
                    <li>Memberikan informasi yang benar dan akurat</li>
                    <li>Mematuhi semua ketentuan yang berlaku</li>
                    <li>Tidak menyalahgunakan platform untuk hal negatif</li>
                    <li>Melaporkan aktivitas mencurigakan</li>
                    <li>Menghormati hak pengguna lain</li>
                  </ul>
                </div>
                
                <div class="mb-4">
                  <h3 class="text-primary">5. Ketentuan Platform</h3>
                  
                  <h5>a. Ketersediaan Layanan</h5>
                  <ul>
                    <li>Layanan tersedia 24/7 dengan kemungkinan maintenance berkala</li>
                    <li>Kami tidak bertanggung jawab atas gangguan teknis di luar kendali</li>
                    <li>Notifikasi maintenance akan diberikan sebelumnya</li>
                  </ul>
                  
                  <h5>b. Konten Platform</h5>
                  <ul>
                    <li>Semua konten dilindungi hak cipta</li>
                    <li>Pengguna dilarang menyalin atau memperbanyak konten tanpa izin</li>
                    <li>Kami berhak mengubah atau menghapus konten sewaktu-waktu</li>
                  </ul>
                </div>
                
                <div class="mb-4">
                  <h3 class="text-primary">6. Program Donasi</h3>
                  
                  <h5>a. Verifikasi Program</h5>
                  <ul>
                    <li>Semua program telah melalui proses verifikasi ketat</li>
                    <li>Kami bekerja sama dengan mitra terpercaya</li>
                    <li>Dokumentasi program tersedia untuk transparansi</li>
                  </ul>
                  
                  <h5>b. Monitoring dan Evaluasi</h5>
                  <ul>
                    <li>Program dipantau secara berkala</li>
                    <li>Laporan progress dikirim kepada donatur</li>
                    <li>Evaluasi dampak dilakukan setelah program selesai</li>
                  </ul>
                </div>
                
                <div class="mb-4">
                  <h3 class="text-primary">7. Kebijakan Pengembalian</h3>
                  <p>
                    Donasi yang telah diberikan bersifat final dan tidak dapat dikembalikan, 
                    kecuali dalam kondisi berikut:
                  </p>
                  <ul>
                    <li>Kesalahan teknis dalam pemrosesan pembayaran</li>
                    <li>Program donasi tidak dapat dilaksanakan karena force majeure</li>
                    <li>Penipuan atau penyalahgunaan yang terbukti</li>
                  </ul>
                  <p>
                    Permohonan pengembalian harus diajukan dalam waktu maksimal 30 hari 
                    dengan menyertakan bukti dan alasan yang jelas.
                  </p>
                </div>
                
                <div class="mb-4">
                  <h3 class="text-primary">8. Batasan Tanggung Jawab</h3>
                  <ul>
                    <li>DonasiBaik bertindak sebagai perantara antara donatur dan penerima manfaat</li>
                    <li>Kami tidak bertanggung jawab atas kerugian yang timbul dari force majeure</li>
                    <li>Tanggung jawab terbatas pada nilai donasi yang diberikan</li>
                    <li>Kami tidak menjamin hasil spesifik dari program donasi</li>
                  </ul>
                </div>
                
                <div class="mb-4">
                  <h3 class="text-primary">9. Pelanggaran dan Sanksi</h3>
                  
                  <p>Pelanggaran terhadap syarat dan ketentuan dapat mengakibatkan:</p>
                  <ul>
                    <li>Peringatan tertulis</li>
                    <li>Pembekuan akun sementara</li>
                    <li>Penghapusan akun secara permanen</li>
                    <li>Tindakan hukum jika diperlukan</li>
                  </ul>
                  
                  <p>Contoh pelanggaran meliputi:</p>
                  <ul>
                    <li>Memberikan informasi palsu</li>
                    <li>Menggunakan platform untuk penipuan</li>
                    <li>Melanggar hak cipta atau privasi</li>
                    <li>Melakukan aktivitas ilegal</li>
                  </ul>
                </div>
                
                <div class="mb-4">
                  <h3 class="text-primary">10. Perubahan Ketentuan</h3>
                  <ul>
                    <li>Kami berhak mengubah syarat dan ketentuan sewaktu-waktu</li>
                    <li>Perubahan akan diberitahukan melalui website dan email</li>
                    <li>Pengguna akan diminta persetujuan untuk perubahan material</li>
                    <li>Penggunaan berkelanjutan dianggap sebagai persetujuan</li>
                  </ul>
                </div>
                
                <div class="mb-4">
                  <h3 class="text-primary">11. Hukum yang Berlaku</h3>
                  <ul>
                    <li>Syarat dan ketentuan ini tunduk pada hukum Indonesia</li>
                    <li>Sengketa akan diselesaikan melalui pengadilan Jakarta Pusat</li>
                    <li>Upaya mediasi akan diutamakan sebelum langkah hukum</li>
                  </ul>
                </div>
                
                <div class="mb-4">
                  <h3 class="text-primary">12. Kontak dan Keluhan</h3>
                  <p>
                    Untuk pertanyaan, keluhan, atau bantuan terkait syarat dan ketentuan ini:
                  </p>
                  
                  <div class="bg-light p-4 rounded">
                    <p class="mb-2"><strong>Customer Service</strong></p>
                    <p class="mb-2">📧 support@donasibaik.id</p>
                    <p class="mb-2">📞 0800-1234-5678</p>
                    <p class="mb-2">💬 Live Chat (tersedia 24/7)</p>
                    <p class="mb-0">📍 Jl. Kebaikan No. 123, Jakarta Pusat 10430</p>
                  </div>
                </div>
                
                <div class="alert alert-warning">
                  <h6 class="alert-heading">Persetujuan</h6>
                  <p class="mb-0">
                    Dengan menggunakan platform DonasiBaik, Anda menyatakan telah 
                    membaca, memahami, dan menyetujui seluruh syarat dan ketentuan 
                    yang berlaku. Jika Anda tidak setuju dengan ketentuan ini, 
                    mohon tidak menggunakan layanan kami.
                  </p>
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
  name: 'Terms',
  data() {
    return {
      lastUpdated: '1 Januari 2024'
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 15px;
}

h3 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

h5 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

ul {
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
}

.alert {
  border-radius: 10px;
}

strong {
  font-weight: 600;
}

@media (max-width: 768px) {
  .card-body {
    padding: 2rem 1.5rem !important;
  }
}
</style>