Vue.component('todo-item', {
	props: ['todo'],
	data: function(){
		return {
			styleObj:{color: "black"}
		}
	},
	template: `
		<li v-bind:style="styleObj">{{ todo.title }}
			<button v-on:click="donePressed">Done</button>
			<button v-on:click="deletePressed">Delete</button>
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

