import { storiesOf } from '@storybook/vue'
import PreloaderVerticalizacao from './PreloaderVerticalizacao.vue'

storiesOf('PreloaderVerticalizacao', module).add(
  'PreloaderVerticalizacao',
  () => ({
    components: { PreloaderVerticalizacao },
    template: `<PreloaderVerticalizacao stroke="grey" />`
  })
)
