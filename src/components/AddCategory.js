import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ categories, setcategories }) => {

    const [inputValue, setinputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let exits = false;
        if (inputValue.trim().length !== 0) {
            for (let x in categories) {
                
                if (categories[x] === inputValue) {
                    exits = true;
                    break;
                }
            }
            if (!exits) {
                setcategories(cate => [inputValue,...cate]);
                setinputValue('');
            }
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Category</h2>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setinputValue(e.target.value)}
            />
        </form>

    );
};

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired,
}
