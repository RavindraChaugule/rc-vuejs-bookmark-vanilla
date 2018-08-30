Vue.component('bm-list',{
    props:['bookmarks'],

    template:
    
    // Back slash (\) can be used for multiline string
    // It is called "Newline Escapes"
    // Currently used technique called "template literal"
    // Not supportd in IE

    `<div>
        <bm-item v-bind:bookmark="bookmark" v-for="(bookmark, index) in bookmarks"></bm-item>
    </div>
    `
});