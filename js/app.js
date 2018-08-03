const importance = [
    {emoji: '😁', color: 'mediumseagreen'},
    {emoji: '😰', color: 'orange'},
    {emoji: '😵', color: 'crimson'},
    {emoji: '🦁', color: "#ff691f"},
    {emoji: '🐯', color: "#fab81e"},
    {emoji: '🐟', color: "#7fdbb6"},
    {emoji: '🐸', color: "#19cf86"},
    {emoji: '🐬', color: "#91d2fa"},
    {emoji: '🐳', color: "#1b95e0"},
    {emoji: '🐘', color: "#abb8c2"},
    {emoji: '🐙', color: "#e81c4f"},
    {emoji: '🐷', color: "#f58ea8"},
    {emoji: '🦄', color: "#981ceb"},
    {emoji: '🐰', color: "#ffffff"},
    {emoji: '🐺', color: "#000000"}
];

new Vue({
    el: '#app',
    data: {
        newTodo: '',
        newImportance: importance[0],
        showImportancePicker: false,
        todos: [],
        categories: importance
    },
    methods: {
        setNewImportance: function(selected){
            this.newImportance = selected;
            this.showImportancePicker = false;
        }
    },
    computed: {
        newTodoHasText: function(){
            return this.newTodo.length > 0 ? 'has-text' : '';
        },
        importanceIsActive: function(){
            return this.showImportancePicker ? 'active' : '';
        }
    }
});
