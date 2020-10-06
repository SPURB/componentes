<template>
  <div class="select-options">
    <button
      class="select-options__toggler"
      :class="[typeBackground, typeDisabled]"
      @click.prevent="open = !open"
      :disabled="disabled"
    >
      <div>{{ selected }}</div>
      <i class="icon icon-expandir" :class="{ open }"></i>
    </button>
    <transition name="fade">
      <ul class="select-options__select" v-show="open">
        <li
          class="select-options__options"
          v-for="(option, index) in options"
          :value="option.value"
          :key="index"
        >
          <button
            @click.prevent="setSelectedValue(option)"
          >
            {{ option.title }}
          </button>
        </li>
      </ul>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'Combobox',
  data () {
    return {
      open: false,
      selected: ''
    }
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    type: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    typeBackground () {
      if (!this.type) {
        return 'default'
      } else {
        return 'forms'
      }
    },
    typeDisabled () {
      if (!this.disabled) {
        return ''
      } else {
        this.selected = this.options[0].title
        return 'disabled'
      }
    }
  },
  created () {
    this.selected = this.options[0].title
  },
  methods: {
    setSelectedValue (option) {
      this.selected = option.title
      this.open = false
      this.$emit('setOptionValue', option.value)
    }
  }
}
</script>
<style scoped>
.select-options__select {
  list-style-type: none;
  margin: 0 0 2rem 0;
  padding: 0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.24);
}
.select-options__select li:first-child {
  display: none;
}
.select-options button {
  height: 48px;
  width: 100%;
  text-align: left;
  cursor: pointer;
  border: 0;
  font-family: 'Roboto', 'Segoe UI', 'Helvetica', Arial, sans-serif;
  font-size: 1rem;
  padding-left: 1.75rem;
  transition: background-color ease-in-out 0.35s;
}
.select-options button.default {
  background-color: rgba(255, 255, 255, 0.05);
  color: #fff;
}
.select-options button.default:hover {
  background-color: rgba(255, 255, 255, 0.15);
}
.select-options button.disabled {
  cursor: not-allowed;
  background-color: #ccc;
}
.select-options button.disabled:hover {
  background-color: #ccc;
}
.select-options button.forms {
  background-color: rgba(0, 0, 0, 0.08);
  color: #000;
}
.select-options button.forms:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.select-options button:focus {
  outline: none;
}
.select-options__toggler {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  margin-bottom: 10px;
}
.select-options__toggler .icon {
  font-size: 40px;
  transition: transform ease-in-out 0.15s;
}
.select-options__toggler .icon.open {
  transform: rotate(180deg);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
