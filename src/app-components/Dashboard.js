import React, { Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Card, CardContent } from "@material-ui/core";
import { ExampleWrapperSimple } from "../layout-components";

import TabTransaction from "./TabTransaction";
import TransactionList from "./TransactionList";

export default function Dashboard() {
  return (
    <Fragment>
      <Grid container spacing={4} alignItems="center" justify="center">
        <Grid item xs={12} md={4}>
          <Card className="card-box bg-primary text-light mb-4">
            <CardContent className="p-3">
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-20 d-block mb-1 text-uppercase">
                    Total de solde
                  </small>
                  <span className="font-size-xxl mt-1">345</span>
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-primary d-50 rounded-circle d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={["far", "chart-bar"]}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <span className="text-white px-1 font-weight-bold">75850</span>
                <span className="text-white-20">Total de transferts</span>
              </div>
              <div className="mt-3">
                <span className="text-white px-1 font-weight-bold">50000</span>
                <span className="text-white-20">Total de retraits</span>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <ExampleWrapperSimple sectionHeading="">
        <TabTransaction />
      </ExampleWrapperSimple>

      <TransactionList />
    </Fragment>
  );
}
