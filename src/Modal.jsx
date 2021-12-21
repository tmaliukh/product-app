import React from 'react'

export default function Modal({ newProduct, handleCancel, setNewProduct, addNewProduct }) {

    const handleModalInput = (value, type) => {
        switch (type) {
            case 'name':
                setNewProduct({ ...newProduct, name: value });
                break;
            case 'count':
                setNewProduct({ ...newProduct, count: value });
                break;
            case 'width':
                setNewProduct({
                    ...newProduct, size: {
                        ...newProduct.size,
                        width: value
                    }
                });
                break;
            case 'height':
                setNewProduct({
                    ...newProduct, size: {
                        ...newProduct.size,
                        height: value
                    }
                });
                break;
            default:
                return
        }
    }

    return (
        <div className="modal" >

            <div className="modal-content">
                <form className='modalForm'
                onSubmit={Object.keys(newProduct).length !== 0 ? addNewProduct : null}
                >
                    <div>
                        <label for="prodName">Product name: </label>
                        <input id="prodName"
                            type="text"
                            placeholder="Enter name"
                            onChange={({ target }) => handleModalInput(target.value, 'name')}
                        />
                    </div>
                    <div>
                        <label for="count">Count: </label>
                        <input id="count"
                            type="number"
                            placeholder="Enter count"
                            onChange={({ target }) => handleModalInput(target.value, 'count')}
                        />
                    </div>
                    <div>
                        <label for="size">Size: </label>
                        <input id="size"
                            type="number"
                            placeholder="Enter width"
                            onChange={({ target }) => handleModalInput(target.value, 'width')}
                        />
                        <input id="size"
                            type="number"
                            placeholder="Enter height"
                            onChange={({ target }) => handleModalInput(target.value, 'height')}
                        />
                    </div>
                    <div className="btnDiv">
                        <button type="submit">Submit</button>
                        <button type="button" onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
