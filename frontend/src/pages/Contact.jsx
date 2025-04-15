import "@/styles/Contact.css";
import contactImg from "@/assets/images/contactUsImg.jpg";

export default function Contact() {
  return (
    <>
      <div className="contactContainer">
        <section>
          <article>
            <h2>Butiq Concierge</h2>
            <p>
              The reservations team at Butiq are happy to help with your travel
              plans right from a single night stay to a multi-property
              itinerary.
            </p>
            <p>
              We’re at your service from 0900 hours until 1800 hours IST,
              Mondays through Saturdays to plan your unforgettable
              Butiq experience.
            </p>
            <h2 className="flex my-2 ">
              Email:<p className="ml-1">hello@butiq.in</p>
            </h2>
            <h2 className="mb-2 flex">
              Direct Dial & WhatsApp:{" "}
              <p className="ml-1">+91 7611110971 (India)</p>
            </h2>
          </article>

          <form className="form">
            <div className="my-8  w-full">
              <h2>CONTACT US</h2>
              <p className="text-[#757575]">You can reach us anytime</p>
            </div>
            <div className="group-row ">
              <div className="group">
                <input
                  required="true"
                  className="main-input"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div className="group">
                <input
                  required="true"
                  className="main-input"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="group-row">
              <div className="group">
                <input
                  required="true"
                  className="main-input"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="group-row">
              <div className="group">
                <input
                  required="true"
                  className="main-input"
                  type="tel"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="container-1">
              <div className="group">
                <textarea
                  required="true"
                  className="main-input "
                  placeholder="How can we help?"
                  rows={5}
                ></textarea>
              </div>
            </div>
            <button className="submit">Submit</button>
          </form>
        </section>
        <section>
          <div className="h-[100vh]">
            <img src={contactImg} alt="" />
          </div>
        </section>
      </div>
    </>
  );
}
