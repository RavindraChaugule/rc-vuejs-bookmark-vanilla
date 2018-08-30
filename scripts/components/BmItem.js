Vue.component('bm-item', {
    props:['bookmark'],
    data: function(){
        return{
            cachedTitle: '',
            cachedLink: '',
        }
    },
    methods:{
        editBookmark: function (bookmark) {
            //this.cachedTitle = bookmark.title;
            //this.cachedLink = bookmark.link;
            bookmark.isEdit = true
        },
        doneEdit: function (bookmark) {
            if (bookmark.title.trim().length == 0 || bookmark.link.trim().length == 0) {
                alert('!! Something is missing');
                //bookmark.title = this.cachedTitle
                //bookmark.link = this.cachedLink
            } else {
                bookmark.isEdit = false;
            }
        },
        deleteBookmark: function (index) {
            this.bookmarks.splice(index, 1);
        }
    },
    template:`
        <div>
            <div v-show="bookmark.isEdit = !bookmark.isEdit" class="panel-block">
                <span class="icon is-small is-left">
                <i class="far fa-bookmark"></i>
                </span>

                <a class="bm-link" v-bind:href="bookmark.link">{{ bookmark.title }}</a>

                <span v-on:click="editBookmark(bookmark)" class="button is-info bm-delete is-small bm-edit">
                    <i class="fas fa-pencil-alt"></i> Edit
                </span>

                <span v-on:click="deleteBookmark(index)" class="button is-danger bm-delete is-small">
                    <i class="fas fa-times-circle"></i> Delete
                </span>
            </div>


            <div v-show="bookmark.isEdit = !bookmark.isEdit" class="edit-field">
                <input v-model="bookmark.title" class="input" type="text" placeholder="Title">
                <input v-model="bookmark.link" class="input" type="text" placeholder="URL">
                <button v-on:click="doneEdit(bookmark)" class="button is-primary bm-add">Done</button>
            </div>
        </div>
    `
})