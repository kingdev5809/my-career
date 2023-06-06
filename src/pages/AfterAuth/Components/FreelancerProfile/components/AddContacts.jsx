import React from "react";
import cancel from "../../../../../assets/images/Resume/cancel.png";
import facebookIcon from "../../../../../assets/images/Resume/faceBookIcon.png";
import githubIcon from "../../../../../assets/images/Resume/githubIcon.png";
import instagramIcon from "../../../../../assets/images/Resume/instagramIcon.png";
import telgramIcon from "../../../../../assets/images/Resume/telegramIcon.png";
import twitterIcon from "../../../../../assets/images/Resume/twitterIcon.png";
import whatsUppIcon from "../../../../../assets/images/Resume/whatsUppIcon.png";
import "./AddContacts.scss";
import { useState } from "react";

function AddContacts({ setActiveModal }) {
  const [data, setData] = useState({
    website: "",
    WatsApp: "",
    Facebook: "",
    Instagram: "",
    Telegram: "",
    GitHub: "",
    Twitter: "",
  });

  const [icons, setIcons] = useState([]);
  const [socials, setSocials] = useState([
    { icon: whatsUppIcon, name: "WatsApp" },
    { icon: facebookIcon, name: "Facebook" },
    { icon: instagramIcon, name: "Instagram" },
    { icon: telgramIcon, name: "Telegram" },
    { icon: githubIcon, name: "GitHub" },
    { icon: twitterIcon, name: "Twitter" },
  ]);

  const addInputContact = (i, n) => {
    setIcons([...icons, { icon: i, name: n }]);
    let filteredSocial = [];
    for (let i = 0; i < socials.length; i++) {
      if (socials[i].name !== n) {
        filteredSocial.push(socials[i]);
      }
    }
    setSocials(filteredSocial);
  };

  const handleSubmitting = (event) => {
    event.preventDefault();
  };

  const removeInput = (name, icon) => {
    let filteredIcons = [];
    for (let i = 0; i < icons.length; i++) {
      if (icons[i].name !== name) {
        filteredIcons.push(icons[i]);
      }
    }
    setIcons(filteredIcons);
    setSocials([...socials, { icon: icon, name: name }]);
  };

  const handleChangeInput = ({ label, value }) => {
    setData((prev) => ({ ...prev, [label]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div className=" socialMedia">
        <h2>Contacts</h2>
        <form action="submit" className=" socialForm" onSubmit={handleSubmit}>
          <div className=" forim_content ">
            <input
              className=" website_input"
              type="text"
              placeholder="Provide a link to your website "
              value={data.website}
              onChange={(e) =>
                setData((prev) => ({ ...prev, website: e.target.value }))
              }
            />
            {icons &&
              icons.map((item) => (
                <div key={item.name} className=" socialInput">
                  <div className=" socialInputIn">
                    <input
                      type="text"
                      placeholder={`Provide a link to your ${item.name} account`}
                      value={data[item.name]}
                      onChange={(e) =>
                        handleChangeInput({
                          value: e.target.value,
                          label: item.name,
                        })
                      }
                    />
                    <img
                      className=" insideIconImage"
                      src={item.icon}
                      alt="Whats app icon"
                    />
                  </div>
                  <button
                    className=" cancelButton"
                    onClick={(event) => {
                      removeInput(item.name, item.icon);
                      handleSubmitting(event);
                    }}
                  >
                    <img
                      className=" cancelButton_img"
                      src={cancel}
                      alt="cancel icon"
                    />
                  </button>
                </div>
              ))}
            <p>Choose in which of these social networks you have an account</p>
            <div className=" socialContainers">
              {socials.map((item) => (
                <div
                  key={item.name}
                  style={{ cursor: "pointer" }}
                  className=" socialCard"
                  onClick={() =>
                    addInputContact(item.icon, item.name, item.link)
                  }
                >
                  <img
                    style={{ width: "40px" }}
                    src={item.icon}
                    alt={item.name}
                  />
                  <h4 className=" cart_text">{item.name}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="btn-group-addprofile">
            <button className="cancel_btn" onClick={() => setActiveModal(null)}>
              Cancel
            </button>
            <button className="save_btn">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddContacts;
