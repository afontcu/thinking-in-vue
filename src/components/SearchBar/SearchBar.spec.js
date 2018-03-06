import SearchBar from './index.js'
import { mount } from '@vue/test-utils'

describe('SearchBar.vue', () => {
  it('is a component', () => {
    const wrapper = mount(SearchBar)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders an snapshot', () => {
    const wrapper = mount(SearchBar)
    expect(wrapper.html()).toMatchSnapshot('default')
  })
})
