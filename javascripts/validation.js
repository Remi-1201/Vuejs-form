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
    // モーダルの表示状態を管理するプロパティを追加
    modalView: false,
  },
  methods: {
    openCheckArea() {
      // validationがfalseの場合はmodalViewをtrueにするメソッドを実行
      if (!this.validation) {
        this.showModal();
      } else {
        this.confirmView = true;
      }
    },
    closeCheckArea() {
      this.confirmView = false;
    }
  },
  // modalViewをtrueにするメソッドを追加
  showModal() {
    this.modalView = true;
  },
  // modalViewをfalseにするメソッドを追加
  hideModal() {
    this.modalView = false;
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