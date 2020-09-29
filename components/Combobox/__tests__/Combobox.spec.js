import { shallowMount } from '@vue/test-utils'
import Combobox from '../Combobox.vue'

const options = [
  {
    title: 'Selecione um projeto',
    value: 0
  },
  {
    title: 'PIU Bairros do Tamandatueí',
    value: 1
  }
]

describe('Combobox.vue', () => {
  it('Renderiza corretamente passando props', () => {
    const wrapper = shallowMount(Combobox, {
      propsData: { options }
    })
    expect(wrapper.element).toMatchSnapshot() // compara renderização por snashot
  })
})
