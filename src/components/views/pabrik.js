import { useState } from "react";
// import { Link } from "react-router-dom";
import Form from "../../utilities/Forms";
import { useHistory } from "react-router-dom";
const Pabrik = () => {
  const [pt,setPt] = useState("");
  const [pulau, setPulau] = useState("");
  const [pabrik, setPabrik] = useState("");
  const [kapasitas,setKapasitas] = useState("");
  const [validate, setValidate] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validateRegister = () => {
    let isValid = true;

    let validator = Form.validator({
      pt: {
        value: pt,
        isRequired: true,
      },
      pulau: {
        value: pulau,
        isRequired: true,
      },

      pabrik: {
        value: pabrik,
        isRequired: true,
      },
      kapasitas: {
        value: kapasitas,
        isRequired: true,
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
  const history = useHistory()

  const createPabrik = (e) => {
    e.preventDefault();

    const validate = validateRegister();

    if (validate) {
      setValidate({});

      alert("Successfully created Pabrik");
    }
  };

  const togglePassword = (e) => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 style={{ marginTop: "2rem", marginLeft: "10px" }}>Add Factory</h1>
        </div>
      </div>
      <div className="row" style={{ marginTop: "3rem", marginLeft: "10px" }}>
        <div className="col-12">
          <div className="pabrik-form-container text-start">
            <form
              className="pabrik-form"
              method="POST"
              onSubmit={createPabrik}
              autoComplete={"off"}
            >
              <div className="mb-3">
                <div className="row">
                  <div className="col-2">
                    <span>PT</span>
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className={`form-control ${
                        validate.validate && validate.validate.name
                          ? "is-invalid "
                          : ""
                      }`}
                      id="pt"
                      name="pt"
                      value={pt}
                      placeholder="PT"
                      onChange={(e) => setPt(e.target.value)}
                    />

                    <div
                      className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.name
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
                    <span>Pulau</span>
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <div className="col-6">
                    <select name="pulau" type="select" className="form-control">
                      <option>Pilih salah satu</option>
                      <option value="Sumatera">Sumatera</option>
                      <option value="Kalimantan">Kalimantan</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <div className="row">
                  <div className="col-2">
                    <span>Pabrik</span>
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className={`form-control ${
                        validate.validate && validate.validate.name
                          ? "is-invalid "
                          : ""
                      }`}
                      id="pt"
                      name="pt"
                      value={pabrik}
                      placeholder="Pabrik"
                      onChange={(e) => setPabrik(e.target.value)}
                    />

                    <div
                      className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.name
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
                    <span>Kapasitas(Ton/Jam)</span>
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className={`form-control ${
                        validate.validate && validate.validate.name
                          ? "is-invalid "
                          : ""
                      }`}
                      id="kapasitas"
                      name="kapasitas"
                      value={kapasitas}
                      placeholder="Kapasitas(Ton/Jam)"
                      onChange={(e) => setKapasitas(e.target.value)}
                    />

                    <div
                      className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.name
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

              <div
                className="col-8"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <div className="text-center">
                  <button
                   style={{ background: "red" ,color:"white"}}
                    type="submit"
                    onClick={() => history.push('/dataIndustry')}
                    className="btn btn-primary w-100 theme-btn mx-auto"
                  >
                    Back
                  </button>
                </div>
                <li> </li>
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
