

function App() {

  return (
    <>
      {/* HERO SECTION */}
      <div className="bg-[url(https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg)] w-screen h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-neutral-100">Explore the World</h1>
        <p className="text-xl italic">Your travel destiny, written in the stars</p>

      {/* FIRST HALF */}      
      <div className="flex flex-col justify-center items-center gap-1 mt-6">
        <h1 className="text-4xl font-bold text-purple-400">
          Get 40% OFF on your first trip
        </h1>
        <p className="text-xs text-purple-500"> 
          Join our community and be the first to know about the latest news,offers,and exciting content.
        </p>
        <h1 className="text-center text-gray-700 p-2 rounded-lg outline outline-2 outline-gray-300 w-full">
          Your email address
        </h1>
        <button className="w-full h-10 text-lg bg-red-800 rounded-lg text-white font-bold cursor-pointer hover:bg-green-400">
          Claim Offer
        </button>
      </div>

      {/* SECOND HALF */}
      <div className="flex flex-col justify-center items-center gap-1 mt-6">
        <h1 className="text-4xl font-bold text-blue-900">
          Book a trip with us
        </h1>
        <p className="text-base text-blue-500">
          Are you ready to transform your life,achieve your goals, and make a positive change? It all start with taking action. Embrace the opportunity to seize your future now.
        </p>
      </div>
       </div>
    </>
  )
}

export default App
