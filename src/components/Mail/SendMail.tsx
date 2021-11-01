import React, { ReactElement } from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../app/hooks";
import { closeSendMessage } from "../../features/mailSlice";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { db } from "../../firebase";

interface Props {}

interface IFormInput {
  to: string;
  subject: string;
  message: string;
}

function SendMail({}: Props): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
    try {
      const docRef = await addDoc(collection(db, "emails"), {
        to: data.to,
        subject: data.subject,
        message: data.message,
        timestamp: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    dispatch(closeSendMessage());
  };
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail__close"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.to && <p className="sendMail__error">Required Field!</p>}
        <input
          placeholder="To:"
          type="text"
          {...register("to", { required: true })}
        />

        {errors.subject && <p className="sendMail__error">Required Field!</p>}
        <input
          placeholder="Subject:"
          type="text"
          {...register("subject", { required: true })}
        />

        {errors.message && <p className="sendMail__error">Required Field!</p>}
        <input
          placeholder="Message"
          type="text"
          className="sendMail__message"
          {...register("message", { required: true })}
        />

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
