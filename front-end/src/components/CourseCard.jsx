import { useState } from "react";
import Card from "@material-ui/core/Card";
import clsx from "clsx";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import "./CourseCard.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function CourseCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log("props in course card", props.courses);
  const coursesList = props.courses;
  const image_url_string = coursesList[0].image_url.slice(1, -1);

  const displayCourses = coursesList.map((course) => {
    return (
      <section className="course-card">
        <Card className={classes.root}>
          <CardHeader title={course.name} subheader={course.created_at} />
          <CardContent>
            <Typography>{course.code}</Typography>
          </CardContent>
          <CardMedia
            className={classes.media}
            image={course.image_url.slice(1, -1)}
          />
          <CardActions disableSpacing>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Description:</Typography>
              <Typography paragraph>{}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </section>
    );
  });
  return (
    <>
      <div className="courses-cards-container">{displayCourses}</div>
    
    </>
  );
}