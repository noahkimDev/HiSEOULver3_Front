import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./MustDownloadApp.css";

function MustDownloadApp() {
  return (
    <div>
      <Accordion defaultActiveKey="0" style={{ margin: "15px" }}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h3>MustDownload App</h3>
          </Accordion.Header>
          <Accordion.Body style={{ fontSize: "25px" }}>
            <p>
              I'll recommend some convenient applications for living in Seoul.
              <br />
              (click explain or picture)
            </p>
            <div>
              <ul>
                <li>
                  <a href="https://play.google.com/store/apps/details?id=com.imagedrome.jihachul&hl=en">
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        fontSize: "19px",
                      }}
                    >
                      <img
                        src="https://play-lh.googleusercontent.com/A6a1G2LkgJtlmAgQNiXVXVvXCYVCOJ-MSFZ-W2NijTAtGD3PiR5dpYYuHQBERB6-f80=w240-h480-rw"
                        alt=""
                        style={{
                          width: "7%",
                          height: "50px",
                          marginRight: "5px",
                        }}
                      />
                      <p>
                        The Subway Korea app offers the quickest and most
                        precise subway station timetable compared to all other
                        public transit and subway map applications
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://play.google.com/store/apps/details?id=com.naver.labs.translator&hl=en">
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        fontSize: "19px",
                      }}
                    >
                      <img
                        src="https://play-lh.googleusercontent.com/_QBOE9CjR52GCUysHKReJLY0f72Rrjvw4S1Po7iwgEEv1StW9AOb43TS5_Veid2rRA=s48-rw"
                        alt=""
                        style={{
                          width: "7%",
                          height: "50px",
                          marginRight: "5px",
                        }}
                      />
                      <p>
                        Whenever you need translation during your travels,
                        business trips or while studying a language just bring
                        Papago, a smart parrot who can translate multiple
                        languages for you.
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://play.google.com/store/apps/details?id=com.dki.spb_android&hl=en&gl=US">
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        fontSize: "19px",
                      }}
                    >
                      <img
                        src="https://play-lh.googleusercontent.com/qxPKLrBi-zwgDqsYf9FtbrHuxbkT_VVS1thV6F5bDw-WJvFiD_9LvTz0VejNFtMnmnE=w240-h480-rw"
                        alt=""
                        style={{
                          width: "7%",
                          height: "50px",
                          marginRight: "5px",
                        }}
                      />
                      <p>
                        If you live in Seoul, you can use the city’s
                        bike-sharing system as an alternative to public
                        transportation or for leisure ride. Seoul Bike utilizes
                        stations across the city so you can conveniently rent
                        and return bikes for as little as 1,000 KRW per hour.
                        This app is also available in English and has an option
                        for non-Koreans.
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://play.google.com/store/apps/details?id=com.kakao.taxi&hl=en">
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        fontSize: "19px",
                      }}
                    >
                      <img
                        src="https://play-lh.googleusercontent.com/7CpVtdQmwhEDzcl-J0btBRJLou8MgZ5PvHOwzHSkSCdJzUZCMswXc15MIn2XhxjW-WY=w240-h480-rw"
                        alt=""
                        style={{
                          width: "7%",
                          height: "50px",
                          marginRight: "5px",
                        }}
                      />
                      <p>
                        South Korea has an abundance of taxis, so it’s usually
                        easy to hail one, but during busier times or late at
                        night, things can be more complicated, so you can
                        benefit from having KakaoTaxi (KakaoT). KakaoT is Uber’s
                        Korean counterpart, but this app will bring you a
                        licensed taxi without the extra fees associated with
                        using a call service. Like Uber, KakaoT tracks your
                        current location and hail a cab nearby.
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://play.google.com/store/search?q=naver+map&c=apps&hl=en">
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        fontSize: "19px",
                      }}
                    >
                      <img
                        src="https://play-lh.googleusercontent.com/iqe1hFI03eD6nW3S8fxK_MDvNC8tDtod_gnhF9e8XN-IPmLXJvZVJLm-bQ4U5mKAVK0=w240-h480-rw"
                        alt=""
                        style={{
                          width: "7%",
                          height: "50px",
                          marginRight: "5px",
                        }}
                      />
                      <p>
                        Google Maps doesn’t work as well as NaverMap in South
                        Korea, with another very reliable option being Kakao Map
                        . NaverMap automatically tracks your current location,
                        calculate the best route to a destination, and guides
                        you there.
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default MustDownloadApp;
