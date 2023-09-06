const app = new Vue({
  el: '#app',
  data: {
    errorMessage: 'Eメールが一致しません',
    formData: {
      name: '',
      email: '',
      emailConfirm: '',
      content: '',
    },
    regions: [
      { id: 1, name: '東北' } ,
      { id: 2, name: '関東' } ,
      { id: 3, name: '関西' } 
    ]
  }
})