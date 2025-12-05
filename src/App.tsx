

function App() {

  return (
    <>
      <div>
        <h1 className="text-6xl font-bold text-neutral-50">Explore the World</h1>
        <p className="text-xl italic">Your travel destiny, written in the stars</p>
      </div>

      {/* FIRST HALF */}
      <div className="flex flex-col justify-items">
        <h1 className="text-xl font-bold text-purple-400">
          Get 40% OFF on your first trip
        </h1>
        <p className="text-xs text-purple-500">
          Join our community and be the first to know about the latest news,offers,and exciting content.
        </p>
      </div>

      {/* SECOND HALF */}
      <div className="flex flex-col justify-items">
        <h1 className="text-4xl font-bold text-blue-900">
          Book a trip with us
        </h1>
        <p className="text-base text-blue-500">
          Are you ready to transform your life,achieve your goals, and make a positive change? It all start with taking action. Embrace the opportunity to seize your future now.
        </p>
      </div>

      {/* THIRD HALF */}
      <div>
        <img src="https://cdn.wallpapersafari.com/72/36/ncOaDB.jpg" alt="" />
      </div>

    </>
  )
}

export default App
