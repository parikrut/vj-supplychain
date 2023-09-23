import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import { useForm, ValidationError } from '@formspree/react';

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const [state, handleSubmit] = useForm("xoqokred");

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7">
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="name"
                  type="text"
                  placeholder="Name"
                  id="name"
                />
                <ValidationError
                  prefix="name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                  id="email"
                />
                <ValidationError
                  prefix="email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  id="subject"
                />
                <ValidationError
                  prefix="subject"
                  field="subject"
                  errors={state.errors}
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-textarea w-full rounded-md"
                  rows="7"
                  placeholder="Your message"
                  id="message"
                  name="message"
                />
                <ValidationError
                  prefix="message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Now
              </button>
            </form>
            {state.succeeded && <p>Successfully submitted</p>}
          </div>
          <div className="content col-12 md:col-6 lg:col-5">
            {markdownify(info.title, "h4")}
            {markdownify(info.description, "p", "mt-4")}
            <ul className="contact-list mt-5">
              {info.contacts.map((contact, index) => (
                <li key={index}>
                  {markdownify(contact, "strong", "text-dark")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
