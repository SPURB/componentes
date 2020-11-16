import { shallowMount } from '@vue/test-utils'
import Galeria from '../Galeria.vue'

const imagens = [
  'https://www.dalcomad.com.br/wp-content/uploads/2018/11/capa.jpg',
  'https://www.estudarfora.org.br/app/uploads/2019/04/urbanismo.jpg'
]
const width = '100%'
const height = '300px'
const backgroundCover = false

describe('Galeria.vue', () => {
  it('Renderiza corretamente passando props', () => {
    const wrapper = shallowMount(Galeria, {
      propsData: { imagens, width, height, backgroundCover }
    })
    expect(wrapper.element).toMatchSnapshot() // compara renderização por snashot
  })
})
