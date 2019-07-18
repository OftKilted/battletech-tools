import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Error404 from "./Pages/Error404";
import Page1 from "./Pages/Page1";
import { Modal, Button } from 'react-bootstrap';
import {CONFIGSiteTitle} from '../configVars';
import SanitizedHTML from './Components/SanitizedHTML';
import Alerts from '../Classes/Alerts';


export default class AppRouter extends React.Component<IAppRouterProps, IAppRouterState> {
    constructor(props: IAppRouterProps) {
        super(props);

        this.makeDocumentTitle = this.makeDocumentTitle.bind(this);
        this.openConfirmDialog = this.openConfirmDialog.bind(this);
        this.closeConfirmDialog = this.closeConfirmDialog.bind(this);
        this.confirmConfirmDialog = this.confirmConfirmDialog.bind(this);
        this.refreshGlobalState = this.refreshGlobalState.bind(this);


        this.state = {
            updated: false,
            appGlobals: {
                currentPageTitle: "",
                siteAlerts: new Alerts( this ),

                confirmDialogMessage: "",
                confirmDialogTitle: "",
                confirmDialogYesLabel: "",
                confirmDialogNoLabel: "",
                showConfirmDialog: false,
                confirmDialogConfirm: null,
                makeDocumentTitle: this.makeDocumentTitle,
                openConfirmDialog: this.openConfirmDialog,
                refreshGlobalState: this.refreshGlobalState,
            }
        }

    }

    makeDocumentTitle( subTitle: string = "" ) {
        let appGlobals = this.state.appGlobals;
        if( subTitle ) {
            document.title = subTitle + " | " + CONFIGSiteTitle;
            appGlobals.currentPageTitle = subTitle;
            this.setState({
                appGlobals: appGlobals,
            })
        } else {
            document.title = CONFIGSiteTitle;
            appGlobals.currentPageTitle = subTitle;
            this.setState({
                appGlobals: appGlobals,
            })
        }
    }


    refreshGlobalState(appGlobals: IAppGlobals) {
        if( !appGlobals ) {
            this.setState({
                updated: true,
            });
        } else {
            this.setState({
                updated: true,
                appGlobals: appGlobals,
            });
        }
    }

    closeConfirmDialog() {
        let appGlobals = this.state.appGlobals;
        appGlobals.showConfirmDialog = false;
        this.setState({
            appGlobals: appGlobals,
        })
    }

    confirmConfirmDialog() {
        if( this.state.appGlobals ) {
            if( this.state.appGlobals.confirmDialogConfirm ) {
                this.state.appGlobals.confirmDialogConfirm();
            }
            let appGlobals = this.state.appGlobals;
            appGlobals.showConfirmDialog = false;
            this.setState({
                appGlobals: appGlobals,
            })
        }
    }

    openConfirmDialog(
        confirmTitle: string,
        confirmMessage: string,
        confirmYesLabel: string,
        confirmNoLabel: string,
        confirmCallback: Function,
    ) {
        let appGlobals = this.state.appGlobals;
        appGlobals.confirmDialogMessage = confirmMessage;
        appGlobals.confirmDialogTitle = confirmTitle;
        appGlobals.confirmDialogYesLabel = confirmYesLabel;
        appGlobals.confirmDialogNoLabel = confirmNoLabel;
        appGlobals.showConfirmDialog = true;
        appGlobals.confirmDialogConfirm = confirmCallback;
        this.setState({
            appGlobals: appGlobals,
        })
    }


    render() {
        return (
            <Router>
            <Modal show={this.state.appGlobals.showConfirmDialog} onHide={this.closeConfirmDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>
                            {this.state.appGlobals.confirmDialogTitle}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body id="book-select-contents">
                    <div className="form">
                        <div>
                            <SanitizedHTML html={this.state.appGlobals.confirmDialogMessage} />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="secondary" onClick={this.closeConfirmDialog}>
                        {this.state.appGlobals.confirmDialogNoLabel}
                    </Button>
                    <Button variant="primary" onClick={this.confirmConfirmDialog}>
                        {this.state.appGlobals.confirmDialogYesLabel}
                    </Button>

                </Modal.Footer>
            </Modal>
            <Switch>
                <Route path="/" exact>
                    <Home
                        appGlobals={this.state.appGlobals}
                    />
                </Route>
                <Route path="/page1" exact>
                    <Page1
                        appGlobals={this.state.appGlobals}
                    />
                </Route>
                <Route>
                    <Error404
                        appGlobals={this.state.appGlobals}
                    />
                </Route>
            </Switch>
            </Router>
        );
    }
}

interface IAppRouterProps {

}

interface IAppRouterState {
    appGlobals: IAppGlobals;
    updated: boolean;
}

export interface IAppGlobals {
    currentPageTitle: string;
    siteAlerts: Alerts;

    confirmDialogMessage: string;
    confirmDialogTitle: string;
    confirmDialogYesLabel: string;
    confirmDialogNoLabel: string;
    showConfirmDialog: boolean;
    confirmDialogConfirm: Function | null;
    refreshGlobalState(appGlobals: IAppGlobals): void;

    makeDocumentTitle( subTitle: string ): void;

    openConfirmDialog(
        confirmTitle: string,
        confirmMessage: string,
        confirmYesLabel: string,
        confirmNoLabel: string,
        confirmCallback: Function,
    ): void;
}