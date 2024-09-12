module.exports = function (plop) {
  plop.setGenerator('package', {
    description: 'Create a new lineOA package',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Package name(命名規則: [廠商英文]-[專案名稱英文]):'
      }
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'packages/{{name}}',
        base: 'plop-templates/package',
        templateFiles: 'plop-templates/package/**/*'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/.env.development',
        templateFile: 'plop-templates/package/.env.development'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/.env.production',
        templateFile: 'plop-templates/package/.env.production'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/.gitignore',
        templateFile: 'plop-templates/package/.gitignore'
      },
      {
        type: 'modify',
        path: 'package.json',
        pattern: /(\"scripts\": {[\s\S]*?)(})/,
        template: '$1,\n    "dev:{{name}}": "pnpm run -C packages/{{name}} dev",\n    "build:{{name}}": "pnpm run -C packages/{{name}} build"\n  $2'
      },
      {
        type: 'add',
        path: 'docs/{{name}}.txt',
        template: '專案：{{name}}\n官方帳號名稱:\n正式網址:\n測試網址:\n專案簡介:'
      }
    ]
  });
};