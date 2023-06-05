import { RoutesContainer } from "./partials/routsContainer";
import { Error404Page } from "./routes/errors/404";
import { Error505Page } from "./routes/errors/505";
import { LoginPage } from "./routes/logIn";
import { MainPage } from "./routes/main";
import { ProfilePage } from "./routes/profile";
import { PasswordChangePage } from "./routes/profile/change/password-change";
import { ProfileDataChangePage } from "./routes/profile/change/profile-data-change";
import { SignIn } from "./routes/signIn";


const routes: Record<string, any> = {
  "/": RoutesContainer,
  "/sign-in": SignIn,
  "/main": MainPage,
  "/log-in": LoginPage,
  "/profile": ProfilePage,
  "/password-change": PasswordChangePage,
  "/profile-data-change": ProfileDataChangePage,
  "/errors/404": Error404Page,
  "/errors/505": Error505Page,
};


window.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#app");

  const renderPage = (): void => {
    const path = window.location.pathname;
    const Component = routes[path] ?? Error404Page;

    const page = new Component();
    root!.innerHTML = "";
    root!.appendChild(page.getContent() as Node);
  };

  renderPage();

  window.addEventListener("popstate", renderPage);
});
