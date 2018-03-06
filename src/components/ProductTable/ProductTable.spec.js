import ProductTable from './index.js'
import { mount } from '@vue/test-utils'

const propsData = {
  products: [
    {
      'id': 4450,
      'name': 'Producte 01',
      'offer': true,
      'price': 14.61
    },
    {
      'id': 2212,
      'name': 'Producte 02',
      'offer': true,
      'price': 21.02
    }]
}

describe('ProductTable.vue', () => {
  it('is a component', () => {
    const wrapper = mount(ProductTable, { propsData })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders an snapshot', () => {
    const wrapper = mount(ProductTable, { propsData })
    expect(wrapper.html()).toMatchSnapshot('default')
  })
})
