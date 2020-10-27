import { shallowMount } from '@vue/test-utils'
import Card from '../Card.vue'

const headerClass = 'bg-gray-200 px-2 py-3'
const bodyClass = 'bg-gray-400 px-2 py-3'
const footerClass= 'bg-gray-200 px-2 py-3'

describe('Card.vue', () => {
  it('Renderiza corretamente passando props', () => {
    const wrapper = shallowMount(Card, {
      propsData: { headerClass, bodyClass, footerClass },
      slots: {
        header: '<h1>Aqui pode estar o título do card</h1>',
        body: '<p>Um parágrafo para o conteúdo principal.</p><p>E um outro parágrafo.</p>',
        footer: '<p>Aqui está o footer</p>'
      }
    })
    expect(wrapper.element).toMatchSnapshot() // compara renderização por snashot
  })
})
