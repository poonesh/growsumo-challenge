
// Vue component for each todo
Vue.component('todo-item', {
	// props passes from the parnt element to todo-item component
	props: ['todo'],
	// HTML format of the todo-item component
	template: `
		<li v-bind:style="styleObj">
			<button v-on:click="donePressed" v-if="!todo.completed">Complete</button>
			<button v-on:click="deletePressed" >Delete</button>
			<span v-bind:style="strikeThroughStyle">{{todo.title}}</span>
			<span v-if="!todo.completed">:(</span>
			<span v-else>:)</span>
		</li>
		`,
	// methods which can be used by the todo-item component
	methods: {
		// this is fired whenever the complete button is pressed
		donePressed: function() {
			this.$emit('done-pressed', this.todo.title);
		},
		// this is fired whenever the delete button is pressed
		deletePressed: function() {
			this.$emit('delete-pressed', this.todo.title);
		},
	},
	// computed data properties
	computed: {
		styleObj:function(){
			return{
				color: this.todo.completed ? "green" : "black", 
				"list-style-type": "none", 
				position: "relative", 
				left: "-25px",
				"margin-top": "10px",
			}
		},
		strikeThroughStyle:function(){
			return{
				"text-decoration": this.todo.completed ? "line-through" : "",
			}
		},
	}
});

