import Checkbox from './index.js'
import { mount } from '@vue/test-utils'

describe('Checkbox.vue', () => {
  it('is a component', () => {
    const wrapper = mount(Checkbox)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders main node', () => {
    const wrapper = mount(Checkbox)
    expect(wrapper.classes()).toContain('c-checkbox')
  })

  it('renders an snapshot', () => {
    const wrapper = mount(Checkbox)
    expect(wrapper.html()).toMatchSnapshot('default')
  })
})
