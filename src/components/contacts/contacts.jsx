import { YMaps, Map, Placemark } from "react-yandex-maps";
import { ContactsStyled } from "./contacts.styles";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { getContactsData } from "store/reducer-and-action/language/language";
import { JsonTable } from "react-json-to-html";

const Contacts = () => {
  const data = useSelector(getContactsData);

  return (
    <ContactsStyled>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={5}>
          <div className="">
            <JsonTable json={data} indent={2} />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={7}>
          <div className="govMapsContainer">
            <div className="govMaps">
              <YMaps query={{ lang: "ru_RU", load: "package.full" }}>
                <Map
                  width="100%"
                  height="550px"
                  defaultState={{
                    center: [41.55373095801952, 60.99897453831976],
                    zoom: 15,
                  }}
                >
                  <Placemark
                    defaultGeometry={[41.55373095801952, 60.99897453831976]}
                  />
                </Map>
              </YMaps>
            </div>
          </div>
        </Grid>
      </Grid>
    </ContactsStyled>
  );
};

export default Contacts;
