import Title from './index.js'
import { mount } from '@vue/test-utils'

describe('Title.vue', () => {
  it('is a component', () => {
    const wrapper = mount(Title)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders main node', () => {
    const wrapper = mount(Title)
    expect(wrapper.classes()).toContain('c-title')
  })

  it('renders an snapshot', () => {
    const wrapper = mount(Title)
    expect(wrapper.html()).toMatchSnapshot('default')
  })
})
