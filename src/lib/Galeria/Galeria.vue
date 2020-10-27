<template>
  <div
    class="galeria"
    :style="{
      'background-image': `url(${imagens[currentImage]})`,
      'background-size': backgroundCover ? 'cover' : '100% 100%',
      'background-repeat': 'no-repeat',
      width,
      height
    }"
  >
    <slot name="header" />
    <section class="controles">
      <span 
        class="left"
        @click.prevent="previousDisabled ? '' : previous()"
      >
        <svg width="20" height="30" viewBox="0 0 248 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M247.667 353L95.0001 200L247.667 47L200.667 0L0.666748 200L200.667 400L247.667 353Z"
            :fill="previousDisabled ? '#ccc' : '#fff'"
          />
        </svg>
      </span>
      <span
        class="right"
        @click.prevent="nextDisabled ? '' : next()"
      >
        <svg width="20" height="30" viewBox="0 0 247 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.56015e-05 47L152.667 200L-1.11499e-05 353L47 400L247 200L47 -1.74846e-05L1.56015e-05 47Z"
            :fill="nextDisabled ? '#ccc' : '#fff'"
          />
        </svg>
      </span>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Galeria',
  props: {
    imagens: {
      type: Array,
      required: true
    },
    width: {
      type: String,
      required: true
    },
    height: {
      type: String,
      required: true
    },
    backgroundCover: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      currentImage: 0
    }
  },
  computed: {
    lengthImagens () {
      return this.imagens.length
    },
    nextDisabled () {
      return this.lengthImagens - 1 == this.currentImage ? true : false
    },
    previousDisabled () {
      return this.currentImage == 0 ? true : false
    }
  },
  methods: {
    next () {
      this.currentImage = this.currentImage + 1
    },
    previous () {
      this.currentImage = this.currentImage - 1
    }
  }
}
</script>

<style scoped>
.galeria {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
}

.galeria .controles {
  height: 100%;
  display: flex;
  align-items: center;
}

.galeria .controles span {
  cursor: pointer;
  transition: transform .15s ease-in-out;
  position: absolute;
}

.galeria .controles span.right {  
  right: 26px;
}

.galeria .controles span.right:hover {
  -moz-transform: translate(3px, 0px);
  -webkit-transform: translate(3px, 0px);
  -o-transform: translate(3px, 0px);
  -ms-transform: translate(3px, 0px);
  transform: translate(3px, 0px);
}

.galeria .controles span.left:hover {
  -moz-transform: translate(-3px, 0px);
  -webkit-transform: translate(-3px, 0px);
  -o-transform: translate(-3px, 0px);
  -ms-transform: translate(-3px, 0px);
  transform: translate(-3px, 0px);  
}
</style>