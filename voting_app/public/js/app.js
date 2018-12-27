class ProductList extends React.Component {
  render() {
    return (
      <div className='ui unstackable items'>
      Basic React Component.
      </div>
    );
  }
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);
