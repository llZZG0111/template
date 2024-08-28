import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import draggable from 'vuedraggable';
// if (import.meta.env.MODE === "production") {
//   window.ftwo &&
//     window.ftwo.init({
//       appKey: "这是申请的appKey"
//     });
// }

const app = createApp(App);
app.use(router).mount('#app');
app.component('VueDraggable', draggable);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// fetch('/api/suggest?q=love&num=1&doctype=json').then((res) => {
//   console.log('res', res);
//   console.log(
//     'res',
//     res.text().then((ress) => {
//       console.log('ress', JSON.parse(ress));
//     })
//   );
// });
