const Post = () => (
  <div className="post-container">
    {' '}
    <input type="text" />
    <button>Enter</button>
    <textarea />
    <style jsx>
      {`
        .post-container {
          display: flex;
          flex-direction: column;
        }

        input {
          border: none;
        }

        textarea {
          border: none;
          height: 250px;
          width: 350px;
        }
      `}
    </style>
  </div>
)

export default Post
