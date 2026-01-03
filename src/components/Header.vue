<template>
  <header
    class="relative flex items-center justify-between px-4 py-3 border-b bg-white"
    @click.stop
  >
    <div class="flex items-center gap-3 navMob">
      <button class="md:hidden text-xl" @click="toggleMobileMenu">
        {{ isMobileMenuOpen ? "✕" : "☰" }}
      </button>
      <img src="../assets/logo.png" alt="Houzeo" class="h-6 navLogo" />
      <button class="profileBtn">
        <img src="../assets/profileIcon.png" alt="" />
      </button>
    </div>

    <nav
      :class="[
        'items-center gap-6 text-sm font-medium navLink',
        isMobileMenuOpen
          ? 'flex flex-col absolute top-full left-0 w-full bg-white shadow-md p-4'
          : 'hidden',
        'md:flex md:flex-row md:static md:shadow-none md:p-0',
      ]"
    >
      <!-- <a href="#">Product</a> -->
      <div class="dropdownHead" @click.stop>
        <button @click="toggleDropdown('product')" class="dropbtnBlack">
          Product ▼
        </button>
        <div
          class="dropdown-content"
          :class="{ show: activeDropdown === 'product' }"
        >
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
        </div>
      </div>
      <a href="#">How Houzeo Works</a>
      <a href="#">Reviews</a>
      <!-- <a href="#">Buy</a> -->
      <div class="dropdownHead" @click.stop>
        <button @click="toggleDropdown('buy')" class="dropbtnBlack">
          Buy ▼
        </button>
        <div
          class="dropdown-content"
          :class="{ show: activeDropdown === 'buy' }"
        >
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
        </div>
      </div>
      <!-- <a href="#">Sell</a> -->
      <div class="dropdownHead" @click.stop>
        <button @click="toggleDropdown('sell')" class="dropbtnBlack">
          Sell ▼
        </button>
        <div
          class="dropdown-content"
          :class="{ show: activeDropdown === 'sell' }"
        >
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
        </div>
      </div>
      <a href="#">Pricing</a>
      <!-- <a href="#">Resources</a> -->
      <div class="dropdownHead" @click.stop>
        <button @click="toggleDropdown('resources')" class="dropbtnBlack">
          Resources ▼
        </button>
        <div
          class="dropdown-content"
          :class="{ show: activeDropdown === 'resources' }"
        >
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
        </div>
      </div>
      <a href="#">Sign in</a>
    </nav>

    <div class="flex items-center gap-3 mobDiplayNoneHead">
      <div class="numberCon">
        <button class="hidden md:block text-sm">(844) 448-0110</button>
        <div class="callingTym">(9am to 6pm CST, Mon-Sat)</div>
      </div>
      <button
        class="bg-blue-600 text-white px-4 py-2 rounded-md text-sm gratientBtn"
      >
        Start Free Listing
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const activeDropdown = ref(null);

const toggleDropdown = (name) => {
  activeDropdown.value = activeDropdown.value === name ? null : name;
};

const closeDropdown = () => {
  activeDropdown.value = null;
  isMobileMenuOpen.value = false;
};

onMounted(() => {
  document.addEventListener("click", closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener("click", closeDropdown);
});
</script>

<style>
.dropdownHead {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content.show {
  display: block;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}
</style>
