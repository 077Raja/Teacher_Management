import { LuUserRound } from "react-icons/lu";

const PageTitle = ({ title }) => (
  <section className="px-6 py-4 bg-gray-200 flex items-center space-x-3 border-b border-gray-300 select-none">
    <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
      {title} / <LuUserRound />
    </h2>
  </section>
);

export default PageTitle;
