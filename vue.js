const { createApp, ref } = Vue

fetch('./data.json').then(res => {
  const el = document.getElementById('json')
  res.json().then(data => {
    createApp({
      setup() {
        return {
          items: ref(data),
        }
      }
    }).mount('#app')
  })
})
