Vue.component('bm-head', {
    props:['bookmarks'],
    data: function(){
        return{
            newTitle: '',
            newLink: '',
        }
    },
    methods: {
        addBookmark: function () {
            if (this.newTitle.trim().length == 0 || this.newLink.trim().length == 0) {
                alert('!! Something is missing');
            } else {
                this.bookmarks.push({
                    title: this.newTitle,
                    link: this.newLink,
                    isEdit: false
                });
            }
            this.newTitle = '';
            this.newLink = '';
        }
    },
    template: `
        <div class="form-head">
            <div class="columns">
                <div class="column">
                    <input v-on:keyup.enter="addBookmark" v-model="newTitle" class="input" type="text" placeholder="Title">
                </div>
                <div class="column">
                    <input v-on:keyup.enter="addBookmark" v-model="newLink" class="input" type="text" placeholder="URL">
                </div>
                <div class="column is-one-fifth">
                    <button v-on:click="addBookmark" class="button is-primary bm-add">Add</button>
                </div>
            </div>
        </div>
    `
});