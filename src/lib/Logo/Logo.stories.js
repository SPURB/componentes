import { storiesOf } from '@storybook/vue'
import Logo from './Logo'

storiesOf('Logo', module)
  .add('mono-black', () => ({
    components: { Logo },
    template: `
      <logo
        fillType="black"
        fillBrand="black"
        :opacity="1"
      />
    `
  }))
  .add('color', () => ({
    components: { Logo },
    template: `
      <logo
        fillType="black" 
        fillBrand="#038375"
        :opacity="1"
      />
    `
  }))
