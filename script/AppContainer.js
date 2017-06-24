import Redux from 'redux';
import { connect } from 'react-redux'; 
import Main from './main.js';

const mapStateToProps = (state) => {

	return {
		headerSelected:state.header.headerSelected
	};
}

const mapDispatchToProps = (dispatch) => {

	return {

		meaninglessAction : () => {
			dispatch({type:"DUMMY_CLICK", value: 1});
		},

		handleHeaderTabChange : (target) => {
			dispatch({type:"HEADER_TAB_CHANGE", value:target});
		}

	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);