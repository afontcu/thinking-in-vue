import FilterableProductTable from './index.js'
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

describe('FilterableProductTable.vue', () => {
  it('is a component', () => {
    const wrapper = mount(FilterableProductTable, { propsData })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders main node', () => {
    const wrapper = mount(FilterableProductTable, { propsData })
    expect(wrapper.classes()).toContain('filterable-product-table')
  })

  it('renders an snapshot', () => {
    const wrapper = mount(FilterableProductTable, { propsData })
    expect(wrapper.html()).toMatchSnapshot('default')
  })
})
