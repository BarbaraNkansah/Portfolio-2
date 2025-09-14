
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full">
        <div className=" max-w-3xl max-auto font-poppins mt-40 text-center">
          <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl tracking-wide">
            Have a question or want to work together? Send me a message and I'll
            get back to you as soon as possible.
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center mt-15">
          <form
            action="https://formspree.io/f/mpwjollb"
            method="POST"
            className="space-y-6 p-8 max-w-3xl mx-auto shadow-2xl font-poppins rounded-lg border border-transparent w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex-1 flex-col">
                <label
                  htmlFor="name"
                  className="mb-2 font-medium text-bold text-xl"
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full p-2 border-2 rounded-md border-transparent bg-gray-200"
                  required
                />
              </div>

              <div className="flex-1 flex-col">
                <label
                  htmlFor="email"
                  className="mb-2 font-medium text-bold text-xl"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="name"
                  name="email"
                  placeholder="You@example.com"
                  className="w-full p-2 border-2 rounded-md border-transparent bg-gray-200"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-2 font-medium text-bold  text-xl"
              >
                Subject
              </label>
              <input
                type="text"
                id="name"
                name="subject"
                placeholder="What's this about?"
                className="w-full p-2 border-2 rounded-md border-transparent bg-gray-200"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 font-medium text-bold  text-xl"
              >
                Message
              </label>
              <textarea
                name="message"
                placeholder="Questions, Say Hello or Tell me about yourself"
                className="w-full p-2 border border-transparent bg-gray-200 rounded-md h-48 resize-vertical"
                required
              >
                {" "}
              </textarea>
            </div>

            <button
              input
              type="submit"
              value="Sumbit"
              className=" px-6 py-2 bg-[#00c9a7] text-white shadow hover:bg-[#00b091] transition h-10 w-40 rounded-full"
            >
              {" "}
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
