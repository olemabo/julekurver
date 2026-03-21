{
  /* <button
                  onClick={() => toggleSearchLanguageMenu(MenuType.Language)}
                  className={`language-button ${activeMenu === MenuType.Language ? "active" : ""}`}
                  id={languageButtonId}
                  aria-label="Klikk for å gjøre søk på nettsiden"
                  title="Søkeknapp"
                >
                  <div className="language-icon"></div>
                </button> */
}

//                 .language-button {
//   width: 44px;
//   height: 44px;
//   transition: all 0.3s ease-in-out;
//   cursor: pointer;
//   border-radius: 25px;
//   position: relative;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: inherit;
//   border: none;
//   margin-bottom: 12px;

//   &::after {
//     bottom: 38%;
//     left: 28%;
//     width: 50%;
//     height: 2px;

//     content: "";
//     position: absolute;
//     background-color: black;
//     transform-origin: right bottom;
//   }

//   &.active::after {
//     transform: rotate(45deg);
//     transform: translate(-4px, 4px) rotate(45deg);
//   }

//   &.active::before {
//     transform: translate(-2px, -4px) rotate(-45deg);
//   }

//   &::before {
//     top: 40%;
//     right: 22%;
//     width: 50%;
//     height: 2px;

//     content: "";
//     position: absolute;
//     background-color: black;
//     transform-origin: right bottom;
//   }

//   .language-icon {
//     transition: all 0.3s ease-in-out;
//     position: absolute;
//     display: block;
//     top: 22%;
//     left: 24%;
//     width: 58%;
//     height: 58%;
//     border-radius: 50%;
//     border-width: 2px;
//     border-style: solid;
//     border-color: black;

//     &::after {
//       left: 10%;

//       bottom: -8%;
//       width: 132%;
//       height: 96%;

//       content: "";
//       position: absolute;
//       border: 2px solid black;
//       border-color: transparent transparent black transparent;
//       border-radius: 50%;
//       transform: rotate(90deg);
//     }

//     &::before {
//       right: 10%;

//       bottom: -8%;
//       width: 132%;
//       height: 96%;

//       content: "";
//       position: absolute;
//       border: 2px solid black;
//       border-color: transparent transparent black transparent;
//       border-radius: 50%;
//       transform: rotate(-90deg);
//     }
//   }

//   &.active .language-icon::after {
//     width: 0;
//     height: 0;
//     border: 0;
//   }

//   &.active .language-icon::before {
//     width: 0;
//     height: 0;
//     border: 0;
//   }

//   &.active .language-icon::before {
//     transform: translate(-2px, -4px) rotate(-45deg);
//   }

//   &.active .language-icon {
//     width: 0;
//     height: 0;
//     border-color: transparent;
//   }
// }

// .language-button::before,
// .language-button::after,
// .language-button .language-icon {
//   transition: all 0.3s ease-in-out;
// }
