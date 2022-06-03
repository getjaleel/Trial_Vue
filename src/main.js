import { createApp } from "vue";
import App from "./App.vue";
import "@aws-amplify/ui-vue/styles.css";

// window.alert(
//   "Once filled the Account Creation form,You will be presented with OTP 'On Its way' window.Please close the page and wait until and approval email is recieved in your registered email "
// );

<script>
<button type="button" 
    onclick="window.open('', '_self', ''); window.close();">Close</button>
</script>

createApp(App).mount("#app");
