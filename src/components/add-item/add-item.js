import React, {Component} from 'react';

export default class AddItem extends Component {
    constructor() {
        super();
    }

    state = {
        inputValue: ''
    };

    onChangeValue = (e) => {
        this.setState({
            inputValue: e.target.value
        });
    };

    defaultValue = () => {
        this.setState({
            inputValue: ''
        });
    };

    render() {
        const {addItem, todos} = this.props;
        const {inputValue} = this.state;

        return (
            <div className="input-group mt-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add item"
                    onChange={this.onChangeValue}
                    value={inputValue}
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                        onClick={() => {
                            addItem(inputValue);
                            this.defaultValue()
                        }}
                    >Add
                    </button>
                </div>
            </div>
        )
    }
}