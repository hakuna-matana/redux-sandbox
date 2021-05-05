import * as React from 'react';
import {connect} from "react-redux";

import * as actions from "../actions";
import {bindActionCreators} from "redux";

const Counter = ({counter, inc, dec, rnd}) => {
  return <div className="p-4 bg-light">
    <h2 className="text-dark">{counter}</h2>
    <button onClick={dec} className="btn btn-primary btn-lg">DEC</button>
    <button onClick={inc} className="btn btn-primary btn-lg">INC</button>
    <button onClick={rnd} className="btn btn-primary btn-lg">RND</button>
  </div>
};

const mapStateToProps = (state) => {
    return {
      counter: state
    }
};


// вариант с коллбеком в качестве mapDispatchToProps
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// вариант с объектом actions вместо mapDispatchToProps
export default connect(mapStateToProps, actions)(Counter);