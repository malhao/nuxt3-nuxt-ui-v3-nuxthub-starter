<template>
  <div>
    <AppHeader :links="navLinks"/>

    <UMain>
      <slot />
    </UMain>

    <AppFooter />
  </div>
</template>
