import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Management from "components/management/management-card";
import { Container, LeftWrapper } from "components/management/management.style";
import { useDispatch, useSelector } from "react-redux";
import { getActiveLanguageName } from "store/reducer-and-action/language/language";
import {
  fetchManagement,
  getManagement,
} from "store/reducer-and-action/management/managementSlice";

const SeniorManagement = () => {
  const dispatch = useDispatch();
  const currLanguage = useSelector(getActiveLanguageName);
  const management = useSelector(getManagement);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    dispatch(fetchManagement(currLanguage));
  }, []);

  return (
    <Container>
      <LeftWrapper>
        {management.map((item, id) => (
          <div data-aos="fade-up">
            <Management data={item} key={id} />
          </div>
        ))}
        {/* {ManagementData.uz.map((item, id) => (
          <div data-aos="fade-up">
            <Management data={item} key={id} />
          </div>
        ))} */}
      </LeftWrapper>
    </Container>
  );
};

export default SeniorManagement;
