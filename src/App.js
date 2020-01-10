import React, { Component } from 'react';
import './App.scss';
import { connect } from "react-redux";
import { addFn, subtractFn, multiFn, divisionFn }  from './actions/index'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftvalue: 0,
      rightvalue: 0,
      operator: ""
    };
    this.myRef = React.createRef();
  }

  componentDidMount() {}
  
  getNumVal = val => {
    if (this.state.operator === "") {
      const leftvalue = `${this.state.leftvalue}${val}`;
      this.setState({
        leftvalue
      });
    } else {
      const rightvalue = `${this.state.rightvalue}${val}`;
      this.setState({
        rightvalue
      });
    }
    this.myRef.current.value += val;
  };

  

  setOperator = opt => {
    this.setState({
      operator: opt
    });
    this.myRef.current.value += opt;
  };

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
    this.myRef.current.value = nextProps.data;
  }

  
  performOperation(calcOperator) {
    switch (calcOperator) {
      case "+":
          this.props.addFn(this.state.leftvalue, this.state.rightvalue)      
        break;
      case '-':
        this.props.subtractFn(this.state.leftvalue, this.state.rightvalue)       
        break;
      case 'x':
        this.props.multiFn(this.state.leftvalue,this.state.rightvalue)
        break;
      case '/':
        this.props.divisionFn(this.state.leftvalue,this.state.rightvalue)
        break;  
      default:
        break;
    }  
  }

  clear = () => {
    this.myRef.current.value = "";
    this.setState({
      leftvalue: "",
      rightvalue: "",
      operator: ""
    });
  };
  
  render() {
    return (
      <>      
        <div className="calc_keypad">
          <input className="operation_field" type="text" name="calculator" id="calculator" ref={this.myRef} />
          <span className="number_key" onClick={() => this.getNumVal("1")}>1 </span>
          <span className="number_key" onClick={() => this.getNumVal("2")}>2 </span>
          <span className="number_key" onClick={() => this.getNumVal("3")}>3 </span>
          <span className="number_key" onClick={() => this.getNumVal("4")}>4 </span>
          <span className="number_key" onClick={() => this.getNumVal("5")}>5 </span>
          <span className="number_key" onClick={() => this.getNumVal("6")}>6 </span>
          <span className="number_key" onClick={() => this.getNumVal("7")}>7 </span>
          <span className="number_key"  onClick={() => this.getNumVal("8")}>8 </span>
          <span className="number_key" onClick={() => this.getNumVal("9")}>9 </span>
          <span className="number_key" onClick={() => this.getNumVal("0")}>0 </span>
          <button className="operator_key" onClick={() => this.setOperator("+")}>+</button>
          <button className="operator_key" onClick={() => this.setOperator("-")}>-</button>
          <button className="operator_key" onClick={() => this.setOperator("/")}>/</button>
          <button className="operator_key" onClick={() => this.setOperator("x")}>x</button>
          <button className="operator_key" onClick={()=>this.performOperation(this.state.operator)}>=</button>
          <button className="special_key" onClick={this.clear}>Clear</button>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  data: state.calcs.data
})
const mapDispatchToProps = dispatch => ({
  addFn: (leftValue, rightValue) => dispatch(addFn(leftValue, rightValue)),
  subtractFn: (leftValue, rightValue) => dispatch(subtractFn(leftValue, rightValue)),
  multiFn:(leftValue, rightValue) => dispatch(multiFn(leftValue,rightValue)),
  divisionFn:(leftValue, rightValue) => dispatch(divisionFn(leftValue, rightValue))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);