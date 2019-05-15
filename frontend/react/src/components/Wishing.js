import React from 'react';

const WishingForm = (props) => {

    let author = '';
    let content = '';

    const handleWish = (e) => {
        // todo post data
        console.log(author, content)
    };

    const handleAuthor = (e) => {
        author = e.target.value
    };

    const handleContent = (e) => {
        content = e.target.value
    };

    return (
        <div className="form wish-form" id="content">
            <h2 className="title">许愿</h2>
            <div className="form-group">
                <label htmlFor="author">姓名</label>
                <input className="form-control"
                    id="author"
                    type="text"
                    placeholder="Enter your name"
                    defaultValue={author}
                    onChange={handleAuthor} />
            </div>

            <div className="form-group">
                <label htmlFor="wish-content">内容</label>
                <textarea className="form-control"
                    id="wish-content"
                    rows="3"
                    onChange={handleContent}
                    defaultValue={content} />
            </div>

            <button type="button" className="btn btn-primary" onClick={handleWish}>开始许愿</button>
        </div>
    );
};

export default WishingForm;
