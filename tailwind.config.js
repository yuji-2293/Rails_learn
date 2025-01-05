module.exports = {
  corePlugins: {
    preflight: false, // TailwindのリセットCSSを無効化
  },
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography')
  ],

}
