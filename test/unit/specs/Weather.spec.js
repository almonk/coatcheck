import Vue from 'vue'
import Weather from 'src/components/Weather'

describe('Weather.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><weather weather="rain" location="London, UK"></weather></div>',
      components: { Weather }
    }).$mount()
    expect(vm.$el.querySelector('h1.title').textContent).toBe('rain')
    expect(vm.$el.querySelector('.weather-symbol').textContent).toContain('🌧')
  })

  it('should should handle no data well', () => {
    const vm = new Vue({
      template: '<div><weather weather="" location=""></weather></div>',
      components: { Weather }
    }).$mount()
    expect(vm.$el.querySelector('.weather-symbol').textContent).toContain('😣')
  })
})

// also see example testing a component with mocks at
// https://github.com/vuejs/vue-loader-example/blob/master/test/unit/a.spec.js#L24-L49
