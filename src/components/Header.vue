<template>
  <header class="flex items-center justify-between px-4 py-3 border-b bg-white">
    <div class="flex items-center gap-3 navMob">
      <button class="md:hidden">
        ☰
      </button>
      <img src="../assets/logo.png" alt="Houzeo" class="h-6" />
      <button class="profileBtn">
        <img src="../assets/profileIcon.png" alt="">
      </button>
    </div>

    <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
      <a href="#">Product</a>
      <a href="#">How Houzeo Works</a>
      <a href="#">Reviews</a>
      <a href="#">Buy</a>
      <a href="#">Sell</a>
      <a href="#">Pricing</a>
      <a href="#">Resources</a>
    </nav>

    <div class="flex items-center gap-3 mobDiplayNoneHead">
      <div class="numberCon">
        <button class="hidden md:block text-sm">(844) 448-0110</button>
        <div class="callingTym">(9am to 6pm CST, Mon-Sat)</div>
      </div>
      <button class="bg-blue-600 text-white px-4 py-2 rounded-md text-sm gratientBtn">
        Start Free Listing
      </button>
    </div>
  </header>
</template>


