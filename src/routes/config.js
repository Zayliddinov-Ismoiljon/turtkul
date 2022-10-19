import AboutGov from 'components/AboutGov/AboutGov';
import ActionStrategy from 'components/ActionStrategy/ActionStrategy';
import AntiCorruption from 'components/anti-corruption/AntiCorruption';
import AntiCorruptionDocuments from 'components/anti-corruption/AntiCorruptionDocuments';
import BoardActivities from 'components/BoardActivities/BoardActivities';
import Business from 'components/Business/Business';
import CentralToll from 'components/CentralToll/CentralToll';
import Connection from 'components/connection/Connection';
import EconomicIndicators from 'components/EconomicIndicators/EconomicIndicators';
import EventsId from 'components/events/EventsId/EventsId';
import Government from 'components/Government/Government';
import GovernmentPrograms from 'components/GovernmentPrograms/GovernmentPrograms';
import HeaderNews from 'components/header/HeaderNews/HeaderNews';
import InternationalRelations from 'components/InternationalRelations/InternationalRelations';
import RelationDetail from 'components/InternationalRelations/RelationDetail/RelationDetail';
import InvestmentPotential from 'components/InvestmentPotential/InvestmentPotential';
import BusinessDecisions from 'components/LegalDocuments/BusinessDecisions/BusinessDecisions';
import DecisionsForce from 'components/LegalDocuments/DecisionsForce/DecisionsForce';
import FightingCorruption from 'components/LegalDocuments/FightingCorruption/FightingCorruption';
import InstitutionsOrganizations from 'components/LegalDocuments/InstitutionsOrganizations/InstitutionsOrganizations';
import LawsRepublicUz from 'components/LegalDocuments/LawsRepublicUz/LawsRepublicUz';
import LegalDocuments from 'components/LegalDocuments/LegalDocuments';
import LegalLiteracy from 'components/LegalDocuments/LegalLiteracy/LegalLiteracy';
import MayorTurtkul from 'components/LegalDocuments/MayorTurtkul/MayorTurtkul';
import NormativeLegal from 'components/LegalDocuments/NormativeLegal/NormativeLegal';
import PeoplesDeputies from 'components/LegalDocuments/PeoplesDeputies/PeoplesDeputies';
import PresidentRepublicUz from 'components/LegalDocuments/PresidentRepublicUz/PresidentRepublicUz';
import ResolutionsCabinet from 'components/LegalDocuments/ResolutionsCabinet/ResolutionsCabinet';
import UnderDevelopment from 'components/LegalDocuments/UnderDevelopment/UnderDevelopment';
import ManagementStatement from 'components/ManagementStatement/ManagementStatement';
import ManageOrganization from 'components/ManageOrganization/ManageOrganization';
import MeetingDeputy from 'components/MeetingDeputy/MeetingDeputy';
import MeetingOrganization from 'components/MeetingOrganization/MeetingOrganization';
import OpenData from 'components/OpenData/OpenData';
import OpenMeeting from 'components/OpenMeeting/OpenMeeting';
import PressServices from 'components/PressServices/PressServices';
import Projects from 'components/Projects/Projects';
import ProjectsId from 'components/Projects/ProjectsId/ProjectsId';
import PublicCouncil from 'components/PublicCouncil/PublicCouncil';
import CityTransport from 'components/services/CityTransport/CityTransport';
import LicensingServices from 'components/services/LicensingServices/LicensingServices';
import LocalBudjet from 'components/services/LocalBudjet/LocalBudjet';
import StatisticalReports from 'components/StatisticalReports/StatisticalReports';
import Statistics from 'components/Statistics/Statistics';
import TourismActivities from 'components/TourismActivities/TourismActivities';
import Vacancy from 'components/Vacancy/Vacancy';
import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

const AskedQuestions = lazy(() =>
	import('components/asked-questions/asked-questions'),
);
const Contacts = lazy(() => import('components/contacts/contacts'));
const Management = lazy(() => import('pages/management'));
const Home = lazy(() => import('pages/home'));
const NewsDetail = lazy(() => import('pages/news-detail'));
const Layout = lazy(() => import('pages/layout'));
const FilteredNews = lazy(() =>
	import('components/filtered-news/filtered-news'),
);
const VirtualReception = lazy(() =>
	import('components/virtual-reception/virtual-reception'),
);
const DefaultPage = lazy(() => import('pages/default-page'));
const DefaultRoute = lazy(() => import('pages/default-route'));
const TemplateLayout = lazy(() => import('pages/template/template-layout'));
const SearchResult = lazy(() =>
	import('components/search-result/SearchResult'),
);

const routes = [
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'home',
				element: <Home />,
			},
			{
				path: 'news',
				element: <FilteredNews />,
			},
			{
				path: 'news_wiew/:id',
				element: <HeaderNews />,
			},
			{
				path: 'news/:newsFilter',
				element: <FilteredNews />,
			},
			
			{
				path: 'contacts',
				element: <Contacts />,
			},
			{
				path: 'anticorruption/anti-corruption-news',
				element: <AntiCorruption />,
			},
			{
				path: 'anticorruption/regulatory-docs',
				element: <AntiCorruptionDocuments />,
			},
			{
				path: 'about/connection',
				element: <Connection />,
			},
			{
				path: 'about/e-government',
				element: <Government />,
			},
			{
				path: 'about/vacancies',
				element: <Vacancy />,
			},
			{
				path: 'about/about-gov',
				element: <AboutGov />,
			},
			{
				path: 'about/central-tool',
				element: <CentralToll />,
			},
			{
				path: 'about/manage-organization',
				element: <ManageOrganization />,
			},
			{
				path: 'about/management-statement',
				element: <ManagementStatement />,
			},
			{
				path: 'about/press-serves',
				element: <PressServices />,
			},
			{
				path: 'about/statistics',
				element: <Statistics />,
			},
			{
				path: 'activity/actions-strategy',
				element: <ActionStrategy />,
			},
			{
				path: 'activity/gov-programs',
				element: <GovernmentPrograms />,
			},
			{
				path: 'activity/investments-potential',
				element: <InvestmentPotential />,
			},
			{
				path: 'activity/tourism-activities',
				element: <TourismActivities />,
			},
			{
				path: 'activity/public-council',
				element: <PublicCouncil />,
			},
			{
				path: 'activity/open-data',
				element: <OpenData />,
			},
			{
				path: 'activity/business',
				element: <Business />,
			},
			{
				path: 'activity/economic-indicators',
				element: <EconomicIndicators />,
			},
			{
				path: 'activity/meetings',
				element: <OpenMeeting />,
			},
			{
				path: 'activity/statistical-reports',
				element: <StatisticalReports />,
			},
			{
				path: 'activity/international-relations',
				element: <InternationalRelations />,
			},
			{
				path: 'activity/relation/:id',
				element: <RelationDetail />,
			},
			{
				path: 'activity/projects',
				element: <Projects />,
			},
			{
				path: 'activity/projects/:id',
				element: <ProjectsId />,
			},
			{
				path: 'meeting/board-activities',
				element: <BoardActivities />,
			},
			{
				path: 'meeting/district-council-deputies',
				element: <MeetingDeputy />,
			},
			{
				path: 'meeting/coordinating-advisory-bodies',
				element: <MeetingOrganization />,
			},
			{
				path: 'activity/legal-docs',
				element: <LegalDocuments />,
			},
			{
				path: 'activity/Laws_of_the_Republic_of_Uzbekistan',
				element: <LawsRepublicUz />,
			},
			{
				path: 'activity/Decisions_that_have_lost_their_force',
				element: <DecisionsForce />,
			},
			{
				path: 'activity/Legal_literacy',
				element: <LegalLiteracy />,
			},
			{
				path: 'activity/Resolutions_and_decrees_of_the_President_of_the_Republic_of_Uzbekistan',
				element: <PresidentRepublicUz />,
			},
      {
				path: 'activity/Business_decisions',
				element: <BusinessDecisions />,
			},
      {
				path: 'activity/Resolution_of_the_Turtkul_City_Council_of_Peoples_Deputies',
				element: <PeoplesDeputies />,
			},
      {
				path: 'activity/Resolutions_of_the_Cabinet_of_Ministers_of_the_Republic_of_Uzbekistan',
				element: <ResolutionsCabinet/>,
			},
      {
				path: 'activity/Discussion_of_NHHs_under_development',
				element: <UnderDevelopment/>,
			},
      {
				path: 'activity/Normative_legal_acts_of_district_hokimiyats',
				element: <NormativeLegal/>,
			},
      {
				path: 'activity/Decisions_and_Orders_of_the_Mayor_of_Turtkul',
				element: <MayorTurtkul/>,
			},
      {
				path: 'activity/Procedure_for_allocating_land_plots_for_use_or_lease_to_enterprises_institutions_organizations',
				element: <InstitutionsOrganizations/>,
			},
      {
				path: 'activity/Fighting_corruption',
				element: <FightingCorruption/>,
			},
			{
				path: 'services/local-budget',
				element: <LocalBudjet/>,
			},
			{
				path: 'services/urban-transport',
				element: <CityTransport/>,
			},
			{
				path: 'services/licensing-services',
				element: <LicensingServices/>,
			},
			{
				path: 'events/:id',
				element: <EventsId/>,
			},
			{
				path: 'search-result',
				element: <SearchResult />,
			},
			{
				path: '*',
				element: <Navigate to='/' replace />,
			},
			{
				path: '/',
				element: <TemplateLayout />,
				children: [
					{
						path: 'about/about-gov',
						element: <Management />,
					},
					{
						path: 'news/:newsFilter/:newsId',
						element: <NewsDetail />,
					},
					{
						path: ':navbarRoutes/:navRoute',
						element: <DefaultRoute />,
					},
					{
						path: ':navbarRoutes',
						element: <DefaultPage />,
					},
					{
						path: 'services/citizens-appeal',
						element: <VirtualReception />,
					},
					{
						path: 'services/frequently-asked-questions',
						element: <AskedQuestions />,
					},
				],
			},
		],
	},
];

const Routes = () => {
	const elements = useRoutes(routes);
	return elements;
};
export default Routes;
