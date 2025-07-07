import axios from "axios";
import express from "express";
import randomstring from "randomstring";
import querystring from "querystring";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    credentials: true,
  })
);
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

var redirect_uri = "http://127.0.0.1:3000/callback";

app.get("/login", function (req, res) {
  var state = randomstring.generate(16);
  var scope = "user-read-private user-read-email user-top-read";

  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      })
  );
});

app.get("/callback", async (req, res) => {
  const code = req.query.code || null;
  const state = req.query.state || null;

  if (!state) {
    return res.redirect(
      "/?" +
        querystring.stringify({
          error: "state_mismatch",
        })
    );
  }

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      querystring.stringify({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: redirect_uri,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            Buffer.from(client_id + ":" + client_secret).toString("base64"),
        },
      }
    );

    const { access_token, refresh_token } = response.data;
    // res.cookie("spotify_token", access_token, {
    //   httpOnly: false,
    //   maxAge: 3600 * 1000,
    //   secure: true,
    //   sameSite: "None",
    //   domain:".yessa.hackclub.app"
    // });
    res.cookie("spotify_token", access_token, {
      httpOnly: false,
      maxAge: 3600 * 1000,
      secure: false,
      sameSite: "Lax",
    });

    res.redirect("http://127.0.0.1:5173/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error");
  }
});

app.get("/spotify-search", async (req, res) => {
  try {
    const token = req.cookies.spotify_token;
    const response = await axios.get(
      "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {},
      }
    );
    res.json(response.data);
  } catch (err) {
    console.error("Spotify search failed:", err.message);
    res.status(500).json({ error: "Spotify search error" });
  }
});
