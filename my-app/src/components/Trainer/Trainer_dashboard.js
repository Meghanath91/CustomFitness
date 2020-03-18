// fetchProfile
// axios.get('/api/profile').then((res) => {
//   setState(res.body)
// })
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ChartistGraph from "react-chartist";
import CardHeader from "./Dashboard/Chart/CardHeader";
import Card from "./Dashboard/Chart/Card";
import CardBody from "./Dashboard/Chart/CardBody";
import CardFooter from "./Dashboard/Chart/CardFooter";
import AccessTime from "@material-ui/icons/AccessTime";
import Students from "../Trainer/Dashboard/Students";
import StudentTable from "../Trainer/Dashboard/StudentTable"
import StudentRequest from "./Dashboard/StudentRequests";
import {
  completedTasksChart,
  emailsSubscriptionChart,
  dailySalesChart
} from "./Dashboard/Chart/Chart";
import styles from "./Dashboard/Chart/dashboardStyle";
import ArrowUpward from "@material-ui/icons/ArrowUpward";

const useStyles = makeStyles(styles);

export default function Trainer_dashboard() {
  const classes = useStyles();
  return (
    <div>
      <Students />

      <StudentTable />

      <StudentRequest />

      <Card chart>
      <CardHeader color="danger">
      <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
      </CardHeader>
      <CardBody>
      <h4 className={classes.cardTitle}>Completed Tasks</h4>
     <p className={classes.cardCategory}>Last Campaign Performance</p>
      </CardBody>
      <CardFooter chart>
      <div className={classes.stats}>
      <AccessTime /> campaign sent 2 days ago
      </div>
      </CardFooter>
      </Card>

      <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Email Subscriptions</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>


          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>



      </div>

    
    
  )
}



