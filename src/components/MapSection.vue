<template>
  <LMap
    ref="mapRef"
    :zoom="12"
    :center="[30.2672, -97.7431]"
    class="h-full w-full rounded-xl"
  >
    <LTileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; OpenStreetMap contributors"
    />
    <LMarker :lat-lng="[30.2672, -97.7431]" />
  </LMap>
</template>

<script setup>
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import L from "leaflet";
import { ref, onMounted, nextTick } from "vue";

import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const mapRef = ref(null);

onMounted(async () => {
  await nextTick();
  setTimeout(() => {
    mapRef.value?.leafletObject?.invalidateSize();
  }, 200);
});
</script>
