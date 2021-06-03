import { render } from '@testing-library/vue'
import { mount } from '@vue/test-utils'
import Component from './Home.vue'

const MessageComponent = {
  template: '<p>{{ msg }}</p>',
  props: ['msg'],
}
test('increments value on click', async () => {
  // The render method returns a collection of utilities to query your component.
  const { getByText } = render(Component)

  // getByText returns the first matching node for the provided text, and
  // throws an error if no elements match or if more than one match is found.
  // getByText('Times clicked: 0')
  const wrapper = mount(MessageComponent, {
    propsData: {
      msg: 'Hello world',
    },
  })

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Hello wordld')
})
