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
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_16.jpg', 
          'https://i.pinimg.com/originals/e1/b4/27/e1b42700f54e4db75f212c37c5589c7e.jpg'
        ]
      }
    }
  }))
  .add('bckground-size: cover', () => ({
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
