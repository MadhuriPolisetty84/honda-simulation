const Subscribe = () => {
  return (
    <div className="flex flex-col px-10 py-8 text-sm bg-gray-100 items-center">
      <div>
        <h2 className="text-2xl font-bold mb-2"> Stay up-to-date with Honda</h2>
      </div>
      <div>
        <p className="text-base text-gray-600 mb-6">
          {" "}
          Subscribe now to become a Honda insider.
        </p>
      </div>
      <div>
        <form className="flex gap-4 items-end">
          <div className="flex flex-col gap-1">
            <label htmlFor="fullName" className="text-sm">
              FULL NAME
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Full Name"
              className="px-4 py-4 w-72 bg-white"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm">
              EMAIL ADDRESS<span className="text-red-600">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              required
              className=" px-4 py-4 w-72 bg-white"
            />
          </div>

          <button
            type="submit"
            className="bg-red-600 text-white font-bold px-8 py-3 rounded-md"
          >
            SUBSCRIBE NOW
          </button>
        </form>
      </div>
    </div>
  );
};
export default Subscribe;
