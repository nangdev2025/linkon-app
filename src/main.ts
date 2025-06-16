import { createSSRApp } from "vue";
import App from "./App.vue";
// import '@/styles/tailwind.css';
import 'vant/lib/index.css';
import '@/styles/index.scss';

export function createApp() {
  const app = createSSRApp(App);
  
  return {
    app,
  };
}
