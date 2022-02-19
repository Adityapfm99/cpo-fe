
import { useState } from "react";
// import { Link } from "react-router-dom";
import Form from "../../utilities/Forms";


const Pabrik = () => {
  const [grup, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setPassword] = useState("");
  const [validate, setValidate] = useState({});
  const [setShowPassword] = useState(false);

  const validateRegister = () => {
    let isValid = true;

    let validator = Form.validator({
      grup: {
        value: grup,
        isRequired: true,
      },
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
      },
      password: {
        value: password,
        isRequired: true,
        minLength: 6,
      },
      confirmPassword: {
        value: password,
        isRequired: true,
        minLength: 6,
      },
    });

    if (validator !== null) {
      setValidate({
        validate: validator.errors,
      });

      isValid = false;
    }
    return isValid;
  };

  const register = (e) => {
    e.preventDefault();

    const validate = validateRegister();

    if (validate) {
      setValidate({});
      setName("");
      setEmail("");
      setPassword("");
      alert("Successfully Register User");
    }
  };
  setShowPassword(false);
  // const togglePassword = (e) => {
  //   if (showPassword) {
  //     setShowPassword(false);
  //   } else {
  //     setShowPassword(true);
  //   }
  // };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 style={{ marginTop: "2rem", marginLeft: "10px" }}>Tambah Pabrik</h1>
        </div>
      </div>
      <div className="row" style={{ marginTop: "3rem", marginLeft: "10px" }}>
        <div className="col-12">
          <div className="auth-form-container text-start">
            <form
              className="auth-form"
              method="POST"
              onSubmit={register}
              autoComplete={"off"}
            >
              <div className="mb-3">
                <div className="row">
                  <div className="col-2">
                    <span>PT</span><span style={{ color: "red"  }}>*</span>
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className={`form-control ${validate.validate && validate.validate.name
                          ? "is-invalid "
                          : ""
                        }`}
                      id="pt"
                      name="pt"
                      value={grup}
                      placeholder="PT"
                      onChange={(e) => setName(e.target.value)}
                    />

                    <div
                      className={`invalid-feedback text-start ${validate.validate && validate.validate.name
                          ? "d-block"
                          : "d-none"
                        }`}
                    >
                      {validate.validate && validate.validate.name
                        ? validate.validate.name[0]
                        : ""}
                    </div>
                  </div>

                </div>
              </div>

              <div className="mb-3">
                <div className="row">
                  <div className="col-2">
                    <span>Pulau</span><span style={{ color: "red" }}>*</span>
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className={`form-control ${validate.validate && validate.validate.name
                        ? "is-invalid "
                        : ""
                        }`}
                      id="pt"
                      name="pt"
                      value={grup}
                      placeholder="Pulau"
                      onChange={(e) => setName(e.target.value)}
                    />

                    <div
                      className={`invalid-feedback text-start ${validate.validate && validate.validate.name
                        ? "d-block"
                        : "d-none"
                        }`}
                    >
                      {validate.validate && validate.validate.name
                        ? validate.validate.name[0]
                        : ""}
                    </div>
                  </div>

                </div>
              </div>

              <div className="mb-3">
                <div className="row">
                  <div className="col-2">
                    <span>Pabrik</span><span style={{ color: "red" }}>*</span>
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className={`form-control ${validate.validate && validate.validate.name
                        ? "is-invalid "
                        : ""
                        }`}
                      id="pt"
                      name="pt"
                      value={grup}
                      placeholder="Pabrik"
                      onChange={(e) => setName(e.target.value)}
                    />

                    <div
                      className={`invalid-feedback text-start ${validate.validate && validate.validate.name
                        ? "d-block"
                        : "d-none"
                        }`}
                    >
                      {validate.validate && validate.validate.name
                        ? validate.validate.name[0]
                        : ""}
                    </div>
                  </div>

                </div>
              </div>

              <div className="mb-3">
                <div className="row">
                  <div className="col-2">
                    <span>Kapasitas(Ton/Jam)</span><span style={{ color: "red" }}>*</span>
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className={`form-control ${validate.validate && validate.validate.name
                        ? "is-invalid "
                        : ""
                        }`}
                      id="pt"
                      name="pt"
                      value={grup}
                      placeholder="Kapasitas(Ton/Jam)"
                      onChange={(e) => setName(e.target.value)}
                    />

                    <div
                      className={`invalid-feedback text-start ${validate.validate && validate.validate.name
                        ? "d-block"
                        : "d-none"
                        }`}
                    >
                      {validate.validate && validate.validate.name
                        ? validate.validate.name[0]
                        : ""}
                    </div>
                  </div>

                </div>
              </div>

              
              <div className="col-8" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 theme-btn mx-auto"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pabrik;
