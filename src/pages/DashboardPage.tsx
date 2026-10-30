import React, { useState } from 'react';
import { PageView, RegistrationSubmission } from '../types';
import { Search, Filter, Eye, X, ArrowUpDown, AlertTriangle, ShieldCheck } from 'lucide-react';
import { AabestLogo } from '../components/AabestLogo';

interface DashboardPageProps {
  submissions: RegistrationSubmission[];
  onNavigate: (page: PageView) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ submissions, onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedSubmission, setSelectedSubmission] = useState<RegistrationSubmission | null>(null);

  // Filtered registrations
  const filteredSubmissions = submissions.filter((item) => {
    const matchesSearch = 
      item.referenceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.legalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone.includes(searchTerm);

    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const totalApplicants = submissions.length;
  const totalTruckOwners = submissions.filter(s => s.category !== 'driver_only').length;
  const totalDrivers = submissions.reduce((acc, curr) => acc + curr.drivers.length, 0);
  const totalTrucks = submissions.reduce((acc, curr) => acc + curr.trucks.length, 0);
  const pendingDocs = submissions.filter(s => s.status === 'Documents Incomplete' || s.status === 'Under Review').length;
  const completedForms = submissions.filter(s => s.status === 'Approved (demo)' || s.status === 'Submitted').length;

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Executive Header */}
        <div className="bg-[#0B132B] text-white p-8 sm:p-10 border border-white/10 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3">
            <AabestLogo variant="dark-bg" className="h-[61px] sm:h-[68px] w-auto object-contain" />
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400 border border-amber-400/40 px-2 py-0.5">
                Executive Oversight Prototype
              </span>
              <span className="font-mono text-xs text-slate-400">· Demonstration State</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-bold tracking-tight">
              Tema Harbour Fleet Registration Console
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm">
              Demonstration interface previewing intake oversight, asset verification, and driver roster management.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('registration-portal')}
              className="px-5 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-[0.14em] rounded-none transition-all shadow-sm"
            >
              Test Intake Form
            </button>
          </div>
        </div>

        {/* Prototype Notice */}
        <div className="p-4 border border-amber-300 bg-amber-500/10 text-xs text-amber-950 flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Frontend Simulation Notice:</strong> This dashboard displays realistic Ghanaian demonstration records stored in component state. No live database connection is active in this frontend build. New submissions completed via the Registration Portal will populate here for the current session.
          </p>
        </div>

        {/* 6 Key Architectural Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-slate-200 bg-white divide-x divide-y md:divide-y-0 divide-slate-200">
          <div className="p-5 space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Total Dossiers</span>
            <div className="font-mono text-2xl font-bold text-slate-950">{totalApplicants}</div>
            <span className="text-[10px] text-slate-500">Intake files</span>
          </div>

          <div className="p-5 space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Fleet Owners</span>
            <div className="font-mono text-2xl font-bold text-slate-950">{totalTruckOwners}</div>
            <span className="text-[10px] text-slate-500">Enterprise &amp; Indiv.</span>
          </div>

          <div className="p-5 space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Flatbed Trucks</span>
            <div className="font-mono text-2xl font-bold text-amber-600">{totalTrucks}</div>
            <span className="text-[10px] text-slate-500">Registered units</span>
          </div>

          <div className="p-5 space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Class F Drivers</span>
            <div className="font-mono text-2xl font-bold text-slate-950">{totalDrivers}</div>
            <span className="text-[10px] text-slate-500">Personnel catalog</span>
          </div>

          <div className="p-5 space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Pending Vetting</span>
            <div className="font-mono text-2xl font-bold text-amber-500">{pendingDocs}</div>
            <span className="text-[10px] text-slate-500">Doc review</span>
          </div>

          <div className="p-5 space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Vetted / Active</span>
            <div className="font-mono text-2xl font-bold text-emerald-700">{completedForms}</div>
            <span className="text-[10px] text-slate-500">Ready for GPHA</span>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="p-5 bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search reference, enterprise, phone..."
              className="w-full pl-9 pr-3 py-2 border border-slate-300 focus:border-slate-950 focus:outline-none rounded-none text-xs"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto text-xs">
            <span className="font-mono text-[11px] text-slate-500 font-semibold">Filter:</span>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-3 py-2 border border-slate-300 focus:border-slate-950 focus:outline-none rounded-none text-xs bg-white"
            >
              <option value="all">All Categories</option>
              <option value="transport_enterprise">Transport Company / Enterprise</option>
              <option value="independent_truck_owner">Independent Truck Owner</option>
              <option value="truck_owner">Truck Owner / Individual</option>
              <option value="driver_only">Driver Registration Only</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-slate-300 focus:border-slate-950 focus:outline-none rounded-none text-xs bg-white"
            >
              <option value="all">All Statuses</option>
              <option value="Submitted">Submitted</option>
              <option value="Under Review">Under Review</option>
              <option value="Documents Incomplete">Documents Incomplete</option>
              <option value="Approved (demo)">Approved (demo)</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
        </div>

        {/* Management Table */}
        <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-slate-100/80 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="p-4 font-sans">Reference</th>
                  <th className="p-4 font-sans">Applicant / Enterprise</th>
                  <th className="p-4 font-sans">Category</th>
                  <th className="p-4">Phone</th>
                  <th className="p-4 text-center">Trucks</th>
                  <th className="p-4 text-center">Drivers</th>
                  <th className="p-4">Date</th>
                  <th className="p-4 font-sans">Status</th>
                  <th className="p-4 text-right font-sans">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredSubmissions.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="p-8 text-center text-slate-500 font-sans">
                      No demonstration records found matching your filters.
                    </td>
                  </tr>
                ) : (
                  filteredSubmissions.map((sub) => {
                    const statusClass = 
                      sub.status === 'Approved (demo)' ? 'bg-emerald-100 text-emerald-800' :
                      sub.status === 'Under Review' ? 'bg-blue-100 text-blue-800' :
                      sub.status === 'Documents Incomplete' ? 'bg-amber-100 text-amber-800' :
                      sub.status === 'Submitted' ? 'bg-slate-100 text-slate-800' : 'bg-slate-100 text-slate-600';

                    return (
                      <tr key={sub.id} className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-amber-700">
                          {sub.referenceNumber}
                        </td>
                        <td className="p-4 font-sans">
                          <span className="font-bold text-slate-900 block">{sub.legalName}</span>
                          <span className="text-[11px] text-slate-500 font-sans">{sub.contactPerson}</span>
                        </td>
                        <td className="p-4 font-sans text-slate-600">
                          {sub.categoryLabel}
                        </td>
                        <td className="p-4 text-slate-700">
                          {sub.phone}
                        </td>
                        <td className="p-4 text-center font-bold text-slate-900">
                          {sub.trucks.length}
                        </td>
                        <td className="p-4 text-center font-bold text-slate-900">
                          {sub.drivers.length}
                        </td>
                        <td className="p-4 text-slate-500">
                          {sub.createdAt}
                        </td>
                        <td className="p-4 font-sans">
                          <span className={`px-2 py-0.5 rounded-none text-[10px] font-bold ${statusClass}`}>
                            {sub.status}
                          </span>
                        </td>
                        <td className="p-4 text-right font-sans">
                          <button
                            onClick={() => setSelectedSubmission(sub)}
                            className="px-3 py-1.5 bg-slate-950 hover:bg-slate-900 text-white text-xs font-semibold rounded-none inline-flex items-center gap-1 transition-colors"
                          >
                            <Eye className="w-3 h-3 text-amber-400" />
                            <span>Inspect</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* DETAILED INSPECTION MODAL */}
        {selectedSubmission && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white border border-slate-200 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 space-y-6 text-xs">
              
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-slate-200 pb-4">
                <div className="space-y-1">
                  <AabestLogo variant="light-bg" className="h-[54px] w-auto object-contain mb-2" />
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-amber-700 font-bold text-sm">
                      {selectedSubmission.referenceNumber}
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-slate-100 text-slate-800">
                      {selectedSubmission.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-slate-950">
                    {selectedSubmission.legalName}
                  </h3>
                  <span className="text-slate-500 text-xs">
                    {selectedSubmission.categoryLabel} · Submitted {selectedSubmission.createdAt}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-50 p-4 border border-slate-200">
                <div>
                  <span className="text-slate-400 uppercase font-semibold text-[10px] block">Contact Person</span>
                  <span className="font-bold text-slate-900">{selectedSubmission.contactPerson}</span>
                </div>
                <div>
                  <span className="text-slate-400 uppercase font-semibold text-[10px] block">Primary Phone</span>
                  <span className="font-mono text-slate-900">{selectedSubmission.phone}</span>
                </div>
                <div>
                  <span className="text-slate-400 uppercase font-semibold text-[10px] block">WhatsApp</span>
                  <span className="font-mono text-slate-900">{selectedSubmission.whatsapp || selectedSubmission.phone}</span>
                </div>
                <div>
                  <span className="text-slate-400 uppercase font-semibold text-[10px] block">Email</span>
                  <span className="text-slate-900 truncate block">{selectedSubmission.email}</span>
                </div>
                <div className="col-span-2 sm:col-span-4">
                  <span className="text-slate-400 uppercase font-semibold text-[10px] block">Operating Address</span>
                  <span className="text-slate-900">{selectedSubmission.address}</span>
                </div>
              </div>

              {/* Fleet Units */}
              {selectedSubmission.trucks.length > 0 && (
                <div className="space-y-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 block">
                    FLEET MANIFEST ({selectedSubmission.trucks.length} UNITS)
                  </span>
                  <div className="border border-slate-200 overflow-hidden">
                    <table className="w-full text-left font-mono">
                      <thead className="bg-slate-100 text-[10px] font-bold uppercase text-slate-700 font-sans">
                        <tr>
                          <th className="p-2.5">Unit</th>
                          <th className="p-2.5">Tractor Head</th>
                          <th className="p-2.5">Flatbed Trailer</th>
                          <th className="p-2.5">Asset ID</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {selectedSubmission.trucks.map((trk, idx) => (
                          <tr key={trk.id}>
                            <td className="p-2.5 text-slate-500 font-sans">#{idx + 1}</td>
                            <td className="p-2.5 font-bold text-slate-900">{trk.tractorRegNo}</td>
                            <td className="p-2.5 text-slate-700">{trk.flatbedTrailerRegNo}</td>
                            <td className="p-2.5 text-slate-500">{trk.assetIdRef || '—'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Rostered Drivers */}
              <div className="space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 block">
                  ROSTERED DRIVERS ({selectedSubmission.drivers.length} PERSONNEL)
                </span>
                <div className="border border-slate-200 overflow-hidden">
                  <table className="w-full text-left font-mono">
                    <thead className="bg-slate-100 text-[10px] font-bold uppercase text-slate-700 font-sans">
                      <tr>
                        <th className="p-2.5 font-sans">Full Name</th>
                        <th className="p-2.5">Phone</th>
                        <th className="p-2.5">Ghana Card</th>
                        <th className="p-2.5">License</th>
                        <th className="p-2.5 font-sans">Class</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {selectedSubmission.drivers.map((drv) => (
                        <tr key={drv.id}>
                          <td className="p-2.5 font-bold text-slate-900 font-sans">{drv.fullName}</td>
                          <td className="p-2.5 text-slate-700">{drv.phone}</td>
                          <td className="p-2.5 text-slate-700">{drv.ghanaCardNo}</td>
                          <td className="p-2.5 text-slate-700">{drv.licenseNo}</td>
                          <td className="p-2.5 text-slate-700 font-sans">{drv.licenseClass}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Verified Electronic Signature Stamp */}
              <div className="p-5 bg-slate-900 text-white space-y-2">
                <div className="font-mono text-xs text-amber-400 font-bold uppercase tracking-wider">
                  Verified Electronic Declaration Stamp
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] text-slate-300">
                  <div>Signatory: <strong className="text-white">{selectedSubmission.declaration.authorizedName}</strong></div>
                  <div>Capacity: <strong className="text-white">{selectedSubmission.declaration.capacity}</strong></div>
                  <div>Signature: <strong className="text-amber-400 font-serif italic text-sm">{selectedSubmission.declaration.electronicSignature}</strong></div>
                </div>
              </div>

              <div className="flex justify-end pt-2 border-t border-slate-200">
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-none transition-colors"
                >
                  Close Inspection
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
