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
import React,{Component} from "react";

// reactstrap components
import {
    Button,
    Label,
    FormGroup,
    Input,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col, Card,
    InputGroupAddon,
    InputGroupText,
    Form,
    ListGroup,
    ListGroupItem


} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import NavbarProfile from "../../components/Navbars/NavbarProfile";
import NavBarTeacher from "../../components/Navbars/NavBarTeacher";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import jwt_decode from "jwt-decode";
import axios from "axios";
import SectionNavigation from "../index-sections/SectionNavigation";
import NucleoIcons from "../NucleoIcons";
import SectionProgress from "../index-sections/SectionProgress";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import {c} from '../../assets/countries.js';
import {University} from "../../assets/University";



class MacroSkillsPage extends  Component {
    constructor(props){
        super(props)
        this.state = {m: [],x:[],ms:'',
            activeTab:"1",tab1:'',show2:false,tab2:'',show:false,show1:false

        };



    }


    componentDidMount() {
        axios.get("http://localhost:3000/ms/Afficher").then(res => {
            this.setState({tab1:res.data})
            console.log('succes')

        });
    }
    toggle  (tab) {
        if(this.state.activeTab!==tab){
            this.setState({activeTab:tab})
            console.log(this.state.activeTab);
        }

        //this.state.activeTab=tab

    }
    toggle  (tab) {
      if(this.state.activeTab!==tab){
          this.setState({activeTab:tab})

      }

        //this.state.activeTab=tab
}


    addmacro(){
        const bod2 = {
            nom: document.getElementById('nommacro').value,
            description:document.getElementById('descmacro').value

        };
        this.state.m.push(bod2)
        console.log(this.state.m)
        let x = document.getElementById('nommacro').value
        this.setState({ms : this.state.ms +  x +'  |  ' })
        document.getElementById('nommacro').value = ''
        document.getElementById('descmacro').value = ''

    }


    Ajouter() {


        const bod = {
            nom: document.getElementById('nom').value,
            description:document.getElementById('desc').value,
            type:document.getElementById('type').value,
            macroskills: this.state.m
        };
        const a = {
            emailUser: jwt_decode(localStorage.token).user.email,
            roleUser: jwt_decode(localStorage.token).user.role,
            type: "Macro skill",
            Text : jwt_decode(localStorage.token).user.role+" "+jwt_decode(localStorage.token).user.nom+" "+jwt_decode(localStorage.token).user.prenom+" added a macro skill named : "+bod.nom
        }
        console.log(a.Text)
        axios.post("http://localhost:3000/users/ajouterHistorique",a).then(res => {
            console.log(res.data)
            console.log('succes')


        });


        axios.post("http://localhost:3000/ms/ajouterMS", bod).then(res => {

            window.location.reload()
            console.log('succes')
            window.location.reload(false);



        });

    }


    filter()
    {
        const t = {
            type:document.getElementById('select').value
        }
        console.log(t.role)
        axios.post("http://localhost:3000/ms/type", t ).then(res => {
            this.setState({tab1:res.data})

            console.log(res.data)
        });
    }
    delete(a)
    {

        console.log(a)


        axios.get("http://localhost:3000/ms/delete/"+a ).then(res => {
            window.location.reload()
            console.log("succes")
        });

        const b = {
            emailUser: jwt_decode(localStorage.token).user.email,
            roleUser: jwt_decode(localStorage.token).user.role,
            type: "Macro skill",
            Text : jwt_decode(localStorage.token).user.role+" "+jwt_decode(localStorage.token).user.nom+" "+jwt_decode(localStorage.token).user.prenom+" deleted a macro skill  "
        }
        console.log(a.Text)
        axios.post("http://localhost:3000/users/ajouterHistorique",b).then(res => {
            console.log(res.data)
            console.log('succes')


        });
    }
    find()
    {
        const t =
            {
                nom:document.getElementById('text').value
            }
        axios.post("http://localhost:3000/ms/nom", t ).then(res => {
            this.setState({tab1:res.data})

            console.log(res.data)
        });
    }
    showMacro(nom)
    {
        this.setState({show:true,nomMacro:nom})
        axios.post("http://localhost:3000/ms/find/"+nom).then(res => {
            this.setState({tab2:res.data,tab1:''})
            console.log('succes')

        });
    }
    back()
    {
        this.setState({show:false})
        axios.get("http://localhost:3000/ms/Afficher").then(res => {
            this.setState({tab1:res.data})
            console.log('succes')

        });
    }


    render() {
        return (
            <>

                <ProfilePageHeader/>
                <NavbarProfile/>


                <div className="section profile-content">
                    <NavBarTeacher/>
                    <Container>

                        <div className="owner">

                            <div className="card">
                                <h4 className="card-title">
                                    {jwt_decode(localStorage.token).user.nom} {jwt_decode(localStorage.token).user.prenom}<br/>
                                </h4>
                                <h6 className="card-subtitle">{jwt_decode(localStorage.token).user.role}</h6>
                            </div>
                        </div>
                        <Row>
                            <Col className="ml-auto mr-auto text-center" md="6">

                                <br/>
                                <br/>


                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <div className="nav-tabs-navigation">
                            <div className="nav-tabs-wrapper">
                            </div>
                        </div>
                        <>
                            <ExamplesNavbar />
                            <div>
                                <div className="title"><center><h2>Macro skills management</h2></center></div>
                                <div className="filter" />
                                <Container>
                                    <Row>
                                        <Col>
                                            <div className="nav-tabs-navigation">
                                                <div className="nav-tabs-wrapper">
                                                    <Nav id="tabs" role="tablist" tabs>
                                                        <NavItem>
                                                            <NavLink
                                                                className={this.state.activeTab === "1" ? "active" : ""}
                                                                onClick={() => {this.toggle("1")}}>
                                                                Add MacroSkills
                                                            </NavLink>
                                                        </NavItem>
                                                        <NavItem>
                                                            <NavLink
                                                                className={this.state.activeTab === "2 "? "active" : ""}
                                                                onClick={() => {
                                                                    this.toggle("2");
                                                                }}
                                                            >
                                                                See MacroSkills
                                                            </NavLink>
                                                        </NavItem>
                                                        <NavItem>
                                                            <NavLink
                                                                className={this.state.activeTab === "3" ? "active" : ""}
                                                                onClick={() => {this.toggle("3")}}
                                                            >
                                                                Affect MacroSkills
                                                            </NavLink>
                                                        </NavItem>
                                                    </Nav>
                                                </div>
                                            </div>
                                            <TabContent activeTab={this.state.activeTab} className="text-center">
                                                <TabPane tabId="1">
                                                    <div>
                                                        <div className="filter" />
                                                        <Container>
                                                            <Row>
                                                                <Col className="ml-auto mr-auto" md="8">
                                                                    <h2 className="text-center">ADD MacroSkill</h2>
                                                                    <Form className="contact-form">
                                                                        <Row>
                                                                            <Col md="6">
                                                                                <label>Name</label>
                                                                                <Input placeholder="Name" type="text" id="nom" />
                                                                            </Col>

                                                                        </Row>

                                                                        <label>Description</label>
                                                                        <Input
                                                                            rows="4"
                                                                            placeholder="Description" type="textarea" id="desc"
                                                                        />
                                                                        <Row>
                                                                            <label>Type</label>
                                                                            <select name="type" id="type">
                                                                                <option>Hard Skills</option>
                                                                                <option>Soft Skills</option>
                                                                            </select>
                                                                        </Row>

                                                                        <Row>

                                                                            <Container>
                                                                                <Row>
                                                                                    <Col className="ml-auto mr-auto" md="8">
                                                                                        <h2 className="text-center">Add MicroSkill for This MacroSkill</h2>
                                                                                        <Form className="contact-form">
                                                                                            <Row>
                                                                                                <Col md="6">
                                                                                                    <label>Name of MacroSkill  :</label>
                                                                                                    <Input placeholder="Name of macroSkill..." type="text" id="nommacro" />
                                                                                                </Col>
                                                                                            </Row>
                                                                                            <label>Description of MacroSkill   :</label>
                                                                                            <Input
                                                                                                rows="4"
                                                                                                placeholder="Description of MacroSkill..." type="textarea" id="descmacro"/>
                                                                                            <Row>
                                                                                                <Col className="ml-auto mr-auto" md="4">
                                                                                                    <Button className="mr-1 btn btn-outline-danger btn-sm" color="orange" size="lg"
                                                                                                            onClick={this.addmacro.bind(this)}>
                                                                                                        ADD Macro
                                                                                                    </Button>
                                                                                                </Col>
                                                                                            </Row>
                                                                                            <Row>
                                                                                                <label>names of microskill already added     :</label>
                                                                                                <ListGroup>
                                                                                                    <ListGroupItem color="success">{this.state.ms}</ListGroupItem>
                                                                                                </ListGroup>

                                                                                            </Row>
                                                                                        </Form>
                                                                                    </Col>
                                                                                </Row>
                                                                            </Container>
                                                                        </Row>
                                                                        <Row>
                                                                            <Col className="ml-auto mr-auto" md="4">
                                                                                <Button className="btn-fill" color="danger" size="lg" onClick={this.Ajouter.bind(this)}>
                                                                                    ADD
                                                                                </Button>
                                                                            </Col>
                                                                        </Row>
                                                                    </Form>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </div>
                                                </TabPane>
                                                <TabPane tabId="2">
                                                    <Col className="ml-auto mr-auto" md="8">

                                                        <h1>Macro Skills Table</h1>
                                                        <center> <table>
                                                            <tr>
                                                                <td>Filter
                                                                </td>
                                                                <td>
                                                                    <Input type="select" id="select" >
                                                                        <option onClick={this.componentDidMount.bind(this)}>
                                                                            All Macro Skills
                                                                        </option>
                                                                        <option value="Hard Skills" onClick={this.filter.bind(this)}>
                                                                            Hard Skills
                                                                        </option>
                                                                        <option value="Soft Skills" onClick={this.filter.bind(this)}>
                                                                            Soft Skills
                                                                        </option>
                                                                    </Input >
                                                                </td>
                                                            </tr>
                                                        </table></center>
                                                        <br/>   <br/>   <br/>

                                                        <table className="table-responsive-md">
                                                            <tr>
                                                                <td> <Input type="text" id="text" placeholder="macro or micro skill name" onChange={this.find.bind(this)}  /></td>

                                                            </tr>

                                                        </table>
                                                        <div className="table-responsive">

                                                            <table className="table">
                                                                <thead className="table table-info">
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th>Type</th>
                                                                    <th>Nombre Micro Skills</th>
                                                                    <th>Actions</th>
                                                                </tr>
                                                                </thead>
                                                                {this.state.tab1   && this.state.tab1.map((team) =>  <tbody className="table table-active" key={team._id}  >

                                                                    <tr>
                                                                        <td>{team.nom}

                                                                        </td>
                                                                        <td>{team.type}</td>

                                                                        <td>{team.macroskills.length}</td>
                                                                        <td><button className="btn-info" onClick={this.showMacro.bind(this,team.nom)} >Details</button>

                                                                            <button className="btn-danger" onClick={this.delete.bind(this , team._id)} >Delete</button>
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                )}

                                                            </table>
                                                            {this.state.show?
                                                                <table className="table">
                                                                    <thead className="table table-info">
                                                                    <tr>
                                                                        <td className="name">Micro Skills of {this.state.nomMacro}</td>
                                                                    </tr>
                                                                    </thead>
                                                                    {this.state.tab2 && this.state.tab2.map((detail) => <tbody className="table table-active"  key={detail.nom} >


                                                                        <tr>
                                                                            <td >{detail.nom}</td>
                                                                        </tr>


                                                                        </tbody>

                                                                    )}
                                                                    <tr><td colSpan="1">   <button className="btn btn-link" onClick={this.back.bind(this)}>Back</button></td></tr>
                                                                </table> :null}
                                                        </div></Col>

                                                </TabPane>
                                                <TabPane tabId="3">
                                                    <p>Here are your messages.</p>
                                                </TabPane>
                                            </TabContent>
                                        </Col>

                                    </Row>

                                </Container>
                            </div>
                        </>

                    </Container>
                </div>
                <DemoFooter/>
            </>
        );
    }
}

export default MacroSkillsPage;