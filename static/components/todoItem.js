Vue.component('todo-item', {
	props: ['todo'],
	data: function(){
		return {
			styleObj:{color: "black", "list-style-type": "none"}
		}
	},
	template: `
		<li v-bind:style="styleObj">
			<button v-on:click="donePressed">Done</button>
			<button v-on:click="deletePressed">Delete</button>
			{{ todo.title }}
			<span v-if="!todo.completed">:(</span>
			<span v-else>:)</span>
		</li>
		`,
	methods: {
		donePressed: function() {
			this.$emit('done-pressed', this.todo.title);
		},
		deletePressed: function() {
			this.$emit('delete-pressed', this.todo.title);
		},
	}
});

