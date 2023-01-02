import { assertRole } from '../assertRole'

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
    const element = document.createElement('div')
    element.setAttribute('role', role)

    expect(
      assertRole({
        element,
        role,
      }),
    ).toPassWith(`element has role ${role}`)
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

      expect(
        assertRole({
          element,
          role,
        }),
      ).toPassWith(`element has role ${role}`)
    },
  )
})

describe('multiple roles', () => {
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

    expect(
      assertRole({
        element: div1,
        role: ['columnheader', 'gridcell', 'rowheader'],
      }),
    ).toPassWith(`element has one role of `)
  })
  it.each(['td', 'th'])(
    'passes for <%s> with role of columnheader, gridcell or rowheader',
    tagname => {
      expect(
        assertRole({
          element: document.createElement(tagname),
          role: ['columnheader', 'gridcell', 'rowheader'],
        }),
      ).toPassWith(`element has one role of columnheader, gridcell, rowheader`)
    },
  )
  it('passes for element <a> with role of dialog or link', () => {
    expect(
      assertRole({
        element: document.createElement('a'),
        // not a valid case, just testing assertRole functionality
        role: ['dialog', 'link'],
      }),
    ).toPassWith('element has one role of dialog, link')
  })
  it('fails for element <div /> with role of link or dialog', () => {
    expect(
      assertRole({
        element: document.createElement('div'),
        role: ['link', 'dialog'],
      }),
    ).toFailWith('element has role link')
    expect(
      assertRole({
        element: document.createElement('div'),
        role: ['link', 'dialog'],
      }),
    ).toFailWith('element has role dialog')
  })
  it('fails for element <a> with role of dialog or rowheader', () => {
    expect(
      assertRole({
        element: document.createElement('a'),
        role: ['dialog', 'rowheader'],
      }),
    ).toFailWith('element has role dialog')
    expect(
      assertRole({
        element: document.createElement('a'),
        role: ['dialog', 'rowheader'],
      }),
    ).toFailWith('element has role rowheader')
  })
})

describe('<div />', () => {
  it.each(roles)('fails when the element does not have a role of %s', (role: any) => {
    const element = document.createElement('div')

    expect(
      assertRole({
        element,
        role,
      }),
    ).toFailWith(`element has role ${role}`)
  })
})
