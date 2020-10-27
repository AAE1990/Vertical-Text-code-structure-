import { connect } from "react-redux";
import { verticalTextCreator } from "../redux/verText-reduser";
import VerticalText from "./VerticalText";

const mapStateToProps = (state) => {
    return {
        verticalTextData: state.verticalTextData,
        VerticalTextD: state.verticalTextData.VerticalTextD
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editText: (VerticalTextD) => {
            dispatch(verticalTextCreator(VerticalTextD));
        }
    }
}

const VerticalTextContainer = connect(mapStateToProps, mapDispatchToProps)(VerticalText);

export default VerticalTextContainer;