import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuill } from "react-quilljs";
import axios from "axios";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "quill/dist/quill.snow.css";
import styles from "./Form.module.css";
import HeaderImage from "./HeaderImage";
import spinner from "../../../assets/general/spinner.svg";

function Form({ auth }) {
  // FORM //
  const { register, errors, handleSubmit } = useForm({ mode: "onBlur" });

  const [image, setImage] = useState({ preview: "", raw: "" });
  const [loading, setLoading] = useState(false);

  let history = useHistory();

  const bankAccount = "1234567";

  const onSubmit = async (data) => {
    const html = quill.root.innerHTML;

    try {
      const { title, goal, due_date, CategoryId } = data;
      const formData = new FormData();
      formData.append("title", title);
      formData.append("goal", goal);
      formData.append("story", html);
      formData.append("due_date", due_date);
      formData.append("header_img", image.raw);
      formData.append("CategoryId", CategoryId);
      formData.append("bankAccount", bankAccount);

      setLoading(true);

      const respond = await axios({
        method: "post",
        url: "https://warm-tundra-23736.herokuapp.com/campaign/add",
        headers: {
          token: auth.token,
        },
        data: formData,
      });
      const response = respond.data;
      console.log(response);
      setLoading(false);
      history.push("/user/profile");
    } catch (error) {
      console.log("error");
    }
  };

  // EDITOR //
  const theme = "snow";
  const modules = {
    toolbar: [
      "bold",
      "italic",
      "underline",
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
      "image",
      "link",
    ],
  };
  const placeholder = "Tell your story...";

  const { quill, quillRef } = useQuill({
    theme,
    modules,
    placeholder,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <HeaderImage
        id="header_img"
        image={image}
        setImage={setImage}
        register={register}
        errors={errors}
      />
      <div className={styles.container}>
        <div className={styles.col}>
          <label htmlFor="title" className={styles.subtitle}>
            Title<span className={styles.mandatory}>*</span>
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="e.g. Help we get clean water"
            className={styles.input}
            ref={register({ required: true })}
          />
          {errors.title && errors.title.type === "required" && (
            <div className={styles.alert}>Required</div>
          )}
        </div>
        <div className={styles.col}>
          <label htmlFor="goal" className={styles.subtitle}>
            Goal<span className={styles.mandatory}>*</span>
          </label>
          <input
            type="text"
            name="goal"
            id="goal"
            placeholder="e.g. 20000000"
            className={styles.input}
            ref={register({ required: true })}
          />
          {errors.goal && errors.goal.type === "required" && (
            <div className={styles.alert}>Required</div>
          )}
        </div>
        <div className={styles.col}>
          <label htmlFor="CategoryId" className={styles.subtitle}>
            Category<span className={styles.mandatory}>*</span>
          </label>
          <select
            name="CategoryId"
            id="CategoryId"
            placeholder="Select campaign category"
            className={styles.input}
            ref={register({ required: true })}
          >
            <option value="" disabled selected>
              Select campaign category
            </option>
            <option value="1">Disability</option>
            <option value="2">Medical</option>
            <option value="3">Education</option>
            <option value="4">Religious</option>
            <option value="5">Humanity</option>
            <option value="6">Environment</option>
            <option value="7">Disaster</option>
            <option value="8">Sociopreneur</option>
          </select>
          {errors.CategoryId && errors.CategoryId.type === "required" && (
            <div className={styles.alert}>Required</div>
          )}
        </div>
        <div className={styles.col}>
          <label htmlFor="due_date" className={styles.subtitle}>
            Due date <span className={styles.optional}>(Optional)</span>
          </label>
          <input
            type="date"
            name="due_date"
            id="due_date"
            placeholder="Select due date"
            className={styles.input}
            ref={register({ required: true })}
          />
          {errors.due_date && errors.due_date.type === "required" && (
            <div className={styles.alert}>Required</div>
          )}
        </div>
      </div>
      <div>
        <div className={styles.story}>Story</div>
        <div
          ref={quillRef}
          style={{
            height: 500,
            border: "none",
            backgroundColor: "#FCFCFC",
          }}
        />
      </div>

      <button className={`${styles.submit} ${loading && styles.loading}`}>
        {loading ? (
          <div className={styles.progress}>
            <img src={spinner} alt="spinner" />
            <span>Processing</span>
          </div>
        ) : (
          <span>Create Campaign</span>
        )}
      </button>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Form);
