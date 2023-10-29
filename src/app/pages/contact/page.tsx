import Image from "next/image";
import img from "../../../../public/bg-002.jpg";
const Contacts = () => {
  return (
    <div className="relative w-screen h-full ">
      <section className="relative w-screen h-[50vh]">
        <Image
          src={img}
          alt="me"
          placeholder="blur"
          style={{
            objectFit: "cover",
          }}
          className="absolute h-full w-full top-0 bg-center"
        />
      </section>
      <div className="mx-auto px-4 ">
        <section className=" relative max-w-4xl flex-1 py-10 px-4 -mt-[160px] mb-12  h-fit  mx-auto  w-full min-w-0 flex-col break-words rounded-sm bg-gray-50 dark:bg-gray-900 shadow-xl shadow-gray-500/5">
          <form
            action="https://getform.io/f/9de4233b-6cc3-4e02-a3ef-7c85e5e2a67a"
            method="POST"
            className=" space-y-8 "
          >
            <div>
              <label className="block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
                placeholder="name@example.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm  focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Let me know how i can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-2 px-2 border border-gray-300 hover:bg-[#c9c4c4] dark:bg-gray-700 dark:hover:bg-black "
            >
              Send message
            </button>
          </form>
        </section>
      </div>
      {/* </div> */}
      {/* </section> */}
    </div>
  );
};

export default Contacts;
