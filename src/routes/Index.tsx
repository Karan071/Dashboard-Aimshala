import { Routes, Route } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import Insights from "@/pages/CMS/Insights";
import Approvals from "@/pages/Approvals/Approvals";
import VideoLibrary from "@/pages/CMS/VideoLibrary";
import InTheNews from "@/pages/CMS/InTheNews";
import Testimonials from "@/pages/CMS/Testimonials";
import TeamDirectory from "@/pages/CMS/TeamDirectory";
import Libraries from "@/pages/CMS/Libraries";
import Surveys from "@/pages/CMS/Surveys";
import HelpArticles from "@/pages/CMS/HelpArticles";
import FAQSPage from "@/pages/CMS/FAQ";
import Explorer from "@/pages/Users/Explorer/Explorer";
import Coach from "@/pages/Users/Coach/Coach";
import Organisations from "@/pages/Users/Organisation/Organisations";
import FinancePayments from "@/pages/Finance/FinancePayments";
import FinancePayouts from "@/pages/Finance/FinancePayouts";
import FinanceCommissions from "@/pages/Finance/FinanceCommission";
import Assessments from "@/pages/Products/Assessments";
import Sessions from "@/pages/Products/Sessions";
import SessionPool from "@/pages/Products/SessionPool";


export default function AppRoutes() {
    return (
        <Routes>
            {/* User types */}
            <Route path="/explorers" element={<Explorer />} />
            <Route path="/coaches" element={<Coach />} />
            <Route path="/organisations" element={<Organisations />} />


            {/* Approvals */}
            <Route path="/approvals" element={<Approvals />} />

            {/* CMS routings  */}
            <Route path="/insights" element={<Insights />} />
            <Route path="/videoLibrary" element={<VideoLibrary />} />
            <Route path="/inTheNews" element={<InTheNews />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/teamDirectory" element={<TeamDirectory />} />
            <Route path="/libraries" element={<Libraries />} />
            <Route path="/surveys" element={<Surveys />} />
            <Route path="/helpArticles" element={<HelpArticles />} />
            <Route path="/faqspages" element={<FAQSPage />} />

            {/* Finance routings */}
            <Route path="/financePayments" element={<FinancePayments />} />
            <Route path="/financePayouts" element={<FinancePayouts />} />
            <Route path="/financeCommissions" element={<FinanceCommissions />} />

            {/* Products */}
            <Route path="/assessments" element={<Assessments />} />
            <Route path="/sessions" element={<Sessions />} />
            <Route path="/sessions-pool" element={<SessionPool />} />


            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
