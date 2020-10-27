<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <div :class="headerClass">
      <slot name="header" />
    </div>
    <div :class="bodyClass">
      <slot name="body" />
    </div>
    <div :class="footerClass">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    headerClass: {
      type: String,
      default: 'px-6 py-4'
    },
    bodyClass: {
      type: String,
      default: 'px-6 py-4'
    },
    footerClass: {
      type: String,
      default: 'px-6 pt-4 pb-2'
    }
  }
}
</script>

<style>
</style>