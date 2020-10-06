<template>
  <svg width="142" height="162" viewBox="0 0 142 64" fill="none">
    <path class="preloader-verticalizacao__plane-3 opacity-change" d="M1.14725 70.7112L70.7109 37.0554L140.275 70.7112L70.7109 104.444L1.14725 70.7112Z" :stroke="stroke" />
    <path class="preloader-verticalizacao__plane-2 opacity-change" d="M1.14725 70.7112L70.7109 37.0554L140.275 70.7112L70.7109 104.444L1.14725 70.7112Z" :stroke="stroke" />
    <path class="preloader-verticalizacao__plane-1 opacity-change" d="M1.14725 70.7112L70.7109 37.0554L140.275 70.7112L70.7109 104.444L1.14725 70.7112Z" :stroke="stroke" />
    <path d="M1.14725 70.7112L70.7109 37.0554L140.275 70.7112L70.7109 104.444L1.14725 70.7112Z" :stroke="stroke" />
  </svg>
</template>

<script>
export default {
  name: 'PreloaderVerticalizacao',
  props: {
    stroke: {
      type: String,
      default: 'white'
    }
  }
}
</script>
<style scoped>
.preloader-verticalizacao__plane-1 {
  animation: translate-plane-1 3500ms infinite;
}

.preloader-verticalizacao__plane-2 {
  animation: translate-plane-2 3500ms infinite;
}

.preloader-verticalizacao__plane-3 {
  animation: translate-plane-3 3500ms infinite;
}

@keyframes translate-plane-1 {
  20% {
    transform: translateY(0);
    opacity: 0;
  }
  30%,
  70% {
    transform: translateY(-18px);
    opacity: 1;
  }
  80% {
    transform: translateY(0);
    opacity: 0;
  }
}

@keyframes translate-plane-2 {
  20% {
    transform: translateY(0);
    opacity: 0
  }
  30%,
  70% {
    transform: translateY(-36px);
    opacity: 1
  }
  80% {
    transform: translateY(0);
    opacity: 0
  }
}

@keyframes translate-plane-3 {
  20% {
    transform: translateY(0);
    opacity: 0
  }
  30%,
  70% {
    transform: translateY(-56px);
    opacity: 1
  }
  80% {
    transform: translateY(0);
    opacity: 0
  }
}

</style>
