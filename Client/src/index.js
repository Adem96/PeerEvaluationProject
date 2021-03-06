/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import
  Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import Test from "./components/test";
import Register from "./components/Register";
import ResetPw from "./components/ResetPw";
import TeacherPage from "./views/examples/TeacherPage";
import Evaluation from "./views/examples/Evaluation";
import SelfEvaluation from "./views/examples/SelfEvaluation";
import Peer from "./views/examples/Peer";
import WorkshopPage from "./views/examples/workshop";
import Calender from "./views/examples/workshcalender";
import WorkshopPage2 from "./views/examples/workshopstudent";
import Admin from "./views/examples/admin";
import QuizCommunication from "./views/examples/QuizCommunication";
import QuizEffectiveness from "./views/examples/QuizEffectiveness";
import QuizProfessionalism from "./views/examples/QuizProfessionalism";
import QuizManaging from "./views/examples/QuizManaging";
import QuizCognitiveAbility from "./views/examples/QuizCognitiveAbility";
import MacroSkillsPage from "./views/examples/MacroSkillsPage";
import PeerTeacher from "./views/examples/PeerTeacher";
import Historique from "./views/examples/historique";
import SelfEvaluationStudent from "./views/examples/SelfEvaluationStudent";
import Stat from "./views/examples/stat";


// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={props => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={props => <NucleoIcons {...props} />}
      />
      <Route
          path="/Calender"
          render={props => <Calender {...props} />}
      />
      <Route
          path="/Stat"
          render={props => <Stat {...props} />}
      />
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/Workshop-Page"
        render={props => <WorkshopPage {...props}/>}/>
      <Route
          path="/Workshop-Page2"
          render={props => <WorkshopPage2 {...props}/>}/>
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route
          path="/teacher-page"
          render={props => <TeacherPage {...props} />}
      />
      <Route
          path="/reset"
          render={props => <ResetPw {...props} />}
      />
        <Route
            path="/register"
            render={props => <Register {...props} />}
        />

      <Route
        path="/login"
        render={props => <RegisterPage {...props} />}
      />
      <Route
          path="/admin"
          render={props => <Admin {...props} />}
          />
      <Route
          path="/historique"
          render={props => <Historique {...props} />}
      />
          
      <Route
          path="/test"
          render={props => <Test {...props} />}
      />
      <Route
          path="/evaluate"
          render={props => <Evaluation{...props} />}
      />
      <Route
          path="/selfEvaluation"
          render={props => <SelfEvaluation{...props} />}
      />
      <Route
          path="/QuizCommunication"
          render={props => <QuizCommunication{...props} />}
      />
      <Route
          path="/QuizEffectivness"
          render={props => <QuizEffectiveness{...props} />}
      />
      <Route
          path="/QuizProfessionalism"
          render={props => <QuizProfessionalism{...props} />}
      />
      <Route
          path="/QuizManaging"
          render={props => <QuizManaging{...props} />}
      />
      <Route
          path="/QuizCognitiveAbility"
          render={props => <QuizCognitiveAbility{...props} />}
      />
      <Route
          path="/peer"
          render={props => <Peer{...props} />}
      />
      <Route
          path="/admin"
          render={props => <Admin{...props} />}
      />
      <Route
          path="/MacroSkillsPage"
          render={props =><MacroSkillsPage{...props} />}
      />
      <Route
          path="/PeerTeacher"
          render={props =><PeerTeacher{...props} />}
      />
      <Route
          path="/SelfEvaluationStudent"
          render={props =><SelfEvaluationStudent{...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
