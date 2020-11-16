import { shallowMount } from '@vue/test-utils'
import Button from '../Button.vue'

const actionText = 'submit'
const styleButton = 'bg-blue-500 hover:bg-blue-700'

describe('Button.vue', () => {
  it('Renderiza corretamente passando props', () => {
    const wrapper = shallowMount(Button, {
      propsData: { actionText, styleButton }
    })
    expect(wrapper.element).toMatchSnapshot() // compara renderização por snashot
  })
})
