import Container from "@/components/Container";
import { Formik, Form, Field, ErrorMessage } from "formik";

/* eslint-disable react/no-unescaped-entities */
const BusinessDiscussion = () => {
    const handleSubmit = async (values: any) => {
      try {
        console.log("Email notification sent successfully");
      } catch (error) {
        console.error("Error submitting form:", error);
      }
      console.log("Form values:", values);
    };
  return (
    <Container>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">Business Discussion</h1>
        <p className="text-gray-700 mb-4">
          For business inquiries and discussions, please feel free to contact us
          through the following methods:
        </p>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
            <p className="text-gray-700">
              <strong>Phone:</strong> +265 999 952 599 / +265 888 700 909
              <br />
              <strong>Email:</strong> Cecilia.chalamanda@gmail.com
              <br />
              <strong>WhatsApp:</strong> +265 999 952 599
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">
              Business Inquiry Form
            </h2>
            <p className="text-gray-700">
              If you would like to discuss business opportunities or have any
              inquiries, please use the form below:
            </p>{" "}
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Send Us Your Inquiry
              </h2>
              <Formik
                initialValues={{ name: "", email: "", message: "" }}
                onSubmit={handleSubmit}
              >
                <Form>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block font-semibold text-gray-700"
                    >
                      Your Name
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block font-semibold text-gray-700"
                    >
                      Your Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block font-semibold text-gray-700"
                    >
                      Your Message
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      rows={4}
                      className="form-textarea"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-500"
                    />
                  </div>

                  <div className="mb-4">
                    <button
                      type="submit"
                      className="text-primary headerDiv transition py-3 px-6 rounded-full bg-slate-200 hover:bg-white duration-300 text-sm uppercase font-semibold"
                    >
                      Submit Inquiry
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>{" "}
        </div>
      </div>
    </Container>
  );
};

export default BusinessDiscussion;
