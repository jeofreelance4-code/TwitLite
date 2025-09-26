import React, { useState } from 'react'

function App() {
  const [posts, setPosts] = useState([])
  const [message, setMessage] = useState("")

  const addPost = () => {
    if (message.trim() !== "") {
      setPosts([{ text: message, time: new Date().toLocaleTimeString() }, ...posts])
      setMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">TwitLite 🚀</h1>

      <div className="w-full max-w-md">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Écris ton message..."
          className="w-full p-2 border rounded mb-2"
        />
        <button
          onClick={addPost}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Publier
        </button>
      </div>

      <div className="w-full max-w-md mt-6 space-y-2">
        {posts.map((post, index) => (
          <div key={index} className="p-3 bg-white shadow rounded">
            <p>{post.text}</p>
            <small className="text-gray-500">{post.time}</small>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
