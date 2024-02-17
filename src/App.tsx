import { Formik, Field, Form, ErrorMessage } from "formik";
import { userSchema } from "./validation/user";

function App() {
  const inputArray = [
    {
      name: "name",
      type: "text",
      placeholder: "Name",
    },
    {
      name: "email",
      type: "text",
      placeholder: "Email",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
    },
  ];

  return (
    <main className="App">
      <h1 className="text-2xl text-[coral] font-mono text-center">
        Yup Formik
      </h1>

      <div className="flex items-center justify-center text-black">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={userSchema}
          onSubmit={(fields) => {
            alert("Form Submitted!");
            console.log(fields);
          }}
        >
          <Form className="w-[25rem]">
            {inputArray.map(({ name, type, placeholder }, index) => (
              <div key={index} className="flex flex-col my-10">
                <Field
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  className="px-4 py-2 border-2 text-xl rounded-md border-solid border-[coral] relative"
                  required
                />
                <ErrorMessage
                  name={name}
                  component="span"
                  className="font-semibold text-right text-red-500"
                />
              </div>
            ))}
            <button
              type="submit"
              className="px-4 py-2 mx-auto font-semibold bg-white rounded-lg"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </main>
  );
}
export default App;
