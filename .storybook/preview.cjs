export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    disable: true,
    default: '#fff'
  },
  layout: 'centered',
}

export const globalTypes = {
  theme: {
      name: 'Theme',
      description: 'Global theme',
      defaultValue: 'light',
      toolbar: {
          icon: 'lightning',
          items: ['dark', 'light'],
          showName: true,
      },
  },
};


export const decorators = [(story, context) => {
  context.globals.background = context.parameters.backgrounds.values.find(val => val.name === context.globals.theme).value
  context.canvasElement.setAttribute('data-theme', context.globals.theme);

  return {
  components: { story },
  template: `<div data-theme="${context.globals.theme}" style="padding: 20rem;"><story /></div>`
}}];