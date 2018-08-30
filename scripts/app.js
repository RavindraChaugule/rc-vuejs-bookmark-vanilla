
// Vue Instance
var app = new Vue({
    el: '#app',
    data: function(){
        return {
            bookmarks: [
                {
                    title: 'Google',
                    link: 'http://google.com',
                    isEdit: false
                },
                {
                    title: 'Yahoo',
                    link: 'http://yahoo.com',
                    isEdit: false
                },
                {
                    title: 'Facebook',
                    link: 'http://facebook.com',
                    isEdit: false
                }
            ]
        }
    },
    template:
    
        // Bind the property declared in components
        // v-bind:bookmarks is binding of property
        // ="bookmarks" is data. i.e bookmarks array.

        `<div>
            <bm-head v-bind:bookmarks="bookmarks"></bm-head>
            <bm-list v-bind:bookmarks="bookmarks"></bm-list>            
        </div>`
});
