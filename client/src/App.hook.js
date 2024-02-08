import { useState, useCallback } from 'react';
import routes from './routes.json';

export const categories = ['meat', 'greens', 'fish'];

const initialValues = {
  name: '',
  category: '',
  price: '',
};

const useAppUtils = () => {
  const [form, setForm] = useState(initialValues);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const url = process.env.REACT_APP_API_URL + routes.products;

      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        });
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        setForm(initialValues);
        alert('Product created successfully');
      } catch (e) {
        console.error(e);
        alert('Sorry something went wrong');
      }
    },
    [form]
  );

  return {
    form,
    handleChange,
    handleSubmit,
  };
};

export default useAppUtils;
