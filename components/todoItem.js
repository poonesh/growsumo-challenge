Vue.component('todo-item', {
	props: ['todo'],
	data: function(){
		return {
			styleObj:{color: "red"}
		}
	},
	template: `
		<li v-bind:style="styleObj">{{ todo.title }}
			<button v-on:click="donePressed">Done</button>
			<button>Delete</button>
		</li>
		`,
	methods: {
		donePressed: function() {
			this.$emit('done-pressed', this.todo.title);
		}
	}
});

