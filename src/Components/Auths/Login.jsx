
import background from "../../assets/background.png";
import leftImage from "/src/assets/images.png";

const LoginPage = () => {
  return (
    <div
      className="min-h-screen flex bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hidden lg:flex lg:w-1/2 justify-center items-center bg-black bg-opacity-60">
        <img src={leftImage} alt="Artist" className="w-4/5 h-auto" />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-white p-8 bg-black bg-opacity-70">
        <h2 className="text-2xl font-semibold mb-6">Choose Account Type</h2>
        <div className="flex gap-4 mb-6">
          <div className="p-4 border border-blue-500 rounded-md text-center cursor-pointer hover:bg-blue-500">
            <img
              src="/artist-icon.png"
              alt="Artist Icon"
              className="h-12 w-12 mx-auto mb-2"
            />
            Artist
          </div>
          <div className="p-4 border border-yellow-500 rounded-md text-center cursor-pointer hover:bg-yellow-500">
            <img
              src="/client-icon.png"
              alt="Client Icon"
              className="h-12 w-12 mx-auto mb-2"
            />
            Client
          </div>
        </div>
        <div className="w-full max-w-sm">
            <input
              type="email"
              placeholder="Email"
            className="w-full bg-gray-800 p-3 rounded-md text-sm text-white mb-4 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
            className="w-full bg-gray-800 p-3 rounded-md text-sm text-white mb-2 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          <div className="text-right text-sm text-blue-400 mb-4 cursor-pointer">
            Forget?
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md w-full max-w-sm">
            Login
          </button>
        <div className="mt-4 text-sm">
          No account?{" "}
          <span className="text-blue-400 cursor-pointer">Sign up</span>
          </div>
        <div className="mt-6">
          <p className="text-center text-white mb-2">Or Login with:</p>
            <div className="flex justify-center gap-4">
            <button className="p-2 bg-gray-700 rounded-full">
              <img src="/google-icon.png" alt="Google" className="h-6" />
              </button>
            <button className="p-2 bg-gray-700 rounded-full">
              <img src="/facebook-icon.png" alt="Facebook" className="h-6" />
              </button>
            <button className="p-2 bg-gray-700 rounded-full">
              <img src="/microsoft-icon.png" alt="Microsoft" className="h-6" />
              </button>
            <button className="p-2 bg-gray-700 rounded-full">
              <img src="/twitter-icon.png" alt="Twitter" className="h-6" />
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
