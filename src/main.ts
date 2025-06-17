import { createSSRApp } from "vue";
import App from "./App.vue";
import '@/styles/index.css';
// import '@/styles/tailwind.css';
import 'vant/lib/index.css';

export function createApp() {
  const app = createSSRApp(App);
  
  return {
    app,
  };
}
