import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import styles from "./Form.module.css";
import HeaderImage from "./HeaderImage";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { connect } from "react-redux";
import axios from "axios";

function Form({ auth }) {
  // FORM //
  const methods = useForm({ mode: "onBlur" });
  const { register, errors, handleSubmit } = methods;
  const onSubmit = (data) => {
    console.log(data);
    try {
      const {
        title,
        goal,
        story,
        due_date,
        header_img,
        CategoryId,
        bankAccount,
      } = data;
      const formData = new FormData();
      formData.append("title", title);
      formData.append("goal", goal);
      formData.append("story", story);
      formData.append("due_date", due_date);
      formData.append("header_img", header_img.raw);
      formData.append("CategoryId", CategoryId);
      formData.append("bankAccount", bankAccount);

      const respond = axios({
        method: "post",
        url: "https://warm-tundra-23736.herokuapp.com/campaign/add",
        data: formData,
        headers: {
          // token: auth.token,
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmFtZSI6ImpvaG4iLCJyb2xlIjoidXNlciIsImlhdCI6MTYwMzE5MzI5OX0.DqCMxWap7-rM7AdgRVo2yZnqDapQNjqG0aTo9s7v7d4",
          "Content-type": "multipart/form-data",
        },
      });
      const response = respond.data;
      console.log(response);
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

  const { quillRef } = useQuill({
    theme,
    modules,
    placeholder,
  });

  const handleImage = (e) => {
    const file = e.target.file[0];
    console.log(file);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <HeaderImage />
          <div className={styles.container}>
            <div className={styles.form}>
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
            </div>
            <div className={styles.form}>
              <div className={styles.col}>
                <label htmlFor="CategoryId" className={styles.subtitle}>
                  Category<span className={styles.mandatory}>*</span>
                </label>
                <input
                  type="text"
                  name="CategoryId"
                  id="CategoryId"
                  placeholder="Select campaign category"
                  className={styles.input}
                  ref={register({ required: true })}
                />
                {errors.CategoryId && errors.CategoryId.type === "required" && (
                  <div className={styles.alert}>Required</div>
                )}
              </div>
              <div className={styles.col}>
                <label htmlFor="due_date" className={styles.subtitle}>
                  Due date <span className={styles.optional}>(Optional)</span>
                </label>
                <input
                  type="text"
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
          <div className={styles.submitBtn}>
            <input
              type="submit"
              value="create campaign"
              className={styles.submit}
            />
          </div>
        </form>
      </FormProvider>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Form);
