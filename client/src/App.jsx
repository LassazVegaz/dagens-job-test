import { categories } from './App.hook';
import useAppUtils from './App.hook';

const App = () => {
  const u = useAppUtils();

  return (
    <div className="app">
      <h2>Create a Product</h2>
      <form onSubmit={u.handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            required
            name="name"
            value={u.form.name}
            onChange={u.handleChange}
          />
        </div>

        <div>
          <label>Category</label>
          <select
            required
            name="category"
            value={u.form.category}
            onChange={u.handleChange}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Price</label>
          <input
            type="number"
            required
            name="price"
            step="any"
            value={u.form.price}
            onChange={u.handleChange}
          />
        </div>

        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
};

export default App;
