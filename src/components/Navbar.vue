<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        🤝 DonasiBaik
      </router-link>
      
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Donasi</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Kategori
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#" @click="filterByCategory('Zakat')">Zakat</a></li>
              <li><a class="dropdown-item" href="#" @click="filterByCategory('Sedekah')">Sedekah</a></li>
              <li><a class="dropdown-item" href="#" @click="filterByCategory('Wakaf')">Wakaf</a></li>
              <li><a class="dropdown-item" href="#" @click="filterByCategory('Kurban')">Kurban</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/kisah-kasih">Kisah Kasih</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Tentang
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
              <li><router-link class="dropdown-item" to="/tentang-kami">Tentang Kami</router-link></li>
              <li><router-link class="dropdown-item" to="/hubungi-kami">Hubungi Kami</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link class="dropdown-item" to="/privacy">Privacy Policy</router-link></li>
              <li><router-link class="dropdown-item" to="/terms">Syarat & Ketentuan</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    filterByCategory(category) {
      // Emit event to parent or use router to filter
      if (this.$route.path === '/') {
        this.$emit('filter-category', category)
      } else {
        this.$router.push({ path: '/', query: { category } })
      }
    }
  }
}
</script>

<style scoped>
.navbar-brand {
  font-size: 1.8rem;
  font-weight: 700;
}

.nav-link {
  font-weight: 500;
  padding: 0.5rem 1rem !important;
}

.dropdown-menu {
  border: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.dropdown-item {
  padding: 0.7rem 1.5rem;
  transition: background-color 0.3s ease;
}

.dropdown-item:hover {
  background-color: var(--light-color);
  color: var(--primary-color);
}
</style>