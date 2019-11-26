import Vue from "vue";
import Vuetify from "vuetify/lib";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "fa"
  },
  rtl: false,
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: "#22022A",
        accent: "#FF4081",
        secondary: "#ffe18d",
        success: "#4CAF50",
        info: "#2196F3",
        warning: "#FB8C00",
        error: "#FF5252"
      },
      light: {
        primary: "#03a9f4",
        accent: "#67daff",
        secondary: "#6200ea",
        success: "#4CAF50",
        info: "#2196F3",
        warning: "#FB8C00",
        error: "#FF5252"
      }
    }
  }

  //   themes: {
  //     theme: {
  //       light: {
  //         primary: "#9c27b0",
  //         secondary: "#e91e63",
  //         accent: "#2196f3",
  //         error: "#f44336",
  //         warning: "#ff9800",
  //         info: "#cddc39",
  //         success: "#4caf50"
  //       }
  //     }
  //   }
});
