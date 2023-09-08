const app = new Vue({
  el: '#app',
  data: {
    errorMessage: 'Eメールが一致しません',
    formData: {
      name: '',
      email: '',
      emailConfirm: '',
      content: '',
      region: '',
    },
    regions: [
      { id: 1, name: '東北' },
      { id: 2, name: '関東' },
      { id: 3, name: '関西' }
    ],
    confirmView: false,
  },
  methods: {
    openCheckArea() {
      // 要件2の改修
      if (!this.validation) return false;
      this.confirmView = true;
    },
    closeCheckArea() {
      this.confirmView = false;
    }
  },
  computed: {
    // 要件1の改修
    validation: function() {
      return this.formData.email === '' || this.formData.emailConfirm === '' || this.formData.email === this.formData.emailConfirm
    },
    // 要件3の改修
    errorClass: function() {
      return this.validation ? false : 'alert_bg';
    }
  },
})