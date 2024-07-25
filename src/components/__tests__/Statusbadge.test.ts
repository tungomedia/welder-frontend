import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import StatusBadge from '../status-badge/StatusBadge.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(StatusBadge, {
      props: { variant: 'success' },
      slots: { default: 'bezig' }
    })
    expect(wrapper.text()).toContain('bezig')
    expect(wrapper.classes('text-green-800')).toBe(true)
  })
})
