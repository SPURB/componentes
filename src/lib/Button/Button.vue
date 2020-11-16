<template>
  <button 
    :class="style"
    class="text-white font-bold py-2 px-4 rounded"
    @click="actionButton"
  >
    {{ actionText }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    actionText: {
      type: String,
      required: true
    },
    styleButton: {
      type: String,
      required: true,
      default: 'bg-blue-500 hover:bg-blue-700'
    }
  },
  methods: {
    actionButton () {
      this.$emit('buttonClick')
    }
  }
}
</script>

<style>

</style>