<template>
  <div class="w-full default min-h-90">
    <div class="content">

    <slot></slot>
    </div>
  </div>
</template>

<script></script>


<style lang="pcss" scoped>
.default{
  max-width: 100%;
  overflow-x: hidden;
}

.content{
  min-height: 90vh;
}
</style>