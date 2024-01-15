import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/tailwind-light/theme.css";
import "primevue/resources/themes/lara-light-green/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */
import "primeicons/primeicons.css";
import "../src/assets/scss/flag.css"


const app = createApp(App);

import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import Password from 'primevue/password';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Avatar from 'primevue/avatar';
import Badge from 'primevue/badge';
import RadioButton from 'primevue/radiobutton';
import Dropdown from 'primevue/dropdown';
import Tooltip from 'primevue/tooltip';
import Slider from 'primevue/slider';
import Dialog from 'primevue/dialog';
import Textarea from 'primevue/textarea';


app.directive('tooltip', Tooltip);
app.component('InputGroup', InputGroup);
app.component('InputGroupAddon', InputGroupAddon);
app.component('InputSwitch', InputSwitch);
app.component('InputText', InputText);
app.component('InputNumber', InputNumber);
app.component('ButtonComponent', Button);
app.component('Password', Password);
app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('Badge', Badge);
app.component('Avatar', Avatar);
app.component('RadioButtonEle', RadioButton);
app.component('Dropdown', Dropdown);
app.component('Slider', Slider);
app.component('DialogComponent', Dialog);
app.component('TextareaElement', Textarea);
app.use(router);
app.use(PrimeVue);
app.mount("#app");
