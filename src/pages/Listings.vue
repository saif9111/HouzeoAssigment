<template>
  <div class="min-h-screen bg-gray-100">
    <Header />

    <div class="">
      <SearchBar />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-[50%_50%] gap-4">
      <!-- Map (Desktop Only) -->
      <div class="hidden md:block sticky top-4">
        <!-- h-[calc(100vh-180px)] -->
        <MapSection />
      </div>

      <!-- Listings -->
      <div class="listingCon px-4">
        <h2 class="propertyCardLocation">
          Austin, TX real estate & homes for sale
        </h2>
        <div class="propertyCardDetails">
          <div class="propertyCardDetailsLeft">
            <span class="lightTxt">2,010 Homes</span>
          </div>
          <div class="sortByCon">
            <span class="lightTxt">Sort by:</span>
            <div class="dropdown" ref="dropdownRef">
              <button @click="toggleDropdown" class="dropbtn">
                New Listing
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.72913 5.5L7.99999 10.5L13.2709 5.5H2.72913Z"
                    fill="#0B5AA5"
                  />
                </svg>
              </button>
              <div
                id="myDropdown"
                class="dropdown-content"
                :class="{ show: isOpen }"
                @click.stop
              >
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <PropertyCard v-for="home in homes" :key="home.id" :property="home" />
        </div>
      </div>
    </div>

    <button class="mapBtn">
      Map
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 5.62501V12.5M12.5 7.50001V14.375M12.9192 17.2908L16.9817 15.2592C17.2992 15.1008 17.5 14.7758 17.5 14.4208V4.01668C17.5 3.32001 16.7667 2.86668 16.1433 3.17834L12.9192 4.79001C12.7891 4.85538 12.6456 4.88943 12.5 4.88943C12.3544 4.88943 12.2109 4.85538 12.0808 4.79001L7.91917 2.71001C7.78901 2.64495 7.64551 2.61108 7.5 2.61108C7.35449 2.61108 7.21098 2.64495 7.08083 2.71001L3.01833 4.74084C2.86262 4.81868 2.73165 4.93833 2.64011 5.0864C2.54856 5.23446 2.50004 5.40509 2.5 5.57918V15.9833C2.5 16.68 3.23333 17.1333 3.85667 16.8217L7.08083 15.21C7.21089 15.1446 7.35444 15.1106 7.5 15.1106C7.64556 15.1106 7.78911 15.1446 7.91917 15.21L12.0808 17.2908C12.345 17.4225 12.6558 17.4225 12.9192 17.2908Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import SearchBar from "../components/SearchBar.vue";
import PropertyCard from "../components/PropertyCard.vue";
import MapSection from "../components/MapSection.vue";
import houseImg from "../assets/house.png";
import houseImg1 from "../assets/house1.png";
import houseImg2 from "../assets/house2.png";
import houseImg3 from "../assets/house3.png";

const homes = [
  {
    id: 1,
    images: [houseImg, houseImg1, houseImg2, houseImg3],
    days: 6,
    type: "House For Sale",
    price: "3,349,000",
    beds: 4,
    baths: 3,
    sqft: 998,
    address: "2856 Meadow Park Ave,",
    addressDim: "Henderson, NV 89052",
    broker: "Nashville (Real Tracs Mid) MLS-TN as distributed by MLS GRID",
  },
  {
    id: 2,
    images: [houseImg1 , houseImg2, houseImg3 , houseImg],
    days: 12,
    type: "Condo For Sale",
    price: "3,349,000",
    beds: 4,
    baths: 3,
    sqft: 998,
    address: "2856 Meadow Park Ave,",
    addressDim: "Henderson, NV 89052",
    broker: "Nashville (Real Tracs Mid) MLS-TN as distributed by MLS GRID",
  },
  {
    id: 3,
    images: [ houseImg3 , houseImg1 , houseImg2, houseImg],
    days: 12,
    type: "Condo For Sale",
    price: "3,349,000",
    beds: 4,
    baths: 3,
    sqft: 998,
    address: "2856 Meadow Park Ave,",
    addressDim: "Henderson, NV 89052",
    broker: "Nashville (Real Tracs Mid) MLS-TN as distributed by MLS GRID",
  },
  {
    id: 4,
    images: [houseImg2, houseImg1 , houseImg3, houseImg,],
    days: 12,
    type: "Condo For Sale",
    price: "3,349,000",
    beds: 4,
    baths: 3,
    sqft: 998,
    address: "2856 Meadow Park Ave,",
    addressDim: "Henderson, NV 89052",
    broker: "Nashville (Real Tracs Mid) MLS-TN as distributed by MLS GRID",
  },
];

import { ref, onMounted, onUnmounted } from "vue";

const isOpen = ref(false);
const dropdownRef = ref(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style>
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
