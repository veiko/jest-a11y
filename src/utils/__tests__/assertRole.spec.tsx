import React from 'react'
import { assertRole } from '../assertRole'
import { mockUtils } from '../mockUtils'

const roles = [
  'alert',
  'alertdialog',
  'button',
  'checkbox',
  'columnheader',
  'dialog',
  'grid',
  'gridcell',
  'link',
  'row',
  'rowheader',
]

describe('<div role="" />', () => {
  it.each(roles)('passes when testing <div role="%s" />', (role: any) => {
    document.body.innerHTML = `<div id="element" role="${role}" />`

    const result = assertRole({
      element: document.getElementById('element') as HTMLElement,
      role,
      utils: mockUtils,
    })

    expect(result.message()).toContain(`✓ element has role ${role}`)
    expect(result.pass).toBe(true)
  })
})

describe('<element />', () => {
  it.each([
    { role: 'button', tagname: 'button' },
    { role: 'columnheader', tagname: 'th' },
    { role: 'grid', tagname: 'table' },
    { role: 'gridcell', tagname: 'td' },
    { role: 'link', tagname: 'a' },
    { role: 'row', tagname: 'tr' },
  ])(
    `passes when testing <$tagname> for $role role`,
    ({ role, tagname }: { role: any; tagname: string }) => {
      const element = document.createElement(tagname)

      const result = assertRole({
        element,
        role,
        utils: mockUtils,
      })
      expect(result.message()).toContain(`✓ element has role ${role}`)
      expect(result.pass).toBe(true)
    },
  )
})

describe.only('multiple roles', () => {
  it.each([
    {
      tagname: 'div',
      role: 'gridcell',
    },
    {
      tagname: 'div',
      role: 'rowheader',
    },
    {
      tagname: 'div',
      role: 'columnheader',
    },
  ])('passes for <$tagname role="$role">', ({ role, tagname }) => {
    const div1 = document.createElement(tagname)
    div1.setAttribute('role', role)

    const result = assertRole({
      element: div1,
      role: ['columnheader', 'gridcell', 'rowheader'],
      utils: mockUtils,
    })

    expect(result.message()).toContain(`✓ element has one role of `)
    expect(result.pass).toBe(true)
  })
  it.each(['td', 'th'])(
    'passes for <%s> with role of columnheader, gridcell or rowheader',
    tagname => {
      const result = assertRole({
        element: document.createElement(tagname),
        role: ['columnheader', 'gridcell', 'rowheader'],
        utils: mockUtils,
      })

      expect(result.message()).toContain(
        `✓ element has one role of columnheader, gridcell, rowheader`,
      )
      expect(result.pass).toBe(true)
    },
  )
  it('passes for element <a> with role of dialog or link', () => {
    const result = assertRole({
      element: document.createElement('a'),
      role: ['dialog', 'link'],
      utils: mockUtils,
    })

    expect(result.message()).toContain('✓ element has one role of dialog, link')
    expect(result.pass).toBe(true)
  })
  it('fails for element <div /> with role of link or dialog', () => {
    const result = assertRole({
      element: document.createElement('div'),
      role: ['link', 'dialog'],
      utils: mockUtils,
    })

    expect(result.message()).toContain('✕ element has role link')
    expect(result.message()).toContain('✕ element has role dialog')
    expect(result.pass).toBe(false)
  })
  it('fails for element <a> with role of dialog or rowheader', () => {
    const result = assertRole({
      element: document.createElement('a'),
      role: ['dialog', 'rowheader'],
      utils: mockUtils,
    })

    expect(result.message()).toContain('✕ element has role dialog')
    expect(result.message()).toContain('✕ element has role rowheader')
    expect(result.pass).toBe(false)
  })
})

describe('<div />', () => {
  it.each(roles)('fails when the element does not have a role of %s', (role: any) => {
    const element = document.createElement('div')

    const result = assertRole({
      element,
      role,
      utils: mockUtils,
    })
    expect(result.message()).toContain(`✕ element has role ${role}`)
    expect(result.pass).toBe(false)
  })
})
