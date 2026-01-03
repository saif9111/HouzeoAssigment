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
    <LMarker :lat-lng="[30.2696, -97.7431]" />

    <LMarker :lat-lng="[30.2686, -97.7431]" />
    <LMarker :lat-lng="[30.2676, -97.7431]" />
    <LMarker :lat-lng="[30.2666, -97.7431]" />
    <LMarker :lat-lng="[30.2626, -97.7431]" />
    <LMarker :lat-lng="[30.2676, -97.7438]" />
    <LMarker :lat-lng="[30.2696, -97.7434]" />

    <LMarker :lat-lng="[30.2378, -97.7635]" />
    <LMarker :lat-lng="[30.2278, -97.7435]" />
    <LMarker :lat-lng="[30.2178, -97.7435]" />
    <LMarker :lat-lng="[30.2978, -97.7835]" />
    <LMarker :lat-lng="[30.4178, -97.7435]" />
    <LMarker :lat-lng="[30.3178, -97.7435]" />
    <LMarker :lat-lng="[30.3678, -97.7435]" />
    <LMarker :lat-lng="[30.3878, -97.7435]" />
    <LMarker :lat-lng="[30.3978, -97.7935]" />
    <LMarker :lat-lng="[30.3078, -97.6435]" />
    <LMarker :lat-lng="[30.3578, -97.5435]" />
    <LMarker :lat-lng="[30.3178, -97.1435]" />
    <LMarker :lat-lng="[30.3778, -97.9435]" />
    <LMarker :lat-lng="[30.3478, -97.2735]" />
    <LMarker :lat-lng="[30.3578, -97.1885]" />
    <LMarker :lat-lng="[30.3018, -97.7480]" />
    <LMarker :lat-lng="[30.3908, -97.7499]" />
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
