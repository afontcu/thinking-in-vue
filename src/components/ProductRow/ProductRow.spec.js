import ProductRow from './index.js'
import { mount } from '@vue/test-utils'

const propsData = {
  name: 'name',
  price: 12,
  offer: false
}

describe('ProductRow.vue', () => {
  it('is a component', () => {
    const wrapper = mount(ProductRow, { propsData })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders an snapshot', () => {
    const wrapper = mount(ProductRow, { propsData })
    expect(wrapper.html()).toMatchSnapshot('default')
  })
})
