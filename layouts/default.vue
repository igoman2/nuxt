<template>
  <div>
    <header>
      <h1>{{ $route.name }}페이지</h1>
      <NuxtLink to="/">홈페이지 </NuxtLink>
      <NuxtLink to="/main">메인 페이지 </NuxtLink>
      <NuxtLink to="/sample">상품 페이지 </NuxtLink>
    </header>
    <AppHeader />
    <Nuxt />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  components: { AppHeader },
}
</script>
