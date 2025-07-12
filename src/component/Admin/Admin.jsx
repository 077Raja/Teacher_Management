import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import PageTitle from "./PageTitle";
import Card from "./Card";
import ContactCard from "./ContactCard";
import Item from "./DetailsItem";
import Table from "./Table";
import AvailabilityTable from "./AvailabilityTable";

const Admin = () => {
  return (
    <div className="bg-gray-100 text-gray-800 h-screen flex">
      <Sidebar />

      <div className="flex-grow flex flex-col overflow-hidden">
        <Header />
        <PageTitle title="Teachers / Alynia Allan" />

        <main className="flex-grow overflow-y-auto p-6 space-y-6 bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <section className="space-y-6 md:col-span-2">
              <Card title="Details">
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600">
                  <Item label="Name">Alynia Allan</Item>
                  <Item label="Role">Teacher</Item>
                  <Item label="Birth Date">
                    <span className="italic text-gray-400">—</span>
                  </Item>
                </div>
              </Card>

              <Card title="Private Qualifications">
                <Table
                  data={["Vocal Contemporary", "Vocal Core", "Vocal Hybrid", "Vocal Plus", "Instrument"]}
                  rate={"$28.00"}
                />
              </Card>

              <Card title="Group Qualifications">
                <table className="w-full text-left text-sm text-gray-700 border border-gray-200 rounded">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-2 font-semibold border-b border-gray-200">Name</th>
                      <th className="px-3 py-2 font-semibold border-b border-gray-200">Rate ($/hr)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-3 py-2 italic text-gray-400" colSpan={2}>
                        No group qualifications added.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Card>
            </section>

            <section className="space-y-6">
              <ContactCard title="Email" type="Work" value="Alyniadllan@example.com" />
              <ContactCard title="Phone" type="Home" value="(416) 648-9057" />
              <Card title="Addresses">
                <dl className="text-sm text-gray-600 space-y-1">
                  <dt className="font-medium text-gray-800">Home</dt>
                  <dd>
                    56 Doolard Dr Santo Cir<br />North York, Ontario<br />Canada
                  </dd>
                </dl>
              </Card>
            </section>
          </div>

          <section className="bg-white rounded shadow-sm p-4 border border-gray-300">
            <div className="tabs flex border-b-2 border-gray-300 mb-2">
              {["Availability", "Unavailabilities", "Students", "Schedule", "Invoiced Lessons", "Unscheduled Lesson", "Time Voucher", "Comments", "History"].map(
                (tab) => (
                  <button key={tab} className="tab-btn active p-1">
                    {tab}
                  </button>
                )
              )}
            </div>
            <AvailabilityTable />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Admin;
