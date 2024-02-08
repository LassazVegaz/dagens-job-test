const App = () => (
  <div className="app">
    <h2>Create a Product</h2>
    <form>
      <div>
        <label>Name</label>
        <input type="text" />
      </div>

      <div>
        <label>Category</label>
        <input type="text" />
      </div>

      <div>
        <label>Price</label>
        <input type="text" />
      </div>

      <div>
        <button type="submit">Create</button>
      </div>
    </form>
  </div>
);

export default App;
