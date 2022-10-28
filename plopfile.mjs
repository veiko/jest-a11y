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
    ],
  })
}
