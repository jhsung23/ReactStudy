import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// 방법 1. mapStateToProps와 mapDispatchToProps를 따로 작성해 넣어준다.
const mapStateToProps = (state) => ({
  number: state.counter.number,
});

const mapDispatchToProps = (dispatch) => ({
  increase: () => dispatch(increase()),
  decrease: () => dispatch(decrease()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// 방법 2. connect 안에서 작성
// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   (dispatch) => ({
//     increase: () => {
//       dispatch(increase());
//     },
//     decrease: () => {
//       dispatch(decrease());
//     },
//   }),
// )(CounterContainer);

// 방법 3. bindActionCreators 사용
// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   (dispatch) => bindActionCreators({ increase, decrease }, dispatch),
// )(CounterContainer);

// 방법 4. dispatch 함수 대신 객체 형태로 넣어주기
// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   { increase, decrease },
// )(CounterContainer);
