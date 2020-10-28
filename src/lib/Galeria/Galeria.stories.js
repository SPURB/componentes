import { storiesOf } from '@storybook/vue'
import Galeria from './Galeria.vue'

storiesOf('Galeria', module)
  .add('background-size: 100% 100%',  () => ({
    components: { Galeria },
    template: `
      <Galeria
        :imagens="imagens"
        :backgroundCover="false"
        width="100%"
        height="300px"
      />
    `,
    data () {
      return {
        imagens: [
          'https://www.dalcomad.com.br/wp-content/uploads/2018/11/capa.jpg', 
          'https://www.estudarfora.org.br/app/uploads/2019/04/urbanismo.jpg'
        ]
      }
    }
  }))
  .add('background-size: cover', () => ({
    components: { Galeria },
    template: `
      <Galeria
        :imagens="imagens"
        :backgroundCover="true"
        width="100%"
        height="300px"
      />
    `,
    data () {
      return {
        imagens: [
          'https://www.dalcomad.com.br/wp-content/uploads/2018/11/capa.jpg', 
          'https://www.estudarfora.org.br/app/uploads/2019/04/urbanismo.jpg'
        ]
      }
    }
  }))
