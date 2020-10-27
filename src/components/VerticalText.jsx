import React, { Fragment } from 'react';
import FadeIn from 'react-fade-in';
import style from './VerticalText.module.css'

class VerticalText extends React.Component {

    state = {
        editMode: this.props.editMode,
        VerticalTextD: this.props.VerticalTextD
    }

    handleTextChange = ({ target: { value } }) => {
        this.setState({
            VerticalTextD: value,
        })
    }

    activateEditMode = ({ target: { value } }) => {
        this.setState({
            editMode: value
        });
        this.props.editText(this.state.VerticalTextD);
    }

    render() {
        const { VerticalTextD } = this.state;

        return (
            <div>
                <Fragment>
                    <form onChange={this.activateEditMode}>
                        <label>
                            <input type="text" name="verticalText" value={VerticalTextD}
                                onChange={this.handleTextChange} autoFocus={true} className={style.textAreaBig} />
                        </label>
                    </form>
                </Fragment>
                <h3>введите любое слово</h3>
                <div className={style.verticalText}>
                    <FadeIn>
                        <div> <h1>{this.state.VerticalTextD}</h1> </div>
                        <p>п</p>
                        <p>р</p>
                        <p>и</p>
                        <p>в</p>
                        <p>е</p>
                        <p>т</p>
                    </FadeIn>
                </div>
            </div>
        );
    }
}

export default VerticalText;
