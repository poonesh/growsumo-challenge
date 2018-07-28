Vue.component('todo-item', {
	props: ['todo'],
	data: function(){
		return {
			styleObj:{color: "red"}
		}
	},
	template: `
		<li v-bind:style="styleObj">{{ todo.title }}
			<button>Done</button>
			<button>Delete</button>
		</li>
		`
});

