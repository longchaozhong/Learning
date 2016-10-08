/**
 * Created by longcz on 2016/9/20.
 */
const Comment = React.createClass({
    //can't use arrow function ,cause in arrow function keyword this ref to the parent domain;
    render: function () {
        return (
            <div>
                <h2>{this.props.author}</h2>
                {/*this.props.children is special*/}
                <h3 style={{color: "purple"}}>{this.props.children}</h3>
            </div>
        )
    }
});

const ComponentList = React.createClass({
    render: function () {
        var commentNodes = this.props.data.map(comment => (
            <Comment key={comment.id} author={comment.author}>{comment.text}</Comment>
        ));
        return (
            <div className="component-list">
                {commentNodes}
            </div>
        );
    }
});

const ComponentForm = React.createClass({
    getInitialState(){
        return {
            name: "",
            text: ""
        };
    },
    handleAuthorChange: function (e) {
        this.setState({author: e.target.value});
    },
    handleTextChange: function (e) {
        this.setState({text: e.target.value});
    },
    render: function () {
        return (
            <form className="component-form">
                <input
                    type="text"
                    placeholder="Your name"
                    value={this.state.author}
                    onChange={this.handleAuthorChange}
                />
                <input
                    type="text"
                    placeholder="Say something..."
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <input type="submit" value="Post"/>
            </form>
        );
    }
});

const ComponentBox = React.createClass({
    getInitialState(){
        return {data: []};
    },
    componentDidMount(){
        $.ajax({
            url: "data.json",
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({data: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render: function () {
        return (
            <div className="component-box">
                <h1>Components</h1>
                <ComponentList data={this.state.data}/>
                <ComponentForm/>
            </div>
        )
    }
});


ReactDOM.render(
    <ComponentBox/>,
    document.getElementById('components')
);