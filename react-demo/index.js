// the "app" component

// Components let you split the UI into independent, 
// reusable pieces, and think about each piece in isolation. 
// Conceptually, components are like JavaScript functions. 
// They accept arbitrary inputs (called “props”) and return 
// React elements describing what should appear on the screen.
class TodoApp extends React.Component {
    // state is similar to $scope in angular
    state = {
        items: [],
        newTodo: ""
    };

    handleTextChange = (event) => {
        // TODO: update state but does not trigger update (re-render) down through components
        // this.state.newTodo = event.target.value;

        this.setState({
            newTodo: event.target.value
        });
    }


    handleAddItem = (event) => {
        // prevent default action of submit button
        event.preventDefault();

        // TODO: create new todo item
        let newItem = {
            id: Date.now(),
            text: this.state.newTodo,
            done: false
        }

        // TODO: add item to array
        this.setState((prevState) => ({
            items: prevState.items.concat(newItem),  // unlike push creates a new array
            newTodo: ''
        }));

        // TODO: clear form

    }

    // mark item done with id == itemId
    markItemCompleted = (itemId) => {
        var updatedItems = this.state.items.map(item => {
            if (itemId === item.id) {
                item.done = !item.done;
            }

            return item;
        });

        this.setState({
            items: updatedItems
        });
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <div className="row">
                    <div className="col-md-3">
                        <TodoList items={this.state.items}
                                  onItemCompleted={this.markItemCompleted}
                        />
                    </div>
                </div>

                <form className="row">
                    <div className="col-md-3">
                        <input type="text" className="form-control"
                               onChange={this.handleTextChange}
                               value={this.state.newTodo}/>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-primary" onClick={this.handleAddItem}>Add</button>
                    </div>
                </form>
            </div>
        );
    }
}

// the "list" component
// separating this allow us to have multiple todo lists
class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map((item) => (
                    <TodoItem id={item.id}
                              text={item.text}
                              completed={item.done}
                              onItemCompleted={this.props.onItemCompleted}
                    />
                        ))}
            </ul>
        );
    }
}

// the "list item" or individual todo item component
class TodoItem extends React.Component {
    markCompleted = (event) => {
        this.props.onItemCompleted(this.props.id);
    };

    render() {
        let itemClass = "form-check " + (this.props.completed ? "done" : "notdone")

        return (
            <li className={itemClass}>
                <label className="form-check-label">
                    <input type="checkbox" className="form-check-input"
                    onChange={this.markCompleted}/>
                {this.props.text}
                </label>
            </li>
        );
    }
}


// run app
ReactDOM.render(<TodoApp/>, document.getElementById("app"));