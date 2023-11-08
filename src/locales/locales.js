import en from './en.js'
import fi from './fi.js'
let lanuage = fi;

if (localStorage.getItem('locale')) {
  if (localStorage.getItem('locale') == 'fi') {
    lanuage = fi;
  }

  if (localStorage.getItem('locale') == 'en') {
    lanuage = en;
  }
}

export default {
  install: (app, options) => {
    app.config.globalProperties.$locales = (key) => {
      if (lanuage[key] == null) {
        console.log('test');
        return en[key]
      }
      return lanuage[key];
    }
  }
}
