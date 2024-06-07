import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
const InfoBox = ({ info }) => {
  let HOT_img =
    "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?b=1&s=170667a&w=0&k=20&c=3pJ8IywW-9H-bcZ2XNGG0EaKwYiWD3XdMLC-mAC6dFI=  ";
  let RAINY_img =
    "https://www.shutterstock.com/image-photo/heavy-rain-tree-parking-260nw-676963948.jpg";
  let COLD_img =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREY_DbCwWXN5MucVqM9Sm6V5KvIG8OyVAfRQ&s";
  return (
    <div className="card_container">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={
              info.humidity > 80
                ? RAINY_img
                : info.temperature < 15
                ? COLD_img
                : HOT_img
            }
            alt="weather image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              <span style={{ fontSize: "1rem" }}>
                <sup>{info.country}</sup>{" "}
              </span>
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component="span"
              className="weatherinfo"
            >
              <p>Temperature = {info.temperature}&deg; C</p>
              <p>Humidity = {info.humidity}&deg; C</p>
              <p>Wind Speed = {info.wind_speed}</p>
              <p>Pressure = {info.pressure} psi</p>
              <p>
                The Weather can be described as{" "}
                <i>
                  <b>{info.description}</b>
                </i>{" "}
                and feels like{" "}
                <i>
                  <b>{info.feelslike}&deg; C</b>
                </i>
              </p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default InfoBox;
