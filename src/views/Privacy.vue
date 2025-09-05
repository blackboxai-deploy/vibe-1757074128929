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
            <li class="breadcrumb-item active" aria-current="page">Privacy Policy</li>
          </ol>
        </nav>
      </div>
    </div>
    
    <!-- Privacy Policy Content -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="card border-0 shadow-sm">
              <div class="card-body p-5">
                <h1 class="mb-4">Kebijakan Privasi</h1>
                <p class="text-muted mb-4">
                  <strong>Terakhir diperbarui:</strong> {{ lastUpdated }}
                </p>
                
                <div class="mb-5">
                  <p class="lead">
                    DonasiBaik berkomitmen untuk melindungi privasi dan keamanan informasi 
                    pribadi pengguna. Kebijakan privasi ini menjelaskan bagaimana kami 
                    mengumpulkan, menggunakan, dan melindungi informasi Anda.
                  </p>
                </div>
                
                <div class="mb-4">
                  <h3 class="text-primary">1. Informasi yang Kami Kumpulkan</h3>
                  <p>Kami mengumpulkan informasi berikut:</p>
                  
                  <h5>a. Informasi Pribadi</h5>
                  <ul>
                    <li>Nama lengkap</li>
                    <li>Alamat email</li>
                    <li>Nomor telepon</li>
                    <li>Alamat tempat tinggal (jika diperlukan)</li>
                    <li>Informasi pembayaran (diproses melalui pihak ketiga yang aman)</li>
                  </ul>
                  
                  <h5>b. Informasi Transaksi</h5>
                  <ul>
                    <li>Riwayat donasi</li>
                    <li>Jumlah dan tanggal transaksi</li>
                    <li>Program donasi yang dipilih</li>
                    <li>Metode pembayaran yang digunakan</li>
                  </ul>
                  
                  <h5>c. Informasi Teknis</h5>
                  <ul>
                    <li>Alamat IP</li>
                    <li>Jenis browser dan perangkat</li>
                    <li>Halaman yang dikunjungi</li>
                    <li>Waktu akses</li>
                  </ul>
                </div>
                
                <div class="mb-4">
                  <h3 class="text-primary">2. Penggunaan Informasi</h3>
                  <p>Kami menggunakan informasi Anda untuk:</p>
                  <ul>
                    <li>Memproses dan memverifikasi transaksi donasi</li>
                    <li>Mengirim konfirmasi dan laporan donasi</li>
                    <li>Memberikan layanan customer support</li>
                    <li>Mengirim update program dan newsletter (dengan persetujuan)</li>
                    <li>Meningkatkan kualitas layanan platform</li>
                    <li>Mematuhi kewajiban hukum dan regulasi</li>
                    <li>Mencegah penipuan dan aktivitas ilegal</li>
                  </ul>
                </div>
                
                <div class="mb-4">
                  <h3 class="text-primary">3. Pembagian Informasi</h3>
                  <p>Kami tidak menjual, menyewakan, atau menukar informasi pribadi Anda. 
                  Namun, kami dapat membagikan informasi dalam kondisi berikut:</p>
                  
                  <h5>a. Dengan Mitra Terpercaya</h5>
                  <ul>
                    <li>Payment processor untuk memproses pembayaran</li>
                    <li>Penyedia layanan email untuk komunikasi</li>
                    <li>Lembaga audit untuk transparansi keuangan</li>
                  </ul>
                  
                  <h5>b. Kewajiban Hukum</h5>
                  <ul>
                    <li>Permintaan dari otoritas yang berwenang</li>
                    <li>Proses hukum yang sah</li>
                    <li>Perlindungan hak dan keamanan</li>
                  </ul>
                </div>
                
                <div class="mb-4">
                  <h3 class="text-primary">4. Keamanan Data</h3>
                  <p>Kami menerapkan langkah-langkah keamanan berlapis:</p>
                  <ul>
                    <li><strong>Enkripsi SSL/TLS</strong> untuk semua transmisi data</li>
                    <li><strong>Firewall</strong> dan sistem deteksi intrusi</li>
                    <li><strong>Akses terbatas</strong> hanya untuk karyawan yang berwenang</li>
                    <li><strong>Audit keamanan</strong> berkala oleh pihak ketiga</li>
                    <li><strong>Backup data</strong> reguler dengan enkripsi</li>
                    <li><strong>Two-factor authentication</strong> untuk akses admin</li>
                  </ul>
                </div>
                
                <div class="mb-4">
                  <h3 class="text-primary">5. Penyimpanan Data</h3>
                  <ul>
                    <li>Data disimpan di server yang berlokasi di Indonesia</li>
                    <li>Informasi transaksi disimpan selama 10 tahun sesuai regulasi</li>
                    <li>Data personal dapat dihapus atas permintaan pengguna</li>
                    <li>Backup data dilakukan secara otomatis dan terenkripsi</li>
                  </ul>
                </div>
                
                <div class="mb-4">
                  <h3 class="text-primary">6. Hak Pengguna</h3>
                  <p>Sebagai pengguna, Anda memiliki hak untuk:</p>
                  <ul>
                    <li><strong>Mengakses</strong> informasi pribadi yang kami miliki</li>
                    <li><strong>Memperbarui</strong> informasi yang tidak akurat</li>
                    <li><strong>Menghapus</strong> akun dan data pribadi</li>
                    <li><strong>Membatasi</strong> penggunaan data untuk pemasaran</li>
                    <li><strong>Portabilitas data</strong> dalam format yang dapat dibaca</li>
                    <li><strong>Mengajukan keluhan</strong> terkait penggunaan data</li>
                  </ul>
                </div>
                
                <div class="mb-4">
                  <h3 class="text-primary">7. Cookies dan Teknologi Serupa</h3>
                  <p>Kami menggunakan cookies untuk:</p>
                  <ul>
                    <li>Mengingat preferensi dan pengaturan</li>
                    <li>Menganalisis penggunaan website</li>
                    <li>Meningkatkan pengalaman pengguna</li>
                    <li>Keamanan dan pencegahan fraud</li>
                  </ul>
                  <p>
                    Anda dapat mengatur browser untuk menolak cookies, namun 
                    beberapa fitur mungkin tidak berfungsi dengan baik.
                  </p>
                </div>
                
                <div class="mb-4">
                  <h3 class="text-primary">8. Privasi Anak</h3>
                  <p>
                    Layanan kami tidak ditujukan untuk anak di bawah 17 tahun. 
                    Kami tidak secara sengaja mengumpulkan informasi pribadi dari anak-anak. 
                    Jika orang tua menemukan anak mereka memberikan informasi tanpa izin, 
                    silakan hubungi kami untuk penghapusan data.
                  </p>
                </div>
                
                <div class="mb-4">
                  <h3 class="text-primary">9. Perubahan Kebijakan</h3>
                  <p>
                    Kami dapat memperbarui kebijakan privasi ini sewaktu-waktu. 
                    Perubahan signifikan akan dikomunikasikan melalui:
                  </p>
                  <ul>
                    <li>Notifikasi di website</li>
                    <li>Email ke pengguna terdaftar</li>
                    <li>Pemberitahuan saat login</li>
                  </ul>
                </div>
                
                <div class="mb-4">
                  <h3 class="text-primary">10. Kontak</h3>
                  <p>
                    Jika Anda memiliki pertanyaan tentang kebijakan privasi ini 
                    atau ingin menggunakan hak privasi Anda, silakan hubungi:
                  </p>
                  
                  <div class="bg-light p-4 rounded">
                    <p class="mb-2"><strong>Data Protection Officer</strong></p>
                    <p class="mb-2">📧 privacy@donasibaik.id</p>
                    <p class="mb-2">📞 0800-1234-5678</p>
                    <p class="mb-0">📍 Jl. Kebaikan No. 123, Jakarta Pusat 10430</p>
                  </div>
                </div>
                
                <div class="alert alert-info">
                  <h6 class="alert-heading">Penting!</h6>
                  <p class="mb-0">
                    Dengan menggunakan layanan DonasiBaik, Anda menyatakan telah 
                    membaca, memahami, dan menyetujui kebijakan privasi ini. 
                    Kebijakan ini berlaku efektif sejak tanggal yang tercantum di atas.
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
  name: 'Privacy',
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

@media (max-width: 768px) {
  .card-body {
    padding: 2rem 1.5rem !important;
  }
}
</style>