import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/home";
import Features from "@/pages/Features";
import SchedulingDispatch from "@/pages/SchedulingDispatch";
import WorkOrdersMobile from "@/pages/WorkOrdersMobile";
import EstimatesQuotes from "@/pages/EstimatesQuotes";
import InvoicingPayments from "@/pages/InvoicingPayments";
import MaintenancePlans from "@/pages/MaintenancePlans";
import JobCostingReporting from "@/pages/JobCostingReporting";
import TeamManagement from "@/pages/TeamManagement";
import DynamicFeatureLanding from "@/pages/DynamicFeatureLanding";
import IndustriesIndex from "@/pages/IndustriesIndex";
import IndustryDetailPage from "@/pages/IndustryDetailPage";
import Pricing from "@/pages/Pricing";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Resources from "@/pages/Resources";
import BlogIndex from "@/pages/BlogIndex";
import BlogPostPage from "@/pages/BlogPostPage";
import Guides from "@/pages/Guides";
import Webinars from "@/pages/Webinars";
import HelpCenter from "@/pages/help/HelpCenter";
import ArticleDetailPage from "@/pages/help/ArticleDetailPage";
import CategoryPage from "@/pages/help/CategoryPage";
import ApiDocs from "@/pages/ApiDocs";
import CustomerStories from "@/pages/CustomerStories";
import Compare from "@/pages/Compare";
import CompareLegacy from "@/pages/CompareLegacy";
import LegalPrivacy from "@/pages/LegalPrivacy";
import LegalTerms from "@/pages/LegalTerms";
import LegalSLA from "@/pages/LegalSLA";
import LegalRefund from "@/pages/LegalRefund";
import PropertyLinkwarePage from "@/pages/integrations/property-linkware";
import Signup from "@/pages/Signup";
import SignupSuccess from "@/pages/SignupSuccess";
import NotFound from "@/pages/not-found";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Signup routes without navbar */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup/success" element={<SignupSuccess />} />
      
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/features/scheduling-dispatch" element={<SchedulingDispatch />} />
        <Route path="/features/work-orders-mobile" element={<WorkOrdersMobile />} />
        <Route path="/features/estimates-quotes" element={<EstimatesQuotes />} />
        <Route path="/features/invoicing-payments" element={<InvoicingPayments />} />
        <Route path="/features/maintenance-plans" element={<MaintenancePlans />} />
        <Route path="/features/job-costing-reporting" element={<JobCostingReporting />} />
        <Route path="/features/team-management" element={<TeamManagement />} />
        <Route path="/features/:slug" element={<DynamicFeatureLanding />} />
        <Route path="/industries" element={<IndustriesIndex />} />
        <Route path="/industries/:slug" element={<IndustryDetailPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/blog" element={<BlogIndex />} />
        <Route path="/resources/blog/:slug" element={<BlogPostPage />} />
        <Route path="/resources/guides" element={<Guides />} />
        <Route path="/resources/webinars" element={<Webinars />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/help/article/:slug" element={<ArticleDetailPage />} />
        <Route path="/help/category/:slug" element={<CategoryPage />} />
        <Route path="/resources/api" element={<ApiDocs />} />
        <Route path="/resources/customer-stories" element={<CustomerStories />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/compare/legacy-tools" element={<CompareLegacy />} />
        <Route path="/legal/privacy" element={<LegalPrivacy />} />
        <Route path="/legal/terms" element={<LegalTerms />} />
        <Route path="/legal/sla" element={<LegalSLA />} />
        <Route path="/legal/refund" element={<LegalRefund />} />
        <Route path="/integrations/property-linkware" element={<PropertyLinkwarePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
