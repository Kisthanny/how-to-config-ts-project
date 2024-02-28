import { createApp } from "vue";
import HelloTsx from "./HelloTsx";
import HelloVue from "./HelloSfc.vue";
const App = () =>{
    return <div>
        <HelloTsx />
        <HelloVue />
    </div>
}

createApp(App).mount("#root")