import { shallowMount } from '@vue/test-utils'
import Logo from '../Logo.vue'

describe('Logo.vue', () => {
  it('Renderiza corretamente passando props', () => {
    const fillType = 'black'
    const fillBrand = 'black'
    const wrapper = shallowMount(Logo, {
      propsData: { fillType, fillBrand }
    })
    expect(wrapper.element).toMatchSnapshot() // compara renderização por snashot
  })
})
