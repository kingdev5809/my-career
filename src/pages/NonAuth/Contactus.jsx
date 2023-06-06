import { useState } from "react";
import { useDispatch } from "react-redux";
import logosInstagram from "../../assets/images/icons/logos_telegram.png";
import logosWhatsapp from "../../assets/images/icons/logos_whatsapp.png";
import classes from "./Contactus.module.scss";

function Contactus() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    textMessage: "",
  });
  const handleSubmit = () => {
    if (
      data.name !== "" &&
      data.email !== "" &&
      data.phoneNumber !== "" &&
      data.textMessage !== ""
    ) {
      //   dispatch(postContactsUs(data));
    }
    setData({ name: "", email: "", phoneNumber: "", textMessage: "" });
  };
  return (
    <section className={classes.contact}>
      <div className="container-vw">
        <div className={classes.contact__inner}>
          <div className={classes.mainContacts}>
            <div className={classes.telegramContact}>
              <img
                className={classes.telegramContact__img}
                src={logosInstagram}
                alt=""
              />
              <h1 className={classes.telegramContact__title}>Go To Telegram</h1>
            </div>

            <div className={classes.whatsappContact}>
              <img
                className={classes.telegramContac__imgt}
                src={logosWhatsapp}
                alt=""
              />
              <h1 className={classes.telegramContact__title}>Go To Whatsapp</h1>
            </div>
          </div>

          <div className={classes.contactUs}>
            <h1 className={classes.contactUs__title}>Contact us</h1>
            <p className={classes.contactUs__desc}>
              Fill in the blank and we will contact you
            </p>
            <div>
              <input
                onChange={(e) => setData({ ...data, name: e.target.value })}
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <input
              onChange={(e) => setData({ ...data, email: e.target.value })}
              type="email"
              placeholder="E-mail"
              required
            />
            <input
              onChange={(e) =>
                setData({ ...data, phoneNumber: e.target.value })
              }
              type="number"
              placeholder="+998 99 999 99 99"
              min="1"
              max="13"
              required
            />
            <textarea
              onChange={(e) =>
                setData({ ...data, textMessage: e.target.value })
              }
              style={{ resize: "none" }}
              className={classes.textMessage}
              type="text"
              placeholder="Text message"
              required
            />
            <button>Send</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contactus;
