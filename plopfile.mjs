export default function (plop) {
  // create your generators here
  plop.setGenerator('matcher', {
    description: 'create a new matcher',
    prompts: [
      // {
      //   choices: ['Component'],
      //   message: 'Type of Matcher',
      //   name: 'matcherType',
      //   type: 'list',
      // },
      {
        message: 'Component Name',
        name: 'componentName',
        type: 'input',
        validate: val => val.length > 0 || 'Component name is required',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/matchers/toBeAccessible{{properCase componentName}}/to-be-accessible-{{lowerCase componentName}}.ts',
        templateFile: 'config/plop/matcher.hbs',
      },
      {
        type: 'add',
        path: 'src/matchers/toBeAccessible{{properCase componentName}}/__tests__/to-be-accessible-{{lowerCase componentName}}.spec.tsx',
        templateFile: 'config/plop/matcher.spec.hbs',
      },
      {
        type: 'add',
        path: 'docs/matchers/to-be-accessible-{{lowerCase componentName}}.md',
        templateFile: 'config/plop/matcher.md.hbs',
      },
      {
        type: 'modify',
        path: 'src/matchers/index.ts',
        pattern: /\/\*\* Other Matchers \*\//gi,
        template:
          "export * from './toBeAccessible{{properCase componentName}}/to-be-accessible-{{lowerCase componentName}}'\r\n/** Other Matchers */",
      },
      {
        type: 'modify',
        path: 'src/types/global.d.ts',
        pattern: /  type JestMatcherUtils = typeof jestMatcherUtils/gi,
        template:
          "    | '{{lowerCase componentName}}'\r\n  type JestMatcherUtils = typeof jestMatcherUtils",
      },
      {
        type: 'modify',
        path: 'src/utils/assertRole.ts',
        pattern: /\/\*\* plop-prepend-func \*\//gi,
        template:
          "const has{{properCase componentName}}Role = (el: HTMLElement) => getRole(el) === '{{lowerCase componentName}}'\r\n/** plop-prepend-func */",
      },
      {
        type: 'modify',
        path: 'src/utils/assertRole.ts',
        pattern: /\/\*\* plop-prepend-assertion \*\//gi,
        template:
          '{{lowerCase componentName}}: has{{properCase componentName}}Role,\r\n/** plop-prepend-assertion */',
      },
    ],
  })
}
