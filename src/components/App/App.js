import "./App.css";
import React from "react";
import Header from "../Header/Header.js";
import Main from "../Main/Main";
import Profile from "../Profile/Profile.js";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import LoginModal from "../LoginModal/LoginModal";
import {
  getForcastWeather,
  parseWeatherData,
  getItems,
  postItems,
  deleteItem,
  addCardLike,
  removeCardLike,
} from "../../utils/Api.js";
import ItemModal from "../ItemModal/ItemModal";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import RegisterModal from "../RegisterModal/RegisterModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import { signUp, signIn, verifyToken, updateUser } from "../../utils/Auth";

function App() {
  const [items, setItems] = React.useState([]);
  const [activeModal, setActiveModal] = React.useState("");
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [temp, setTemp] = React.useState(69);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] =
    React.useState("F");
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleLogInModal = () => {
    handleCloseModal();
    setActiveModal("login");
  };

  const handleRegisterModal = () => {
    handleCloseModal();
    setActiveModal("register");
  };

  const handleEditProfileModal = () => {
    setActiveModal("profile");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  React.useEffect(() => {
    if (!activeModal) return; // stop the effect not to add the listener if there is no active modal

    const handleEscClose = (e) => {
      // define the function inside useEffect not to lose the reference on rerendering
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      // don't forget to add a clean up function for removing the listener
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]); // watch activeModal here

  const processRegistration = (values) => {
    return signUp(values)
      .then((res) => {
        handleCloseModal();
        return handleSignIn(values);
      })
      .catch((err) => console.error(`Error: ${err.message}`));
  };

  const handleSignIn = (values) => {
    return signIn(values).then((res) => {
      setIsLoggedIn(true);
      if (res.token) {
        localStorage.setItem("jwt", res.token);
        verifyToken(res.token).then((user) => setCurrentUser(user));
      }
    });
  };

  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({});
  };

  const handleUserUpdate = (values) => {
    const token = localStorage.getItem("jwt");
    setIsLoading(true);
    return updateUser(token, values)
      .then((res) => {
        setCurrentUser(res.user);
      })
      .catch((err) => console.error(`Error: ${err.message}`))
      .finally(() => setIsLoading(false));
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleAddItem = (item) => {
    const token = localStorage.getItem("jwt");
    postItems(item, token)
      .then((res) => {
        setItems([res.data, ...items]);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDeleteItem = (item) => {
    const token = localStorage.getItem("jwt");
    deleteItem(item._id, token)
      .then((res) => {
        const updatedItemsArray = items.filter((i) => {
          return i !== item;
        });
        setItems(updatedItemsArray);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleCardClick = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    isLiked
      ? removeCardLike(id, token)
          .then((updatedCard) => {
            setItems((cards) => {
              return cards.map((c) => (c._id === id ? updatedCard : c));
            });
          })
          .catch((err) => console.error(`Error: ${err.message}`))
      : addCardLike(id, token)
          .then((updatedCard) => {
            setItems((cards) => {
              return cards.map((c) => (c._id === id ? updatedCard : c));
            });
          })
          .catch((err) => console.error(`Error: ${err.message}`));
  };

  React.useEffect(() => {
    getForcastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  React.useEffect(() => {
    getItems()
      .then((data) => {
        setItems(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  React.useEffect(() => {
    if (localStorage.getItem("jwt")) {
      setIsLoggedIn(true);
      const token = localStorage.getItem("jwt");
      verifyToken(token)
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => console.error(err.message));
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            onCreateModal={handleCreateModal}
            onRegisterModal={handleRegisterModal}
            onLogInModal={handleLogInModal}
            isLoggedIn={isLoggedIn}
          />
          <Switch>
            <Route exact path="/">
              <Main
                temperature={temp}
                clothes={items}
                onSelectedCard={handleSelectedCard}
                onCardLike={handleCardClick}
              />
            </Route>
            <ProtectedRoute isLoggedIn={isLoggedIn} path="/">
              <Profile
                temperature={temp}
                clothes={items}
                onSelectedCard={handleSelectedCard}
                onCreateModal={handleCreateModal}
                openEdit={handleEditProfileModal}
                onCardLike={handleCardClick}
                onLogOut={handleLogOut}
                path="/profile"
              />
            </ProtectedRoute>
          </Switch>
          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              onClose={handleCloseModal}
              onAddItem={handleAddItem}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              onDeleteItem={handleDeleteItem}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              onClose={handleCloseModal}
              handleLogin={handleSignIn}
              handleRegister={handleRegisterModal}
            />
          )}
          {activeModal === "register" && (
            <RegisterModal
              onClose={handleCloseModal}
              onRegister={processRegistration}
              handleLogin={handleLogInModal}
            />
          )}
          {activeModal === "profile" && (
            <EditProfileModal
              onClose={handleCloseModal}
              onUpdate={handleUserUpdate}
              isLoading={isLoading}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
