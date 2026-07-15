import React, { useEffect, useState } from 'react';
import FullMenuPage from '../components/FullMenuPage';

const MenuPage = ({ initialCategory = 0, initialSubCategory = 0, onBack, onNavigate }) => {
  const [categoryIndex, setCategoryIndex] = useState(initialCategory);
  const [subCategoryIndex, setSubCategoryIndex] = useState(initialSubCategory);

  useEffect(() => {
    setCategoryIndex(initialCategory);
    setSubCategoryIndex(initialSubCategory);
  }, [initialCategory, initialSubCategory]);

  return (
    <FullMenuPage
      initialCategory={categoryIndex}
      initialSubCategory={subCategoryIndex}
      onClose={onBack}
      onNavigate={onNavigate}
    />
  );
};

export default MenuPage;
