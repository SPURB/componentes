import { storiesOf } from '@storybook/vue'
import Button from './Button.vue'

storiesOf('Button', module).add('Button', () => ({
  components: { Button },
  template: `<Button action-text="submit" @buttonClick="getClick" />`,
  methods: {
    getClick () {
      alert('Botão clicado!')
    }
  }
}))
