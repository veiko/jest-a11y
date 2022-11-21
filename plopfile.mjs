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
        path: 'docs/css/{{lowerCase componentName}}.css',
        templateFile: 'config/plop/matcher.css.hbs',
      },
      {
        type: 'add',
        path: 'docs/matchers/to-be-accessible-{{lowerCase componentName}}.md',
        templateFile: 'config/plop/matcher.md.hbs',
      },
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
        path: 'src/matchers/toBeAccessible{{properCase componentName}}/examples/{{properCase componentName}}.tsx',
        templateFile: 'config/plop/matcher.tsx.hbs',
      },
      {
        type: 'modify',
        path: 'docs/css/custom.css',
        pattern: /\/\*\* plop-prepend-css-file \*\//gi,
        template: "@import './{{lowerCase componentName}}.css';\r\n/** plop-prepend-css-file */",
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
        path: 'src/types/jest.d.ts',
        pattern: /\/\*\* plop-prepend-matcher \*\//gi,
        template: `  /**
    * Assert whether an element has the correct role, properties and keyboard interactions for \`{{lowerCase componentName}}\`.
    * @summary A \`{{lowerCase componentName}}\` is ...
    * @example
    * <div role="{{lowerCase componentName}}">...</div>
    *
    * expect(screen.getByRole('{{lowerCase componentName}}')).toBeAccessible{{properCase componentName}}()
    * @see https://veiko.github.io/jest-a11y/matchers/{{lowerCase componentName}}
    */
    toBeAccessible{{properCase componentName}}(): CustomMatcherResult
/** plop-prepend-matcher */`,
      },
      {
        type: 'modify',
        path: 'src/utils/assertRole.ts',
        pattern: /\/\*\* plop-prepend-func \*\//gi,
        template:
          "\r\nconst has{{properCase componentName}}Role = (el: HTMLElement) => getRole(el) === '{{lowerCase componentName}}'\r\n/** plop-prepend-func */",
      },
      {
        type: 'modify',
        path: 'src/utils/assertRole.ts',
        pattern: /\/\*\* plop-prepend-assertion \*\//gi,
        template:
          '  {{lowerCase componentName}}: has{{properCase componentName}}Role,\r\n/** plop-prepend-assertion */',
      },
    ],
  })
}
