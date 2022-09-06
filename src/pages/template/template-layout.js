import BreadCrumbs from "components/breadcrumbs/breadcrumbs";
import LeftContent from "components/left-content/left-content";
import { Outlet } from "react-router-dom";
import {
  MainBody,
  LeftSideBar,
  Wrapper,
  RightPart,
} from "./template-layout.style";

const TemplateLayout = () => {
  return (
    <Wrapper>
      <BreadCrumbs />
      <MainBody>
        <RightPart>
          <Outlet />
        </RightPart>
        <LeftSideBar>
          <LeftContent />
        </LeftSideBar>
      </MainBody>
    </Wrapper>
  );
};

export default TemplateLayout;
