import React from 'react';
import { Form } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import data_product from '../Assets/product_data';

export const FilterCategory = ({ selectedCategories, setSelectedCategories }) => {
  const categories = [...new Set(data_product.map((product) => product.category))];

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    setSelectedCategories((prevSelectedCategories) =>
      checked
        ? [...prevSelectedCategories, value]
        : prevSelectedCategories.filter((category) => category !== value)
    );
  };

  return (
    <>
    <Accordion defaultActiveKey="0" className="Filtercategory">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="fw-bold text-uppercase">Categories</Accordion.Header>
        <Accordion.Body>
          <ul className="filtercategorylist">
            {categories.map((category, index) => (
              <li key={index}>
                <Form.Check 
                  type="checkbox"
                  id={`check-api-${index}`}
                  label={category}
                  value={category}
                  checked={selectedCategories.includes(category)}
                  onChange={handleCategoryChange}
                />
              </li>
            ))}
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>  
    </>
  );
};
