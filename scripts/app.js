
// Vue Instance
var app = new Vue({
    el: '#app',
    template:`
        <div>
            <bm-head v-bind:bookmark="bookmark"></bm-head>
            <bm-list></bm-list>            
        </div>
    `
});