Vue.component('bm-list',{
    data: function () {
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
    
    // Back slash (\) can be used for multiline string
    // It is called "Newline Escapes"
    // Currently used technique called "template literal"
    // Not supportd in IE

    `<div>
        
        <bm-item v-bind:bookmark="bookmark" v-for="(bookmark, index) in bookmarks">
            
        </bm-item>
    </div>
    `
});