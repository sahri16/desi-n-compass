import React, { useEffect, useState } from 'react';
import FullMenuPage from '../components/FullMenuPage';

const MenuPage = ({ initialCategory = 0, onBack }) => {
  const [categoryIndex, setCategoryIndex] = useState(initialCategory);

  useEffect(() => {
    setCategoryIndex(initialCategory);
  }, [initialCategory]);

  return (
    <FullMenuPage
      initialCategory={categoryIndex}
      onClose={onBack}
    />
  );
};

export default MenuPage;
